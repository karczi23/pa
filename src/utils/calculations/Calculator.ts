import { getConvection, getThermalRadiation, getVaporization } from './Formulas';
import { getAmbientTemperature, getHeatStream, getSaturationPressure } from './static';

const timeQuant = 60;

export const convectionData = [];
export const radiationData = [];
export const vaporizationData = [];
export const heatData = [];
export const collectiveDataPerSquareMeter = [];
export const usageData = [];

const Calculator = (state) => {
    const waterTemperatureList = [state.waterTemperature];
    convectionData.length = 0;
    radiationData.length = 0;
    vaporizationData.length = 0;
    heatData.length = 0;
    collectiveDataPerSquareMeter.length = 0;
    usageData.length = 0;
    const ambientTemperature = getAmbientTemperature(state.month);
    const wantedTemperature = state.temperature;

    for (let i = 0; i < 60; ++i) {
        const waterTemperature = waterTemperatureList.slice(-1)[0];
        const convection = getConvection(state.wind, waterTemperature, ambientTemperature);
        const thermalRadiation = getThermalRadiation(waterTemperature, ambientTemperature);
        const vaporization = getVaporization(
            state.wind,
            getSaturationPressure(waterTemperature),
            waterTemperature
        );
        const heat = getHeatStream(state.month);
        convectionData.push(convection * state.area);
        radiationData.push(thermalRadiation * state.area);
        vaporizationData.push(vaporization * state.area);
        heatData.push(heat * state.area);
        const usage = convection + thermalRadiation + vaporization - heat;
        collectiveDataPerSquareMeter.push(usage);

        if (wantedTemperature > waterTemperature) {
            const usedPowerPerSquareMeter = getHeaterPower(usage) - usage;
            waterTemperatureList.push(
                parseFloat(
                    (
                        waterTemperature +
                        (usedPowerPerSquareMeter * state.area * timeQuant) /
                            (parseInt(state.capacity) * 4.186e3)
                    ).toFixed(3)
                )
            );
            usageData.push(getHeaterPower(usage) * state.area);
        } else if (wantedTemperature === waterTemperature) {
            waterTemperatureList.push(waterTemperature);
            usageData.push(getHeaterPower(usage) * state.area);
        } else {
            waterTemperatureList.push(
                parseFloat(
                    (
                        waterTemperature +
                        (-usage * state.area * timeQuant) / (parseInt(state.capacity) * 4.186e3)
                    ).toFixed(3)
                )
            );
            usageData.push(0);
        }
    }

    return waterTemperatureList.slice(1);
};

const getHeaterPower = (usage: number) => {
    if (usage > 2000) return 4000;
    if (usage > 1000) return 2000;
    if (usage > 500) return 1000;
    else return 500;
};

export { Calculator };

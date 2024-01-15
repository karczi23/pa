import { getEnthalpy, getSaturationPressure } from './static';

export const getConvection = (
    windSpeed: number,
    waterTemperature: number,
    ambientTemperature: number
) => {
    return getConvectionRatio(windSpeed) * (waterTemperature - ambientTemperature);
};

const getConvectionRatio = (windSpeed: number) => {
    return 5.7 + 4.07 * windSpeed;
};

export const getThermalRadiation = (waterTemperature: number, ambientTemperature: number) => {
    return (
        0.95 *
        5.67 *
        1e-8 *
        (Math.pow(toKelvin(waterTemperature), 4) - Math.pow(toKelvin(ambientTemperature), 4))
    );
};

export const getVaporization = (
    windSpeed: number,
    saturationPressure: number,
    waterTemperature: number
) => {
    return getVaporizationMass(windSpeed, saturationPressure) * getEnthalpy(waterTemperature);
};

const getVaporizationMass = (windSpeed: number, saturationPressure: number) => {
    return (
        (getVaporizationRatio(windSpeed) * (saturationPressure - getPartialPressure(1013))) / 1.013
    );
};

const getVaporizationRatio = (windSpeed: number) => {
    return 2.1e-6 * (0.022 + 0.017 * windSpeed);
};

const getPartialPressure = (saturationPressure: number) => {
    return 0.8 * saturationPressure;
};

const toKelvin = (temperature: number) => {
    return temperature + 273.15;
};

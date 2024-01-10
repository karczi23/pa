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
    return 0.95 * 5.67 * 1e-8 * (Math.pow(waterTemperature, 4) - Math.pow(ambientTemperature, 4));
};

export const getVaporization = (waterTemperature: number, windSpeed: number) => {
    return getVaporizationRatio(windSpeed);
};

const getVaporizationRatio = (windSpeed: number) => {
    return 2.1 * 1e-6 * (0.022 + 0.017 * windSpeed);
};

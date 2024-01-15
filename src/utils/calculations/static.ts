const enthalpy = {
    15: 2.465e6,
    16: 2.463e6,
    17: 2.46e6,
    18: 2.458e6,
    19: 2.456e6,
    20: 2.453e6,
    21: 2.451e6,
    22: 2.449e6,
    23: 2.446e6,
    24: 2.444e6,
    25: 2.442e6,
    26: 2.439e6,
    27: 2.437e6,
    28: 2.435e6,
    29: 2.432e6,
    30: 2.43e6,
    31: 2.427e6,
    32: 2.425e6,
    33: 2.423e6,
    34: 2.42e6,
    35: 2.418e6,
};

const saturationPressure = {
    15: 1704,
    16: 1817,
    17: 1936,
    18: 2063,
    19: 2196,
    20: 2337,
    21: 2485,
    22: 2642,
    23: 2808,
    24: 2982,
    25: 3166,
    26: 3360,
    27: 3654,
    28: 3778,
    29: 4004,
    30: 4242,
    31: 4491,
    32: 4754,
    33: 5029,
    34: 5318,
    35: 5622,
};

const months = {
    1: {
        ambientTemperature: -2,
        heatStream: 3.67e3,
    },
    2: {
        ambientTemperature: -2,
        heatStream: 7.62e3,
    },
    3: {
        ambientTemperature: 3,
        heatStream: 1.82e4,
    },
    4: {
        ambientTemperature: 8,
        heatStream: 2.03e4,
    },
    5: {
        ambientTemperature: 13,
        heatStream: 2.21e4,
    },
    6: {
        ambientTemperature: 16,
        heatStream: 2.37e4,
    },
    7: {
        ambientTemperature: 19,
        heatStream: 2.39e4,
    },
    8: {
        ambientTemperature: 17,
        heatStream: 2.05e4,
    },
    9: {
        ambientTemperature: 13,
        heatStream: 1.66e4,
    },
    10: {
        ambientTemperature: 9,
        heatStream: 1.37e4,
    },
    11: {
        ambientTemperature: 5,
        heatStream: 4.82e3,
    },
    12: {
        ambientTemperature: 0,
        heatStream: 2.82e4,
    },
};

export const getSaturationPressure = (temperature: number) => {
    if (temperature <= 35 && temperature >= 15) {
        const higher = saturationPressure[Math.ceil(temperature)];
        const lower = saturationPressure[Math.floor(temperature)];
        return lower + (higher - lower) * (temperature % 1);
    }
    return saturationPressure[15];
};

export const getEnthalpy = (temperature: number) => {
    if (temperature <= 35 && temperature >= 15) {
        return enthalpy[Math.floor(temperature)];
    }
    return enthalpy[15];
};

export const getAmbientTemperature = (month: number) => {
    return months[month]['ambientTemperature'];
};

export const getHeatStream = (month: number) => {
    return months[month]['heatStream'] / 250;
};

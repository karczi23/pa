export const getColor = (temperature: number): string => {

        const max = 35
        const min = 15
        const avg = (max + min) / 2

        if (temperature <= avg) {
            const percent = 1 - (avg - temperature) / (avg - min)
            return `rgb(${255 * percent}, 255, 0)`
        } else {
            const percent = 1 - (temperature - avg) / (max - avg)
            return `rgb(255, ${255 * percent}, 0)`
        }
}

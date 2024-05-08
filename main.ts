basic.forever(function () {
    if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P8, DigitalPin.P9) < 10) {
        if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P6, DigitalPin.P7) < CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P2)) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})

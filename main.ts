datalogger.onLogFull(function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
    datalogger.setColumnTitles(
    "l",
    "r"
    )
})
input.onButtonPressed(Button.A, function () {
    datalogger.deleteLog(datalogger.DeleteType.Full)
    datalogger.setColumnTitles(
    "l",
    "r"
    )
})
datalogger.deleteLog(datalogger.DeleteType.Full)
datalogger.setColumnTitles(
"l",
"r"
)
loops.everyInterval(100, function () {
    if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P8, DigitalPin.P9) < 5) {
        if (CrocoKit_Sensor.Ultrasonic(DigitalPin.P6, DigitalPin.P7) > CrocoKit_Sensor.Ultrasonic(DigitalPin.P1, DigitalPin.P2)) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            datalogger.log(datalogger.createCV("l", 1))
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            datalogger.log(datalogger.createCV("r", 1))
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

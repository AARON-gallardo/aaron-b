let LUZ = 0
input.onSound(DetectedSound.Loud, function () {
    if (LUZ == 0) {
        LUZ = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        LUZ = 0
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # # .
        `)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
	
})

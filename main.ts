input.onButtonPressed(Button.A, function () {
    radio.sendString("21,5")
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
	
})

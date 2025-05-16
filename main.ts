input.onButtonEvent(Button.A, input.buttonEventClick(), function on_button_a() {
    
    count += 1
    basic.showNumber(count)
    if (count == 10) {
        basic.showString("win")
    }
    
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function on_button_b() {
    
    count += -1
    basic.showNumber(count)
    if (count == 0) {
        count = -1
    }
    
})
let count = 0
count = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)

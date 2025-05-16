def on_button_a():
    global count
    count += 1
    basic.show_number(count)
    if count == 10:
        basic.show_string("win")
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    global count
    count += -1
    basic.show_number(count)
    if count == 0:
        count = -1
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

count = 0
count = 0
basic.show_leds("""
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    """)
class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    up_walk = 3
@namespace
class SpriteKind:
    UI = SpriteKind.create()
@namespace
class StatusBarKind:
    RED = StatusBarKind.create()

def on_up_pressed():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d c 3 . . . . . . . .
                . . . . . c c . 3 . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 3 . . . . . . . .
                . . . . . d c 3 . . . . . . . .
                . . . . . c c . . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . c c 3 . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . . c 3 . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    global list_trueUD, CUR_SPOT, CUR_LOCATION_LR, CUR_LOCATION_UD
    if form_true == 1:
        list_trueUD = 1
    elif poss_true == 1:
        list_trueUD = 1
    else:
        list_trueUD = 0
    if list_trueUD == 0:
        if CUR_LOCATION_LR <= 4:
            CUR_SPOT += -20
            CUR_LOCATION_LR += 1
        else:
            CUR_SPOT = 65
            CUR_LOCATION_LR = 1
    else:
        if CUR_LOCATION_UD <= 4:
            CUR_SPOT += -20
            CUR_LOCATION_UD += 1
        else:
            CUR_SPOT = 65
            CUR_LOCATION_UD = 1
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global list_trueUD, poss_true, CUR_LOCATION_UD, CUR_SPOT, CUR_LOCATION_LR, form_true
    if form_true == 1:
        list_trueUD = 1
    elif poss_true == 1:
        list_trueUD = 1
    else:
        list_trueUD = 0
    if CUR_LOCATION_LR == 1:
        pass
    if CUR_LOCATION_LR == 2:
        game.splash("To Formation!")
    if CUR_LOCATION_LR == 3:
        if poss_true == 0:
            poss_true = 1
            CUR_LOCATION_UD = 1
            CUR_SPOT = 25
        elif poss_true == 1:
            POSS_UP.set_position(5000, 5000)
            POSS_DOWN.set_position(5000, 5000)
            POSS_LEFT.set_position(5000, 5000)
            POSS_RIGHT.set_position(5000, 5000)
            poss_true = 0
            CUR_SPOT = 25
            CUR_LOCATION_LR = 3
            if CUR_LOCATION_UD == 1:
                pass
            if CUR_LOCATION_UD == 2:
                pass
            if CUR_LOCATION_UD == 3:
                pass
            if CUR_LOCATION_UD == 4:
                pass
        elif form_true == 0:
            form_true = 1
            CUR_LOCATION_UD = 1
            CUR_SPOT = 25
        elif form_true == 1:
            FORM_1.set_position(5000, 5000)
            FORM_2.set_position(5000, 5000)
            FORM_3.set_position(5000, 5000)
            FORM_4.set_position(5000, 5000)
            form_true = 0
            CUR_SPOT = 25
        else:
            pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_down_released():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . 3 3 c c c . . . . . . . .
                . . . 3 . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . 3 3 3 c c c . . . . . . . .
                . . . . . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . 3 3 c c c . . . . . . . .
                . . . 3 . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . . 3 c c c . . . . . . . .
                . . . 3 3 2 2 2 . . . . . . . .
                . . . 3 . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 3 . . . .
                . . . . . . . 2 2 d . 3 . . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 . . . . .
                . . . . . . . 2 2 d 3 3 . . . .
                . . . . . . . 2 c d . 3 . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 . . . . .
                . . . . . . . 2 2 d 3 3 . . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 3 . . . .
                . . . . . . . 2 2 d . 3 3 . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . . 3 3 d c c . . . . . . .
                . . . . 3 . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . 3 3 3 d c c . . . . . . .
                . . . . . . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . . . 3 d c c . . . . . . .
                . . . . 3 3 d 2 2 . . . . . . .
                . . . . 3 . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . 3 3 3 d c c . . . . . . .
                . . . 3 . . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 3 . . . .
                . . . . . . . 2 2 d . 3 . . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 . . . . .
                . . . . . . . 2 2 d 3 3 . . . .
                . . . . . . . 2 c d . 3 . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 . . . . .
                . . . . . . . 2 2 d 3 3 . . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . 3 3 3 . . . . .
                . . . . . . . c c d 3 3 . . . .
                . . . . . . . 2 2 d . 3 3 . . .
                . . . . . . . 2 c d . . . . . .
                . . . . . . . c c . . . . . . .
                . . . . . d c c c c d . . . . .
                . . . . . d c c c a a a . . . .
                . . . . . d c c a b b b a . . .
                . . . . a d c c a b 3 b a . . .
                . 1 1 1 a b d d a b b b a . . .
                . . . . a . d d d a b a . . . .
                . . . . . . d . . d a . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . d . . d . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_on_zero(status):
    game.game_over(False)
statusbars.on_zero(StatusBarKind.health, on_on_zero)

def on_right_pressed():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . . 3 3 d c c . . . . . . .
                . . . . 3 . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . 3 3 3 d c c . . . . . . .
                . . . . . . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . . . 3 d c c . . . . . . .
                . . . . 3 3 d 2 2 . . . . . . .
                . . . . 3 . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . d . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . 3 3 . . . . . . . . .
                . . . 3 3 3 d c c . . . . . . .
                . . . 3 . . d 2 2 . . . . . . .
                . . . . . . d c 2 . . . . . . .
                . . . . . . c c . . . . . . . .
                . . . . . d c c c d . . . . . .
                . . . . a a a c c d . . . . . .
                . . . a b b b a c d . . . . . .
                . . . a b 3 b a c d a . . . . .
                . . . a b b b a d b a 1 1 1 1 .
                . . . . a b a d d . a . . . . .
                . . . . . a . . d . . . . . . .
                . . . . . d . . d . . . . . . .
                . . . . . . . . d . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    global EVIL_JIM
    EVIL_JIM = sprites.create(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . f f . . . . . . . . .
            . . . . f f d c c . . . . . . .
            . . . . f . d 2 2 . . . . . . .
            . . . . . . d c 2 . . . . . . .
            . . . . . b b b c . . . . . . .
            . . . . . b f b c d . . . . . .
            . . . . . b b b c d b . . . . .
            . . . . . . d d d a b 1 1 1 . .
            . . . . . . d . d . b . . . . .
            . . . . . . d . d . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        SpriteKind.enemy)
    EVIL_JIM.set_position(1000, 600)
    EVIL_JIM.follow(Lord_Me, 70)
    statusbar.value += -1
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap)

def on_up_released():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d c 3 . . . . . . . .
                . . . . . c c . 3 . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 3 . . . . . . . .
                . . . . . d c 3 . . . . . . . .
                . . . . . c c . . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . c c 3 . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . 3 . . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . d 3 c . . . . . . . .
                . . . . . . c 3 . . . . . . . .
                . . . d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d . . . . . . .
                . . a d c c c c d a . . . . . .
                . . a a d d d d b a 1 1 1 1 . .
                . . . a d d d d . a . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    animation.run_image_animation(Lord_Me,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . 3 3 c c c . . . . . . . .
                . . . 3 . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . 3 3 3 c c c . . . . . . . .
                . . . . . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . 3 3 c c c . . . . . . . .
                . . . 3 . 2 2 2 . . . . . . . .
                . . . . . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . . . . d . . . . . . . .
                . . . . . . . . . . . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . 3 3 . . . . . . . . . .
                . . . . 3 c c c . . . . . . . .
                . . . 3 3 2 2 2 . . . . . . . .
                . . . 3 . c 2 c . . . . . . . .
                . . . . . c c . . 1 . . . . . .
                . . . d c c c c d 1 . . . . . .
                . . a a c c c c d 1 . . . . . .
                . a b b a c c c d 1 . . . . . .
                . a 3 b a c c c a a a . . . . .
                . a b b a d d d d b . . . . . .
                . . a a d d d d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . d . . . . . . . .
                . . . . d . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.unfollow()
    
    def on_after():
        if sprite2.overlaps_with(otherSprite2):
            otherSprite2.unfollow()
        else:
            
            def on_after2():
                otherSprite2.follow(sprite2, 90)
            timer.after(1, on_after2)
            
    timer.after(500, on_after)
    
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap2)

EVIL_JIM: Sprite = None
CUR_LOCATION_UD = 0
list_trueUD = 0
poss_true = 0
form_true = 0
FORM_4: Sprite = None
FORM_3: Sprite = None
FORM_2: Sprite = None
FORM_1: Sprite = None
POSS_RIGHT: Sprite = None
POSS_LEFT: Sprite = None
POSS_DOWN: Sprite = None
POSS_UP: Sprite = None
CUR_LOCATION_LR = 0
CUR_SPOT = 0
statusbar: StatusBarSprite = None
Lord_Me: Sprite = None
Lord_Me = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 d c c . . . . . . .
        . . . . 3 . d 2 2 . . . . . . .
        . . . . . . d c 2 . . . . . . .
        . . . . . . c c . . . . . . . .
        . . . . . d c c c d . . . . . .
        . . . . a a a c c d . . . . . .
        . . . a b b b a c d . . . . . .
        . . . a b 3 b a c d a . . . . .
        . . . a b b b a d b a 1 1 1 1 .
        . . . . a b a d d . a . . . . .
        . . . . . a . . d . . . . . . .
        . . . . . d . . d . . . . . . .
        . . . . . d . . d . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
Lord_Me.set_position(1000, 600)
statusbar = statusbars.create(18, 4, StatusBarKind.health)
controller.move_sprite(Lord_Me, 100, 100)
statusbar.set_color(3, 2)
statusbar.attach_to_sprite(Lord_Me)
tiles.set_current_tilemap(tilemap("""
    level0
    """))
scene.camera_follow_sprite(Lord_Me)
HomeKnight1 = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 d c c . . . . . . .
        . . . . 3 . d 2 2 . . . . . . .
        . . . . . . d c 2 . . . . . . .
        . . . . . b b b c . . . . . . .
        . . . . . b 3 b c d . . . . . .
        . . . . . b b b c d b . . . . .
        . . . . . . d d d a b 1 1 1 . .
        . . . . . . d . d . b . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
HomeKnight1.follow(Lord_Me, 80)
HomeKnight1.set_position(1000, 600)
HomeKnight2 = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 d c c . . . . . . .
        . . . . 3 . d 2 2 . . . . . . .
        . . . . . . d c 2 . . . . . . .
        . . . . . b b b c . . . . . . .
        . . . . . b 3 b c d . . . . . .
        . . . . . b b b c d b . . . . .
        . . . . . . d d d a b 1 1 1 . .
        . . . . . . d . d . b . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
HomeKnight2.set_position(1000, 600)
HomeKnight3 = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 d c c . . . . . . .
        . . . . 3 . d 2 2 . . . . . . .
        . . . . . . d c 2 . . . . . . .
        . . . . . b b b c . . . . . . .
        . . . . . b 3 b c d . . . . . .
        . . . . . b b b c d b . . . . .
        . . . . . . d d d a b 1 1 1 . .
        . . . . . . d . d . b . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
HomeKnight3.set_position(1000, 600)
HomeKnight4 = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 3 3 . . . . . . . . .
        . . . . 3 3 d c c . . . . . . .
        . . . . 3 . d 2 2 . . . . . . .
        . . . . . . d c 2 . . . . . . .
        . . . . . b b b c . . . . . . .
        . . . . . b 3 b c d . . . . . .
        . . . . . b b b c d b . . . . .
        . . . . . . d d d a b 1 1 1 . .
        . . . . . . d . d . b . . . . .
        . . . . . . d . d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
HomeKnight4.set_position(1000, 600)
ATTA = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 a a 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 a a 5 5 5 5 5 5 5 5 5 3
        3 5 b b a a 1 1 1 1 1 1 1 1 5 3
        3 5 b b a a 1 1 1 1 1 1 1 1 5 3
        3 5 5 5 a a 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 a a 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 2 3 3 3 2 3 3 2 3 3 3 2 3 3
        3 2 3 2 3 2 2 2 2 2 2 3 2 3 2 3
        3 2 2 2 3 3 2 3 3 2 3 3 2 2 2 3
        3 2 3 2 3 3 2 3 3 2 3 3 2 3 2 3
        """),
    SpriteKind.UI)
CALL = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 a a a a a a a 5 5 5 5 5 5 3
        3 5 5 3 3 4 3 3 5 5 3 3 3 5 5 3
        3 5 5 3 4 3 4 3 5 c c d 3 5 5 3
        3 5 5 5 3 3 3 5 5 2 2 d 3 3 5 3
        3 5 5 5 5 b 5 5 5 2 c d 5 5 5 3
        3 5 5 5 5 b 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 2 3 3 2 3 3 2 3 2 3 3 3
        3 3 3 2 3 3 2 3 2 3 2 3 2 3 3 3
        3 3 3 2 3 3 2 2 2 3 2 3 2 3 3 3
        3 3 3 3 2 3 2 3 2 3 2 3 2 3 3 3
        """),
    SpriteKind.UI)
POSS = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 3 3 3 5 5 5 5 3 3 3 5 5 3
        3 5 c c d 3 5 5 5 c c d 3 5 5 3
        3 5 2 2 d 3 3 5 5 2 2 d 3 3 5 3
        3 5 2 c d 5 5 5 5 2 c d 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 2 2 3 3 2 3 3 3 2 3 3 2 3 3
        3 3 2 2 3 2 3 2 3 2 3 3 2 3 3 3
        3 3 2 3 3 2 3 2 3 3 2 3 3 2 3 3
        3 3 2 3 3 3 2 3 3 2 3 3 2 3 3 3
        """),
    SpriteKind.UI)
FORM = sprites.create(assets.image("""
    FORM
    """), SpriteKind.UI)
ATDF = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 1 5 5 5 5 d 5 5 5 5 5 3
        3 5 5 5 1 5 5 5 d 5 5 5 5 5 5 3
        3 5 5 5 1 5 5 5 d 5 5 a a a 5 3
        3 5 5 5 1 5 5 5 d 5 5 a 3 a 5 3
        3 5 5 a a a 5 5 d 5 5 a a a 5 3
        3 5 5 5 b 5 5 d 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 2 3 3 3 2 3 3 3 2 3 2 2 3 3
        3 2 3 2 3 2 2 2 3 2 3 3 2 3 2 3
        3 2 2 2 3 3 2 3 3 2 3 3 2 3 2 3
        3 2 3 2 3 3 2 3 2 3 3 3 2 2 3 3
        """),
    SpriteKind.UI)
Spawn = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.UI)
home = sprites.create(assets.image("""
    home
    """), SpriteKind.UI)
home.follow(Spawn, 1000)
home.fx = 0
home.fy = 0
Spawn.set_position(1000, 600)
CUR_SPOT = 65
CUR_LOCATION_LR = 1
POSS_UP = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 d d d d d d 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 d d d d d d 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 d d 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 d d 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
POSS_DOWN = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 d d 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 d d 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 d d d d d d 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 d d d d d d 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
POSS_LEFT = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 5 5 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 5 5 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 d d 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 d d 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 5 5 5 5 5 5 3
        3 5 5 5 5 d 5 d 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
POSS_RIGHT = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 5 5 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 d d 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 d d 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 5 5 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 5 5 5 d 5 d 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
FORM_1 = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 d 5 5 5 5 5 5 5 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 d d d d d d d d d d d d 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
FORM_2 = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 d 5 d 5 5 5 5 5 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 d d d d d d d d d d d d 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
FORM_3 = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 d 5 d 5 d 5 5 5 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 d d d d d d d d d d d d 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
FORM_4 = sprites.create(img("""
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 d 5 d 5 d 5 d 5 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 d d d d d d d d d d d d 5 3
        3 5 5 d d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 d 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        """),
    SpriteKind.UI)
CUR = sprites.create(assets.image("""
    CUR
    """), SpriteKind.UI)
CUR.set_position(65, 45)

def on_on_update():
    ATTA.set_position(Lord_Me.x - 65, Lord_Me.y + 45)
    CALL.set_position(Lord_Me.x - 45, Lord_Me.y + 45)
    POSS.set_position(Lord_Me.x - 25, Lord_Me.y + 45)
    FORM.set_position(Lord_Me.x - 5, Lord_Me.y + 45)
    ATDF.set_position(Lord_Me.x - -15, Lord_Me.y + 45)
    home.set_stay_in_screen(True)
    if poss_true == 0:
        CUR.set_position(Lord_Me.x - CUR_SPOT, Lord_Me.y + 45)
    if poss_true == 1:
        CUR.set_position(Lord_Me.x - 25, Lord_Me.y + CUR_SPOT)
game.on_update(on_on_update)

def on_on_update2():
    if poss_true == 1:
        POSS_RIGHT.set_position(Lord_Me.x - 25, Lord_Me.y + 25)
        POSS_LEFT.set_position(Lord_Me.x - 25, Lord_Me.y + 5)
        POSS_DOWN.set_position(Lord_Me.x - 25, Lord_Me.y + -15)
        POSS_UP.set_position(Lord_Me.x - 25, Lord_Me.y + -35)
game.on_update(on_on_update2)

def on_on_update3():
    if form_true == 1:
        FORM_1.set_position(Lord_Me.x - 5, Lord_Me.y + 25)
        FORM_2.set_position(Lord_Me.x - 5, Lord_Me.y + 5)
        FORM_3.set_position(Lord_Me.x - 5, Lord_Me.y + -15)
        FORM_4.set_position(Lord_Me.x - 4, Lord_Me.y + -35)
game.on_update(on_on_update3)

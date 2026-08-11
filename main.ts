namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const Follow = SpriteKind.create()
    export const ME = SpriteKind.create()
    export const TEXT = SpriteKind.create()
}
namespace StatusBarKind {
    export const RED = StatusBarKind.create()
    export const HK1 = StatusBarKind.create()
    export const HK2 = StatusBarKind.create()
    export const HK3 = StatusBarKind.create()
    export const HK4 = StatusBarKind.create()
    export const HK5 = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (poss_true == 0) {
        if (CUR_LOCATION_LR <= 3) {
            CUR_SPOT += -20
            CUR_LOCATION_LR += 1
        } else {
            CUR_SPOT = 65
            CUR_LOCATION_LR = 1
        }
    } else if (poss_true == 1) {
        if (CUR_LOCATION_UD <= 3) {
            CUR_SPOT += -20
            CUR_LOCATION_UD += 1
        } else {
            CUR_SPOT = 25
            CUR_LOCATION_UD = 1
        }
    }
})
statusbars.onZero(StatusBarKind.HK4, function (status) {
    sprites.destroy(HK4_Health, effects.none, 500)
    sprites.destroy(HomeKnight4, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(HomeKnight4, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CUR_LOCATION_LR == 1) {
        Me_Attacking = 1
        timer.debounce("action", 20, function () {
            Me_Attacking = 0
        })
    }
    if (CUR_LOCATION_LR == 2) {
    	
    }
    if (CUR_LOCATION_LR == 3) {
        if (poss_true == 0) {
            poss_true = 1
            CUR_LOCATION_UD = 1
            CUR_SPOT = 25
        } else if (poss_true == 1) {
            POSS_UP.setPosition(5000, 5000)
            POSS_DOWN.setPosition(5000, 5000)
            POSS_LEFT.setPosition(5000, 5000)
            POSS_RIGHT.setPosition(5000, 5000)
            poss_true = 0
            CUR_SPOT = 25
            CUR_LOCATION_LR = 3
            if (CUR_LOCATION_UD == 1) {
                Direction = 1
            }
            if (CUR_LOCATION_UD == 2) {
                Direction = 2
            }
            if (CUR_LOCATION_UD == 3) {
                Direction = 3
            }
            if (CUR_LOCATION_UD == 4) {
                Direction = 4
            }
            HK1_USED = 0
            HK2_USED = 0
            HK3_USED = 0
            HK4_USED = 0
            HK5_USED = 0
            Press_Call()
        }
    }
})
function Set_x_to_follow () {
    if (HK1 == 1 && HK1_USED == 0) {
        HomeKnight1.follow(Front_x, 80)
        HK1_USED = 1
    } else if (HK2 == 1 && HK2_USED == 0) {
        HomeKnight2.follow(Front_x, 80)
        HK2_USED = 1
    } else if (HK3 == 1 && HK3_USED == 0) {
        HomeKnight3.follow(Front_x, 80)
        HK3_USED = 1
    } else if (HK4 == 1 && HK4_USED == 0) {
        HomeKnight4.follow(Front_x, 80)
        HK4_USED = 1
    } else if (HK5 == 1 && HK5_USED == 0) {
        HomeKnight5.follow(Front_x, 80)
        HK5_USED = 1
    }
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.HK5, function (status) {
    sprites.destroy(HK5_Health, effects.none, 500)
    sprites.destroy(HomeKnight5, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(HomeKnight5, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.ME, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Me_Attacking) {
    	
    }
    E1.value += -0.1
    Lord_Me_Healthbar.value += -0.1
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(E1, effects.none, 500)
    sprites.destroy(EvilKnight1, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(EvilKnight1, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
statusbars.onZero(StatusBarKind.HK3, function (status) {
    sprites.destroy(HK3_Health, effects.none, 500)
    sprites.destroy(HomeKnight3, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(HomeKnight3, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
function Menue_Stuff () {
    ATTA = sprites.create(img`
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
        `, SpriteKind.UI)
    CALL = sprites.create(img`
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
        `, SpriteKind.UI)
    POSS = sprites.create(img`
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
        `, SpriteKind.UI)
    ATDF = sprites.create(assets.image`BUILD`, SpriteKind.UI)
    CUR_SPOT = 65
    CUR_LOCATION_LR = 1
    POSS_UP = sprites.create(img`
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
        `, SpriteKind.UI)
    POSS_DOWN = sprites.create(img`
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
        `, SpriteKind.UI)
    POSS_LEFT = sprites.create(img`
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
        `, SpriteKind.UI)
    POSS_RIGHT = sprites.create(img`
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
        `, SpriteKind.UI)
    CUR = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.UI)
    CUR.setPosition(65, 45)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
function Front_line_stuff () {
    Front_1 = sprites.create(img`
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
        `, SpriteKind.Follow)
    Front_2 = sprites.create(img`
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
        `, SpriteKind.Follow)
    Front_3 = sprites.create(img`
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
        `, SpriteKind.Follow)
    Front_4 = sprites.create(img`
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
        `, SpriteKind.Follow)
    Front_5 = sprites.create(img`
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
        `, SpriteKind.Follow)
}
scene.onOverlapTile(SpriteKind.ME, assets.tile`tile1`, function (sprite, location) {
    timer.throttle("action", 100, function () {
        Lord_Me_Healthbar.value += -1
    })
})
function Press_Call () {
    Front_x = Front_1
    Set_x_to_follow()
    Front_x = Front_2
    Set_x_to_follow()
    Front_x = Front_3
    Set_x_to_follow()
    Front_x = Front_4
    Set_x_to_follow()
    Front_x = Front_5
    Set_x_to_follow()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.unfollow()
    for (let index = 0; index < 10; index++) {
        timer.after(0, function () {
            if (sprite.overlapsWith(otherSprite)) {
                sprite.unfollow()
            } else {
                sprite.follow(Lord_Me, 80)
            }
        })
        timer.after(0, function () {
            if (sprite.overlapsWith(otherSprite)) {
                sprite.unfollow()
            } else {
                sprite.follow(Lord_Me, 80)
            }
        })
        timer.after(0, function () {
            if (sprite.overlapsWith(otherSprite)) {
                sprite.unfollow()
            } else {
                sprite.follow(Lord_Me, 80)
            }
        })
        timer.after(0, function () {
            if (sprite.overlapsWith(otherSprite)) {
                sprite.unfollow()
            } else {
                sprite.follow(Lord_Me, 80)
            }
        })
        timer.after(0, function () {
            if (sprite.overlapsWith(otherSprite)) {
                sprite.unfollow()
            } else {
                sprite.follow(Lord_Me, 80)
            }
        })
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.HK1, function (status) {
    sprites.destroy(HK1_Health, effects.none, 500)
    sprites.destroy(HomeKnight1, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(HomeKnight1, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Lord_Me,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
})
function Intro () {
    sprites.destroyAllSpritesOfKind(SpriteKind.UI)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    T1.setPosition(40, 22)
    tiles.setCurrentTilemap(tilemap`level3`)
    T1 = sprites.create(img`
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        .............aaa..........................................................................
        ............aaaaa.........................................................................
        ...........aaaaaa.........................................................................
        ..........aaaaaaaa........................................................................
        ..........aaaaaaaa........................................................................
        .........aaaaaa...........................................................................
        ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
        ........aaaaaaacdddcdccdcccccddcccccdccccddccdccdcddcccccdddccddccddccdccdccc.............
        bbbbbbbbaaaaaaaccdccddcdccccdccdccccdcccdccdcddcdcdcdcccccdccdccdcdcdcddcdcccccc..........
        bbbbbbbbaaaaaaaccdccdcddccccddddccccdcccddddcdcddcdcdcccccdccdccdcddccdcddccccccccc.......
        bbbbbbbbaaaaaaacdddcdccdccccdccdccccdddcdccdcdccdcddccccccdcccddccdcdcdccdcccccccccccc....
        bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
        bbbbbbbbaaaaaaacdccdcdccccdcccdccddccddccccccccccccccccccccccccccccccccccccccccccccccc....
        bbbbbbbbaaaaaaacddccdcccccdcdcdcdccdcdcdccccccccccccccccccccccccccccccccccccccccccc.......
        bbbbbbbbaaaaaaacdcdcdcccccddcddcddddcddccccccccccccccccccccccccccccccccccccccccc..........
        ........aaaaaaacddccdcccccdcccdcdccdcdcdccdccdccdcccccccccccccccccccccccccccc.............
        ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
        .........aaaaaa...........................................................................
        ..........aaaaaaaa........................................................................
        ..........aaaaaaaa........................................................................
        ...........aaaaaa.........................................................................
        ............aaaaa.........................................................................
        .............aaa..........................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        `, SpriteKind.TEXT)
    timer.debounce("action", 2000, function () {
        T1.setImage(img`
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            .............aaa..........................................................................
            ............aaaaa.........................................................................
            ...........aaaaaa.........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            .........aaaaaa...........................................................................
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            ........aaaaaaacdddcdccccddccccdcdcdcdccdccdccddcccccddccddcccccccccccccccccc.............
            bbbbbbbbaaaaaaaccdccdcccdddccccddccccddcdcdcccdcccccdccdcdcccccccccccccccccccccc..........
            bbbbbbbbaaaaaaaccdccddccdccccccdcdcdcdcddcdcdccdccccdccdcddcccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaaccdccdcdccddccccdcdcdcdccdccdccddcccccddccdcccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
            bbbbbbbbaaaaaaacdccdccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaacddcdcdccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaacdcddcdccdccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
            ........aaaaaaacdccdccddccccccccccccccccccccccccccccccccccccccccccccccccccccc.............
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            .........aaaaaa...........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            ...........aaaaaa.........................................................................
            ............aaaaa.........................................................................
            .............aaa..........................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            `)
        tiles.setCurrentTilemap(tilemap`BattleFeild`)
    })
    timer.debounce("action", 2000, function () {
        T1.setImage(img`
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            .............aaa..........................................................................
            ............aaaaa.........................................................................
            ...........aaaaaa.........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            .........aaaaaa...........................................................................
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.............
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
            bbbbbbbbaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.............
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            .........aaaaaa...........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            ...........aaaaaa.........................................................................
            ............aaaaa.........................................................................
            .............aaa..........................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            `)
    })
    timer.debounce("action", 2000, function () {
        T1.setImage(img`
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            .............aaa..........................................................................
            ............aaaaa.........................................................................
            ...........aaaaaa.........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            .........aaaaaa...........................................................................
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            ........aaaaaaacdddcdccccddccccdcdcdcdccdccdccddcccccddccddcccccccccccccccccc.............
            bbbbbbbbaaaaaaaccdccdcccdddccccddccccddcdcdcccdcccccdccdcdcccccccccccccccccccccc..........
            bbbbbbbbaaaaaaaccdccddccdccccccdcdcdcdcddcdcdccdccccdccdcddcccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaaccdccdcdccddccccdcdcdcdccdccdccddcccccddccdcccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..
            bbbbbbbbaaaaaaacdccdccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....
            bbbbbbbbaaaaaaacddcdcdccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.......
            bbbbbbbbaaaaaaacdcddcdccdccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
            ........aaaaaaacdccdccddccccccccccccccccccccccccccccccccccccccccccccccccccccc.............
            ........aaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
            .........aaaaaa...........................................................................
            ..........aaaaaaaa........................................................................
            ..........aaaaaaaa........................................................................
            ...........aaaaaa.........................................................................
            ............aaaaa.........................................................................
            .............aaa..........................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            ..........................................................................................
            `)
    })
}
function SET_THE_GAME_UP () {
    Me_Attacking = 0
    Lord_Me = sprites.create(img`
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
        `, SpriteKind.ME)
    Lord_Me.setPosition(1242, 600)
    Lord_Me_Healthbar = statusbars.create(18, 4, StatusBarKind.Health)
    controller.moveSprite(Lord_Me, 100, 100)
    Lord_Me_Healthbar.setColor(3, 2)
    Lord_Me_Healthbar.attachToSprite(Lord_Me)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Lord_Me)
    HomeKnight1 = sprites.create(img`
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
        `, SpriteKind.Player)
    HK1_Health = statusbars.create(10, 2, StatusBarKind.HK1)
    HK1_Health.setColor(3, 2)
    HK1_Health.attachToSprite(HomeKnight1, -4, 0)
    HomeKnight1.setPosition(1000, 600)
    HK1 = 1
    HomeKnight2 = sprites.create(img`
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
        `, SpriteKind.Player)
    HK2_Health = statusbars.create(10, 2, StatusBarKind.HK2)
    HK2_Health.setColor(3, 2)
    HK2_Health.attachToSprite(HomeKnight2, -4, 0)
    HomeKnight2.setPosition(1000, 600)
    HK2 = 1
    HomeKnight3 = sprites.create(img`
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
        `, SpriteKind.Player)
    HK3_Health = statusbars.create(10, 2, StatusBarKind.HK3)
    HK3_Health.setColor(3, 2)
    HK3_Health.attachToSprite(HomeKnight3, -4, 0)
    HomeKnight3.setPosition(1000, 600)
    HK3 = 1
    HomeKnight4 = sprites.create(img`
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
        `, SpriteKind.Player)
    HK4_Health = statusbars.create(10, 2, StatusBarKind.HK4)
    HK4_Health.setColor(3, 2)
    HK4_Health.attachToSprite(HomeKnight4, -4, 0)
    HomeKnight4.setPosition(1000, 600)
    HK4 = 1
    HomeKnight5 = sprites.create(img`
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
        `, SpriteKind.Player)
    HK5_Health = statusbars.create(10, 2, StatusBarKind.HK5)
    HK5_Health.setColor(3, 2)
    HK5_Health.attachToSprite(HomeKnight5, -4, 0)
    HomeKnight5.setPosition(1000, 600)
    HK5 = 1
    EvilKnight1 = sprites.create(img`
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
        `, SpriteKind.Enemy)
    EvilKnight1.setPosition(137, 98)
    EvilKnight1.follow(Lord_Me, 50)
    E1 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    E1.setColor(15, 2)
    E1.attachToSprite(EvilKnight1)
}
statusbars.onZero(StatusBarKind.HK2, function (status) {
    sprites.destroy(HK2_Health, effects.none, 500)
    sprites.destroy(HomeKnight2, effects.none, 5)
    extraEffects.createSpreadEffectOnAnchor(HomeKnight2, extraEffects.createSingleColorSpreadEffectData(15, ExtraEffectPresetShape.Spark), 5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == HomeKnight1) {
        E1.value += -0.1
        HK1_Health.value += -0.1
        otherSprite.follow(sprite)
        timer.after(600, function () {
            otherSprite.follow(Lord_Me, 80)
        })
    }
    if (sprite == HomeKnight2) {
        E1.value += -0.1
        HK2_Health.value += -0.1
        otherSprite.follow(sprite)
        timer.after(600, function () {
            otherSprite.follow(Lord_Me, 80)
        })
    }
    if (sprite == HomeKnight3) {
        E1.value += -0.1
        HK3_Health.value += -0.1
        otherSprite.follow(sprite)
        timer.after(600, function () {
            otherSprite.follow(Lord_Me, 80)
        })
    }
    if (sprite == HomeKnight4) {
        E1.value += -0.1
        HK4_Health.value += -0.1
        otherSprite.follow(sprite)
        timer.after(600, function () {
            otherSprite.follow(Lord_Me, 80)
        })
    }
    if (sprite == HomeKnight5) {
        E1.value += -0.1
        HK5_Health.value += -0.1
        otherSprite.follow(sprite, 100)
    }
    timer.after(600, function () {
        otherSprite.follow(Lord_Me, 80)
    })
})
let HK2_Health: StatusBarSprite = null
let T1: Sprite = null
let HK1_Health: StatusBarSprite = null
let Front_5: Sprite = null
let Front_4: Sprite = null
let Front_3: Sprite = null
let Front_2: Sprite = null
let Front_1: Sprite = null
let CUR: Sprite = null
let ATDF: Sprite = null
let POSS: Sprite = null
let CALL: Sprite = null
let ATTA: Sprite = null
let HK3_Health: StatusBarSprite = null
let EvilKnight1: Sprite = null
let Lord_Me_Healthbar: StatusBarSprite = null
let E1: StatusBarSprite = null
let HK5_Health: StatusBarSprite = null
let HomeKnight5: Sprite = null
let HomeKnight3: Sprite = null
let HomeKnight2: Sprite = null
let Front_x: Sprite = null
let HomeKnight1: Sprite = null
let HK5 = 0
let HK4 = 0
let HK3 = 0
let HK2 = 0
let HK1 = 0
let HK5_USED = 0
let HK4_USED = 0
let HK3_USED = 0
let HK2_USED = 0
let HK1_USED = 0
let Direction = 0
let POSS_RIGHT: Sprite = null
let POSS_LEFT: Sprite = null
let POSS_DOWN: Sprite = null
let POSS_UP: Sprite = null
let Me_Attacking = 0
let HomeKnight4: Sprite = null
let HK4_Health: StatusBarSprite = null
let CUR_LOCATION_UD = 0
let CUR_SPOT = 0
let CUR_LOCATION_LR = 0
let poss_true = 0
let Lord_Me: Sprite = null
SET_THE_GAME_UP()
Menue_Stuff()
Front_line_stuff()
Intro()
timer.after(500, function () {
	
})
game.onUpdate(function () {
    ATTA.setPosition(Lord_Me.x - 65, Lord_Me.y + 45)
    CALL.setPosition(Lord_Me.x - 45, Lord_Me.y + 45)
    POSS.setPosition(Lord_Me.x - 25, Lord_Me.y + 45)
    ATDF.setPosition(Lord_Me.x - 5, Lord_Me.y + 45)
    if (poss_true == 0) {
        CUR.setPosition(Lord_Me.x - CUR_SPOT, Lord_Me.y + 45)
    }
    if (poss_true == 1) {
        CUR.setPosition(Lord_Me.x - 25, Lord_Me.y + CUR_SPOT)
    }
})
game.onUpdate(function () {
    if (poss_true == 1) {
        POSS_RIGHT.setPosition(Lord_Me.x - 25, Lord_Me.y + 25)
        POSS_LEFT.setPosition(Lord_Me.x - 25, Lord_Me.y + 5)
        POSS_DOWN.setPosition(Lord_Me.x - 25, Lord_Me.y + -15)
        POSS_UP.setPosition(Lord_Me.x - 25, Lord_Me.y + -35)
    }
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    timer.throttle("action", 100, function () {
        Lord_Me_Healthbar.value += 0.1
        HK1_Health.value += 0.1
        HK2_Health.value += 0.1
        HK3_Health.value += 0.1
        HK4_Health.value += 0.1
        HK5_Health.value += 0.1
        E1.value += 0.1
    })
})
game.onUpdate(function () {
    if (Direction == 4) {
        Front_1.setPosition(Lord_Me.x + 0, Lord_Me.y - 45)
        Front_2.setPosition(Lord_Me.x + 8, Lord_Me.y - 45)
        Front_3.setPosition(Lord_Me.x - 8, Lord_Me.y - 45)
        Front_4.setPosition(Lord_Me.x + 16, Lord_Me.y - 45)
        Front_5.setPosition(Lord_Me.x - 16, Lord_Me.y - 45)
    }
    if (Direction == 3) {
        Front_1.setPosition(Lord_Me.x - 0, Lord_Me.y + 45)
        Front_2.setPosition(Lord_Me.x - 8, Lord_Me.y + 45)
        Front_3.setPosition(Lord_Me.x + 8, Lord_Me.y + 45)
        Front_4.setPosition(Lord_Me.x - 16, Lord_Me.y + 45)
        Front_5.setPosition(Lord_Me.x + 16, Lord_Me.y + 45)
    }
    if (Direction == 2) {
        Front_1.setPosition(Lord_Me.x - 45, Lord_Me.y + 0)
        Front_2.setPosition(Lord_Me.x - 45, Lord_Me.y + 8)
        Front_3.setPosition(Lord_Me.x - 45, Lord_Me.y - 8)
        Front_4.setPosition(Lord_Me.x - 45, Lord_Me.y + 16)
        Front_5.setPosition(Lord_Me.x - 45, Lord_Me.y - 16)
    }
    if (Direction == 1) {
        Front_1.setPosition(Lord_Me.x + 45, Lord_Me.y - 0)
        Front_2.setPosition(Lord_Me.x + 45, Lord_Me.y - 8)
        Front_3.setPosition(Lord_Me.x + 45, Lord_Me.y + 8)
        Front_4.setPosition(Lord_Me.x + 45, Lord_Me.y - 16)
        Front_5.setPosition(Lord_Me.x + 45, Lord_Me.y + 16)
    }
})

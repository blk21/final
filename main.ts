function start () {
    pac_man = game.createSprite(0, 0)
    ghost = game.createSprite(2, 2)
    score = 0
    while (true) {
        if (200 < input.acceleration(Dimension.X)) {
            pac_man.change(LedSpriteProperty.X, 1)
        }
        if (-200 > input.acceleration(Dimension.X)) {
            pac_man.change(LedSpriteProperty.X, -1)
        }
        if (-200 > input.acceleration(Dimension.Y)) {
            pac_man.change(LedSpriteProperty.Y, 1)
        }
        if (200 < input.acceleration(Dimension.Y)) {
            pac_man.change(LedSpriteProperty.Y, -1)
        }
        basic.pause(100)
    }
}
let score = 0
let ghost: game.LedSprite = null
let pac_man: game.LedSprite = null
basic.showIcon(IconNames.Ghost)
basic.pause(100)
start()

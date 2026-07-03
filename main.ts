let p = 0
basic.forever(function () {
    p = randint(1, 20)
    p = p * 50
    p = p + 600
    music.play(music.tonePlayable(p, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    led.toggle(randint(0, 4), randint(0, 4))
})

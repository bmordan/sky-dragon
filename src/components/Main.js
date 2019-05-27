import React, { useState } from "react"

export default () => {
    const [play, playStatus] = useState(false)
    const [playing, setPlaying] = useState([])
    const ctx = new AudioContext()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.connect(g)
    o.type = "sine"
    o.frequency.value = 220

    const start = evt => {
        o.start(ctx.currentTime)
        o.connect(ctx.destination)
        setPlaying([o])
        playStatus(true)
    }
    const stop = evt => {
        playing[0].stop(ctx.currentTime)
        playStatus(false)
    }
    
    return (
        <div>
            {play
            ? <button onClick={stop}>Stop</button>
            : <button onClick={start}>Play</button>
            }   
        </div>
    )
}
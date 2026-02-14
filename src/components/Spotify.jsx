import React from 'react'
import MacWindow from './MacWindow'
import "./Spotify.scss"

const Spotify = () => {
  return (
    <MacWindow width='25vw' height='max(20rem,20vh)'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWY64wDtewQt?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
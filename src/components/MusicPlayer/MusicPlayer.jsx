import { useState, useRef, useEffect } from 'react'
import styles from './MusicPlayer.module.css'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Changed from false to true
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef(null)

  // Auto-play when component mounts
  useEffect(() => {
    audioRef.current.play()
      .catch(error => {
        // Some browsers block autoplay, so we handle the error gracefully
        console.log('Autoplay prevented:', error)
        setIsPlaying(false)
      })
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume
  }

  return (
    <div className={styles.player}>
      <audio ref={audioRef} loop>
        <source src={`${import.meta.env.BASE_URL}music/dial_drunk.mp3`} type="audio/mpeg" />
      </audio>
      
      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? '||' : '▶'}
        </button>
        
        <div className={styles.nowPlaying}>
          <span>{isPlaying ? 'Noah Kahan, Post Malone - Dial Drunk' : 'Press Play'}</span>
        </div>
        
        <div className={styles.volumeControl}>
          <span className={styles.volumeIcon}>VOL</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
          <span className={styles.volumeLevel}>{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
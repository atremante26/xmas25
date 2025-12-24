import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Polaroid from '../Polaroid/Polaroid'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import { photos } from '../../data/photos'
import styles from './PhotoAlbum.module.css'

function PhotoAlbum() {
  const [showGreeting, setShowGreeting] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Hide greeting after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false)
    }, 3000) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying || showGreeting) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPlaying, showGreeting])

  const handlePolaroidClick = () => {
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleResume = () => {
    setIsPlaying(true)
  }

  return (
    <div className={styles.container}>
      {/* Greeting Message */}
      <AnimatePresence>
        {showGreeting && (
            <motion.div
            className={styles.greeting}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            >
            <div>
                <h1 className={styles.greetingText}>Merry Christmas!</h1>
                <h1 className={styles.greetingText}>I love you Paige!</h1>
            </div>
            </motion.div>
        )}
        </AnimatePresence>

      {/* Photos (only show after greeting) */}
      {!showGreeting && (
        <>
          <div className={styles.slideshowArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={styles.polaroidWrapper}
              >
                <Polaroid
                  photo={photos[currentIndex]}
                  onClick={handlePolaroidClick}
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className={styles.progressDots}>
              {photos.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                />
              ))}
            </div>

            {/* Manual controls (shown when paused) */}
            {!isPlaying && (
              <div className={styles.controls}>
                <button onClick={handlePrev} className={styles.controlButton}>← Previous</button>
                <button onClick={handleResume} className={styles.controlButton}>Resume Slideshow</button>
                <button onClick={handleNext} className={styles.controlButton}>Next →</button>
              </div>
            )}
          </div>

          <MusicPlayer />
        </>
      )}
    </div>
  )
}

export default PhotoAlbum
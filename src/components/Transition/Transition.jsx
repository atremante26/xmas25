import { motion } from 'framer-motion'
import { useEffect } from 'react'
import styles from './Transition.module.css'

function Transition({ onComplete }) {
  // After 4 seconds (full animation + fade), call onComplete
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 4000) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 1, 0] }}
      transition={{ duration: 4, times: [0, 0.75, 0.85, 1] }}
    >
      {/* Heart with Lock */}
      <motion.div
        className={styles.heartLock}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pixelated Heart SVG - INCREASED FROM 120 to 300 */}
        <svg width="300" height="300" viewBox="0 0 16 16" className={styles.heart}>
          <rect x="2" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="3" y="2" width="1" height="1" fill="#ff0000"/>
          <rect x="4" y="2" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="3" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="2" width="1" height="1" fill="#ff0000"/>
          <rect x="12" y="2" width="1" height="1" fill="#ff0000"/>
          <rect x="13" y="3" width="1" height="1" fill="#ff0000"/>
          
          <rect x="1" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="2" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="3" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="4" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="12" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="13" y="4" width="1" height="1" fill="#ff0000"/>
          <rect x="14" y="4" width="1" height="1" fill="#ff0000"/>
          
          <rect x="1" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="2" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="3" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="4" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="12" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="13" y="5" width="1" height="1" fill="#ff0000"/>
          <rect x="14" y="5" width="1" height="1" fill="#ff0000"/>
          
          <rect x="2" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="3" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="4" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="12" y="6" width="1" height="1" fill="#ff0000"/>
          <rect x="13" y="6" width="1" height="1" fill="#ff0000"/>
          
          <rect x="3" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="4" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="7" width="1" height="1" fill="#ff0000"/>
          <rect x="12" y="7" width="1" height="1" fill="#ff0000"/>
          
          <rect x="4" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="5" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="8" width="1" height="1" fill="#ff0000"/>
          <rect x="11" y="8" width="1" height="1" fill="#ff0000"/>
          
          <rect x="5" y="9" width="1" height="1" fill="#ff0000"/>
          <rect x="6" y="9" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="9" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="9" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="9" width="1" height="1" fill="#ff0000"/>
          <rect x="10" y="9" width="1" height="1" fill="#ff0000"/>
          
          <rect x="6" y="10" width="1" height="1" fill="#ff0000"/>
          <rect x="7" y="10" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="10" width="1" height="1" fill="#ff0000"/>
          <rect x="9" y="10" width="1" height="1" fill="#ff0000"/>
          
          <rect x="7" y="11" width="1" height="1" fill="#ff0000"/>
          <rect x="8" y="11" width="1" height="1" fill="#ff0000"/>
        </svg>

        {/* Lock overlay on heart - INCREASED FROM 60 to 150 */}
        <motion.svg
          width="150" 
          height="150" 
          viewBox="0 0 12 12" 
          className={styles.lock}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 0.3, delay: 2.5 }}
        >
          {/* Lock body */}
          <rect x="3" y="6" width="6" height="4" fill="#888888"/>
          <rect x="4" y="7" width="4" height="2" fill="#666666"/>
          {/* Lock shackle */}
          <rect x="4" y="3" width="1" height="3" fill="#888888"/>
          <rect x="7" y="3" width="1" height="3" fill="#888888"/>
          <rect x="5" y="2" width="2" height="1" fill="#888888"/>
          {/* Keyhole */}
          <rect x="5" y="7" width="2" height="1" fill="#000000"/>
        </motion.svg>
      </motion.div>

      {/* Golden Key - INCREASED FROM 80 to 200 */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 16 16"
        className={styles.key}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 50, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Key head (circle) */}
        <rect x="2" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="3" y="5" width="1" height="1" fill="#FFD700"/>
        <rect x="4" y="5" width="1" height="1" fill="#FFD700"/>
        <rect x="5" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="3" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="4" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="3" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="4" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="2" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="5" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="3" y="8" width="1" height="1" fill="#FFD700"/>
        <rect x="4" y="8" width="1" height="1" fill="#FFD700"/>
        
        {/* Key shaft */}
        <rect x="6" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="7" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="8" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="9" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="10" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="6" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="7" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="8" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="9" y="7" width="1" height="1" fill="#FFD700"/>
        <rect x="10" y="7" width="1" height="1" fill="#FFD700"/>
        
        {/* Key teeth */}
        <rect x="11" y="5" width="1" height="1" fill="#FFD700"/>
        <rect x="12" y="6" width="1" height="1" fill="#FFD700"/>
        <rect x="13" y="5" width="1" height="1" fill="#FFD700"/>
      </motion.svg>
    </motion.div>
  )
}

export default Transition
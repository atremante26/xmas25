import { motion } from 'framer-motion'
import styles from './Polaroid.module.css'

function Polaroid({ photo, onClick }) {
  return (
    <motion.div
      className={styles.polaroid}
      style={{ transform: `rotate(${photo.rotation}deg)` }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.imageContainer}>
        <img src={photo.src} alt="Memory" className={styles.image} />
      </div>
    </motion.div>
  )
}

export default Polaroid
import { useState } from 'react'
import styles from './PasswordScreen.module.css'

function PasswordScreen({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const CORRECT_PASSWORD = 'mallorca'

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password === CORRECT_PASSWORD) {
      setShowSuccess(true)
      // Wait 1.5 seconds to show "ACCESS GRANTED" then unlock
      setTimeout(() => {
        onUnlock()
      }, 1500)
    } else {
      setShowError(true)
      // Clear error after 1 second
      setTimeout(() => {
        setShowError(false)
        setPassword('')
      }, 1000)
    }
  }

  const handleChange = (e) => {
    setPassword(e.target.value)
    setShowError(false)
  }

  // Convert password to asterisks
  const maskedPassword = '*'.repeat(password.length)

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        {!showSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className={styles.prompt}>
              <span className={styles.promptText}>&gt; ENTER PASSWORD: </span>
              <div className={styles.inputWrapper}>
                <span className={styles.inputText}>{maskedPassword}</span>
                <span className={styles.cursor}>█</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={handleChange}
                className={styles.hiddenInput}
                autoFocus
                autoComplete="off"
              />
            </div>
            {showError && (
              <div className={styles.error}>ACCESS DENIED</div>
            )}
          </form>
        ) : (
          <div className={styles.success}>ACCESS GRANTED</div>
        )}
      </div>
    </div>
  )
}

export default PasswordScreen
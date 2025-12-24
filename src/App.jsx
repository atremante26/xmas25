import { useState } from 'react'
import PasswordScreen from './components/PasswordScreen/PasswordScreen'
import Transition from './components/Transition/Transition'
import PhotoAlbum from './components/PhotoAlbum/PhotoAlbum'
import './App.css'

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [showAlbum, setShowAlbum] = useState(false)

  const handleUnlock = () => {
    setIsUnlocked(true)
    setShowTransition(true)
  }

  const handleTransitionComplete = () => {
    setShowTransition(false)
    setShowAlbum(true)
  }

  return (
    <div className="App">
      {!isUnlocked && <PasswordScreen onUnlock={handleUnlock} />}
      {showTransition && <Transition onComplete={handleTransitionComplete} />}
      {showAlbum && <PhotoAlbum />}
    </div>
  )
}

export default App
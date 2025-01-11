import { useState, useEffect, useCallback } from  "react";

// ==============================
// Constants for Configuration
// ==============================

const ENCRYPTION_CHARS = '01X!@#$%&*?'
const SPACE_ENCRYPTION_CHAR = '-'

const REVEAL_DELAY = 8000 
const ENCRYPT_DELAY = 800

const TRANSITION_DELAY = 20
const CHAR_CHANGE_DELAY = 40

// ==============================
// Utility Functions
// ==============================

/**
 * Generates encrypted text based on the input text.
 * @param text - The original text to encrypt.
 * @returns The encrypted version of the text.
 */
const generateEncryptedText = (text: string): string => {
  const getRandomChar = () => ENCRYPTION_CHARS[Math.floor(Math.random() * ENCRYPTION_CHARS.length)]

  return text
    .split('')
    .map(char => {
      if (char === '[' || char === ']') return char
      if (char === ' ') return SPACE_ENCRYPTION_CHAR
      return getRandomChar()
    })
    .join('')
}

/**
 * Animates the transition between two texts by cycling through random characters.
 * @param startText - The starting text.
 * @param endText - The target text to reveal.
 * @param onUpdate - Callback to update the displayed text.
 * @param onComplete - Callback when the animation is complete.
 */
const animateTextTransition = (
  startText: string,
  endText: string,
  onUpdate: (currentText: string) => void,
  onComplete: () => void
) => {

  let currentText = startText
  const indices = Array.from({ length: endText.length }, (_, i) => i).filter(
    i => endText[i] !== '[' && endText[i] !== ']'
  )

  const getRandomChar = () => ENCRYPTION_CHARS[Math.floor(Math.random() * ENCRYPTION_CHARS.length)]

  const changeCharacter = () => {
    if (indices.length === 0) {
      onComplete()
      return
    }

    const changeIndex = indices.shift()!

    // First random character
    const firstRandom = getRandomChar()
    currentText =
      currentText.substring(0, changeIndex) +
      firstRandom +
      currentText.substring(changeIndex + 1)
    onUpdate(currentText)

    // Final character
    setTimeout(() => {
      const finalChar = endText[changeIndex]
      currentText =
        currentText.substring(0, changeIndex) +
        finalChar +
        currentText.substring(changeIndex + 1)
      onUpdate(currentText)

      setTimeout(changeCharacter, CHAR_CHANGE_DELAY)
    }, TRANSITION_DELAY)
  }

  changeCharacter()
}

// ==============================
// Main Hook
// ==============================

export default function useEncryptText(text: string) {
  const [displayText, setDisplayText] = useState<string>('')
  const [isRevealing, setIsRevealing] = useState<boolean>(false)
  const [encryptedText, setEncryptedText] = useState<string>('')

  // Event handlers
  const handleReveal = useCallback(() => {
    setIsRevealing(true)
    animateTextTransition(encryptedText, text, setDisplayText, () => {
      setIsRevealing(false)
      setTimeout(handleEncryptBack, REVEAL_DELAY)
    })
  }, [encryptedText, text])

  const handleEncryptBack = useCallback(() => {
    setIsRevealing(true)
    animateTextTransition(text, encryptedText, setDisplayText, () => {
      setIsRevealing(false)
      setTimeout(handleReveal, ENCRYPT_DELAY)
    })
  }, [encryptedText, text, handleReveal])

  useEffect(() => {
    let isMounted = true

    if (!encryptedText) {
      const encrypted = generateEncryptedText(text)
      if (isMounted) {
        setEncryptedText(encrypted)
        setDisplayText(encrypted)
      }
      return
    }

    handleReveal()

    // Clean up function
    return () => {
      isMounted = false
    }
  }, [text, encryptedText, handleReveal])

  return { displayText, isRevealing }
}
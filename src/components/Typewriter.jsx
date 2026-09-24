import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    const word = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, 200); // small pause before typing next
      } else {
        timeout = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === word) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <>
      {currentText}
      <span className="animate-pulse border-r-2 border-primary ml-1 h-full inline-block align-middle relative -top-[0.2em]">&nbsp;</span>
    </>
  );
};

export default Typewriter;

import React, { useState, useEffect } from 'react';

const Typewriter = ({ words = [''], typeSpeed = 75, deleteSpeed = 40, pauseTime = 1800 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        if (!isDeleting) {
            if (displayedText.length < currentWord.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentWord.slice(0, displayedText.length + 1));
                }, typeSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentWord.slice(0, displayedText.length - 1));
                }, deleteSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [displayedText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

    return (
        <span>
            {displayedText}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default Typewriter;

import React, { useState, useEffect } from "react";

const UseWrite = ({ words, nextStep }) => {
  const [text, setText] = useState("");
  const [underscoreClass, setUnderscoreClass] = useState("console-underscore");
  const [visible, setVisible] = useState(true);
  const [color, setColor] = useState("#fff");
  const [currentWord, setCurrentWord] = useState("");
  const [currentChar, setCurrentChar] = useState(0);
  const [delay, setDelay] = useState(250);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentChar < currentWord.length) {
        setText(text + currentWord[currentChar]);
        setCurrentChar(currentChar + 1);
      } else {
        setText("");
        setCurrentChar(0);
        setCurrentWord(words.shift());
        words.push(currentWord);
        setColor(color === "#fff" ? "#000" : "#fff");
        nextStep();
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentChar, currentWord, text, words, color, delay]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visible === true) {
        setUnderscoreClass("console-underscore hidden");
        setVisible(false);
      } else {
        setUnderscoreClass("console-underscore");
        setVisible(true);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    setCurrentWord(words[0]);
  }, [words]);

  return (
    <div>
      <span style={{ color }}>{text}</span>
      <div className={underscoreClass}>&#95;</div>
    </div>
  );
};

export default UseWrite;

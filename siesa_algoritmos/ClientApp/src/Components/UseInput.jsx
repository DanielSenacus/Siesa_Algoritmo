import React, { useEffect, useRef, useState } from "react";

const UseInput = ({ nextStep }) => {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const inputRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setWords([...words, text]);
    setText("");
    nextStep();
  }

  const handleBlur = (event) => {
    event.preventDefault();
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [text]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='console-text-input'
        value={text}
        onChange={handleChange}
        ref={inputRef}
        onBlur={handleBlur}
        autoFocus
      />

      {/* <input type='submit' value='Submit' /> */}
    </form>
  );
};

export default UseInput;

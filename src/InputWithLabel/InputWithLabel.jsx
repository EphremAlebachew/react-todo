import React, { useEffect, useRef } from 'react';

const InputWithLabel = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{props.label}:</label>
      <input
        id="todoTitle"
        type="text"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        ref={inputRef} 
      />
    </>
  );
};

export default InputWithLabel;
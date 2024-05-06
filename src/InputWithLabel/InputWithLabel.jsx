import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ children, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        type="text"
        value={value}
        onChange={onChange}
        ref={inputRef} // Add ref prop here
      />
    </>
  );
};

export default InputWithLabel;
import React from 'react';

const InputWithLabel = (props) => {
  return (
    <div>
      <label htmlFor="todoTitle">{props.label}:</label>
      <input
        id="todoTitle"
        type="text"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
      />
    </div>
  );
};

export default InputWithLabel;
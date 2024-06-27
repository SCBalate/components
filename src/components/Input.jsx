import React from 'react';

const CustomInput = ({
  type = 'text',
  inputType = 'text',
  size = 'md',
  style = {},
  value,
  onChange,
  options = [], // For select, multiselect, checkbox, radio
}) => {
  const renderInputField = () => {
    switch (type) {
      case 'select':
        return (
          <select value={value} onChange={onChange} style={style}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'multiselect':
        return (
          <select
            multiple
            value={value}
            onChange={onChange}
            style={style}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return options.map((option, index) => (
          <label key={index} style={style}>
            <input
              type="checkbox"
              value={option.value}
              checked={value.includes(option.value)}
              onChange={onChange}
            />
            {option.label}
          </label>
        ));
      case 'radio':
        return options.map((option, index) => (
          <label key={index} style={style}>
            <input
              type="radio"
              name="custom-radio"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ));
      case 'slider':
        return (
          <input
            type="range"
            value={value}
            onChange={onChange}
            style={style}
          />
        );
      case 'text':
      case 'number':
      default:
        return (
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            style={style}
          />
        );
    }
  };

  const sizeStyles = {
    sm: { fontSize: '12px', padding: '5px' },
    md: { fontSize: '14px', padding: '10px' },
    lg: { fontSize: '16px', padding: '15px' },
  };

  return <div style={{ ...sizeStyles[size], ...style }}>{renderInputField()}</div>;
};

export default CustomInput;

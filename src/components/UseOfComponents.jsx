import React, { useState } from 'react';
import CustomInput from "./Input";

const UseOfComponents = () => {
  const [textValue, setTextValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [radioValue, setRadioValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div>
      <CustomInput
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <CustomInput
        type="select"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <CustomInput
        type="multiselect"
        value={multiSelectValue}
        onChange={(e) =>
          setMultiSelectValue(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <CustomInput
        type="checkbox"
        value={checkboxValue}
        onChange={(e) => {
          const value = e.target.value;
          setCheckboxValue((prev) =>
            prev.includes(value)
              ? prev.filter((v) => v !== value)
              : [...prev, value]
          );
        }}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <CustomInput
        type="radio"
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />
      <CustomInput
        type="slider"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
    </div>
  );
};

export default UseOfComponents;

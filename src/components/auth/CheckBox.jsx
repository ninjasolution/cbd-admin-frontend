import React from 'react';

const CheckBox = ({label, right, onChange}) => {
  return (
    <div className='bg-gray-200 mb-2'>
        <div className={`py-2 px-4 flex gap-3 ${right && 'justify-end'} items-baseline`}>
        <input type="checkbox" id="scales" name="scales" required onChange={e => onChange(e.target.checked)}/>
        <label htmlFor="scales">{label}</label>
      </div>
    </div>
  );
};

export default CheckBox;
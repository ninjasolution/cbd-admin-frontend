import React from 'react';

const CheckBox = ({ label, right, onChange, top }) => {
  return (
    <div className='mb-2'>

      <div className={`flex gap-3 ${right && 'justify-end'} ${!top && 'items-content'}`}>
        <input type="checkbox" value="" className="w-5 h-5" required onChange={e => onChange(e.target.checked)}/>
        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
      </div>

    </div>
  );
};

export default CheckBox;
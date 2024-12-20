import React from 'react';
import Tags from './Tags';
const InputSec = ({ amount, addMoney, reduceMoney, handleOnChange ,total, handleOnSubmit,fortag,handleTagChange}) => {
  return (
    <>
      <div className="my-8 bg-gray-100 p-4 rounded">
        <form >
        <input
          type="text"
          className="w-100 outline-none rounded border-0 p-2 bg-gray-50"
          value={amount}
          onChange={handleOnChange}
        />
        <Tags fortag={fortag} handleTagChange={handleTagChange}/>
        <div className="flex justify-evenly my-4">
          <button type='button'
            className="p-2 border-2 border-blue-900 rounded bg-blue-100"
            onClick={addMoney}
          >
            Add amount
          </button>
          <button type="button"
            className="p-2 border-2 border-blue-900 rounded bg-blue-100"
            onClick={reduceMoney}
          >
            Spent amount
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default InputSec;

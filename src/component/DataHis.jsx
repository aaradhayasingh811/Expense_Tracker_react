import React from 'react'

const DataHis = ({dc,value,tag}) => {
  return (
    <>
    <div className="flex bg-white p-2 justify-between items-center my-4">
        <div className="">
            <h6>{dc}</h6>
            <p>{tag}</p>
        </div>
        <div className="">
            <p>{value}</p>
        </div>
    </div>
      
    </>
  )
}

export default DataHis

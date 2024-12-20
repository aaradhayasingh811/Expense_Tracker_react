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
          {dc=="Credited" && <p style={{color:"green"}} className='font-bold'>{value}</p>} 
          {dc=="Debited" && <p style={{color:"red"}}  className='font-bold'>{value}</p>} 

            
        </div>
    </div>
      
    </>
  )
}

export default DataHis

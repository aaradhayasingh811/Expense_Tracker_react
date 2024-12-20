import React from 'react'
import PieChart from './PieChart'
const Dashboard = ({total,creditMoney,othMoney,foodMoney,eduMoney,shoppingMoney}) => {
  return (
    <>
      <div className="my-8 bg-gray-100 p-4 rounded overflow-y-scroll h-screen">
       <h2 className='text-xl text-center bg-white p-2 rounded'>Total Balance : {total}</h2>
       <PieChart creditMoney={creditMoney} othMoney={othMoney} foodMoney={foodMoney} eduMoney={eduMoney} shoppingMoney={shoppingMoney} />

       {/* data */}
      
      </div>
    </>
  )
}

export default Dashboard

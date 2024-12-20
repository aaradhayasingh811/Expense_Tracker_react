import React, { useState, useEffect } from 'react';
import DataHis from './DataHis';
import Filter from './Filter';

const TransHist = ({ money }) => {
  // State to store filtered transactions; default to show all
  const [filteredMoney, setFilteredMoney] = useState([]);

  // Filter function
  function filterOnClick(tag) {
    if (tag === 'All') {
      // Show all transactions if "All" is selected
      setFilteredMoney(money);
    } else {
      // Filter transactions by tag
      const filtered = money.filter((transaction) => transaction.tag === tag);
      setFilteredMoney(filtered);
    }
  }

  // Ensure "All" is selected by default when the component loads or when `money` updates
  useEffect(() => {
    if (money && money.length > 0) {
      filterOnClick('All');
    }
  }, [money]); // Runs whenever `money` changes

  return (
    <>
      <div className="my-8 bg-gray-100 p-4 rounded overflow-y-scroll h-screen">
        <div className="flex w-full bg-white rounded items-center justify-between">
          <h2 className="text-xl text-center p-2">Transaction History</h2>
          {/* Pass filterOnClick to Filter component */}
          <Filter filterOnClick={filterOnClick} selectedTag="All" />
        </div>

        {/* Conditional rendering: show message if no transactions */}
        {filteredMoney.length > 0 ? (
          filteredMoney.map((data, index) => (
            <DataHis key={index} dc={data.action} value={data.amount} tag={data.tag} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No transactions available</p>
        )}
      </div>
    </>
  );
};

export default TransHist;

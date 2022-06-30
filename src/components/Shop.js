import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  // const actions = bindActionCreators(actionCreators, dispatch);
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="">
      <h2 className="text-3xl text-center text-purple-900 font-medium font-serif mt-6 mx-5">
        Deposit/Withdraw Money
      </h2>
      <div className="buttons flex justify-center items-center mb-10 mt-4">
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => withdrawMoney(100)}>
          -
        </button>
        Update balance ({balance})
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => depositMoney(100)}>
          +
        </button>
        {/* <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => actions.withdrawMoney(100)}>
          -
        </button>
        Update balance
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => actions.depositMoney(100)}>
          +
        </button> */}
        {/* <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => dispatch(actionCreators.withdrawMoney(100))}>
          -
        </button>
        Update balance
        <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2" onClick={() => dispatch(actionCreators.depositMoney(100))}>
          +
        </button> */}
      </div>
    </div>
  );
};

export default Shop;

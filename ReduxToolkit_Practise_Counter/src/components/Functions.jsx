import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/slices/counterSlice";

export default function Functions() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-64">
        <div className="text-center text-4xl font-bold mb-4">
          {counter}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

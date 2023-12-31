import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <div class="flex items-center space-x-4">
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        <ExpenseDate date={props.expense.date} />
      </p>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {title}
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        ${props.expense.amount}
      </div>

      <button
        type="button"
        onClick={clickHandler}
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Change title
      </button>
    </div>
  );
};

export default ExpenseItem;

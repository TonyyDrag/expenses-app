import ExpenseDate from "./ExpenseDate";
import "./ExpensesList.css";

function ExpensesList(props) {
  const expensesList = props.expenses.map((expense) => (
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
        <li key={expense.id} class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {/*{expense.date.toLocaleString("es-MX", {
                  weekday: "short",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                */}
              <ExpenseDate date={expense.date} />
            </p>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                {expense.title}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              ${expense.amount}
            </div>
          </div>
        </li>
      </ul>
    </div>
  ));

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Expenses
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      {expensesList}
      {/*
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {props.title}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {props.date.toISOString()}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${props.amount}
              </div>
            </div>
          </li>
        </ul>
      </div>
      */}
    </div>
  );
}

export default ExpensesList;

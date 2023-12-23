import Expense from "@/types/expenseTypes";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const { emoji, name, product, amount, open, details } = expense;
  return (
    <details
      name={name}
      open={open}
      className="bg-white text-[#4a5568] text-base shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] rounded-lg max-w-[500px] hover:cursor-pointer relative"
    >
      <summary className="focus:outline-none p-2 md:p-4 list-none">
        <span className="flex justify-between max-w-[85%] md:max-w-[90%]">
          <div className="flex gap-5">
            <p>{emoji}</p>
            <p>{product}</p>
          </div>
          <p>${amount}</p>
        </span>
        <div className="summary-chevron-up absolute top-[0.6rem] right-3 md:top-4 md:right-4 pointer-events-none bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </summary>
      <div className="summary-content border-t border-[#e2e8f0] cursor-default p-4 font-light">
        <p>{details}</p>
        <div className="summary-chevron-down absolute top-[0.6rem] right-3 md:top-4 md:right-4 pointer-events-none bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </div>
    </details>
  );
};

export default ExpenseItem;

import React from 'react';
import { DollarSign } from 'lucide-react';

interface LoanInputProps {
  loanAmount: number | '';
  setLoanAmount: (amount: number | '') => void;
  onCalculate: () => void;
}

const LoanInput: React.FC<LoanInputProps> = ({ loanAmount, setLoanAmount, onCalculate }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
        Loan Amount
      </label>
      <div className="flex items-center">
        <div className="relative flex-grow mr-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            name="loanAmount"
            id="loanAmount"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value === '' ? '' : Number(e.target.value))}
            min="1000"
            max="20000"
          />
        </div>
        <button
          onClick={onCalculate}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default LoanInput;
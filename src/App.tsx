import React, { useState } from 'react';
import LoanInput from './components/LoanInput';
import LoanCalculator from './components/LoanCalculator';
import ZeroInterestLoan from './components/ZeroInterestLoan';

function App() {
  const [loanAmount, setLoanAmount] = useState<number | ''>('');
  const [calculatedAmount, setCalculatedAmount] = useState(1000);

  const handleCalculate = () => {
    if (typeof loanAmount === 'number' && loanAmount >= 1000 && loanAmount <= 20000) {
      setCalculatedAmount(loanAmount);
    } else {
      alert('Please enter a valid loan amount between $1,000 and $20,000');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-6 space-y-6">
          <LoanInput 
            loanAmount={loanAmount} 
            setLoanAmount={setLoanAmount} 
            onCalculate={handleCalculate} 
          />
          <LoanCalculator 
            loanAmount={calculatedAmount} 
            setLoanAmount={setCalculatedAmount} 
          />
          <ZeroInterestLoan loanAmount={calculatedAmount} />
        </div>
      </div>
    </div>
  );
}

export default App;
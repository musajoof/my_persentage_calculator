import { useState } from "react";

function App() {
  const currentDate = new Date().getFullYear();
  const [percentage, setPercentage] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [calculationHistory, setCalculationHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (percentage !== "" && value !== "") {
      const percentageValue = parseFloat(percentage);
      const valueToCalculate = parseFloat(value);

      const calculatedResult = (percentageValue / 100) * valueToCalculate;
      setResult(` ${calculatedResult}`);

      // Update calculationHistory with new calculation
      const newCalculation = {
        percentage: percentageValue,
        value: valueToCalculate,
        result: calculatedResult,
      };
      setCalculationHistory((prevHistory) => [...prevHistory, newCalculation]);
    } else {
      setResult("Invalid inputs.");
    }
  };

  const handleToggleHistory = () => {
    setShowHistory((prevShowHistory) => !prevShowHistory);
  };

  return (
    <>
      <main className="w-full h-screen p-16 bg-gray-50">
        <div className="max-w-2xl h-96 mx-auto border-none text-slate-400 pt-10 shadow-xl rounded-md bg-white">
          <div className="text-center ">
            <h1 className=" font-bold text-xl">Percentage Calculator</h1>
            <p className="text-lg">Calculate percentages for free.</p>
          </div>
          <div className=" text-center mt-10">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="percentage">What is</label>
                <input
                  className="border-b-2 p-2 ml-2"
                  type="text"
                  id="percentage"
                  value={percentage}
                  onChange={(event) => setPercentage(event.target.value)}
                />
                <label htmlFor="value">% of</label>
                <input
                  className="border-b-2 p-2 ml-2"
                  type="text"
                  id="value"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
                <span className="font-semibold text-xl">?{result}</span>
              </div>

              <div className="w-36 p-2 bg-blue-500 text-white font-bold rounded-md text-lg mt-5 m-auto">
                <button type="submit">Calculate</button>
              </div>
            </form>
          </div>
          <div className="text-center mt-10">
            <p>
              Check out similar{" "}
              <a className="underline" href="#" onClick={handleToggleHistory}>
                percentage calculators
              </a>
            </p>
          </div>

          {showHistory && (
            <div className="text-center mt-5 border-2 p-2 rounded-md bg-white ">
              <h2 className="font-bold text-xl">Calculation History</h2>
              <ul>
                {calculationHistory.map((calculation, index) => (
                  <li key={index}>
                    {calculation.percentage}% of {calculation.value} ={" "}
                    {calculation.result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <footer className="text-center mt-10">
            <p>&copy; Developed by Musa Joof {currentDate}. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;

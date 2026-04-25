import PropTypes from "prop-types";
import spend from "../assets/spend.jpg";
import { useState } from "react";

const ProgressBar = ({ current, total }) => {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full bg-[#0B1020] rounded-full h-3 shadow-inner overflow-hidden">
      <div
        className="bg-[#5622B7] h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

const RightPanel = ({ incomeGoal }) => {
  const currentValue = 690;
  const totalValue = Number(incomeGoal);
  const progress = (currentValue / totalValue) * 100;
  //const [spendMoney] = useState(420);

  const [isLoading, setIsLoading] = useState(false);
  const [showNoData, setShowNoData] = useState(false);

  const handlePredictClick = () => {
    setShowNoData(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowNoData(true);
    }, 5000);
  };

  return (
    <div className="bg-[#0B1020] text-white flex flex-col justify-between px-4 gap-4">
      <div className={`bg-[#151A32] p-4 rounded-xl flex flex-col`}>
        <div className="flex justify-between pb-8">
          <div>
            <p className="text-blue-400 text-xl font-bold">
              {progress.toFixed(2)}%
            </p>
            <p className="text-xl font-bold">Income Goal</p>
            <p className="text-sm text-gray-400">Progress to month</p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-right font-bold text-lg">
              ${currentValue} / {totalValue}
            </p>
          </div>
        </div>
        <div className="w-full">
          <ProgressBar current={currentValue} total={totalValue} />
        </div>
      </div>
      <div className="text-lg font-semibold bg-[#151A32] p-4 rounded-xl ">
        <div>Predict Spending Using AI </div>

        <div className="py-4">
          <img src={spend} alt="Logo" className="w-full h-auto rounded-2xl" />
        </div>
        <div className="pb-4 flex justify-center">
          <button
            className="bg-[#EF5D1E] hover:bg-[#D94E18] text-white text-base font-bold py-2 px-4 rounded-xl w-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePredictClick}
            disabled={isLoading}
          >
            {isLoading ? "Predicting..." : "Predict Spending"}
          </button>
        </div>
        {isLoading && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
            <span>Loading...</span>
          </div>
        )}
        {showNoData && <div className="">No data Found</div>}
      </div>
      <div className="text-sm font-semibold p-2 rounded-xl text-center">
        Money Empowers Freedom
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

RightPanel.propTypes = {
  incomeGoal: PropTypes.number.isRequired,
};

export default RightPanel;

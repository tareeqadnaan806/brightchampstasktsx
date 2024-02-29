import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

interface RewardProps {
  matchedCount: number;
}

const Reward: React.FC<RewardProps> = ({ matchedCount }) => {
  return (
    <div>
      <div className="text-white text-xl">
        <img src="/assets/image1.png" alt="" className="reward" />
        <div className="reward-board">
          <div>
            <div className="my-2">
              <p className="text-xl">Earned</p>
              <h1>
                <span className="text-2xl text-yellow-900">
                  {matchedCount}{" "}
                </span>
                Banana's
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <img src="/assets/monkey.png" alt="" className="reward-monkey" />
            </div>
            <div className="flex justify-center items-center mt-9">
              <Link to="/instruction">
                <span className="bg-yellow-500 px-10 py-4 text-2xl border rounded-xl">
                  Play Again
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;

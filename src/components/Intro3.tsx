import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

const Intro3: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="/assets/image2.png" alt="" className="image1" />

            <div className="flex justify-center items-center">
              <div className="contents">
                <div>
                  <div className="side-icon">
                    <div>{/* <i className="fa-solid fa-gear fa-2xl"></i> */}</div>
                    <div>{/* <i className="fa-solid fa-star fa-2xl"></i> */}</div>
                  </div>
                </div>
                <div>
                  <div className="home1-btn flex justify-center items-center cursor-pointer">
                    <div className="flex justify-around items-center">
                      <Link to="/instruction">YES</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="home-content-2">Can you help me get some? 🤔</div>
            </div>
            <Link to="/intro2">
              <div className="back-btn flex justify-center items-center">
                <i className="fa-solid fa-arrow-left fa-2xl"></i>
              </div>
            </Link>

            <div className="w-2/5 bg-white h-5 rounded progress-bar">
              <div className="h-5 rounded progress"></div>
            </div>
            <div>
              <img src="/assets/banana.png" className="banana" alt="dew" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro3;

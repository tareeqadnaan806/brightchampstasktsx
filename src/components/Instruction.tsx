import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

const Instruction: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="/assets/image1.png" alt="" className="image1" />

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
                      <Link to="/activity1">PLAY</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/intro3">
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

            <div className="flex justify-center items-center">
              <div className="instruction-container">
                <div className="ins-con">
                  <div>
                    <div className="box">
                      <div className="heart">🧡 </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <h1 className="text-center text-xl text-blue-700 font-semibold">
                      Select a Pink Card
                    </h1>
                    <p className="text-center text-xl text-yellow-700 font-semibold">
                      It has Images
                    </p>
                  </div>
                  <div className="number1">
                    <span>01</span>
                  </div>
                </div>
                <div className="ins-con">
                  <div>
                    <div className="box1">
                      <div className="heart">💜 </div>

                    </div>
                  </div>
                  <div className="my-2">
                    <h1 className="text-center text-xl text-blue-700 font-semibold">
                      Select a Blue Card
                    </h1>
                    <p className="text-center text-xl text-yellow-700 font-semibold">
                      It has Alphabets
                    </p>
                  </div>
                  <div className="number2">
                    <span>02</span>
                  </div>
                </div>
                <div className="ins-con">
                  <div className="flex">
                    <div className="box2">
                      <div className="heart">💜 </div>
                    </div>
                    <div className="box3">
                      <div className="heart">🧡  </div>
                      
                    </div>
                  </div>
                  <div className="">
                    <h1 className="mt-10 text-center text-xl text-blue-700 font-semibold">
                      It they are Same <br />{" "}
                      <span className="text-green-400">It's a Match</span>
                    </h1>
                    <p className="text-center text-xl text-yellow-700 font-semibold">
                      Otherwise Retry:(
                    </p>
                  </div>
                  <div className="number3">
                    <span>03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;

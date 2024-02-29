import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

const Intro2: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <img src="/assets/image2.png" alt="" className="image1" />

          <div className="flex justify-center items-center">
            <div className="contents">
              <div>
                <div className="side-icon">
                  <div>
                    <i className="fa-solid fa-gear fa-2xl"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-star fa-2xl"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className="home1-btn flex justify-center items-center cursor-pointer">
                  <div className="flex justify-around items-center">
                    <Link to="/intro3">NEXT</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-content-2">
            <div>Hi, I am Mizo ! and I love bananas 🍌</div>
          </div>
          <Link to="/">
            <div className="back-btn flex justify-center items-center">
              <i className="fa-solid fa-arrow-left fa-2xl"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro2;

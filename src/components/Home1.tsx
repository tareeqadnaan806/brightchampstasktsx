import "../App.css"
import React from "react";
import { Link } from "react-router-dom";

const Home1: React.FC = () => {
  return (
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
                  <Link to="/intro2">START</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-content-1">
          <div>Welcome Kiddo !</div>
        </div>
      </div>
    </div>
  );
};

export default Home1;

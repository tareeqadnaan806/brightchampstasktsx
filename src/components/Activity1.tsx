import "../App.css"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pinkFruitNames, blueFruitNames, fruitImages } from "../actions/actions";
import Reward from "./Reward";

const Activity1: React.FC = () => {
  const [flippedPinkCardIndex, setFlippedPinkCardIndex] = useState<number | null>(null);
  const [flippedBlueCardIndex, setFlippedBlueCardIndex] = useState<number | null>(null);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [matchedCount, setMatchedCount] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(30);
  const [progressWidth, setProgressWidth] = useState<number>(10); // Start from 10%

  useEffect(() => {
    if (secondsLeft === 0 || matchedCount === 6) {
      setGameOver(true);
    }
  }, [secondsLeft, matchedCount]);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameOver]);

  useEffect(() => {
    if (matchedCount > 0) {
      const newWidth = (matchedCount / 6) * 100; // Calculate width based on matched cards
      setProgressWidth(newWidth);
    }
  }, [matchedCount]);

  const handlePinkClick = (index: number) => {
    setFlippedPinkCardIndex(index === flippedPinkCardIndex ? null : index);
    if (flippedBlueCardIndex !== null) {
      handleMatch(index, flippedBlueCardIndex);
    }
  };

  const handleBlueClick = (index: number) => {
    setFlippedBlueCardIndex(index === flippedBlueCardIndex ? null : index);
    if (flippedPinkCardIndex !== null) {
      handleMatch(flippedPinkCardIndex, index);
    }
  };

  const handleMatch = (pinkIndex: number, blueIndex: number) => {
    setTimeout(() => {
      if (pinkIndex === blueIndex) {
        setMatchedCards([...matchedCards, pinkIndex]);
        setMatchedCount(matchedCount + 1);
      }
      setFlippedPinkCardIndex(null);
      setFlippedBlueCardIndex(null);
    }, 1000);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <img src="/assets/image1.png" alt="" className="image1" />

            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center container-box">
                <div className="pink-box">
                  <div className="card-container">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                      <div
                        key={index}
                        className={`card pink ${
                          index === flippedPinkCardIndex ||
                          matchedCards.includes(index)
                            ? "flipped"
                            : ""
                        }`}
                        onClick={() => handlePinkClick(index)}
                      >
                        <div className="content">
                          <div className="front ">
                            <div className="heart">🧡</div> </div>
                          <div
                            className="back"
                            style={{
                              backgroundColor: matchedCards.includes(index)
                                ? "transparent"
                                : "lightgrey",
                            }}
                          >
                            {index === flippedPinkCardIndex && (
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  fruitImages[pinkFruitNames[index]]
                                }
                                alt={pinkFruitNames[index]}
                                className="fruit-img"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="blue-box">
                  <div className="card-container">
                    {[3, 4, 6, 2, 1, 5].map((index) => (
                      <div
                        key={index}
                        className={`card blue ${
                          index === flippedBlueCardIndex ||
                          matchedCards.includes(index)
                            ? "flipped"
                            : ""
                        }`}
                        onClick={() => handleBlueClick(index)}
                      >
                        <div className="content">
                          <div className="front">
                            <div className="heart">💜 </div>
                          </div>
                          <div
                            className="back"
                            style={{
                              backgroundColor: matchedCards.includes(index)
                                ? "transparent"
                                : "lightgrey",
                            }}
                          >
                            {index === flippedBlueCardIndex &&
                              blueFruitNames[index]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/instruction">
              <div className="back-btn flex justify-center items-center">
                <i className="fa-solid fa-arrow-left fa-2xl"></i>
              </div>
            </Link>

            <div>
              <img src="/assets/banana.png" className="bananas" alt="dew" />
            </div>
          </div>
        </div>
      </div>
      {gameOver && <Reward matchedCount={matchedCount} />}
      <p className="timer">
        Time Left: <span className="time">{secondsLeft}</span> seconds
      </p>
      <div className="progressed-bar">
        <div
          className="progressed"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Activity1;

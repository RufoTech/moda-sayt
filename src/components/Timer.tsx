import React, { useState, useEffect } from 'react';
import Button from './Button';

const Timer: React.FC = () => {
  // Initial time in seconds (e.g., 6 days, 18 hours, and 48 minutes)
  const initialTimeInSeconds = 6 * 24 * 3600 + 18 * 3600 + 48 * 60;

  // State to manage remaining time
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    // Function to handle the countdown logic
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Function to calculate days, hours, and minutes
  const formatTime = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="container">
      <div className="timer-section">
        <div className="row">
          <div className="timer-left-side col-12 col-md-6">
            <img src="/assets/images/timer/timer-girl.svg" alt="Timer Girl" />
          </div>

          <div className="timer-right-side col-12 col-md-6">
            <h1 className="roboto-slab">Exclusive offer</h1>
            <h4 className="py-4">
              Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
            </h4>

            <div className="qutular d-flex">
              <div className="box-1">
                <div className="box-text">
                  <h2>{days < 10 ? `0${days}` : days}</h2>
                  <h6>Days</h6>
                </div>
              </div>
              <div className="box-2">
                <div className="box-text">
                  <h2>{hours < 10 ? `0${hours}` : hours}</h2>
                  <h6>Hours</h6>
                </div>
              </div>
              <div className="box-3">
                <div className="box-text">
                  <h2>{minutes < 10 ? `0${minutes}` : minutes}</h2>
                  <h6>Min</h6>
                </div>
              </div>
              <div className="box-4">
                <div className="box-text">
                  <h2>{seconds < 10 ? `0${seconds}` : seconds}</h2>
                  <h6>Sec</h6>
                </div>
              </div>
            </div>

            <Button inTextBtn="Buy Now" klassAdi="intro-buton my-5" img="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

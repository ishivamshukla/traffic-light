"use client"
import React, { useState, useEffect } from 'react';

const TrafficLight: React.FC = () => {
  const [activeLight, setActiveLight] = useState<'red' | 'yellow' | 'green'>('green');
  const [extraTime, setExtraTime] = useState<number>(0);
  const [countdown, setCountdown] = useState<number>(15); // Initially 15 seconds for green light

  useEffect(() => {
    const timings = { red: 10, yellow: 5, green: 15 };
    
    // Reset the countdown based on the active light
    setCountdown(timings[activeLight] + extraTime);

    // Decrease the countdown every second
    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Switch the light after the specified time
    const switchLightTimer = setTimeout(() => {
      switch (activeLight) {
        case 'red':
          setActiveLight('green');
          break;
        case 'yellow':
          setActiveLight('red');
          break;
        case 'green':
          setActiveLight('yellow');
          break;
      }
    }, (timings[activeLight] + extraTime) * 1000);

    return () => {
      clearInterval(countdownTimer);
      clearTimeout(switchLightTimer);
    };
  }, [activeLight, extraTime]);

  const handleManualSwitch = (color: 'red' | 'yellow' | 'green') => {
    setActiveLight(color);
  };

  const handleExtraTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExtraTime(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Traffic light indicators */}
      <div className="flex flex-col items-center mb-4">
        <div className={`w-20 h-20 rounded-full mb-2 ${activeLight === 'red' ? 'bg-red-500' : 'bg-gray-300'}`} />
        <div className={`w-20 h-20 rounded-full mb-2 ${activeLight === 'yellow' ? 'bg-yellow-500' : 'bg-gray-300'}`} />
        <div className={`w-20 h-20 rounded-full ${activeLight === 'green' ? 'bg-green-500' : 'bg-gray-300'}`} />
      </div>

      {/* Countdown Timer Display */}
      <div className="text-2xl font-bold mb-4">
        Time left: {countdown} seconds
      </div>

      {/* Manual buttons */}
      <div className="mb-4">
        <button onClick={() => handleManualSwitch('red')} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mr-2">Red</button>
        <button onClick={() => handleManualSwitch('yellow')} className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded mr-2">Yellow</button>
        <button onClick={() => handleManualSwitch('green')} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Green</button>
      </div>

      {/* Timer adjustment */}
      <div>
        <input
          type="number"
          value={extraTime}
          onChange={handleExtraTimeChange}
          className="border-2 border-gray-300 rounded-md p-2 mb-2"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add Extra Time
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
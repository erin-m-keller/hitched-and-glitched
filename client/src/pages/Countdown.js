import React, { useState, useEffect } from 'react';
import { Input, Card, notification, Empty } from 'antd';
import Auth from '../utils/auth';

function CountdownPage() {
  const [targetDate, setTargetDate] = useState('');
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  // Function to validate the date format (YYYY-MM-DD)
  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, invalid date
    return d.toISOString().slice(0, 10) === dateString;
  }

  // Function to initiate the countdown
  function startCountdown() {
    if (!isValidDate(targetDate)) {
      console.log("Invalid date format. Please try again.");
      return;
    }

    var today = new Date().getTime();
    var target = new Date(targetDate).getTime();

    if (today > target) {
      console.log("Invalid date. The target date has already passed.");
      return;
    }

    // Start the countdown
    var countdownInterval = setInterval(function() {
      var now = new Date().getTime();
      var distance = target - now;

      if (distance <= 0) {
        clearInterval(countdownInterval);
        setCountdownCompleted(true);
      }
    }, 1000);
  }

  useEffect(() => {
    // Initiate the countdown when the component mounts
    startCountdown();
  }, []);

  return (
    <div>
      <Input
        id="dateInput"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        placeholder="Enter target date (YYYY-MM-DD)"
      />
      <button id="startButton" onClick={startCountdown}>Start Countdown</button>

      {countdownCompleted ? (
        <div>
          <img src="client/images-for-H&G/wedding-countdown.jpg" alt="Wedding Countdown" />
          <p>Countdown completed!</p>
        </div>
      ) : (
        <p>Countdown in progress...</p>
      )}
    </div>
  );
}

export default CountdownPage;

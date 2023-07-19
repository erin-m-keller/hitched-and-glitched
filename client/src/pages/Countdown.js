import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import Auth from '../utils/auth';

function CountdownPage() {
  const [targetDate, setTargetDate] = useState('');
  const [countdownCompleted, setCountdownCompleted] = useState(false);

  // Function to validate the date format (MM/DD/YYYY)
  function isValidDate(dateString) {
    var regEx = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var parts = dateString.split('/');
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    var d = new Date(year, month - 1, day);
    if (!d.getTime()) return false; // NaN value, invalid date
    return (
      d.getDate() === day && d.getMonth() + 1 === month && d.getFullYear() === year
    );
  }

  // Function to initiate the countdown
  function startCountdown() {
    if (!isValidDate(targetDate)) {
      console.log("Invalid date format. Please try again.");
      return;
    }

    var today = new Date().getTime();
    var [month, day, year] = targetDate.split('/');
    var target = new Date(year, month - 1, day).getTime();

    if (today > target) {
      console.log("Invalid date. The target date has already passed.");
      return;
    }

    // Start the countdown
    var countdownInterval = setInterval(function () {
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
        placeholder="Enter target date (MM/DD/YYYY)"
      />
      <button id="startButton" onClick={startCountdown}>
        Start Countdown
      </button>

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

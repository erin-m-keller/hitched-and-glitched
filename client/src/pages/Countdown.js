import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';

const Countdown = () => {
    const [countdownText, setCountdownText] = useState('');

    // Define target and countdown variables with default values
    let target = null;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    // Function to validate the date format (YYYY-MM-DD)
    const isValidDate = (dateString) => {
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx)) return false; // Invalid format
        var d = new Date(dateString);
        var dNum = d.getTime();
        if (!dNum && dNum !== 0) return false; // NaN value, invalid date
        return d.toISOString().slice(0, 10) === dateString;
    }

    // Function to initiate the countdown
    const countdownTimer = (formattedDate) => {
        target = formattedDate; // Update the target date

        if (!isValidDate(target)) {
            console.log("Invalid date format. Please try again.");
            return;
        }

        var today = new Date().getTime();
        target = new Date(target).getTime();

        if (today > target) {
            console.log("Invalid date. The target date has already passed.");
            return;
        }

        // Create and append the image element
        var img = document.createElement("img");
        img.src = "../../images-for-H&G/wedding-countdown.jpg";
        img.alt = "Wedding Countdown";

        var timer = document.getElementById("countdown-timer");
        timer.appendChild(img);

        var countdownInterval = setInterval(function() {
            var now = new Date().getTime();
            var distance = target - now;

            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                clearInterval(countdownInterval);
                setCountdownText("Countdown completed!");
            } else {
                setCountdownText(`Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }

    const formatDateToYYYYMMDD = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleOnChange = (date) => {
      const targetDate = new Date(date.$d);
      const formattedDate = formatDateToYYYYMMDD(targetDate);
      console.log(formattedDate); // Output: "YYYY-MM-DD"
      countdownTimer(formattedDate);
  }

  return (
    <>
        <div className="hero">
            <h1 className="text-gradient">Countdown</h1>
            <h3 className="text-gradient">&ldquo;“I’m already feeling so excited. Just a few days to go for my big day. Keep calm!&rdquo;</h3>
        </div>
        <div style={{padding:"1em"}}>
            <Space direction="vertical">
                <DatePicker
                    onChange={handleOnChange}
                    id="dateInput"
                    style={{
                        width: '300px', // Adjust the width to your preference
                        height: '40px', // Adjust the height to your preference
                        fontSize: '1.5rem', // Adjust the font size to your preference
                    }}
                />
            </Space>
            <p><strong>Select a date to start your countdown!</strong></p>
            <div
                id="countdown-timer"
                style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '5rem', // Increase the font size to make it bigger
                    fontWeight: 'bold',
                    color: '#FE7B72', // Customize the color to your preference
                    margin: '2rem 0', // Add more margin to the top to move it down
                    display: 'flex',
                    justifyContent: 'center', // Center the content horizontally
                    alignItems: 'center', // Center the content vertically
                }}
            >
                {countdownText}
            </div>
        </div>
    </>
);
};

export default Countdown;
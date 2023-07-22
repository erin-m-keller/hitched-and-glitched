import React from 'react';
import { DatePicker, Space } from 'antd';

const Countdown = () => {
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
        var targetDate = formattedDate;
    
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
    
        // Create and append the image element
        var img = document.createElement("img");
        img.src = "../../images-for-H&G/wedding-countdown.jpg";
        img.alt = "Wedding Countdown";
    
        var timer = document.getElementById("countdown-timer");
        timer.appendChild(img);
    
        var countdownInterval = setInterval(function() {
            var now = new Date().getTime();
            var distance = target - now;
        
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            console.log("Countdown: " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
        
            if (distance <= 0) {
                clearInterval(countdownInterval);
                console.log("Countdown completed!");
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
            <Space direction="vertical">
                <DatePicker onChange={handleOnChange} id="dateInput" />
            </Space>
            <div id="countdown-timer"></div>
        </>
    )};

export default Countdown;
import React, { useState, useEffect } from 'react';
import { Input, Card, notification, Empty } from 'antd';
import Auth from '../utils/auth';

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
  function countdown() {
    var targetDate = document.getElementById("dateInput").value;
  
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
    img.src = "client/images-for-H&G/wedding-countdown.jpg";
    img.alt = "Wedding Countdown";
  
    var body = document.querySelector("body");
    body.appendChild(img);
  
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
  
  // Event listener for the countdown start button
  // document.getElementById("startButton").addEventListener("click", countdown);
  export default countdown;
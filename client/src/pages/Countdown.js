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
  

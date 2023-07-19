// ...

function CountdownPage() {
    // ...
  
    useEffect(() => {
      let countdownInterval;
  
      // Function to initiate the countdown
      function startCountdown() {
        if (!isValidDate(targetDate)) {
          console.log("Invalid date format. Please try again.");
          return;
        }
  
        // Convert targetDate to a valid Date object
        var [month, day, year] = targetDate.split('/');
        var target = new Date(`${year}-${month}-${day}`).getTime();
  
        var today = new Date().getTime();
  
        if (today > target) {
          console.log("Invalid date. The target date has already passed.");
          return;
        }
  
        // Start the countdown
        countdownInterval = setInterval(function () {
          var now = new Date().getTime();
          var distance = target - now;
  
          if (distance <= 0) {
            clearInterval(countdownInterval);
            setCountdownCompleted(true);
          }
        }, 1000);
      }
  
      // ...
  
    }, [targetDate]);
  
    // ...
  }
  
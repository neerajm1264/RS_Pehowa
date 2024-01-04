// const audio = new Audio("assets/end.mp3")
const fullMoonDates = [
      new Date('2024-01-11'), 
      new Date('2024-02-09'),
      new Date('2024-03-10'),
      new Date('2024-04-08'),
      new Date('2024-05-07'),
      new Date('2024-06-06'),
      new Date('2024-07-05'),
      new Date('2024-08-04'),
      new Date('2024-09-02'),
      new Date('2024-10-02'),
      new Date('2024-11-01'),
      new Date('2024-11-30'),
      new Date('2024-12-30'),
  ];
  const newMoonDates = [
      new Date('2024-01-25'), 
      new Date('2024-02-24'), 
      new Date('2024-03-24'), 
      new Date('2024-04-23'), 
      new Date('2024-05-23'), 
      new Date('2024-06-21'), 
      new Date('2024-07-21'), 
      new Date('2024-08-19'), 
      new Date('2024-09-17'), 
      new Date('2024-10-17'), 
      new Date('2024-11-15'), 
      new Date('2024-12-15'), 
  
  ]  
    // Get today's date
    const today = new Date();
    
    // Find the next upcoming full moon date
    let nextFullMoonDate;
    for (const date of fullMoonDates) {
      if (date > today) {
        nextFullMoonDate = date;
        break;
        
      }
    }
      // Find the next upcoming full moon date
      let nextNewMoonDate;
      for (const date of newMoonDates) {
          if (date > today) {
              nextNewMoonDate = date;
            break;
            
          }
        }
    document.getElementById('amavasya').innerText = `${nextFullMoonDate.toDateString()}`;
    document.getElementById('pournima').innerText = `${nextNewMoonDate.toDateString()}`;
  
    // Function to calculate and update the countdown timer
   function updateTimer(elementId, targetDate, satsangTime) {
    const now = new Date().getTime();
    const satsangTimestamp = new Date(targetDate).setHours(satsangTime.hour, satsangTime.minute, 0, 0);
    // console.log(Math.floor(satsangTimestamp/(1000*60*60*24)))
    if (now < satsangTimestamp) {
      const distance = satsangTimestamp - now;
     
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById(elementId).innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    } else  {
      document.getElementById(elementId).innerHTML = "Satsang Started";
      setTimeout(() => {
        const nextFullMoonDate = getNextDate(fullMoonDates);
        const nextNewMoonDate = getNextDate(newMoonDates);
        updateAllTimers(nextFullMoonDate, nextNewMoonDate);
      }, 5000); // Restart after 1 second   
    }
  }
  // Usage:
  const satsangTime = { hour: 10, minute: 0 };

  function getNextDate(datesArray) {
    const today = new Date();
    return datesArray.find(date => date > today);
  }  

    // Update timers every second
    function updateAllTimers() {
        let nextFullMoonDate = getNextDate(fullMoonDates);
        let nextNewMoonDate = getNextDate(newMoonDates);
      
        if (nextFullMoonDate && nextNewMoonDate) {
          updateTimer("amavasyaTimer", nextFullMoonDate, satsangTime);
          updateTimer("pournimaTimer", nextNewMoonDate, satsangTime);
        }
      
        const now = new Date().getTime();
        const nextFullMoonTimestamp = new Date(nextFullMoonDate).setHours(satsangTime.hour, satsangTime.minute, 0, 0);
        const nextNewMoonTimestamp = new Date(nextNewMoonDate).setHours(satsangTime.hour, satsangTime.minute, 0, 0);
      
        if (now >= nextFullMoonTimestamp || now >= nextNewMoonTimestamp) {
          nextFullMoonDate = getNextDate(fullMoonDates);
          nextNewMoonDate = getNextDate(newMoonDates);
        }
      }
      
      setInterval(updateAllTimers, 1000);


  // pournima
  const fullMoonDates = [
      new Date('2024-01-25 10:00'), 
      new Date('2024-02-24 10:00'), 
      new Date('2024-03-24 10:00'), 
      new Date('2024-04-23 10:00'), 
      new Date('2024-05-23 10:00'), 
      new Date('2024-06-21 10:00'), 
      new Date('2024-07-21 10:00'), 
      new Date('2024-08-19 10:00'), 
      new Date('2024-09-17 10:00'), 
      new Date('2024-10-17 10:00'), 
      new Date('2024-11-15 10:00'), 
      new Date('2024-12-15 10:00'), 
  ]  
    const now = new Date();
    
    // Find the next upcoming full moon date
    let nextFullMoonDate;
    for (const date of fullMoonDates) {
      if (date > now) {
        nextFullMoonDate = date;
        break;
        
      }
    }
    document.getElementById('pournima').innerText = `${nextFullMoonDate.toDateString()}`;

function calculateTimeDifference(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    return distance;
}

function convertTime(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function PrunTimer() {
    if (fullMoonDates.length === 0) {
        console.log('No full moon dates available.');
        return;
    }

    const targetDate = fullMoonDates[0];
    const distance = calculateTimeDifference(targetDate);

    if (distance <= 0) {
        document.getElementById('pournimaTimer').textContent = "Loading..."
        fullMoonDates.shift();
        setTimeout(PrunTimer, 5000);
        return;
    }

    const remainingTime = convertTime(distance);

    document.getElementById('pournimaTimer').textContent =  `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`

    setTimeout(PrunTimer, 1000);
}

PrunTimer();
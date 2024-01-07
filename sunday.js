// amavasya
const nextSunday = [
    new Date('2024-01-07 09:30'),
    new Date('2024-01-14 09:30'),
    new Date('2024-01-21 09:30'),
    new Date('2024-01-28 09:30'),
    new Date('2024-02-04 09:30'),
    new Date('2024-02-11 09:30'),
    new Date('2024-02-18 09:30'),
    new Date('2024-02-25 09:30'),
];
    const current = new Date();
    
    // Find the next upcoming full moon date
    let nextSundayDate;
    for (const date of nextSunday) {
      if (date > current) {
        nextSundayDate = date;
        break;
        
      }
    }
    document.getElementById('sunday').innerText = `${nextSundayDate.toDateString()}`;

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

function runTimer() {
    if (nextSunday.length === 0) {
        console.log('No full moon dates available.');
        return;
    }

    const targetDate = nextSunday[0];
    const distance = calculateTimeDifference(targetDate);
    // console.log(Math.floor(distance/(1000*3600)))

    if (distance <= 0) {
        document.getElementById('sundayTimer').textContent = "Loading..."
        nextSunday.shift();
        setTimeout(runTimer, 5000);
        return;
    }

    const remainingTime = convertTime(distance);

    document.getElementById('sundayTimer').textContent = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`

    setTimeout(runTimer, 1000);
}

runTimer();
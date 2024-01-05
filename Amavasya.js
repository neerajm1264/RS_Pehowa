// amavasya
const newMoonDates = [
    new Date('2024-01-11 10:00'),
    new Date('2024-02-09 10:00'),
    new Date('2024-03-10 10:00'),
    new Date('2024-04-08 10:00'),
    new Date('2024-05-07 10:00'),
    new Date('2024-06-06 10:00'),
    new Date('2024-07-05 10:00'),
    new Date('2024-08-04 10:00'),
    new Date('2024-09-02 10:00'),
    new Date('2024-10-02 10:00'),
    new Date('2024-11-01 10:00'),
    new Date('2024-11-30 10:00'),
    new Date('2024-12-30 10:00'),
];
    const today = new Date();
    
    // Find the next upcoming full moon date
    let nextNewMoonDate;
    for (const date of newMoonDates) {
      if (date > today) {
        nextNewMoonDate = date;
        break;
        
      }
    }
    document.getElementById('amavasya').innerText = `${nextNewMoonDate.toDateString()}`;

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

function ArunTimer() {
    if (newMoonDates.length === 0) {
        console.log('No full moon dates available.');
        return;
    }

    const targetDate = newMoonDates[0];
    const distance = calculateTimeDifference(targetDate);
    if (distance <= 0) {
        document.getElementById('amavasyaTimer').textContent = "Satsang start"
        newMoonDates.shift();
        setTimeout(ArunTimer, 5000);
        return;
    }

    const remainingTime = convertTime(distance);

    document.getElementById('amavasyaTimer').textContent = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`

    setTimeout(ArunTimer, 1000);
}

ArunTimer();
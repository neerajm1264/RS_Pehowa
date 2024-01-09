const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');
const headline = document.getElementById('headline')
const links = document.querySelectorAll('.nav-links li'); 

let previousMargin = '2rem 0'; 

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const scrollThreshold = window.innerHeight * .3; // 100vh

function handleScroll() {
  let navbar = document.querySelector(".nav-links")
  let scrollPosition = window.scrollY || window.scrollY;

  if (scrollPosition <= scrollThreshold) {
    navbar.style.top = '90px';
    marqueeElement.style.display = "block"; 
  } else {
    navbar.style.top = '57px';
    marqueeElement.style.display = "none"; 
  }
}
// Add a one-time listener to handle initial display
window.addEventListener("DOMContentLoaded", handleScroll);

// Add the scroll listener to handle subsequent scrolling
window.addEventListener("scroll", handleScroll);

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

function displayTimer(targetDate, elementId) {
  const distance = calculateTimeDifference(targetDate);
  if (distance <= 0) {
      document.getElementById(elementId).textContent = "Loading...";
      return true; // Event has passed
  }

  const remainingTime = convertTime(distance);
  document.getElementById(elementId).textContent = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
  return false; // Event still pending
}

// amavasya
const newMoonDates = [
  // Dates array for new moon events
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

function amavasyaTimer() {
  if (newMoonDates.length === 0) {
      console.log('No new moon dates available.');
      return;
  }

  const targetDate = newMoonDates[0];
  const eventPassed = displayTimer(targetDate, 'amavasyaTimer');

  if (eventPassed) {
      newMoonDates.shift();
      setTimeout(amavasyaTimer, 5000);
      return;
  }

  setTimeout(amavasyaTimer, 1000);
}

amavasyaTimer();

// pournima
const fullMoonDates = [
  // Dates array for full moon events
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
];

function pournimaTimer() {
  if (fullMoonDates.length === 0) {
      console.log('No full moon dates available.');
      return;
  }

  const targetDate = fullMoonDates[0];
  const eventPassed = displayTimer(targetDate, 'pournimaTimer');

  if (eventPassed) {
      fullMoonDates.shift();
      setTimeout(pournimaTimer, 5000);
      return;
  }

  setTimeout(pournimaTimer, 1000);
}

pournimaTimer();

// Sunday events
const nextSunday = [
  // Dates array for Sunday events
  new Date('2024-01-07 09:30'),
  new Date('2024-01-14 09:30'),
  new Date('2024-01-21 09:30'),
  new Date('2024-01-28 09:30'),
  new Date('2024-02-04 09:30'),
  new Date('2024-02-11 09:30'),
  new Date('2024-02-18 09:30'),
  new Date('2024-02-25 09:30'),
];

function sundayTimer() {
  if (nextSunday.length === 0) {
      console.log('No Sunday dates available.');
      return;
  }

  const targetDate = nextSunday[0];
  const eventPassed = displayTimer(targetDate, 'sundayTimer');

  if (eventPassed) {
      nextSunday.shift();
      setTimeout(sundayTimer, 2000);
      return;
  }

  setTimeout(sundayTimer, 1000);
}
const today = new Date();
    
// Find the next upcoming full moon date
let nextNewMoonDate;
let nextFullMoonDate;
let nextSundayDate;

for (const date of newMoonDates) {
  if (date > today) {
    nextNewMoonDate = date;
    break;
    
  }
}
document.getElementById('amavasya').innerText = `${nextNewMoonDate.toDateString()}`;

for (const date of fullMoonDates) {
  if (date > today) {
    nextFullMoonDate = date;
    break;
    
  }
}
document.getElementById('pournima').innerText = `${nextFullMoonDate.toDateString()}`;

for (const date of nextSunday) {
  if (date > today) {
    nextSundayDate = date;
    break;
    
  }
}
document.getElementById('sunday').innerText = `${nextSundayDate.toDateString()}`;



sundayTimer();
// Initialize variables to hold the minimum time and corresponding event
let minTimeRemaining = Infinity;
let nextEvent = '';

// Function to compare and update the minimum time and event
function updateMinTime(event, timeRemaining) {
  if (timeRemaining < minTimeRemaining) {
    minTimeRemaining = timeRemaining;
    nextEvent = event;
  }
}

// Function to compare and find the next event to occur
function findNextEvent() {
  const amavasyaTime = calculateTimeDifference(nextNewMoonDate);
  const pournimaTime = calculateTimeDifference(nextFullMoonDate);
  const sundayTime = calculateTimeDifference(nextSundayDate);

  updateMinTime('amavasya', amavasyaTime);
  updateMinTime('pournima', pournimaTime);
  updateMinTime('sunday', sundayTime);

  return nextEvent;
}

// Call this function to find which event will expire first
const upcomingEvent = findNextEvent();
// console.log(`The next event to occur is: ${upcomingEvent}`);

function updateDisplayOrder() {
  const satsangTiming = document.querySelector('.satsang-timing');
  const timingItems = satsangTiming.querySelectorAll('.timing-item');

  // Create an array to hold the timing items and their remaining time
  const itemsWithTimeRemaining = [];

  // Calculate time remaining for each event and store it in the array
  const amavasyaTime = calculateTimeDifference(nextNewMoonDate);
  const pournimaTime = calculateTimeDifference(nextFullMoonDate);
  const sundayTime = calculateTimeDifference(nextSundayDate);

  itemsWithTimeRemaining.push({ element: timingItems[0], time: sundayTime });
  itemsWithTimeRemaining.push({ element: timingItems[1], time: amavasyaTime });
  itemsWithTimeRemaining.push({ element: timingItems[2], time: pournimaTime });

  // Sort the items based on remaining time
  itemsWithTimeRemaining.sort((a, b) => a.time - b.time);

  // Remove existing items from the DOM
  timingItems.forEach(item => item.remove());

  // Append the items in the updated order
  itemsWithTimeRemaining.forEach(item => {
    satsangTiming.appendChild(item.element);
  });
}
updateDisplayOrder();

//------------------------------------ fetch satsang videos

let http = new XMLHttpRequest();

http.open("get", "satsang.json", true);

http.send();

http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let satsang = JSON.parse(this.responseText);
        let video = "";
          for (let i = 0; i < satsang.length; i++) {
            const item = satsang[i];
          if(i < 3){
            video += `
            
        <div class="satsang-video">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/${item.iframe}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
            <h4>${item.h4}</h4>
            <p>${item.p}</p>
        </div>
            `;}
        };
        document.querySelector(".satsang").innerHTML = video;
    }
}

//------------------------------------ fetch shabad videos

let https = new XMLHttpRequest();

https.open("get", "shabad.json", true);

https.send();

https.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let shabad = JSON.parse(this.responseText);
        let video = "";
          for (let i = 0; i < shabad.length; i++) {
            const item = shabad[i];
          if(i < 3){
            video += `
            
        <div class="satsang-video">
            <iframe width="350" height="200" src="https://www.youtube.com/embed/${item.iframe}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
            <h4>${item.h4}</h4>
            <p>${item.p}</p>
        </div>
            `;}
        };
        document.querySelector(".shabad").innerHTML = video;
    }
}

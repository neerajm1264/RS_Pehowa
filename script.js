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

//------------------------------ moonphases calculate

// Array of hardcoded full moon dates (for example)
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

  
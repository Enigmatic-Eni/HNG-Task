// Get the current date and time
const currentDate = new Date();

// Display the current time in UTC
const currentTimeUTC = currentDate.toUTCString();
document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[currentDate.getDay()];
document.querySelector('[data-testid="currentDay"]').textContent = currentDay;

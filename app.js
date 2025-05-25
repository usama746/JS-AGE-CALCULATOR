let yr = document.getElementById("years");
let mon = document.getElementById("months");
let dy = document.getElementById("days");

let timer;

//
//
//
//
// AGE CHECK FUNCTION

function ageCheck() {
   let date = parseInt(document.getElementById("date").value);
   let month = parseInt(document.getElementById("month").value);
   let year = parseInt(document.getElementById("year").value);

   if (!date || !month || !year) {
      alert("Please enter a valid date!");
      return;
   }

   if (month < 1 || month > 12) {
      alert("Please enter a valid month (1-12)!");
      return;
   }

   if (date < 1 || date > 31) {
      alert("Please enter a valid date (1-31)!");
      return;
   }

   if (year < 1900 || year > 2025) {
      alert("Please enter a valid year (1900-2025)!");
      return;
   }

   let birthDate = new Date(year, month - 1, date);
   let today = new Date();

   if (birthDate > today) {
      alert("Birth date cannot be in the future!");
      return;
   }

   // Pehly sy agar koi timer chal raha howa to ya ussy clear krdy ga tk koi issue na ay
   if (timer) {
      clearInterval(timer);
   }

   // Clear before update

   function update() {
      let now = new Date();
      let diff = now - birthDate;

      let totalSeconds = Math.floor(diff / 1000);
      let totalDays = Math.floor(totalSeconds / (60 * 60 * 24));

      // Ya wo seconds hy total days calculate krny k bd remaining bachy hy
      let remainingSeconds = totalSeconds % (60 * 60 * 24);

      let hours = Math.floor(remainingSeconds / 3600);
      let minutes = Math.floor((remainingSeconds % 3600) / 60);
      let seconds = remainingSeconds % 60;

      let years = Math.floor(totalDays / 365);
      let months = Math.floor((totalDays % 365) / 30); // Ya ek rough estimate nikaly ga qk kuch months my 28,29 ya 31 days bhi hoty hy
      let days = (totalDays % 365) % 30; // Ya jb year aur months calculate krny k bd jo bhi remaining bachy ga wo days my count krly ga

      let timeContainer = document.getElementsByClassName("timer")[0];
      timeContainer.innerHTML = `<h3>Your Age</h3>
         <div id="time">
            <h2 id="years">${formatTime(years)}</h2>
            <h2 id="months">${formatTime(months)}</h2>
            <h2 id="days">${formatTime(days)}</h2>
            <h2 id="hr">${formatTime(hours)}</h2>
            <h2 id="min">${formatTime(minutes)}</h2>
            <h2 id="sec">${formatTime(seconds)}</h2>
         </div>
         <div id="text">
            <p>Year</p>
            <p>Month</p>
            <p>Days</p>
            <p>Hr</p>
            <p>Min</p>
            <p>Sec</p>
         </div>`;
   }

   update();

   timer = setInterval(update, 1000);

   document.getElementById("date").value = "";
   document.getElementById("month").value = "";
   document.getElementById("year").value = "";
}

// Ya function isliya bnaya hy qk agar koi bhi value 10 sy less hogi to is function ki waja sy double digit starting with ZERO(0) hogi
function formatTime(time) {
   return time < 10 ? "0" + time : time;
}

//
//
//
//
// EVENT CHECK FUNCTION

function eventCheck() {
   let date = parseInt(document.getElementById("date").value);
   let month = parseInt(document.getElementById("month").value);
   let year = parseInt(document.getElementById("year").value);

   if (!date || !month || !year) {
      alert("Please enter a valid date!");
      return;
   }

   if (month < 1 || month > 12) {
      alert("Please enter a valid month (1-12)!");
      return;
   }

   if (date < 1 || date > 31) {
      alert("Please enter a valid date (1-31)!");
      return;
   }

   if (year < 1900) {
      alert("Please enter a valid year !");
      return;
   }

   let birthDate = new Date(year, month - 1, date);
   let today = new Date();

   if (birthDate < today) {
      alert("Event Has Already Passed");
      return;
   }

   // Pehly sy agar koi timer chal raha howa to ya ussy clear krdy ga tk koi issue na ay
   if (timer) {
      clearInterval(timer);
   }

   // Clear before update

   function checkUpdate() {
      let now = new Date();
      let diff = birthDate - now;

      let totalSeconds = Math.floor(diff / 1000);
      let totalDays = Math.floor(totalSeconds / (60 * 60 * 24));

      // Ya wo seconds hy total days calculate krny k bd remaining bachy hy
      let remainingSeconds = totalSeconds % (60 * 60 * 24);

      let hours = Math.floor(remainingSeconds / 3600);
      let minutes = Math.floor((remainingSeconds % 3600) / 60);
      let seconds = remainingSeconds % 60;

      let years = Math.floor(totalDays / 365);
      let months = Math.floor((totalDays % 365) / 30); // Ya ek rough estimate nikaly ga qk kuch months my 28,29 ya 31 days bhi hoty hy
      let days = (totalDays % 365) % 30; // Ya jb year aur months calculate krny k bd jo bhi remaining bachy ga wo days my count krly ga

      let timeContainer = document.getElementsByClassName("timer")[0];
      timeContainer.innerHTML = `<h3>Time left for Event </h3>
         <div id="time">
            <h2 id="years">${formatTime(years)}</h2>
            <h2 id="months">${formatTime(months)}</h2>
            <h2 id="days">${formatTime(days)}</h2>
            <h2 id="hr">${formatTime(hours)}</h2>
            <h2 id="min">${formatTime(minutes)}</h2>
            <h2 id="sec">${formatTime(seconds)}</h2>
         </div>
         <div id="text">
            <p>Year</p>
            <p>Month</p>
            <p>Days</p>
            <p>Hr</p>
            <p>Min</p>
            <p>Sec</p>
         </div>`;
   }

   checkUpdate();

   timer = setInterval(checkUpdate, 1000);

   // document.getElementById("date").value = "";
   // document.getElementById("month").value = "";
   // document.getElementById("year").value = "";
}

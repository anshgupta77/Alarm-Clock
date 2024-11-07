let selectMenu = document.querySelectorAll("select");
let time = document.getElementById('time');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let am_pm = document.getElementById('am_pm');
let alarmSet = document.getElementById('alarmSet');
let alarmSound = document.getElementById('alarmSound');
let stopBtn = document.getElementById('stopBtn');
let alarmTime = null;
for (let i = 12; i > 0; i--) {
    let option = document.createElement("option");
    let value = i < 10 ? "0" + i : i;
    option.value = value;
    option.textContent = value;
    selectMenu[0].appendChild(option);
}

for (let i = 59; i >= 0; i--) {
    let option = document.createElement("option");
    let value = i < 10 ? "0" + i : i;
    option.value = value;
    option.textContent = value;
    selectMenu[1].appendChild(option);
}
function workingClock(){
 let checkInterval = setInterval(() => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    
    let ampm = h >= 12 ? "P.M." : "A.M.";

    
    h = h % 12;
    h = h == 0 ? h = 12 : h;

    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    time.innerText = `${h}:${m}:${s} ${ampm}`;
    if (alarmTime) {
        console.log("Alarm is ringing");
        let currentDisplayTime = `${h}:${m} ${ampm}`;
        console.log(currentDisplayTime," ",alarmTime);
        if (currentDisplayTime == alarmTime) {
            alarmSound.play();
            stopBtn.style.display = "inline-block";
            alarmTime = null;  
            clearInterval(checkInterval);
        }
    }
},1000);
}

function setAlarm(){
    let hour = selectMenu[0].value;
    let minute = selectMenu[1].value;
    let ampm = selectMenu[2].value;

    if (hour !== "Hour" && minute !== "Minutes" && ampm !== "A.M./P.M.") {
        alarmTime = `${hour}:${minute} ${ampm}`;
        // alert(`Alarm set for: ${alarmTime}`);
        alarmSet.innerHTML = alarmTime;
        stopBtn.style.display = "inline";
    } else {
        alert("Please select valid time for alarm.");
    }
}
    function stopAlarm() {
        // Hide the stop button
      alarmSound.pause();       // Stop the alarm sound
      alarmSound.currentTime = 0;  // Reset sound to the beginning
      alarmSet.innerHTML = "";  // Clear the displayed alarm time
      // Optional: You can also reset the alarm input fields
      hours.textContent= "Hours";
      minutes.value = "Minutes";
      am_pm.value = "A.M.";
      stopBtn.style.display = "none";
      workingClock();
  }
  workingClock();
  

// let selectMenu = document.querySelectorAll("select");
// let time = document.getElementById('time');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let am_pm = document.getElementById('am_pm');
// let alarmSet = document.getElementById('alarmSet');
// let alarmSound = document.getElementById('alarmSound');
// let stopBtn = document.getElementById('stopBtn');
// let alarmTime = null;
// for (let i = 12; i > 0; i--) {
//     let option = document.createElement("option");
//     let value = i < 10 ? "0" + i : i;
//     option.value = value;
//     option.textContent = value;
//     selectMenu[0].appendChild(option);
// }

// for (let i = 59; i >= 0; i--) {
//     let option = document.createElement("option");
//     let value = i < 10 ? "0" + i : i;
//     option.value = value;
//     option.textContent = value;
//     selectMenu[1].appendChild(option);
// }
//  let checkInterval = setInterval(() => {
//     // let date = new Date();
//     // let localTime = date.toLocaleTimeString();
//     // time.innerHTML = localTime;
//     let today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();

    
//     let ampm = h >= 12 ? "P.M." : "A.M.";

    
//     h = h % 12;
//     h = h == 0 ? h = 12 : h;

    
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;

//     time.innerText = `${h}:${m}:${s} ${ampm}`;
//     // if(alarmHours == hours && alarmMinutes == minutes && alarmPM_AM == pm_am){
//     //     // alert('Alarm is ringing');
        
//     //     alarmSound.play();
//     //     // alarmSound.loop = "true";
//     //     stopBtn.style.display = "inline";
//     //     clearInterval(checkInterval);

//     // }
//     if (alarmTime) {
//         console.log("Alarm is ringing");
//         let currentDisplayTime = `${h}:${m} ${ampm}`;
//         console.log(currentDisplayTime," ",alarmTime);
//         if (currentDisplayTime == alarmTime) {
//             alarmSound.play();
//             stopBtn.style.display = "inline-block";
//             alarmTime = null;  
//             clearInterval(checkInterval);
//         }
//     }
// },1000);

// function setAlarm(){
//     // alarmSet.innerHTML = `${hours.value}:${minutes.value}:00 ${am_pm.value}`;
//     // let checkInterval = setInterval(() => {
//     //     let alarmTime = alarmSet.innerHTML;
//     //     alarmTime = alarmTime.split(":");
//     //     console.log(alarmTime);
//     //     let alarmHours = alarmTime[0];
//     //     console.log(alarmHours)
//     //     let alarmMinutes = alarmTime[1];
//     //     console.log(alarmMinutes)
//     //     let alarmPM_AM = alarmTime[2][3];
//     //     console.log(alarmPM_AM)
//     //     let date = new Date();
//     //     let hours = date.getHours();
//     //     let minutes = date.getMinutes();
//     //     console.log(minutes)
//     //     let pm_am = hours >= 12 ? 'P' : 'A';
//     //     console.log(pm_am)
//     //     if(hours > 12){
//     //         hours = hours - 12;
//     //     }
//     //     console.log(hours)
//     let hour = selectMenu[0].value;
//     let minute = selectMenu[1].value;
//     let ampm = selectMenu[2].value;

//     if (hour !== "Hour" && minute !== "Minutes" && ampm !== "A.M./P.M.") {
//         alarmTime = `${hour}:${minute} ${ampm}`;
//         // alert(`Alarm set for: ${alarmTime}`);
//         alarmSet.innerHTML = alarmTime;
//     } else {
//         alert("Please select valid time for alarm.");
//     }
//         // if(alarmHours == hours && alarmMinutes == minutes && alarmPM_AM == pm_am){
//         //     // alert('Alarm is ringing');
            
//         //     alarmSound.play();
//         //     // alarmSound.loop = "true";
//         //     stopBtn.style.display = "inline";
//         //     clearInterval(checkInterval);
//         // }
// }

// function stopAlarm() {
//       // Hide the stop button
//     alarmSound.pause();       // Stop the alarm sound
//     alarmSound.currentTime = 0;  // Reset sound to the beginning
//     alarmSet.innerHTML = "";  // Clear the displayed alarm time
//     // Optional: You can also reset the alarm input fields
//     hours.textContent= "Hours";
//     minutes.value = "Minutes";
//     am_pm.value = "A.M.";
//     stopBtn.style.display = "none";
// }

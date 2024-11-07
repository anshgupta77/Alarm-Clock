let time = document.getElementById('time');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let am_pm = document.getElementById('am_pm');
let alarmSet = document.getElementById('alarmSet');
let alarmSound = document.getElementById('alarmSound');
let stopBtn = document.getElementById('stopBtn');
setInterval(() => {
    let date = new Date();
    let localTime = date.toLocaleTimeString();
    time.innerHTML = localTime;
},10);

function setAlarm(){
    alarmSet.innerHTML = `${hours.value}:${minutes.value}:00 ${am_pm.value}`;
    let checkInterval = setInterval(() => {
        let alarmTime = alarmSet.innerHTML;
        alarmTime = alarmTime.split(":");
        console.log(alarmTime);
        let alarmHours = alarmTime[0];
        console.log(alarmHours)
        let alarmMinutes = alarmTime[1];
        console.log(alarmMinutes)
        let alarmPM_AM = alarmTime[2][3];
        console.log(alarmPM_AM)
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        console.log(minutes)
        let pm_am = hours >= 12 ? 'P' : 'A';
        console.log(pm_am)
        if(hours > 12){
            hours = hours - 12;
        }
        console.log(hours)
        if(alarmHours == hours && alarmMinutes == minutes && alarmPM_AM == pm_am){
            // alert('Alarm is ringing');
            
            alarmSound.play();
            // alarmSound.loop = "true";
            stopBtn.style.display = "inline";
            clearInterval(checkInterval);
        }
    },1000);
}

function stopAlarm() {
      // Hide the stop button
    alarmSound.pause();       // Stop the alarm sound
    alarmSound.currentTime = 0;  // Reset sound to the beginning
    alarmSet.innerHTML = "";  // Clear the displayed alarm time
    // Optional: You can also reset the alarm input fields
    hours.value = "";
    minutes.value = "";
    am_pm.value = "AM";
    stopBtn.style.display = "none";
}

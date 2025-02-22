function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours().toString().padStart(2, '0');
    let min = dateTime.getMinutes().toString().padStart(2, '0');
    let sec = dateTime.getSeconds().toString().padStart(2, '0');

    if (hr > 12) {
        ampm.innerHTML = "PM"
    } else {
        ampm.innerHTML = 'Am'
    }

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('mins').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('ampm') = ampm;
}

setInterval(displayTime, 500)
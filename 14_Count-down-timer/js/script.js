const day=document.getElementById("days");
const hours=document.getElementById("hours");
const mins=document.getElementById("minutes");
const seconds=document.getElementById("seconds");

function UpdateTime() {
    const currentYear=new Date().getFullYear();
    const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);
    let currentDate=new Date();
    let remainingDays=newYear-currentDate;
    const days=Math.floor(remainingDays/1000/60/60/24);
    const hrs=Math.floor((remainingDays/1000/60/60)%24);
    const mins=Math.floor((remainingDays/1000/60)%60);
    const sec=Math.floor((remainingDays/1000)%60);
    
    //console.log(`Time left until New Year: ${days} days, ${hrs} hours, ${mins} minutes, ${sec} seconds`);
day.innerHTML=days<10?"0"+days:days;
hours.innerHTML=hrs<10?"0"+hrs:hrs;
mins.innerHTML=mins<10?"0"+mins:mins;
seconds.innerHTML=sec<10?"0"+sec:sec;
}
setInterval(UpdateTime);
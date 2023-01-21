function displayTime()
{
    let date= new Date();

    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    document.getElementById("hour").value=hrs;
    document.getElementById("min").value=min;
    document.getElementById("sec").value=sec;
}

setInterval( ()=>{displayTime()} , 1000 )
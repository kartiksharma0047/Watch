setInterval(()=>{
    let dt=new Date();
    let day=dayName(dt.getDay());
    let date=dt.getDate();
    let month=dt.getMonth()+1;
    let year=dt.getFullYear();
    let hour=appendZero(dt.getHours());
    let minutes=appendZero(dt.getMinutes());
    let seconds=appendZero(dt.getSeconds());
    document.querySelector("#Clock h2").innerHTML= day;
    document.querySelector("#Clock h3").innerHTML= date+"/ "+month+"/ "+ year;
    document.querySelector("#Clock p").innerHTML= hour+" : "+minutes+" : "+seconds;
},1000);
function dayName(num){
    const days = ["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"];
    return days[num-1];
}
function appendZero(num){
    return num<10 ? "0" + num :num;
}
const hours = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


setInterval(() => {
   let date  = new Date();
   let htime = date.getHours();
   let mtime = date.getMinutes();
   let stime = date.getSeconds();

   let hRotation = 30*htime + mtime/2;
   let mRotation = 6*mtime;
   let sRotation = 6*stime;

   hours.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;

},1000)
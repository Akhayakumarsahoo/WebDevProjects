setInterval( ()=>{
    d = new Date;
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    hrotation = 30*htime + mtime/2;
    mrotation = mtime*6;
    srotation = stime*6;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;


},1000);
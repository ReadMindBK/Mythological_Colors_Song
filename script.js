
const a=document.getElementById('audio');
const p=document.getElementById('play');
const r=document.getElementById('progress');
const t=document.getElementById('time');
function f(s){if(!isFinite(s))return"00:00";let m=Math.floor(s/60),x=Math.floor(s%60);return String(m).padStart(2,'0')+':'+String(x).padStart(2,'0')}
p.onclick=()=>{if(a.paused){a.play();p.textContent='⏸ Pause';p.animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:250});}else{a.pause();p.textContent='▶ Hear';}}
a.ontimeupdate=()=>{r.value=(a.currentTime/(a.duration||1))*100;t.textContent=f(a.currentTime)+' / '+f(a.duration)}
r.oninput=()=>a.currentTime=(r.value/100)*(a.duration||0);
a.onended=()=>p.textContent='▶ Hear';

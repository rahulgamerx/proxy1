// RGX Tactical Console — local visual simulation only.
const state = {headshot:true, esp:true};
function update(name){
  state[name]=!state[name]; const on=state[name];
  document.getElementById(name+'-state').textContent=on?'ENABLED':'DISABLED';
  const badge=document.getElementById(name+'-badge'); badge.textContent=on?'ACTIVE':'INACTIVE'; badge.className='badge '+(on?'on':'off');
  document.getElementById(name+'-bar').style.width=on?(name==='headshot'?'86%':'72%'):'0%';
  const btn=document.querySelector(`[data-toggle="${name}"]`);
  btn.classList.toggle('active',on); btn.innerHTML=on?'DISABLE MODULE <b>−</b>':'ENABLE MODULE <b>+</b>';
}
document.querySelectorAll('[data-toggle]').forEach(btn=>btn.addEventListener('click',()=>update(btn.dataset.toggle)));
function tick(){document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-GB',{hour12:false,timeZone:'Asia/Kolkata'});}
tick();setInterval(tick,1000);
document.getElementById('refresh').addEventListener('click',()=>{
 const ping=[36,39,42,45,48,51][Math.floor(Math.random()*6)];
 document.getElementById('ping').textContent=String(ping).padStart(3,'0');
 document.getElementById('last-refresh').textContent='Refreshed at '+new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});
 const log=document.getElementById('logs'), line=document.createElement('div');line.className='log-line';
 const time=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});
 line.innerHTML=`<time>${time}</time><i class="log-dot"></i><p><b>DEMO_REFRESH</b><span>Local mock diagnostics refreshed</span></p>`;
 log.prepend(line);while(log.children.length>4)log.removeChild(log.lastElementChild);
 document.querySelector('.log-count').textContent=String(log.children.length).padStart(2,'0')+' EVENTS';
 const btn=document.getElementById('refresh');btn.innerHTML='<span>✓</span> DEMO DIAGNOSTICS COMPLETE';
 setTimeout(()=>btn.innerHTML='<span>↻</span> RUN DEMO DIAGNOSTICS',1300);
});

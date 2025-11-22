document.addEventListener('DOMContentLoaded', ()=>{
  const el = document.querySelector('#count span');
  let val = 0;
  const render = ()=> el.textContent = val;
  document.getElementById('inc').addEventListener('click', ()=>{val++; render();});
  document.getElementById('dec').addEventListener('click', ()=>{val--; render();});
  document.getElementById('reset').addEventListener('click', ()=>{val=0; render();});
  render();
});

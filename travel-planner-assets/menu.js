const isEnglish=document.documentElement.lang.startsWith('en');
const toggle=document.querySelector('.menuToggle'),menu=document.querySelector('.menu');
function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu +'}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?(isEnglish?'Close −':'Fermer −'):'Menu +'});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus()}});

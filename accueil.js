const button=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){button.setAttribute('aria-expanded','false');button.textContent='Menu +';navigation.classList.remove('open')}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.textContent=open?button.dataset.close:'Menu +';navigation.classList.toggle('open',open)});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){closeMenu();button.focus()}});

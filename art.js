function toggleNav(){const nav=document.getElementById('nav-links');const open=nav.classList.toggle('is-open');document.querySelector('.nav-toggle')?.setAttribute('aria-expanded',String(open));}
document.querySelector('.nav-toggle')?.setAttribute('aria-expanded','false');
if(document.querySelector('.art-open')){const dialog=document.createElement('dialog');dialog.className='art-dialog';dialog.innerHTML='<button type="button" aria-label="Close artwork">Close ×</button><img alt=""><p></p>';document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});document.querySelectorAll('.art-open').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();const img=link.querySelector('img');dialog.querySelector('img').src=link.href;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal()}));}

for(const a of document.querySelectorAll('.site-nav__links a')){if(a.pathname===location.pathname||(a.getAttribute('href')==='art.html'&&/paintings|just-a-pen/.test(location.pathname)))a.setAttribute('aria-current','page');}


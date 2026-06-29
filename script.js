// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
    });
  });

  // Reveal cards on scroll
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.style.opacity='1';
        en.target.style.transform='translateY(0)';
      }
    });
  },{threshold:0.15});

  document.querySelectorAll('.card,.box').forEach(el=>{
    el.style.opacity='0';
    el.style.transform='translateY(30px)';
    el.style.transition='all .6s ease';
    obs.observe(el);
  });

  // Theme toggle support
  const btn=document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click',()=>document.body.classList.toggle('light'));
  }

  // Skill animation
  document.querySelectorAll('.progress span').forEach(bar=>{
    const w=bar.style.width;
    bar.style.width='0';
    setTimeout(()=>bar.style.width=w,300);
  });
});

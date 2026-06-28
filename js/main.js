(function(){
  const nav=document.querySelector('nav.menu');
  if(nav){
    const items=[
      ['/index.html','Home'],['/about.html','About'],['/priorities.html','Priorities'],['/resources.html','Resources'],['/mental-health.html','Mental Health'],['/support-team.html','Support Team'],['/education/index.html','Education'],['/events.html','Events'],['/tour/index.html','Tour'],['/volunteer.html','Volunteer'],['/echo-wall.html','Echo Wall'],['/media.html','Media'],['/transparency.html','Transparency'],['/contact.html','Contact']
    ];
    const current=location.pathname==='/'?'/index.html':location.pathname;
    nav.setAttribute('aria-label','Primary navigation');
    nav.innerHTML=items.map(([href,label])=>`<a href="${href}"${current===href?' aria-current="page"':''}>${label}</a>`).join('');
  }
})();
function submitDemo(event,type){event.preventDefault();alert('This form is not connected yet. No information was sent.');}
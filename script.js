// =========================
// SAFE DOM helpers
// =========================
function q(id){ return document.getElementById(id); }
function qa(sel){ return Array.from(document.querySelectorAll(sel)); }
function safeAdd(el, ev, fn){ if (el) el.addEventListener(ev, fn); }

// =========================
// TOWN HALL (ABOUT ME)
// =========================
const townhall = q('townhall-container');
const aboutModal = q('about-me-modal');
const closeAboutBtn = q('close-modal-btn');

function openAbout(){ if (!aboutModal) return; aboutModal.style.display='flex'; aboutModal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); }
function closeAbout(){ if (!aboutModal) return; aboutModal.style.display='none'; aboutModal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); }

safeAdd(townhall,'click',openAbout);
safeAdd(closeAboutBtn,'click',closeAbout);
safeAdd(aboutModal,'click', function(e){ if (e.target === aboutModal) closeAbout(); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (aboutModal && aboutModal.style.display === 'flex') closeAbout(); }});

// =========================
// CONTACT PANEL
// =========================
const contactButton = q('contact-button');
const contactPanel = q('contact-panel');

function toggleContactPanel(){
  if (!contactPanel) return;
  const opening = !contactPanel.classList.contains('open');
  contactPanel.classList.toggle('open');

  if (opening){
    // panel opened
    contactButton.classList.add('open-position');
    document.body.classList.add('panel-open');   // <-- add this
  } else {
    // panel closed
    contactButton.classList.remove('open-position');
    document.body.classList.remove('panel-open'); // <-- remove this
  }
}
safeAdd(contactButton,'click', toggleContactPanel);

// close panel by clicking outside it (updated to remove body class too)
document.addEventListener('click', function(e){
  if (!contactPanel) return;
  if (!contactPanel.contains(e.target) && !contactButton.contains(e.target) && contactPanel.classList.contains('open')){
    contactPanel.classList.remove('open');
    if (contactButton) contactButton.classList.remove('open-position');
    document.body.classList.remove('panel-open'); // ensure this is removed
  }
});





// =========================
// PROJECTS (SHOP) MODAL
// =========================
(function(){
  const projectsShopBtn = q('projects-shop-button');
  const projectsModal = q('projects-modal');
  const closeProjectsBtn = q('close-projects-btn');
  const projectTabs = qa('.project-tab');
  const starCardWrappers = qa('.star-card-wrapper');

  function openProjectsModal(){
    if (!projectsModal) return;
    projectsModal.style.display = 'flex';
    projectsModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
  function closeProjectsModal(){
    if (!projectsModal) return;
    projectsModal.style.display = 'none';
    projectsModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  safeAdd(projectsShopBtn,'click', openProjectsModal);
  safeAdd(closeProjectsBtn,'click', closeProjectsModal);
  safeAdd(projectsModal,'click', function(e){ if (e.target === projectsModal) closeProjectsModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (projectsModal && projectsModal.style.display === 'flex') closeProjectsModal(); }});

  projectTabs.forEach(tab=>{
    safeAdd(tab,'click', function(e){
      const projectId = tab.getAttribute('data-project-id');
      projectTabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      starCardWrappers.forEach(w=>{
        w.style.display = (w.getAttribute('data-project') === projectId) ? 'flex' : 'none';
      });
    });
    safeAdd(tab,'keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') tab.click(); });
  });
})();

// =========================
// CAREER PATH MODAL & PROGRESS
// =========================
(function(){
  const careerBtn = q('career-path-button');
  const careerModal = q('career-modal');
  const closeCareerBtn = q('close-career-btn');

  function openCareerModal(){
    if (!careerModal) return;
    careerModal.style.display = 'flex';
    careerModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    updateCareerProgress();
  }
  function closeCareerModal(){
    if (!careerModal) return;
    careerModal.style.display = 'none';
    careerModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  function updateCareerProgress(){
    const steps = qa('.career-step');
    if (!steps.length) return;
    const total = steps.length;
    const completed = steps.filter(s => s.classList.contains('completed')).length;
    const pct = Math.round((completed / total) * 100);
    const fillEl = document.querySelector('.career-progress-fill');
    if (fillEl) fillEl.style.width = pct + '%';
  }

  safeAdd(careerBtn,'click', openCareerModal);
  safeAdd(closeCareerBtn,'click', closeCareerModal);
  safeAdd(careerModal,'click', function(e){ if (e.target === careerModal) closeCareerModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (careerModal && careerModal.style.display === 'flex') closeCareerModal(); }});

  // step click effect
  qa('.career-step').forEach(step=>{
    safeAdd(step,'click', function(){
      qa('.career-step').forEach(s => s.classList.remove('active-step'));
      step.classList.add('active-step');
    });
  });

  document.addEventListener('DOMContentLoaded', updateCareerProgress);
})();

// =========================
// INTERFACE PLACEHOLDERS (SAFE attachments)
// =========================
(function(){
  const achievementsBtn = q('achievements-button');
  const eventsBtn = q('events-button');
  const oldProjectsBtn = q('projects-button'); // may not exist
  const skillsBtn = q('projects-shop-button'); // projects shop (handled above)

  function handleInterfaceClick(e){
    const type = e.currentTarget.getAttribute('data-type') || 'item';
    if (contactPanel && contactPanel.classList.contains('open')) contactPanel.classList.remove('open');
    alert(`Interface Button Clicked: ${type.charAt(0).toUpperCase() + type.slice(1)}! Functionality for this section is the next step!`);
  }

  if (eventsBtn) eventsBtn.addEventListener('click', handleInterfaceClick);
  if (oldProjectsBtn) oldProjectsBtn.addEventListener('click', function(e){ e.stopPropagation(); console.log("Old projects-button clicked — disabled."); });
})();


// ---------------- Entrepreneur Module ----------------
(function(){
  const entBtn = q('entrepreneur-button');
  const entModal = q('entrepreneur-modal');
  const closeEntBtn = q('close-entrepreneur-btn');

  function openEntModal(){
    if (!entModal) return;
    entModal.style.display = 'flex';
    entModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
  function closeEntModal(){
    if (!entModal) return;
    entModal.style.display = 'none';
    entModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  safeAdd(entBtn,'click', openEntModal);
  safeAdd(closeEntBtn,'click', closeEntModal);
  safeAdd(entModal,'click', function(e){ if (e.target === entModal) closeEntModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (entModal && entModal.style.display === 'flex') closeEntModal(); }});
})();



// ---------------- Certifications (Huts) Module ----------------
(function(){
  const huts = qa('.cert-hut');
  const certModal = q('cert-modal');
  const closeCertBtn = q('close-cert-btn');

  // certification data — customize text, issuer, date, links, images
  const certData = {
    cert1: {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      date: "Completed: May 2024",
      img: "assets/images/cert_google_data.png",
      desc: "Comprehensive data analytics course covering data cleaning, visualization, SQL, R and Python basics.",
      link: "https://www.coursera.org/verify/EXAMPLE_CERT1"
    },
    cert2: {
      title: "Google Cloud Tools Certificate",
      issuer: "Google Cloud",
      date: "Completed: Aug 2024",
      img: "assets/images/cert_gcloud.png",
      desc: "Certificate for using Google Cloud tools for data processing and storage.",
      link: "https://www.example.com/cert_gcloud"
    },
    cert3: {
      title: "Intro to Machine Learning with Sound",
      issuer: "CognitiveClass.ai",
      date: "Completed: Nov 2024",
      img: "assets/images/cert3.png",
      desc: "Introductory course applying ML techniques to audio/sound data and models.",
      link: "https://www.example.com/cert_ml_sound"
    }
  };

  function openCertModalFor(id){
    const data = certData[id];
    if (!data || !certModal) return;
    q('cert-title').textContent = data.title;
    q('cert-issuer').textContent = data.issuer;
    q('cert-date').textContent = data.date;
    q('cert-desc').textContent = data.desc;
    const imgEl = q('cert-image');
    if (imgEl) imgEl.src = data.img || 'assets/images/cert-placeholder.png';
    const linkEl = q('cert-link');
    if (linkEl){
      linkEl.href = data.link || '#';
      linkEl.style.display = data.link ? 'inline-block' : 'none';
    }

    certModal.style.display = 'flex';
    certModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal(){
    if (!certModal) return;
    certModal.style.display = 'none';
    certModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  // Attach handlers to huts
  huts.forEach(h => {
    safeAdd(h,'click', function(){ openCertModalFor(h.getAttribute('data-cert-id')); });
    safeAdd(h,'keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h.click(); }});
  });

  safeAdd(closeCertBtn,'click', closeCertModal);
  safeAdd(certModal,'click', function(e){ if (e.target === certModal) closeCertModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (certModal && certModal.style.display === 'flex') closeCertModal(); }});
})();





// ---------------- Skills Module ----------------
(function(){
  const skillBtns = qa('.skill-building');
  const skillsModal = q('skills-modal');
  const closeSkillsBtn = q('close-skills-btn');
  const skillsTabs = qa('.skills-tab');
  const skillsDetails = document.querySelector('.skills-details');

  // Data for each building -> list of skills/units/spells
  const skillsData = {
    army: [
      { title: 'SQL', img: 'assets/images/units/barbarian.png', desc: '4 years' },
      { title: 'Python, ', img: 'assets/images/units/archer.png', desc: '4 years' },
      { title: 'C, ', img: 'assets/images/units/archer.png', desc: '5 years' },
      { title: 'Automation, ', img: 'assets/images/units/archer.png', desc: '2 years' },
      { title: 'ETL Pipelines, ', img: 'assets/images/units/archer.png', desc: '1.5 years' },
      { title: 'Cloud Tools ', img: 'assets/images/units/archer.png', desc: '3 years' },
      { title: 'JavaScript', img: 'assets/images/units/giant.png', desc: '6 months' }
    ],
    barracks: [
      { title: 'Healer', img: 'assets/images/units/healer.png', desc: 'Heals ground units (support).' },
      { title: 'Wizard', img: 'assets/images/units/wizard.png', desc: 'High single-target damage.' }
    ],
    dark_barracks: [
      { title: 'Minion', img: 'assets/images/units/minion.png', desc: 'Flying dark elixir unit.' },
      { title: 'Hog Rider', img: 'assets/images/units/hog_rider.png', desc: 'Fast attacker that targets defenses.' }
    ],
    spell_factory: [
      { title: 'Heal Spell', img: 'assets/images/spells/heal_spell.png', desc: 'Restores HP to units in its area.' },
      { title: 'Rage Spell', img: 'assets/images/spells/rage_spell.png', desc: 'Increases damage & speed.' }
    ],
    dark_spell_factory: [
      { title: 'Poison Spell', img: 'assets/images/spells/poison_spell.png', desc: 'Damage-over-time for enemy troops.' },
      { title: 'Earthquake', img: 'assets/images/spells/earthquake.png', desc: 'Deals structural damage.' }
    ]
  };

  function renderSkills(skillKey){
    if (!skillsDetails) return;
    const list = skillsData[skillKey] || [];
    skillsDetails.innerHTML = '';
    if (!list.length){
      skillsDetails.innerHTML = '<div style="padding:14px;color:#444">No items configured yet for this section.</div>';
      return;
    }
    list.forEach(item=>{
      const el = document.createElement('div');
      el.className = 'skill-item';
      el.innerHTML = `
        <div class="skill-icon"><img src="${item.img}" alt="${item.title}"></div>
        <div class="skill-info">
          <div class="skill-title">${item.title}</div>
          <div class="skill-desc">${item.desc}</div>
        </div>
      `;
      skillsDetails.appendChild(el);
    });
  }

  function openSkillsModalFor(skillKey){
    if (!skillsModal) return;
    skillsModal.style.display = 'flex';
    skillsModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // set active tab
    skillsTabs.forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-skill') === skillKey);
    });

    renderSkills(skillKey);
  }

  function closeSkillsModal(){
    if (!skillsModal) return;
    skillsModal.style.display = 'none';
    skillsModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  // attach events to map icons
  skillBtns.forEach(btn=>{
    const key = btn.getAttribute('data-skill');
    safeAdd(btn, 'click', ()=> openSkillsModalFor(key));
    safeAdd(btn, 'keydown', function(e){
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSkillsModalFor(key); }
    });
  });

  // tabs inside modal
  skillsTabs.forEach(tab=>{
    safeAdd(tab,'click', function(){
      const key = tab.getAttribute('data-skill');
      skillsTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSkills(key);
    });
  });

  safeAdd(closeSkillsBtn,'click', closeSkillsModal);
  safeAdd(skillsModal,'click', function(e){ if (e.target === skillsModal) closeSkillsModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (skillsModal && skillsModal.style.display === 'flex') closeSkillsModal(); } });

})();



// ---------------- Defenses Module ----------------
(function(){
  const defBtns = qa('.def-building');
  const defModal = q('defenses-modal');
  const closeDefBtn = q('close-defenses-btn');
  const defTabs = qa('.def-tab');
  const defDetails = document.querySelector('.defenses-details');

  const defData = {
    cannon: [
      { title: 'Aug 2025 — Present', img: 'assets/images/cannon_big.png', meta: 'Core Shopping Team', desc: 'Delivered A/B  analysis against hypotheses, generating insights expected to increase OPS by ~90–100% for the targeted product and audience.<br>Partnered with PMs to educate them on data needs and self-service analytics, improving decision-making efficiency for small-scale requests. <br>Initiated automation of repetitive processes across the team, reducing manual workload and driving operational excellence. <br>Collaborated with team-wide stakeholders to translate business needs into data-driven product insights.' },
    ],
    archer_tower: [
      { title: 'Feb 2025 — May 2025', img: 'assets/images/archer_tower_big.png', meta: 'YouTube - Trust and Safety', desc: 'Led multiple data analytics projects end-to-end, from drafting BRD/PRDs to delivering dashboards, ETL pipelines, and automated solutions aligned with stakeholder requirements.<br>Improved customer trust & experience by identifying platform abuse patterns and co-developing an automated detection model, terminating 100,000+ abusive YouTube channels within the first quarter.<br>Led vendor teams in task allocation, code review, and delivery of analytics products to stakeholders.' },
    ],
    mortar: [
      { title: 'Feb 2023 — Feb 2025', img: 'assets/images/mortar_big.png', meta: 'Google Search - Trust and Safety', desc: 'Led multiple data analytics projects end-to-end, from drafting BRD/PRDs to delivering dashboards, ETL pipelines, and automated solutions aligned with stakeholder requirements.<br>Designed and launched the Brighter Enforcement dashboard, enabling leadership and product/policy teams to track enforcement metrics and take data-driven actions.<br>Partnered with leadership to define requirements for T&S SAGe dashboards, identifying non-compliant launches and improving global resource allocation.<br>Defined requirements for a Gemini-powered tool that streamlined daily operations and eliminated 60% manual work, aligning AI/ML solutions to business needs.<br>Led three vendor teams in task allocation, code review, and delivery of analytics products to stakeholders.' },
    ],
 	air_defense: [
      { title: 'Freelancing', img: 'assets/images/mortar_big.png', meta: 'Automation', desc: 'Developed prediction models to improve search intent resolution in the Apple TV app, handling misspelled queries and ranking results by likely intent (e.g., prioritizing Apple-owned content).<br>Integrated open-source speech-to-text models into a live client tool, enabling automated transcription and improving accessibility.<br>Automated manual workflows for an organization, reducing turnaround time and improving scalability.' },
    ],

    wall: [
      { title: 'Apr 2022 — June 2022', img: 'assets/images/wall_big.png', meta: 'Automation', desc: 'Contributed to frontend development using web technologies (Angular, JavaScript, HTML/CSS), enhancing user-facing product features.<br>Built predictive analytics model for ticket volume forecasting, improving staffing efficiency and reducing SLA breaches.<br>Automated routine processes in Python, saving ~1 FTE hour per week across the team.' },
    ]
  };

  function renderDefense(key){
    if (!defDetails) return;
    const list = defData[key] || [];
    defDetails.innerHTML = '';
    if (!list.length){
      defDetails.innerHTML = '<div style="padding:14px;color:#444">No details configured for this defense yet.</div>';
      return;
    }
    list.forEach(item=>{
      const el = document.createElement('div');
      el.className = 'defense-item';
      el.innerHTML = `
        <div class="def-icon"><img src="${item.img}" alt="${item.title}"></div>
        <div class="def-info">
          <div class="def-title">${item.title}</div>
          <div class="def-meta">${item.meta}</div>
          <div class="def-desc">${item.desc}</div>
        </div>
      `;
      defDetails.appendChild(el);
    });
  }

  function openDefModalFor(key){
    if (!defModal) return;
    defModal.style.display = 'flex';
    defModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    // set active tab
    defTabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-def') === key));
    renderDefense(key);
  }

  function closeDefModal(){
    if (!defModal) return;
    defModal.style.display = 'none';
    defModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  // attach clicks to icons
  defBtns.forEach(btn=>{
    const key = btn.getAttribute('data-def');
    safeAdd(btn,'click', ()=> openDefModalFor(key));
    safeAdd(btn,'keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDefModalFor(key); } });
  });

  // tabs inside modal
  defTabs.forEach(tab=>{
    safeAdd(tab,'click', function(){
      const key = tab.getAttribute('data-def');
      defTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderDefense(key);
    });
  });

  safeAdd(closeDefBtn,'click', closeDefModal);
  safeAdd(defModal,'click', function(e){ if (e.target === defModal) closeDefModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (defModal && defModal.style.display === 'flex') closeDefModal(); } });

})();






// ---------------- Achievements Modal ----------------
(function(){
  const achBtn = q('achievements-button');
  const achModal = q('achievements-modal');
  const closeAchBtn = q('close-achievements-btn');

  function openAchModal(){
    if (!achModal) return;
    achModal.style.display = 'flex';
    achModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }
  function closeAchModal(){
    if (!achModal) return;
    achModal.style.display = 'none';
    achModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  safeAdd(achBtn,'click', openAchModal);
  safeAdd(closeAchBtn,'click', closeAchModal);
  safeAdd(achModal,'click', function(e){ if (e.target === achModal) closeAchModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape'){ if (achModal && achModal.style.display === 'flex') closeAchModal(); }});
})();

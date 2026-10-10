// ========================================================
// Teacher Portfolio Web Application - Main Logic
// Islamic University, Kushtia, Bangladesh
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let teacherData = loadTeacherData();
  let currentSkillFilter = "all";
  let currentPubFilter = "all";
  let currentPubSearch = "";

  // Elements cache
  const navMenu = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu");
  const backToTopBtn = document.querySelector("#back-to-top");
  const toastContainer = document.querySelector("#toastContainer");

  // ========================================================
  // Initialize Application
  // ========================================================
  function init() {
    renderAll();
    setupNavigation();
    setupTypewriter();
    setupParticles();
    setupEventListeners();
    setupAdminControls();
  }

  function renderAll() {
    renderProfileInfo();
    renderSkills();
    renderEducation();
    renderExperiences();
    renderPublications();
    renderCVPreview();
    renderAdminLists();
  }

  // ========================================================
  // 1. Profile & Hero & About Render
  // ========================================================
  function renderProfileInfo() {
    const p = teacherData.profile;

    // Header logo
    const headerTitle = document.querySelector("#headerTeacherName");
    if (headerTitle) {
      headerTitle.innerHTML = `${p.shortName || p.name}`;
    }

    // Hero Section
    const heroName = document.querySelector("#heroName");
    if (heroName) {
      const parts = p.name.split(" ");
      const lastName = parts.slice(-2).join(" ");
      const firstName = parts.slice(0, -2).join(" ");
      heroName.innerHTML = `Hi There, I'm <br/><span>${p.name}</span>`;
    }

    const heroPhoto = document.querySelector("#heroTeacherPhoto");
    if (heroPhoto) heroPhoto.src = p.photo;

    const aboutPhoto = document.querySelector("#aboutTeacherPhoto");
    if (aboutPhoto) aboutPhoto.src = p.aboutPhoto || p.photo;

    // About Section
    const aboutTitle = document.querySelector("#aboutName");
    if (aboutTitle) aboutTitle.textContent = `I'm ${p.name}`;

    const aboutTag = document.querySelector("#aboutTag");
    if (aboutTag) aboutTag.textContent = `${p.title} – ${p.department}`;

    const aboutBio = document.querySelector("#aboutBio");
    if (aboutBio) {
      const paras = (p.bio || "").split("\n\n").filter(Boolean);
      if (paras.length > 1) {
        aboutBio.innerHTML = paras.map(para => `<p style="margin-bottom:1.4rem; line-height:1.75;">${escapeHtml(para)}</p>`).join("");
      } else {
        aboutBio.textContent = p.bio;
      }
    }

    const aboutEmail = document.querySelector("#aboutEmail");
    if (aboutEmail) {
      aboutEmail.textContent = p.email;
      if (aboutEmail.tagName === "A") aboutEmail.href = `mailto:${p.email}`;
    }

    const aboutPhone = document.querySelector("#aboutPhone");
    if (aboutPhone) aboutPhone.textContent = p.phone;

    const aboutFax = document.querySelector("#aboutFax");
    if (aboutFax) aboutFax.textContent = p.fax || "+88-071-74905";

    const aboutOffice = document.querySelector("#aboutOffice");
    if (aboutOffice) aboutOffice.textContent = p.office;

    const aboutAffiliation = document.querySelector("#aboutAffiliation");
    if (aboutAffiliation) aboutAffiliation.textContent = p.university;

    // Stats Counters
    if (p.stats) {
      const sExp = document.querySelector("#statExp");
      if (sExp) sExp.textContent = p.stats.experienceYears || "28+";

      const sPub = document.querySelector("#statPub");
      if (sPub) sPub.textContent = teacherData.publications ? `${teacherData.publications.length}+` : (p.stats.publicationsCount || "35+");

      const sCite = document.querySelector("#statCite");
      if (sCite) sCite.textContent = p.stats.booksCount || "02";

      const sThesis = document.querySelector("#statThesis");
      if (sThesis) sThesis.textContent = p.stats.conferencesCount || "12+";
    }

    // Contact Section
    const contactEmail = document.querySelector("#contactEmail");
    if (contactEmail) {
      contactEmail.textContent = p.email;
      contactEmail.href = `mailto:${p.email}`;
    }

    const contactPhone = document.querySelector("#contactPhone");
    if (contactPhone) {
      contactPhone.textContent = p.phone;
      contactPhone.href = `tel:${p.phone.replace(/[^0-9+]/g, "")}`;
    }

    const contactOffice = document.querySelector("#contactOffice");
    if (contactOffice) contactOffice.textContent = p.office;

    const contactHours = document.querySelector("#contactHours");
    if (contactHours) contactHours.textContent = p.officeHours || "Sun - Thu: 09:30 AM - 03:30 PM";

    // Footer Info
    const footerName = document.querySelector("#footerName");
    if (footerName) footerName.textContent = p.name;
    const footerDept = document.querySelector("#footerDept");
    if (footerDept) footerDept.textContent = `${p.department}, ${p.university}`;
  }

  // ========================================================
  // 2. Skills Render & Filtering
  // ========================================================
  function renderSkills() {
    const container = document.querySelector("#skillsContainer");
    if (!container) return;

    let filtered = teacherData.skills;
    if (currentSkillFilter !== "all") {
      filtered = teacherData.skills.filter(s => s.category === currentSkillFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; color: #cbd5e1;"></i>
          <p style="font-size: 1.5rem;">No skills found in this category.</p>
        </div>`;
      return;
    }

    container.innerHTML = filtered.map(skill => `
      <div class="skill-card category-${escapeHtml(skill.category)}">
        <div class="skill-header">
          <div class="skill-icon-wrap">
            <i class="${escapeHtml(skill.icon || 'fas fa-check-circle')}"></i>
          </div>
          <div class="skill-title-wrap">
            <h4>${escapeHtml(skill.name)}</h4>
            <span class="category-tag">${formatCategory(skill.category)}</span>
          </div>
        </div>
        <div class="skill-bar-wrapper">
          <div class="skill-bar-header">
            <span>Proficiency</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ========================================================
  // 3. Education Timeline Render
  // ========================================================
  function renderEducation() {
    const container = document.querySelector("#educationContainer");
    if (!container) return;

    container.innerHTML = teacherData.education.map(edu => `
      <div class="edu-item">
        <div class="edu-dot"></div>
        <div class="edu-card">
          <div class="edu-badge-row">
            <span class="edu-badge">${escapeHtml(edu.badge || 'Academic Degree')}</span>
            <span class="edu-year"><i class="far fa-calendar-alt"></i> ${escapeHtml(edu.year)}</span>
          </div>
          <h3>${escapeHtml(edu.degree)}</h3>
          <h4 class="institution"><i class="fas fa-university"></i> ${escapeHtml(edu.institution)}</h4>
          <p class="edu-desc">${escapeHtml(edu.details)}</p>
        </div>
      </div>
    `).join("");
  }

  // ========================================================
  // 4. Experience Render
  // ========================================================
  function renderExperiences() {
    const container = document.querySelector("#experienceContainer");
    if (!container) return;

    if (teacherData.experiences.length === 0) {
      container.innerHTML = `<p style="text-align:center; grid-column:1/-1;">No experience entries available.</p>`;
      return;
    }

    container.innerHTML = teacherData.experiences.map(exp => `
      <div class="exp-card">
        ${exp.highlight ? `<span class="exp-highlight-tag"><i class="fas fa-star"></i> ${escapeHtml(exp.highlight)}</span>` : ""}
        <h3>${escapeHtml(exp.role)}</h3>
        <h4 class="org-name"><i class="fas fa-building"></i> ${escapeHtml(exp.organization)}</h4>
        <div class="exp-period">
          <i class="far fa-clock"></i>
          <span>${escapeHtml(exp.period)}</span>
        </div>
        <p class="exp-desc">${escapeHtml(exp.description)}</p>
      </div>
    `).join("");
  }

  // ========================================================
  // 5. Publications Render & Filter/Search
  // ========================================================
  function renderPublications() {
    const container = document.querySelector("#publicationsContainer");
    const countBadge = document.querySelector("#publicationCountBadge");
    if (!container) return;

    let list = [...teacherData.publications];

    // Filter by Category
    if (currentPubFilter !== "all") {
      list = list.filter(p => p.category === currentPubFilter);
    }

    // Filter by Search Query
    if (currentPubSearch.trim() !== "") {
      const q = currentPubSearch.toLowerCase();
      list = list.filter(p =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.venue && p.venue.toLowerCase().includes(q)) ||
        (p.authors && p.authors.toLowerCase().includes(q)) ||
        (p.year && p.year.toString().includes(q))
      );
    }

    if (countBadge) {
      countBadge.textContent = `${list.length} Publications`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem; background: var(--bg-light); border-radius: 12px;">
          <i class="fas fa-search" style="font-size: 3.5rem; color: #94a3b8; margin-bottom: 1.2rem;"></i>
          <h4 style="font-size: 1.8rem; color: var(--navy-dark); margin-bottom: 0.5rem;">No publications found</h4>
          <p style="font-size: 1.4rem; color: var(--text-muted);">Try adjusting your search terms or filter selection.</p>
        </div>`;
      return;
    }

    // Sort by year descending
    list.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));

    container.innerHTML = list.map(pub => {
      // Highlight teacher name in authors list
      let authorsHtml = escapeHtml(pub.authors || "");
      const authorKeys = ["A K M Motinur Rahman", "Prof. Dr. A K M Motinur Rahman", "Motinur Rahman"];
      for (const key of authorKeys) {
        if (authorsHtml.includes(key)) {
          authorsHtml = authorsHtml.replace(key, `<span class="highlight-author">${key}</span>`);
          break;
        }
      }

      return `
        <div class="pub-card" data-pub-id="${pub.id}">
          <div class="pub-header-row">
            <span class="pub-badge-tag"><i class="fas fa-bookmark"></i> ${escapeHtml(pub.badge || formatPubCategory(pub.category))}</span>
            <span class="pub-year-badge"><i class="far fa-calendar-check"></i> ${pub.year}</span>
          </div>
          <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
          <div class="pub-authors"><i class="fas fa-user-edit" style="color:var(--purple-accent); margin-right:6px;"></i> ${authorsHtml}</div>
          <div class="pub-venue"><i class="fas fa-book-reader" style="color:var(--orange-accent); margin-right:6px;"></i> ${escapeHtml(pub.venue)}</div>
          ${pub.abstract ? `<p class="pub-abstract"><strong>Abstract:</strong> ${escapeHtml(pub.abstract)}</p>` : ""}
          <div class="pub-actions">
            ${pub.doi ? `
              <a href="${escapeHtml(pub.doi)}" target="_blank" rel="noopener noreferrer" class="pub-btn pub-btn-link">
                <i class="fas fa-external-link-alt"></i> Official Link / PDF
              </a>` : ""}
            <button type="button" class="pub-btn pub-btn-cite" onclick="copyBibtexCitation('${pub.id}')">
              <i class="fas fa-quote-right"></i> Copy Citation
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // ========================================================
  // 6. CV Generator & Preview Modal (Authentic Official CV)
  // ========================================================
  function renderCVPreview() {
    const cvBody = document.querySelector("#cvPaperContent");
    if (!cvBody) return;

    const p = teacherData.profile;
    cvBody.innerHTML = `
      <div class="cv-header-block">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem;">
          <div>
            <h1>${escapeHtml(p.name)}, Ph.D.</h1>
            <h3 style="color:var(--primary-color); font-weight:700;">${escapeHtml(p.title)}</h3>
            <p style="margin-top: 0.5rem; font-weight: 600; color:var(--navy-dark);">
              ${escapeHtml(p.department)}, ${escapeHtml(p.faculty)}<br/>
              ${escapeHtml(p.university)}
            </p>
            <p style="margin-top: 0.8rem; font-size: 1.3rem;">
              <i class="fas fa-envelope"></i> ${escapeHtml(p.email)} | 
              <i class="fas fa-phone"></i> ${escapeHtml(p.phone)} | 
              <i class="fas fa-fax"></i> Fax: ${escapeHtml(p.fax || '+088-071-74905')}
            </p>
          </div>
          <div style="text-align:right;">
            <a href="https://www.iu.ac.bd/public/images/teacher/7f89c7924538a027a7cecd6ab4d045fd.pdf" target="_blank" class="btn btn-secondary" style="padding:0.6rem 1.4rem; font-size:1.25rem;">
              <i class="fas fa-external-link-alt"></i> Islamic University Official PDF
            </a>
          </div>
        </div>
      </div>

      <h3 class="cv-section-title">Personal Information</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(28rem, 1fr)); gap:1rem; font-size:1.3rem; background:#f8fafc; padding:1.5rem; border-radius:8px; border:1px solid #e2e8f0;">
        <div><strong>Father's Name:</strong> Md. Habibur Rahman</div>
        <div><strong>Mother's Name:</strong> Momena Khatun</div>
        <div><strong>Date of Birth:</strong> 10 June 1970</div>
        <div><strong>Birth Place:</strong> Bogura, Bangladesh</div>
        <div><strong>Permanent Address:</strong> Khalishakandi, Mazira, Shajahanpur, Bogura</div>
        <div><strong>Nationality:</strong> Bangladeshi by birth</div>
        <div><strong>Religion:</strong> Islam (Sunni)</div>
        <div><strong>Blood Group:</strong> O+</div>
      </div>

      <h3 class="cv-section-title">Executive Biography</h3>
      <p style="font-size: 1.35rem; line-height: 1.7; color: #374151;">${escapeHtml(p.bio)}</p>

      <h3 class="cv-section-title">Academic Qualifications</h3>
      <div style="display:flex; flex-direction:column; gap:1.4rem;">
        ${teacherData.education.map(e => `
          <div>
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--navy-dark); font-size:1.4rem;">
              <span>${escapeHtml(e.degree)}</span>
              <span style="color:var(--orange-accent);">${escapeHtml(e.year)}</span>
            </div>
            <div style="color:var(--purple-accent); font-weight:600; font-size:1.3rem;">${escapeHtml(e.institution)}</div>
            <div style="color:#4b5563; font-size:1.25rem;">${escapeHtml(e.details)}</div>
          </div>
        `).join("")}
      </div>

      <h3 class="cv-section-title">Academic & Administrative Experiences</h3>
      <div style="display:flex; flex-direction:column; gap:1.4rem;">
        ${teacherData.experiences.map(exp => `
          <div>
            <div style="display:flex; justify-content:space-between; font-weight:700; color:var(--navy-dark); font-size:1.4rem;">
              <span>${escapeHtml(exp.role)}</span>
              <span style="color:var(--orange-accent);">${escapeHtml(exp.period)}</span>
            </div>
            <div style="color:var(--primary-color); font-weight:600; font-size:1.3rem;">${escapeHtml(exp.organization)}</div>
            <div style="color:#4b5563; font-size:1.25rem;">${escapeHtml(exp.description)}</div>
          </div>
        `).join("")}
      </div>

      <h3 class="cv-section-title">Authored Books & Publications (${teacherData.publications.length})</h3>
      <div style="display:flex; flex-direction:column; gap:1.2rem;">
        ${teacherData.publications.map((pub, idx) => `
          <div style="font-size:1.3rem; line-height:1.6; color:#1f2937;">
            <strong>[${idx + 1}]</strong> <span style="color:var(--purple-accent); font-weight:700;">[${formatPubCategory(pub.category)}]</span> 
            ${escapeHtml(pub.authors)}. "${escapeHtml(pub.title)}". <em>${escapeHtml(pub.venue)}</em>, ${pub.year}.
          </div>
        `).join("")}
      </div>

      <h3 class="cv-section-title">Teaching Courses & Academic Subjects</h3>
      <div style="font-size:1.3rem; line-height:1.8; color:#374151; background:#f8fafc; padding:1.5rem; border-radius:8px;">
        Government, Politics and Development; Election Commission; Political Theory and Organizations; Liberation War; Sustainable Development Goals (SDGs); Governance and Good Governance; Corruption, Administrative Accountability and Transparency; Central and Field Administration; Administrative Decentralization; Women Empowerment and Development; Local Government and Rural Development; Geo-politics and Security Issues; Organizational Theory and Behaviour; Climate Change; Military and Politics in Developing Countries; Comparative Politics; International Relations; NGOs and Development; Globalization; Dependency Theory; New Public Management.
      </div>

      <h3 class="cv-section-title">Professional Memberships & Leadership</h3>
      <div style="font-size:1.3rem; line-height:1.8; color:#374151;">
        <ul style="padding-left:2rem;">
          <li><strong>Elected President</strong>, Teachers' Association, Islamic University, Kushtia (2009)</li>
          <li><strong>Elected Vice-President</strong>, Federation of Bangladesh University Teachers' Association (2009)</li>
          <li><strong>Elected General Secretary</strong>, Teachers' Association, Islamic University, Kushtia (2005)</li>
          <li><strong>Elected Joint Secretary</strong>, Federation of Bangladesh University Teachers' Association (2005)</li>
          <li><strong>Member of Academic Council</strong>, Islamic University, Kushtia (2005 – Present)</li>
          <li><strong>Member of Academic Council</strong>, Khulna University, Khulna (2004 – 2006)</li>
          <li><strong>Member</strong>, Faculty of Social Sciences & Faculty of Law and Shariah, Islamic University</li>
          <li><strong>Life Member</strong>, Dhaka University Registered Graduate</li>
          <li><strong>Life Member</strong>, Shilpakala Academy, Kushtia</li>
        </ul>
      </div>
    `;
  }

  // ========================================================
  // 7. Admin Panel Setup, Authentication & Management Actions
  // ========================================================
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123", // Easily customizable password/PIN
    sessionKey: "iu_vc_admin_session_active"
  };

  function isAdminLoggedIn() {
    return sessionStorage.getItem(ADMIN_CREDENTIALS.sessionKey) === "true";
  }

  function setAdminLoggedIn(state) {
    if (state) {
      sessionStorage.setItem(ADMIN_CREDENTIALS.sessionKey, "true");
      document.body.classList.add("admin-authenticated");
    } else {
      sessionStorage.removeItem(ADMIN_CREDENTIALS.sessionKey);
      document.body.classList.remove("admin-authenticated");
    }
  }

  function openAdminModal() {
    if (!isAdminLoggedIn()) {
      openLoginModal();
      return;
    }
    const adminModal = document.querySelector("#adminModal");
    if (adminModal) {
      adminModal.classList.add("active");
      populateAdminFields();
    }
  }

  function closeAdminModal() {
    const adminModal = document.querySelector("#adminModal");
    if (adminModal) {
      adminModal.classList.remove("active");
    }
  }

  function openLoginModal() {
    const loginModal = document.querySelector("#adminLoginModal");
    const errorMsg = document.querySelector("#adminLoginErrorMsg");
    const form = document.querySelector("#adminLoginForm");
    if (errorMsg) errorMsg.style.display = "none";
    if (form) form.reset();
    if (loginModal) {
      loginModal.classList.add("active");
      setTimeout(() => {
        const userInput = document.querySelector("#adminUsernameInput");
        if (userInput) userInput.focus();
      }, 150);
    }
  }

  function closeLoginModal() {
    const loginModal = document.querySelector("#adminLoginModal");
    if (loginModal) {
      loginModal.classList.remove("active");
    }
  }

  function requestAdminAccess() {
    if (isAdminLoggedIn()) {
      openAdminModal();
    } else {
      openLoginModal();
    }
  }

  function handleLogout() {
    setAdminLoggedIn(false);
    closeAdminModal();
    closeLoginModal();
    showToast("Logged out of Admin Portal.", "info");
  }

  function setupAdminControls() {
    const adminModal = document.querySelector("#adminModal");
    const loginModal = document.querySelector("#adminLoginModal");
    const adminTrigger = document.querySelector("#openAdminBtn");
    const drawerManageTrigger = document.querySelector("#drawerManageBtn");
    const footerLockTrigger = document.querySelector("#footerSecretLockBtn");
    const heroAdminTrigger = document.querySelector("#heroAdminBtn");
    const closeAdminBtn = document.querySelector("#closeAdminModal");
    const closeLoginBtn = document.querySelector("#closeAdminLoginModal");
    const headerLogoutBtn = document.querySelector("#headerLogoutBtn");
    const drawerLogoutBtn = document.querySelector("#drawerLogoutBtn");
    const modalLogoutBtn = document.querySelector("#modalLogoutBtn");

    // Initialize authenticated UI state
    if (isAdminLoggedIn()) {
      document.body.classList.add("admin-authenticated");
    } else {
      document.body.classList.remove("admin-authenticated");
    }

    // Check for secret URL parameter (?admin or ?login)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("admin") || urlParams.has("login")) {
      setTimeout(() => {
        requestAdminAccess();
      }, 400);
    }

    // Open Admin / Login triggers
    if (adminTrigger) adminTrigger.addEventListener("click", requestAdminAccess);
    if (drawerManageTrigger) drawerManageTrigger.addEventListener("click", requestAdminAccess);
    if (footerLockTrigger) {
      footerLockTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        requestAdminAccess();
      });
    }
    if (heroAdminTrigger) heroAdminTrigger.addEventListener("click", requestAdminAccess);

    // Logout triggers
    if (headerLogoutBtn) headerLogoutBtn.addEventListener("click", handleLogout);
    if (drawerLogoutBtn) drawerLogoutBtn.addEventListener("click", handleLogout);
    if (modalLogoutBtn) modalLogoutBtn.addEventListener("click", handleLogout);

    // Close Modals
    if (closeAdminBtn) closeAdminBtn.addEventListener("click", closeAdminModal);
    if (closeLoginBtn) closeLoginBtn.addEventListener("click", closeLoginModal);

    // Close when clicking overlay backdrop
    if (adminModal) {
      adminModal.addEventListener("click", (e) => {
        if (e.target === adminModal) closeAdminModal();
      });
    }
    if (loginModal) {
      loginModal.addEventListener("click", (e) => {
        if (e.target === loginModal) closeLoginModal();
      });
    }

    // Login Form Submission
    const loginForm = document.querySelector("#adminLoginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameVal = document.querySelector("#adminUsernameInput")?.value.trim() || "";
        const passwordVal = document.querySelector("#adminPasswordInput")?.value.trim() || "";
        const errorBox = document.querySelector("#adminLoginErrorMsg");
        const errorText = document.querySelector("#adminLoginErrorText");

        if (
          usernameVal.toLowerCase() === ADMIN_CREDENTIALS.username.toLowerCase() &&
          passwordVal === ADMIN_CREDENTIALS.password
        ) {
          if (errorBox) errorBox.style.display = "none";
          setAdminLoggedIn(true);
          closeLoginModal();
          openAdminModal();
          showToast("Authentication successful! Welcome, Administrator.", "success");
        } else {
          if (errorBox) {
            errorBox.style.display = "flex";
            if (errorText) errorText.textContent = "Invalid username or password. Please try again.";
            errorBox.classList.remove("shake");
            void errorBox.offsetWidth;
            errorBox.classList.add("shake");
          }
          const pwdField = document.querySelector("#adminPasswordInput");
          if (pwdField) {
            pwdField.value = "";
            pwdField.focus();
          }
        }
      });
    }

    // Toggle Password Visibility
    const togglePwdBtn = document.querySelector("#togglePasswordVisibilityBtn");
    const pwdInput = document.querySelector("#adminPasswordInput");
    const pwdIcon = document.querySelector("#togglePasswordIcon");
    if (togglePwdBtn && pwdInput) {
      togglePwdBtn.addEventListener("click", () => {
        const isPassword = pwdInput.type === "password";
        pwdInput.type = isPassword ? "text" : "password";
        if (pwdIcon) {
          pwdIcon.className = isPassword ? "fas fa-eye-slash" : "fas fa-eye";
        }
      });
    }

    // Global Keyboard Shortcut: Alt+A or Ctrl+Shift+A
    window.addEventListener("keydown", (e) => {
      if (
        (e.altKey && (e.key === "a" || e.key === "A")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "a" || e.key === "A"))
      ) {
        e.preventDefault();
        requestAdminAccess();
      } else if (e.key === "Escape") {
        closeLoginModal();
        closeAdminModal();
      }
    });

    // Admin Tabs Switcher
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        btn.classList.add("active");
        const target = document.querySelector(`#${btn.dataset.tab}`);
        if (target) target.classList.add("active");
      });
    });

    // Photo Upload Handler (FileReader -> base64 Data URL)
    const photoFileInput = document.querySelector("#adminPhotoFile");
    const photoUrlInput = document.querySelector("#adminPhotoUrl");
    const applyUrlBtn = document.querySelector("#applyPhotoUrlBtn");
    const adminAvatarPreview = document.querySelector("#adminAvatarPreview");

    if (photoFileInput) {
      photoFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
          showToast("Please select a valid image file", "error");
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const base64Url = event.target.result;
          teacherData.profile.photo = base64Url;
          saveTeacherData(teacherData);
          if (adminAvatarPreview) adminAvatarPreview.src = base64Url;
          renderProfileInfo();
          renderCVPreview();
          showToast("Profile photo updated successfully!", "success");
        };
        reader.readAsDataURL(file);
      });
    }

    if (applyUrlBtn && photoUrlInput) {
      applyUrlBtn.addEventListener("click", () => {
        const url = photoUrlInput.value.trim();
        if (!url) {
          showToast("Please enter an image URL", "error");
          return;
        }
        teacherData.profile.photo = url;
        saveTeacherData(teacherData);
        if (adminAvatarPreview) adminAvatarPreview.src = url;
        renderProfileInfo();
        renderCVPreview();
        showToast("Profile photo updated from URL!", "success");
        photoUrlInput.value = "";
      });
    }

    // Profile Info Form Submit
    const profileForm = document.querySelector("#adminProfileForm");
    if (profileForm) {
      profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        teacherData.profile.name = document.querySelector("#adminProfName").value.trim();
        teacherData.profile.title = document.querySelector("#adminProfTitle").value.trim();
        teacherData.profile.department = document.querySelector("#adminProfDept").value.trim();
        teacherData.profile.university = document.querySelector("#adminProfUniv").value.trim();
        teacherData.profile.email = document.querySelector("#adminProfEmail").value.trim();
        teacherData.profile.phone = document.querySelector("#adminProfPhone").value.trim();
        teacherData.profile.office = document.querySelector("#adminProfOffice").value.trim();
        teacherData.profile.bio = document.querySelector("#adminProfBio").value.trim();

        saveTeacherData(teacherData);
        renderProfileInfo();
        renderCVPreview();
        showToast("Teacher Profile Details saved successfully!", "success");
      });
    }

    // Add Publication Form Submit
    const pubForm = document.querySelector("#adminAddPubForm");
    if (pubForm) {
      pubForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#newPubTitle").value.trim();
        const authors = document.querySelector("#newPubAuthors").value.trim();
        const venue = document.querySelector("#newPubVenue").value.trim();
        const year = parseInt(document.querySelector("#newPubYear").value) || new Date().getFullYear();
        const category = document.querySelector("#newPubCategory").value;
        const doi = document.querySelector("#newPubDoi").value.trim();
        const abstract = document.querySelector("#newPubAbstract").value.trim();

        if (!title || !venue) {
          showToast("Title and Venue/Journal are required", "error");
          return;
        }

        const newPub = {
          id: "pub_" + Date.now(),
          title,
          authors: authors || teacherData.profile.shortName,
          venue,
          year,
          category,
          doi,
          badge: formatPubCategory(category),
          abstract
        };

        teacherData.publications.unshift(newPub);
        saveTeacherData(teacherData);
        renderPublications();
        renderAdminLists();
        renderProfileInfo(); // Updates publication counter in stats
        renderCVPreview();
        pubForm.reset();
        showToast("New Publication added successfully!", "success");
      });
    }

    // Add Experience Form Submit
    const expForm = document.querySelector("#adminAddExpForm");
    if (expForm) {
      expForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const role = document.querySelector("#newExpRole").value.trim();
        const organization = document.querySelector("#newExpOrg").value.trim();
        const period = document.querySelector("#newExpPeriod").value.trim();
        const highlight = document.querySelector("#newExpHighlight").value.trim();
        const description = document.querySelector("#newExpDesc").value.trim();

        if (!role || !organization) {
          showToast("Role and Institution are required", "error");
          return;
        }

        const newExp = {
          id: "exp_" + Date.now(),
          role,
          organization,
          period: period || "Recent",
          highlight: highlight || "Academic Rank",
          description
        };

        teacherData.experiences.unshift(newExp);
        saveTeacherData(teacherData);
        renderExperiences();
        renderAdminLists();
        renderCVPreview();
        expForm.reset();
        showToast("New Experience added successfully!", "success");
      });
    }

    // Add Skill Form Submit
    const skillForm = document.querySelector("#adminAddSkillForm");
    if (skillForm) {
      skillForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#newSkillName").value.trim();
        const category = document.querySelector("#newSkillCategory").value;
        const level = parseInt(document.querySelector("#newSkillLevel").value) || 85;
        const icon = document.querySelector("#newSkillIcon").value.trim() || "fas fa-laptop-code";

        if (!name) {
          showToast("Skill Name is required", "error");
          return;
        }

        const newSkill = {
          id: "skill_" + Date.now(),
          name,
          category,
          level,
          icon
        };

        teacherData.skills.push(newSkill);
        saveTeacherData(teacherData);
        renderSkills();
        renderAdminLists();
        renderCVPreview();
        skillForm.reset();
        showToast("New Skill added successfully!", "success");
      });
    }

    // Reset All Data Button
    const resetBtn = document.querySelector("#adminResetDataBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to restore original default demo data? Any custom changes will be reset.")) {
          teacherData = resetTeacherData();
          renderAll();
          populateAdminFields();
          showToast("Restored original demo data successfully!", "success");
        }
      });
    }

    // Export JSON Backup
    const exportBtn = document.querySelector("#adminExportBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(teacherData, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `teacher_portfolio_backup_${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("Portfolio data exported as JSON!", "success");
      });
    }
  }

  function populateAdminFields() {
    const p = teacherData.profile;
    const preview = document.querySelector("#adminAvatarPreview");
    if (preview) preview.src = p.photo;

    const setVal = (id, val) => {
      const el = document.querySelector(id);
      if (el) el.value = val || "";
    };

    setVal("#adminProfName", p.name);
    setVal("#adminProfTitle", p.title);
    setVal("#adminProfDept", p.department);
    setVal("#adminProfUniv", p.university);
    setVal("#adminProfEmail", p.email);
    setVal("#adminProfPhone", p.phone);
    setVal("#adminProfOffice", p.office);
    setVal("#adminProfBio", p.bio);
  }

  function renderAdminLists() {
    // 1. Publications Admin List
    const pubListContainer = document.querySelector("#adminPubList");
    if (pubListContainer) {
      if (teacherData.publications.length === 0) {
        pubListContainer.innerHTML = `<p style="color:var(--text-muted); font-size:1.3rem;">No publications listed yet.</p>`;
      } else {
        pubListContainer.innerHTML = teacherData.publications.map(pub => `
          <div class="admin-list-item">
            <div class="admin-list-item-content">
              <h5>${escapeHtml(pub.title)}</h5>
              <p>${escapeHtml(pub.venue)} (${pub.year}) • <span style="color:var(--purple-accent); font-weight:600;">${formatPubCategory(pub.category)}</span></p>
            </div>
            <button type="button" class="admin-del-btn" onclick="deletePublication('${pub.id}')">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        `).join("");
      }
    }

    // 2. Experience Admin List
    const expListContainer = document.querySelector("#adminExpList");
    if (expListContainer) {
      if (teacherData.experiences.length === 0) {
        expListContainer.innerHTML = `<p style="color:var(--text-muted); font-size:1.3rem;">No experience entries listed.</p>`;
      } else {
        expListContainer.innerHTML = teacherData.experiences.map(exp => `
          <div class="admin-list-item">
            <div class="admin-list-item-content">
              <h5>${escapeHtml(exp.role)}</h5>
              <p>${escapeHtml(exp.organization)} • <span style="color:var(--orange-accent); font-weight:600;">${escapeHtml(exp.period)}</span></p>
            </div>
            <button type="button" class="admin-del-btn" onclick="deleteExperience('${exp.id}')">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        `).join("");
      }
    }

    // 3. Skills Admin List
    const skillListContainer = document.querySelector("#adminSkillList");
    if (skillListContainer) {
      if (teacherData.skills.length === 0) {
        skillListContainer.innerHTML = `<p style="color:var(--text-muted); font-size:1.3rem;">No skills listed.</p>`;
      } else {
        skillListContainer.innerHTML = teacherData.skills.map(s => `
          <div class="admin-list-item">
            <div class="admin-list-item-content">
              <h5><i class="${escapeHtml(s.icon || 'fas fa-check')}"></i> ${escapeHtml(s.name)} (${s.level}%)</h5>
              <p>Category: <strong style="text-transform:uppercase; color:var(--primary-color);">${formatCategory(s.category)}</strong></p>
            </div>
            <button type="button" class="admin-del-btn" onclick="deleteSkill('${s.id}')">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </div>
        `).join("");
      }
    }
  }

  // Global Delete Handlers attached to window
  window.deletePublication = (id) => {
    if (confirm("Delete this publication?")) {
      teacherData.publications = teacherData.publications.filter(p => p.id !== id);
      saveTeacherData(teacherData);
      renderPublications();
      renderAdminLists();
      renderProfileInfo();
      renderCVPreview();
      showToast("Publication deleted", "success");
    }
  };

  window.deleteExperience = (id) => {
    if (confirm("Delete this experience entry?")) {
      teacherData.experiences = teacherData.experiences.filter(e => e.id !== id);
      saveTeacherData(teacherData);
      renderExperiences();
      renderAdminLists();
      renderCVPreview();
      showToast("Experience entry deleted", "success");
    }
  };

  window.deleteSkill = (id) => {
    if (confirm("Delete this skill?")) {
      teacherData.skills = teacherData.skills.filter(s => s.id !== id);
      saveTeacherData(teacherData);
      renderSkills();
      renderAdminLists();
      renderCVPreview();
      showToast("Skill deleted", "success");
    }
  };

  window.copyBibtexCitation = (id) => {
    const pub = teacherData.publications.find(p => p.id === id);
    if (!pub) return;
    const key = (pub.authors.split(",")[0] || "author").toLowerCase().replace(/[^a-z]/g, "") + (pub.year || "2024");
    const bibtex = `@article{${key},\n  title={${pub.title}},\n  author={${pub.authors}},\n  journal={${pub.venue}},\n  year={${pub.year}},\n  doi={${pub.doi || ""}}\n}`;
    navigator.clipboard.writeText(bibtex).then(() => {
      showToast("BibTeX citation copied to clipboard!", "success");
    }).catch(() => {
      showToast("Citation generated: " + pub.title, "success");
    });
  };

  // ========================================================
  // 8. Event Listeners & UI Controls
  // ========================================================
  function setupEventListeners() {
    // Skills filter buttons
    const skillFilters = document.querySelectorAll(".skills-filter .filter-btn");
    skillFilters.forEach(btn => {
      btn.addEventListener("click", () => {
        skillFilters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentSkillFilter = btn.dataset.filter;
        renderSkills();
      });
    });

    // Publication category pills
    const pubPills = document.querySelectorAll(".pub-filter-pills .pub-pill");
    pubPills.forEach(pill => {
      pill.addEventListener("click", () => {
        pubPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentPubFilter = pill.dataset.category;
        renderPublications();
      });
    });

    // Publication search input
    const pubSearchInput = document.querySelector("#pubSearchInput");
    if (pubSearchInput) {
      pubSearchInput.addEventListener("input", (e) => {
        currentPubSearch = e.target.value;
        renderPublications();
      });
    }

    // CV Modal Controls
    const cvModal = document.querySelector("#cvModal");
    const cvOpenBtns = document.querySelectorAll(".open-cv-btn");
    const cvCloseBtn = document.querySelector("#closeCvModal");
    const printCvBtn = document.querySelector("#printCvBtn");

    cvOpenBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        renderCVPreview();
        cvModal.classList.add("active");
      });
    });

    if (cvCloseBtn) {
      cvCloseBtn.addEventListener("click", () => {
        cvModal.classList.remove("active");
      });
    }

    if (printCvBtn) {
      printCvBtn.addEventListener("click", () => {
        window.print();
      });
    }

    if (cvModal) {
      cvModal.addEventListener("click", (e) => {
        if (e.target === cvModal) cvModal.classList.remove("active");
      });
    }

    // Contact Form Submit Handler
    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending message...`;
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          contactForm.reset();
          showToast("Thank you! Your message has been sent to Professor Dr. M. F. Haque.", "success");
        }, 1200);
      });
    }
  }

  // ========================================================
  // 9. Navigation & Active Scroll Spying
  // ========================================================
  function setupNavigation() {
    if (menuBtn && navMenu) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("fa-times");
        navMenu.classList.toggle("nav-toggle");
      });
    }

    // Close menu on link click
    document.querySelectorAll(".navbar ul li a").forEach(link => {
      link.addEventListener("click", () => {
        if (menuBtn) menuBtn.classList.remove("fa-times");
        if (navMenu) navMenu.classList.remove("nav-toggle");
      });
    });

    // Scroll spy for active navbar link & back-to-top button
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";
      const scrollPos = window.pageYOffset + 180;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });

      // Back to top toggle
      if (backToTopBtn) {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // ========================================================
  // 10. Typewriter Animation (mizanurrahman.site vibe)
  // ========================================================
  function setupTypewriter() {
    const typeElement = document.querySelector(".typing-text");
    if (!typeElement) return;

    const words = teacherData.profile.typingTexts || [
      "Professor of Computer Science & Engineering",
      "AI & Islamic NLP Researcher",
      "Academic Mentor & Department Chairman",
      "Digital Islamic Heritage Informatics"
    ];

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 90;

    function type() {
      const currentWord = words[wordIdx];

      if (isDeleting) {
        typeElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        speed = 45;
      } else {
        typeElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        speed = 95;
      }

      if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        speed = 1800; // Pause at end of word
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    type();
  }

  // ========================================================
  // 11. Subtle Particles Canvas
  // ========================================================
  function setupParticles() {
    const canvas = document.querySelector("#particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 35;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5 ? "rgba(37, 99, 235," : "rgba(30, 58, 138,";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ========================================================
  // Helpers
  // ========================================================
  function showToast(message, type = "success") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-triangle";
    toast.innerHTML = `<i class="${icon}"></i> <span>${escapeHtml(message)}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-30px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function formatCategory(cat) {
    switch (cat) {
      case "academic": return "Governance & Administration";
      case "islamic": return "Islamic Economics & Zakat";
      case "tech": return "Policy, SDGs & E-Governance";
      case "ai": return "International Relations";
      default: return cat;
    }
  }

  function formatPubCategory(cat) {
    switch (cat) {
      case "book": return "Authored Book";
      case "journal": return "Journal Article";
      case "conference": return "International Conference";
      default: return "Research Publication";
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Start app
  init();
});

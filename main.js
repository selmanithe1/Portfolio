import { projects } from './projects.js';
import { profile } from './profile.js';

const projectNav = document.getElementById('project-nav');
const projectDisplay = document.getElementById('project-display');
const terminalBody = document.getElementById('terminal-output');

// Function to inject projects into the terminal
function initTerminal() {
    projectNav.innerHTML = '';
    
    // Add Home link
    const homeItem = document.createElement('div');
    homeItem.className = 'project-item active';
    homeItem.dataset.id = 'home';
    homeItem.innerHTML = `<span class="nav-prefix">[00]</span> PROFILE_DASHBOARD`;
    homeItem.onclick = () => selectProject('home');
    projectNav.appendChild(homeItem);

    projects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.dataset.id = project.id;
        item.innerHTML = `<span class="nav-prefix">[${(index + 1).toString().padStart(2, '0')}]</span> ${project.title}`;
        item.onclick = () => selectProject(project.id);
        projectNav.appendChild(item);
    });
}

// Function to handle project selection
function selectProject(id) {
    // Update terminal UI
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.toggle('active', item.dataset.id === id);
    });

    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    
    if (id === 'home') {
        commandLine.innerHTML = `
            <span class="prompt">guest@mechatronic:~$</span>
            <span class="command">whoami --profile</span>
        `;
        renderHome();
    } else {
        const project = projects.find(p => p.id === id);
        if (!project) return;
        commandLine.innerHTML = `
            <span class="prompt">guest@mechatronic:~$</span>
            <span class="command">mount ./${project.id} --view-document</span>
        `;
        renderProject(project);
    }

    terminalBody.insertBefore(commandLine, document.querySelector('.command-line.active'));
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Function to render the home/profile dashboard
function renderHome() {
    projectDisplay.innerHTML = `
        <div class="project-content home-dashboard">
            <div class="project-title-row">
                <div class="title-meta">
                    <span class="category-tag">SYSTEM_PROFILE</span>
                    <h2 class="glitch" data-text="${profile.name}">${profile.name}</h2>
                </div>
                <div class="id-badge">INGÉNIEUR MÉCATRONIQUE & IA</div>
            </div>

            <div class="profile-summary">
                <p>${profile.summary}</p>
            </div>

            <div class="dashboard-grid">
                <div class="dash-card education">
                    <h3>// FORMATION_ACADEMIQUE</h3>
                    ${profile.education.map(edu => `
                        <div class="dash-item">
                            <div class="dash-header">
                                <span class="dash-title">${edu.degree}</span>
                                <span class="dash-date">${edu.period}</span>
                            </div>
                            <div class="dash-sub">${edu.institution}</div>
                            <p class="dash-desc">${edu.details}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="dash-card experience">
                    <h3>// EXPÉRIENCE_PROFESSIONNELLE</h3>
                    ${profile.experience.map(exp => `
                        <div class="dash-item">
                            <div class="dash-header">
                                <span class="dash-title">${exp.role}</span>
                                <span class="dash-date">${exp.period}</span>
                            </div>
                            <div class="dash-sub">${exp.company}</div>
                            <p class="dash-desc">${exp.description}</p>
                            ${exp.tools ? `
                                <div class="dash-tools">
                                    ${exp.tools.map((tool, i) => `<span class="tool-tag color-${i % 5}">${tool}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>

                <div class="dash-card skills">
                    <h3>// MATRICE_DE_COMPÉTENCES</h3>
                    <div class="skills-grid">
                        ${profile.skills.map(s => `
                            <div class="skill-cat">
                                <h4>${s.category}</h4>
                                <div class="tech-stack">
                                    ${s.items.map(item => `<span class="tech-item">${item}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render project details with PDF viewer
function renderProject(project) {
    projectDisplay.innerHTML = `
        <div class="project-content project-page">
            <div class="project-title-row">
                <div class="title-meta">
                    <span class="category-tag">${project.category}</span>
                    <h2>${project.title}</h2>
                </div>
                <div class="action-btns">
                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="github-btn">[VIEW_ON_GITHUB]</a>` : ''}
                    <button class="export-btn" onclick="window.print()">[EXPORT_REPORT]</button>
                </div>
            </div>

            <div class="project-grid">
                <div class="left-col">
                    <div class="description-box">
                        <h3>TECHNICAL_SPECIFICATIONS</h3>
                        <p>${project.description}</p>
                        
                        <div class="tech-stack">
                            ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join('')}
                        </div>
                    </div>

                    <div class="media-gallery">
                        <h3>VISUAL_ASSETS</h3>
                        <div class="media-container">
                            ${project.media && project.media.length > 0 ? project.media.map(m => `
                                <div class="media-thumbnail ${m.type}" onclick="window.open('${m.path}', '_blank')">
                                    ${m.type === 'image' ? 
                                        `<img src="${m.path}" alt="${m.label}" onerror="this.src='https://placehold.co/400?text=IMAGE_ERROR'">` : 
                                        `<video src="${m.path}" muted loop onmouseover="this.play()" onmouseout="this.pause()"></video>`
                                    }
                                    <span class="media-label">${m.label}</span>
                                </div>
                            `).join('') : '<div class="no-media">// NO_VISUAL_DATA</div>'}
                        </div>
                    </div>

                    <div class="files-list">
                        <h3>MOUNTED_RESOURCES</h3>
                        ${project.files.map(f => `<div class="file-item">${f}</div>`).join('')}
                    </div>
                </div>

                <div class="right-col">
                    <div class="pdf-viewer-container">
                        ${project.primaryPdf ? 
                            `<iframe src="${project.primaryPdf}" class="pdf-iframe"></iframe>` : 
                            `<div class="no-pdf-placeholder">
                                <div class="schematic-empty"></div>
                                <p>// NO_PDF_DOCUMENT_LINKED_TO_THIS_PROJECT</p>
                            </div>`
                        }
                    </div>
                    
                    <div class="schematic-view">
                        <div class="schematic-header">REAL_TIME_NODE_STATUS</div>
                        <div class="node-info">
                            <span class="node-label">NODE:</span> <span class="node-value">${project.id.toUpperCase()}</span><br>
                            <span class="node-label">STATUS:</span> <span class="node-value green">OPERATIONAL</span><br>
                            <span class="node-label">ENCRYPTION:</span> <span class="node-value">SHA-256</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Add CSS enhancements
const style = document.createElement('style');
style.textContent = `
    .nav-prefix { opacity: 0.3; margin-right: 8px; font-family: var(--font-mono); }
    .project-page { animation: zoomIn 0.4s ease-out; }
    @keyframes zoomIn { from { opacity: 0; scale: 0.98; } to { opacity: 1; scale: 1; } }

    .node-info { font-family: var(--font-mono); font-size: 0.7rem; }
    .node-label { opacity: 0.4; }
    .node-value { color: var(--accent-color); }
    .node-value.green { color: #27c93f; text-shadow: 0 0 10px rgba(39, 201, 63, 0.3); }

    .export-btn {
        background: transparent;
        border: 1px solid var(--glass-border);
        color: var(--accent-color);
        padding: 5px 15px;
        font-family: var(--font-mono);
        font-size: 0.7rem;
        cursor: pointer;
        transition: var(--transition);
    }
    .export-btn:hover {
        background: var(--accent-color);
        color: var(--bg-color);
    }

    /* Print styles */
    @media print {
        .sidebar, .scanner-line, .noise, .export-btn { display: none !important; }
        .main-content { padding: 0 !important; }
        .project-grid { display: block !important; height: auto !important; }
        body { background: #fff !important; color: #000 !important; }
        .pdf-viewer-container { display: none !important; }
    }
`;
document.head.appendChild(style);

// Initialize
initTerminal();
// Select home by default
selectProject('home');

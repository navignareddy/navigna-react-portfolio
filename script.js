// script.js
// Cache DOM elements
const input = document.getElementById('commandInput');
const output = document.getElementById('output');
const typingIndicator = document.getElementById('typingIndicator');
const aiModal = document.getElementById('aiModal');
const aiChatBody = document.getElementById('aiChatBody');
const aiInput = document.getElementById('aiInput');
const terminalContainer = document.getElementById('terminalContainer');
const contentContainer = document.getElementById('contentContainer');
const startPage = document.getElementById('startPage');

// Structured portfolio database (data for AI responses)
const portfolioDatabase = {
  profile: {
    name: "Navingna Reddy Gangumalla",
    title: "Computer Science Student with Business Minor",
    university: "Arizona State University",
    graduation: "December 2026",
    gpa: 4.0,
    status: "Seeking internships and full-time opportunities",
    uniqueValue: "Perfect 4.0 GPA with extensive cloud and enterprise software experience",
    marketPosition: "Top performer with AWS certifications and real-world development experience"
  },
  technicalSkills: { /* … */ },
  projectPortfolio: { /* … */ },
  professionalExperience: { /* … */ },
  competitiveAnalysis: { /* … */ },
  careerStrategy: { /* … */ }
};

// Enhanced AI response function for Navingna's portfolio
function generateAdvancedAIResponse(query) {
  const q = query.toLowerCase();
  
  // Achievements & Awards
  if (q.includes('achievement') || q.includes('award') || q.includes('honor')) {
    return `
      <div class="ai-header">🏆 Navingna's Outstanding Achievements</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎓 Academic Excellence</div>
        <div class="ai-metric">Perfect 4.0 GPA</div>
        <div class="ai-metric">Dean's List (5 consecutive semesters)</div>
        <div class="ai-metric">$22,500+ in Scholarships</div>
        <br>Navingna maintains <span class="ai-highlight">perfect academic performance</span> while balancing multiple leadership roles and internships.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🥇 Hackathon Champion</div>
        <div class="ai-metric">OpenAI Challenge Winner</div>
        <div class="ai-metric">ASU AI Challenge Winner</div>
        <div class="ai-metric">PIA Hacks Winner</div>
        <br><span class="ai-highlight">Multiple-time hackathon winner</span> demonstrating exceptional problem-solving and rapid prototyping skills.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌟 Recognition & Awards</div>
        <div class="ai-metric">BAL PURASKAR Award (Rotary International)</div>
        <div class="ai-metric">Officer of the Year Award</div>
        <div class="ai-metric">Rotary Youth Leadership Award</div>
        <br>Recognized for <span class="ai-highlight">leadership excellence and community impact</span> at both local and international levels.
      </div>
    `;
  }
  
  // Technical Skills
  if (q.includes('technical') || q.includes('skill') || q.includes('programming') || q.includes('technology')) {
    return `
      <div class="ai-header">💻 Navingna's Technical Expertise</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🚀 Programming Languages</div>
        <div class="ai-metric">Python</div>
        <div class="ai-metric">Java</div>
        <div class="ai-metric">JavaScript/TypeScript</div>
        <div class="ai-metric">C++, C, C#, SQL</div>
        <br>Proficient in <span class="ai-highlight">multiple programming paradigms</span> with extensive experience in both systems and web programming.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">☁️ Cloud & DevOps</div>
        <div class="ai-metric">AWS Certified (Solutions Architect + Cloud Practitioner)</div>
        <div class="ai-metric">Google Cloud Platform</div>
        <div class="ai-metric">Docker & Jenkins</div>
        <br><span class="ai-highlight">AWS certified professional</span> with hands-on experience in scalable cloud architecture and DevOps practices.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌐 Full-Stack Development</div>
        <div class="ai-metric">MERN Stack (MongoDB, Express, React, Node)</div>
        <div class="ai-metric">React.js, Angular, Flutter</div>
        <div class="ai-metric">PostgreSQL, MySQL, DynamoDB</div>
        <br>Expert in <span class="ai-highlight">modern web technologies</span> with proven ability to build scalable, production-ready applications.
      </div>
    `;
  }

  // Projects
  if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
    return `
      <div class="ai-header">🚀 Navingna's Featured Projects</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🏆 AI Challenge: Ethical Policy Simulation Game</div>
        <div class="ai-metric">OpenAI Challenge Winner</div>
        <div class="ai-metric">200+ Active Users</div>
        <div class="ai-metric">React.js + GPT-3.5 + AWS</div>
        <br><span class="ai-highlight">Award-winning simulation game</span> using AI agents for refugee education policy decisions with 35% improvement in decision quality.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🏢 City of Phoenix Asset Management System</div>
        <div class="ai-metric">150+ Staff Users</div>
        <div class="ai-metric">40% Faster Processing</div>
        <div class="ai-metric">C# + SQL + Windows NT</div>
        <br>Enterprise-grade <span class="ai-highlight">desktop application</span> managing 200+ devices with automated workflows and email alerts.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🚴 Biking Paths Finder</div>
        <div class="ai-metric">30% Faster Route Calculation</div>
        <div class="ai-metric">50% Enhanced User Engagement</div>
        <div class="ai-metric">FastAPI + GraphQL + Google Maps</div>
        <br><span class="ai-highlight">Full-stack web application</span> with OAuth 2.0 authentication and real-time mapping integration.
      </div>
    `;
  }

  // Leadership
  if (q.includes('leadership') || q.includes('organization') || q.includes('management')) {
    return `
      <div class="ai-header">🏛️ Navingna's Leadership Journey</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎓 Student Government Leadership</div>
        <div class="ai-metric">Appropriations Chair</div>
        <div class="ai-metric">$2,000 per student funding decisions</div>
        <div class="ai-metric">Travel & Professional Development</div>
        <br><span class="ai-highlight">Financial leadership</span> overseeing grant applications and ensuring compliance with university regulations.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌍 Cultural & Community Leadership</div>
        <div class="ai-metric">CIC Treasurer & Secretary</div>
        <div class="ai-metric">Officer of the Year Award</div>
        <div class="ai-metric">International Community Coordination</div>
        <br>Leading <span class="ai-highlight">cultural exchange initiatives</span> and managing financial operations for international student communities.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">👨‍🏫 Teaching & Mentorship</div>
        <div class="ai-metric">Software Engineering TA (100+ students)</div>
        <div class="ai-metric">XR Pod Operator (7,000+ weekly users)</div>
        <div class="ai-metric">ASU 101 Section Leader</div>
        <br><span class="ai-highlight">Educational leadership</span> spanning traditional computer science instruction to cutting-edge VR/XR technologies.
      </div>
    `;
  }

  // Hackathon wins
  if (q.includes('hackathon') || q.includes('competition') || q.includes('win')) {
    return `
      <div class="ai-header">🥇 Navingna's Hackathon Victories</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🏆 Championship Track Record</div>
        <div class="ai-metric">OpenAI Challenge Champion</div>
        <div class="ai-metric">ASU AI Challenge Winner</div>
        <div class="ai-metric">PIA Hacks Victory</div>
        <br><span class="ai-highlight">Consistent winner</span> across multiple prestigious hackathon competitions, demonstrating exceptional problem-solving abilities.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🧠 Competition Strengths</div>
        <div class="ai-metric">AI/ML Integration</div>
        <div class="ai-metric">Rapid Prototyping</div>
        <div class="ai-metric">Team Leadership</div>
        <br>Excels in <span class="ai-highlight">high-pressure environments</span> where creativity, technical skill, and teamwork determine success.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💡 Innovation Focus</div>
        <div class="ai-metric">Ethical AI Applications</div>
        <div class="ai-metric">Educational Technology</div>
        <div class="ai-metric">Social Impact Solutions</div>
        <br>Consistently develops <span class="ai-highlight">socially conscious technology solutions</span> that address real-world challenges.
      </div>
    `;
  }

  // What makes him unique
  if (q.includes('unique') || q.includes('special') || q.includes('differentiator') || q.includes('stand out')) {
    return `
      <div class="ai-header">⭐ What Makes Navingna Unique</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎯 Rare Combination</div>
        <div class="ai-metric">Perfect 4.0 GPA Student</div>
        <div class="ai-metric">Multiple Hackathon Winner</div>
        <div class="ai-metric">AWS Certified Professional</div>
        <div class="ai-metric">XR/VR Technology Expert</div>
        <br><span class="ai-highlight">Exceptional academic performance</span> combined with real-world impact and cutting-edge technology expertise.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌍 Global Impact & Leadership</div>
        <div class="ai-metric">7,000+ weekly VR users served</div>
        <div class="ai-metric">International award recognition</div>
        <div class="ai-metric">Student government financial leadership</div>
        <br>Manages <span class="ai-highlight">large-scale operations</span> while maintaining international perspective and cultural sensitivity.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💡 Innovation Focus</div>
        <div class="ai-metric">Healthcare AI/ML Research</div>
        <div class="ai-metric">Educational Technology Development</div>
        <div class="ai-metric">Ethical Policy Simulation</div>
        <br>Dedicated to <span class="ai-highlight">socially impactful technology</span> that addresses real-world challenges in education and healthcare.
      </div>
    `;
  }

  // Career goals
  if (q.includes('career') || q.includes('goal') || q.includes('aspiration') || q.includes('future')) {
    return `
      <div class="ai-header">🎯 Navingna's Career Aspirations</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🚀 Primary Focus Areas</div>
        <div class="ai-metric">Software Engineering (SWE)</div>
        <div class="ai-metric">Data Analysis & Visualization</div>
        <div class="ai-metric">Full Stack Development</div>
        <div class="ai-metric">Cloud & DevOps Engineering</div>
        <br>Seeking roles that leverage his <span class="ai-highlight">full-stack expertise and cloud certifications</span> in dynamic, growth-oriented environments.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎓 Research Interests</div>
        <div class="ai-metric">AI/ML in Education</div>
        <div class="ai-metric">Public Policy Technology</div>
        <div class="ai-metric">XR/VR Educational Applications</div>
        <br>Passionate about <span class="ai-highlight">educational technology innovation</span> and AI applications for social good.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌟 Long-term Vision</div>
        <div class="ai-metric">Technology Leadership</div>
        <div class="ai-metric">Educational Innovation</div>
        <div class="ai-metric">Social Impact Solutions</div>
        <br>Aspires to lead <span class="ai-highlight">technology initiatives</span> that create meaningful impact in education and society.
      </div>
    `;
  }

  // Contact information
  if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone') || q.includes('connect')) {
    return `
      <div class="ai-header">📞 Get in Touch with Navingna</div>
      
      <div class="ai-section">
        <div class="ai-section-title">📧 Email</div>
        <div class="ai-metric">nganguma@asu.edu (Primary)</div>
        <div class="ai-metric">gnavignareddy@gmail.com (Personal)</div>
        <br>Best way to reach Navingna for <span class="ai-highlight">professional inquiries and opportunities</span>.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🌐 Professional Profiles</div>
        <div class="ai-metric">LinkedIn: linkedin.com/in/navignareddy</div>
        <div class="ai-metric">GitHub: github.com/navignareddy</div>
        <div class="ai-metric">Phone: (623) 283-7804</div>
        <br>Connect on <span class="ai-highlight">LinkedIn for professional networking</span> or check out his code repositories on GitHub.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">📍 Location & Availability</div>
        <div class="ai-metric">Based in Tempe, Arizona</div>
        <div class="ai-metric">Graduating December 2026</div>
        <div class="ai-metric">Open to internships and full-time opportunities</div>
        <br><span class="ai-highlight">Available for summer 2025 internships</span> and full-time positions starting December 2026.
      </div>
    `;
  }

  // company fit
  if (q.includes('google') || q.includes('microsoft') || q.includes('meta') || q.includes('amazon')) {
    const company = q.includes('google') ? 'Google' :
                    q.includes('microsoft') ? 'Microsoft' :
                    q.includes('meta') ? 'Meta' : 'Amazon';
    return `
      <div class="ai-header">🎯 ${company} Compatibility Analysis</div>
      
      <div class="ai-section">
        <div class="ai-section-title">📊 Technical Alignment Score: 90%</div>
        <div class="ai-metric">Python/JavaScript Expertise</div>
        <div class="ai-metric">AI/ML Production Experience</div>
        <div class="ai-metric">Cloud Infrastructure (AWS/GCP)</div>
        <div class="ai-metric">Microservices Architecture</div>
        <br>Strong match for ${company}'s technical requirements, especially <span class="ai-highlight">AI-focused roles</span>.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎨 Cultural Fit: 85%</div>
        <div class="ai-metric">Innovation Mindset</div>
        <div class="ai-metric">Collaborative Leadership</div>
        <div class="ai-metric">Research & Development Focus</div>
        <br>Academic research background + startup experience aligns with ${company}'s innovation culture.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💡 Recommended Positions</div>
        <ul class="ai-list">
          <li>Software Engineer - AI/ML Focus</li>
          <li>Associate Product Manager (APM)</li>
          <li>Technical Program Manager (New Grad)</li>
          <li>Research Engineer (if PhD track)</li>
        </ul>
        <br><span class="ai-highlight">Optimal Strategy:</span> Target AI/ML teams where technical+business combination creates maximum value.
      </div>
    `;
  }

  // project deep-dive
  if (q.includes('project') && (q.includes('analyze') || q.includes('best') || q.includes('highlight'))) {
    return `
      <div class="ai-header">🔍 Project Portfolio Deep Analysis</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🥇 Flagship Project: AI Code Review Tool</div>
        <div class="ai-metric">Advanced Complexity</div>
        <div class="ai-metric">High Business Impact</div>
        <div class="ai-metric">Cutting-edge Technology</div>
        <br><span class="ai-highlight">Why it's exceptional:</span> Demonstrates GPT-4 integration, achieves 85% accuracy, and has real user adoption (200+ developers).
      </div>

      <div class="ai-section">
        <div class="ai-section-title">📊 Technical Depth Assessment</div>
        <ul class="ai-list">
          <li><strong>AI Integration:</strong> Production-level OpenAI API implementation</li>
          <li><strong>System Design:</strong> Microservices with GitHub API integration</li>
          <li><strong>Data Management:</strong> PostgreSQL with performance optimization</li>
          <li><strong>User Experience:</strong> React frontend with real-time feedback</li>
        </ul>
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎯 Interview Positioning</div>
        Lead with <span class="ai-highlight">AI Code Review Tool</span> for technical roles - showcases:<br>
        • Modern AI/ML implementation skills<br>
        • Full-stack development capability<br>
        • Product thinking (solving real developer problems)<br>
        • Measurable impact and user validation
      </div>
    `;
  }

  // role recommendations
  if (q.includes('recommend') && q.includes('role')) {
    return `
      <div class="ai-header">🎯 Optimal Role Recommendations</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🥇 Perfect Fit Roles (95%+ Match)</div>
        <div class="ai-metric">AI/ML Engineer</div>
        <div class="ai-metric">Technical Product Manager</div>
        <div class="ai-metric">Full-Stack Engineer (AI Focus)</div>
        <br><span class="ai-highlight">Reasoning:</span> Technical depth + business acumen + proven AI implementation experience.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🥈 Strong Fit Roles (85%+ Match)</div>
        <div class="ai-metric">Software Engineer</div>
        <div class="ai-metric">Technical Program Manager</div>
        <div class="ai-metric">Solutions Engineer</div>
        <br>Leadership experience and technical breadth make these highly viable options.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎪 Growth Opportunity Roles (75%+ Match)</div>
        <div class="ai-metric">Product Manager</div>
        <div class="ai-metric">Business Development (Technical)</div>
        <div class="ai-metric">Startup Co-founder</div>
        <br><span class="ai-highlight">Strategic Advice:</span> Target AI-focused companies where the technical+business combination creates maximum competitive advantage.
      </div>
    `;
  }

  // peer comparison
  if (q.includes('compare') && (q.includes('peer') || q.includes('student') || q.includes('candidate'))) {
    return `
      <div class="ai-header">📊 Competitive Peer Analysis</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎓 vs. Typical CS Students</div>
        <div class="ai-metric">Business Minor (Rare)</div>
        <div class="ai-metric">Production AI Experience</div>
        <div class="ai-metric">Revenue Generation Proof</div>
        <br><span class="ai-highlight">Market Position:</span> Top 15% due to business+technical combination.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💼 vs. Business Students</div>
        <div class="ai-metric">Deep Technical Implementation</div>
        <div class="ai-metric">AI/ML Expertise</div>
        <div class="ai-metric">Production Code Experience</div>
        <br>Technical depth far exceeds typical business students - can actually build products.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🏆 Unique Differentiators</div>
        <ul class="ai-list">
          <li>Published research + practical implementation</li>
          <li>Leadership experience at scale (200+ members)</li>
          <li>Entrepreneurial validation ($25K+ revenue)</li>
          <li>Academic excellence (3.8 GPA, Dean's List)</li>
        </ul>
        <br><span class="ai-highlight">Positioning:</span> "Technical leader with business acumen and proven delivery capability."
      </div>
    `;
  }

  // startup fit
  if (q.includes('startup') || q.includes('entrepreneurship')) {
    return `
      <div class="ai-header">🚀 Startup Ecosystem Fit Analysis</div>
      
      <div class="ai-section">
        <div class="ai-section-title">💡 Entrepreneurial Validation</div>
        <div class="ai-metric">$25K+ Self-Generated Revenue</div>
        <div class="ai-metric">15+ Client Projects Delivered</div>
        <div class="ai-metric">End-to-End Business Operations</div>
        <br><span class="ai-highlight">Proven ability</span> to identify market needs, deliver solutions, and generate revenue.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🛠️ Technical Generalist Profile</div>
        <div class="ai-metric">Full-Stack Development</div>
        <div class="ai-metric">AI/ML Implementation</div>
        <div class="ai-metric">Cloud Infrastructure</div>
        <div class="ai-metric">Product Development</div>
        <br>Ideal for early-stage startups needing <span class="ai-highlight">technical versatility</span>.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎯 Optimal Startup Types</div>
        <ul class="ai-list">
          <li>AI/ML startups (technical expertise + business insight)</li>
          <li>B2B SaaS (developer tools, productivity software)</li>
          <li>Fintech (combining ML with financial domain knowledge)</li>
          <li>EdTech (university experience + technical skills)</li>
        </ul>
      </div>
    `;
  }

  // help or default
  if (q.includes('help') || q.includes('hello') || q.includes('hi')) {
    return `
      <div class="ai-header">🧠 Advanced AI Analysis Capabilities</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🔍 Available Analysis Types</div>
        <ul class="ai-list">
          <li><strong>Strengths Analysis:</strong> "ai strengths" or "ai unique value"</li>
          <li><strong>Company Fit:</strong> "ai fit for [company]"</li>
          <li><strong>Role Matching:</strong> "ai recommend roles"</li>
          <li><strong>Project Deep-Dive:</strong> "ai analyze projects"</li>
          <li><strong>Peer Comparison:</strong> "ai compare peers"</li>
          <li><strong>Startup Analysis:</strong> "ai startup fit"</li>
        </ul>
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💡 Sample Advanced Queries</div>
        <div class="ai-metric">"ai analyze readiness for senior engineer role"</div>
        <div class="ai-metric">"ai what's navingna's competitive advantage"</div>
        <div class="ai-metric">"ai best projects to highlight for [company]"</div>
        <br>I provide <span class="ai-highlight">strategic insights with specific metrics</span> based on comprehensive portfolio analysis.
      </div>
    `;
  }

  // fallback suggestions
  return `
    <div class="ai-header">🤖 Ready for Advanced Analysis</div>
    
    <div class="ai-section">
      <div class="ai-section-title">💡 Try These Sophisticated Queries</div>
      <ul class="ai-list">
        <li>"ai analyze navingna's readiness for [specific role]"</li>
        <li>"ai what's navingna's competitive advantage"</li>
        <li>"ai best projects to highlight for [company]"</li>
        <li>"ai compare navingna to typical product manager candidates"</li>
        <li>"ai startup founder potential assessment"</li>
      </ul>
      <br>I can provide <span class="ai-highlight">detailed strategic analysis</span> with specific metrics and recommendations.
    </div>
  `;
}

// CLI commands
const commands = {
  help: () => {
    return `🤖 Advanced AI Portfolio System Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 Navigation:
   start              → Open resume
   ls                 → List sections  
   cd [section]       → Navigate to section
   
🤖 AI Intelligence:
   ai analyze         → Technical analysis
   ai strengths       → Core advantages  
   ai fit for [co]    → Company compatibility
   ai recommend       → Role suggestions
   
🛠️ Utilities:
   clear, whoami, pwd, date
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
  },
  start: () => { showResume(); return '🚀 Opening professional resume...'; },
  ls: () => {
    return `📂 Portfolio Sections:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 about/      Personal & professional summary
🎓 education/  Academic achievements & certifications
🛠️ skills/     Technical expertise matrix
💻 projects/   Featured development projects
💼 experience/ Professional work history
🏛️ leadership/ Organizations & leadership roles
📞 contact/    Availability & contact info

🤖 AI Commands: ai [query] for intelligent analysis`;
  },
  'cd about': () => { showSection('about'); return '📖 Loading personal profile...'; },
  'cd education': () => { showSection('education'); return '🎓 Academic excellence overview...'; },
  'cd skills': () => { showSection('skills'); return '🛠️ Technical skill matrix...'; },
  'cd projects': () => { showSection('projects'); return '💻 AI project portfolio...'; },
  'cd experience': () => { showSection('experience'); return '💼 Professional timeline...'; },
  'cd leadership': () => { showSection('leadership'); return '🏛️ Leadership & organizations...'; },
  'cd contact': () => { showSection('contact'); return '📞 Contact information...'; },
  clear: () => { output.innerHTML = ''; return ''; },
  whoami: () => `👨‍💻 Navingna Reddy Gangumalla | CS+Business | Cloud Expert
🎓 4.0 GPA | AWS Certified | Teaching Assistant
💼 Enterprise Software | Asset Management | Real-time Systems
🎯 Seeking: Software Engineering, Cloud Architecture roles`,
  pwd: () => '📍 /portfolio/ai-enhanced-system',
  date: () => `🕐 ${new Date().toString()}`,
  echo: (args) => args.join(' ')
};

// Helper to add to terminal output
function addToOutput(command, result, isError = false, isAI = false) {
  const commandLine = document.createElement('div');
  commandLine.className = 'terminal-line';
  commandLine.innerHTML = `
    <span class="prompt">~$</span>
    <span class="command">${command}</span>
  `;
  output.appendChild(commandLine);

  if (result) {
    const resultLine = document.createElement('div');
    resultLine.className = 'terminal-line';
    if (isAI) {
      resultLine.innerHTML = `<div class="ai-response">${result}</div>`;
    } else {
      resultLine.innerHTML = `<span class="output ${isError ? 'error' : ''}">${result}</span>`;
    }
    output.appendChild(resultLine);
  }

  output.scrollTop = output.scrollHeight;
}

// Show/hide typing indicator
function showTyping() { typingIndicator.classList.add('show'); }
function hideTyping() { typingIndicator.classList.remove('show'); }

// Section & resume toggles
function showSection(sectionId) {
  document.getElementById('resume').classList.remove('active');
  terminalContainer.classList.add('split');
  contentContainer.classList.add('active');
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}
function showResume() {
  closeContent();
  document.getElementById('resume').classList.add('active');
}
function closeContent() {
  terminalContainer.classList.remove('split');
  contentContainer.classList.remove('active');
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
}
function closeResume() {
  document.getElementById('resume').classList.remove('active');
}

// Process CLI commands
function processCommand(commandText) {
  const parts = commandText.trim().split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'ai') {
    if (!args.length) {
      return { result: generateAdvancedAIResponse('help'), isAI: true };
    }
    if (args[0] === 'chat') {
      openAIChat();
      return { result: '🤖 Opening AI chat interface...', isAI: false };
    }
    showTyping();
    setTimeout(() => {
      hideTyping();
      const aiRes = generateAdvancedAIResponse(args.join(' '));
      addToOutput(commandText, aiRes, false, true);
    }, 2500);
    return { result: '', isAI: false };
  }

  if (cmd === 'cd' && args.length) {
    const full = `cd ${args[0]}`;
    if (commands[full]) return { result: commands[full](), isAI: false };
    return { result: `❌ Directory '${args[0]}' not found. Type 'ls' to see available sections.`, isAI: false };
  }

  if (cmd === 'echo') return { result: commands.echo(args), isAI: false };
  if (commands[cmd]) return { result: commands[cmd](), isAI: false };

  return { result: `❌ Command '${cmd}' not found. Type 'help' for available commands.`, isAI: false };
}

// Execute command from input
function executeCommand(commandText) {
  input.value = commandText;
  const { result, isAI } = processCommand(commandText);
  if (result) addToOutput(commandText, result, result.includes('❌'), isAI);
  input.value = '';
  input.focus();
}

// Function to handle AI topic button clicks
function askAI(question) {
  // Add user message to chat
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-message user';
  userMsg.textContent = question;
  aiChatBody.appendChild(userMsg);
  
  // Add AI response
  setTimeout(() => {
    const aiRes = generateAdvancedAIResponse(question);
    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-message ai';
    aiMsg.innerHTML = aiRes;
    aiChatBody.appendChild(aiMsg);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }, 1000);
  
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}

// Input event
input.addEventListener('keypress', e => {
  if (e.key === 'Enter' && input.value.trim()) {
    executeCommand(input.value.trim());
  }
});

// AI Chat modal
function openAIChat() {
  aiModal.classList.add('show');
  aiInput.focus();
}
function closeAIChat() {
  aiModal.classList.remove('show');
  input.focus();
}
function sendAIMessage() {
  const message = aiInput.value.trim();
  if (!message) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-message user';
  userMsg.textContent = message;
  aiChatBody.appendChild(userMsg);
  aiInput.value = '';
  setTimeout(() => {
    const aiRes = generateAdvancedAIResponse(message);
    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-message ai';
    aiMsg.innerHTML = aiRes;
    aiChatBody.appendChild(aiMsg);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }, 1500);
  aiChatBody.scrollTop = aiChatBody.scrollHeight;
}
aiInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendAIMessage();
});

// Click outside to close AI Chat
document.addEventListener('click', e => {
  if (!aiModal.classList.contains('show')) input.focus();
});
aiModal.addEventListener('click', e => {
  if (e.target === aiModal) closeAIChat();
});

// This init message is now handled by the start page functionality

// Traditional portfolio toggles & download
function openTraditionalPortfolio() {
  document.getElementById('traditionalPortfolio').classList.add('active');
  document.getElementById('swipeIndicator').classList.add('hidden');
}
function closeTraditionalPortfolio() {
  document.getElementById('traditionalPortfolio').classList.remove('active');
  document.getElementById('swipeIndicator').classList.remove('hidden');
}
function downloadResume() {
  // Link to the actual resume PDF
  window.open('https://docs.google.com/document/d/1dPYONY_o3NWheQMsZnYy4uwJZHJ_ktWs/edit?usp=sharing&ouid=113037602875858214346&rtpof=true&sd=true', '_blank');
}

// Swipe & wheel gestures
let startY = 0, startTime = 0;
document.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
  startTime = Date.now();
}, { passive: true });
document.addEventListener('touchend', e => {
  const endY = e.changedTouches[0].clientY;
  const endTime = Date.now();
  const deltaY = endY - startY;
  const deltaT = endTime - startTime;
  if (deltaY > 100 && deltaT < 500 && !document.getElementById('traditionalPortfolio').classList.contains('active')) {
    openTraditionalPortfolio();
  } else if (deltaY < -100 && deltaT < 500 && document.getElementById('traditionalPortfolio').classList.contains('active')) {
    closeTraditionalPortfolio();
  }
}, { passive: true });

let wheelDelta = 0;
document.addEventListener('wheel', e => {
  wheelDelta += e.deltaY;
  clearTimeout(window.wheelTimeout);
  window.wheelTimeout = setTimeout(() => {
    if (wheelDelta > 300 && !document.getElementById('traditionalPortfolio').classList.contains('active')) {
      openTraditionalPortfolio();
    } else if (wheelDelta < -300 && document.getElementById('traditionalPortfolio').classList.contains('active')) {
      closeTraditionalPortfolio();
    }
    wheelDelta = 0;
  }, 100);
}, { passive: true });

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('traditionalPortfolio').classList.contains('active')) {
    closeTraditionalPortfolio();
  } else if (e.key === 'ArrowDown' && !document.getElementById('traditionalPortfolio').classList.contains('active')) {
    openTraditionalPortfolio();
  } else if (e.key === 'ArrowUp' && document.getElementById('traditionalPortfolio').classList.contains('active')) {
    closeTraditionalPortfolio();
  }
});

// Auto-hide swipe indicator and add click functionality
setTimeout(() => {
  const ind = document.getElementById('swipeIndicator');
  if (ind) ind.style.opacity = '0.7';
}, 5000);

const swipeIndicator = document.getElementById('swipeIndicator');
if (swipeIndicator) {
  swipeIndicator.addEventListener('mouseenter', function() {
    this.style.opacity = '1';
  });
  swipeIndicator.addEventListener('mouseleave', function() {
    this.style.opacity = '0.7';
  });
  swipeIndicator.addEventListener('click', function() {
    openTraditionalPortfolio();
  });
}

// Start Page Functionality
function enterPortfolio() {
  startPage.classList.add('hidden');
  setTimeout(() => {
    startPage.style.display = 'none';
input.focus();
    // Add welcome message to terminal
    setTimeout(() => {
      addToOutput('', 'Welcome to Navingna\'s Interactive Portfolio! Type "help" to get started or try the quick options above.');
    }, 500);
  }, 1000);
}

// Start page event listeners
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !startPage.classList.contains('hidden')) {
    enterPortfolio();
  }
});

startPage.addEventListener('click', (e) => {
  if (!startPage.classList.contains('hidden')) {
    enterPortfolio();
  }
});

// Initial setup - hide main content until start page is dismissed
document.querySelector('.header').style.display = 'none';
document.querySelector('.main-container').style.display = 'none';

// Show main content after start page
function showMainContent() {
  document.querySelector('.header').style.display = 'flex';
  document.querySelector('.main-container').style.display = 'flex';
}

// Override the enter portfolio function to show main content
const originalEnterPortfolio = enterPortfolio;
enterPortfolio = function() {
  showMainContent();
  originalEnterPortfolio();
};

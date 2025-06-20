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
    name: "Navigna Reddy Gangumalla",
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

// Enhanced AI response function for Navigna's portfolio
function generateAdvancedAIResponse(query) {
  const q = query.toLowerCase();
  
  // Greetings and basic conversational responses
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q === '' || q.includes('greeting')) {
    const greetings = [
      `
        <div class="ai-header">👋 Hello! I'm Navigna's AI Assistant</div>
        
        <div class="ai-section">
          <div class="ai-section-title">🤖 What I Can Help You With</div>
          <div class="ai-metric">Ask about her technical skills and projects</div>
          <div class="ai-metric">Learn about her achievements and awards</div>
          <div class="ai-metric">Discover her leadership experience</div>
          <div class="ai-metric">Get contact information</div>
          <br>I'm trained specifically on <span class="ai-highlight">Navigna's portfolio data</span> and can provide detailed insights about her background and expertise.
        </div>

        <div class="ai-section">
          <div class="ai-section-title">💬 Try Asking Me</div>
          <ul class="ai-list">
            <li>"What programming languages does Navigna know?"</li>
            <li>"Tell me about her hackathon wins"</li>
            <li>"What makes her unique as a candidate?"</li>
            <li>"How can I contact her?"</li>
          </ul>
        </div>
      `,
      `
        <div class="ai-header">🎯 Welcome! Ready to Learn About Navigna?</div>
        
        <div class="ai-section">
          <div class="ai-section-title">⭐ Quick Highlights</div>
          <div class="ai-metric">Perfect 4.0 GPA CS Student</div>
          <div class="ai-metric">AWS Certified Professional</div>
          <div class="ai-metric">Multiple Hackathon Winner</div>
          <div class="ai-metric">Teaching 100+ Students</div>
          <br>She's a <span class="ai-highlight">Computer Science student at ASU</span> with exceptional academic performance and real-world experience.
        </div>

        <div class="ai-section">
          <div class="ai-section-title">🔍 What Would You Like to Know?</div>
          <p>I can tell you about her technical projects, leadership roles, academic achievements, or anything else from her portfolio. Just ask naturally!</p>
        </div>
      `
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Thank you responses
  if (q.includes('thank') || q.includes('thanks') || q.includes('appreciate')) {
    return `
      <div class="ai-header">😊 You're Very Welcome!</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🤝 Let's Keep the Conversation Going</div>
        <p>I'm here to help you learn more about Navigna's background, skills, and experience. Feel free to ask me anything else!</p>
        <br><span class="ai-highlight">Popular questions:</span> "What are her best projects?" or "Tell me about her leadership experience"
      </div>
    `;
  }

  // Who/what/where questions
  if (q.includes('who is navigna') || q.includes('who is she') || q.includes('tell me about navigna') || q.includes('tell me about her')) {
    return `
      <div class="ai-header">👩‍💻 Meet Navigna Reddy Gangumalla</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎓 Academic Excellence</div>
        <div class="ai-metric">Computer Science Major at Arizona State University</div>
        <div class="ai-metric">Perfect 4.0 GPA with Business Minor</div>
        <div class="ai-metric">Expected Graduation: December 2026</div>
        <br>She's maintaining <span class="ai-highlight">perfect academic performance</span> while actively involved in multiple leadership roles and real-world projects.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💡 What Makes Her Special</div>
        <div class="ai-metric">Multiple-time Hackathon Winner</div>
        <div class="ai-metric">AWS Certified Solutions Architect</div>
        <div class="ai-metric">Teaching Assistant for 100+ students</div>
        <div class="ai-metric">Student Government Appropriations Chair</div>
        <br>She combines <span class="ai-highlight">technical expertise with leadership skills</span> and real-world impact.
      </div>
    `;
  }

  // Programming/coding questions
  if (q.includes('programming') || q.includes('coding') || q.includes('languages') || q.includes('code')) {
    return `
      <div class="ai-header">💻 Navigna's Programming Expertise</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🚀 Primary Languages</div>
        <div class="ai-metric">Python (Advanced)</div>
        <div class="ai-metric">Java (Advanced)</div>
        <div class="ai-metric">JavaScript/TypeScript (Advanced)</div>
        <div class="ai-metric">C++, C, C#, SQL (Proficient)</div>
        <br>She has <span class="ai-highlight">production experience</span> in multiple programming paradigms and has built scalable applications.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🛠️ Frameworks & Technologies</div>
        <div class="ai-metric">MERN Stack (MongoDB, Express, React, Node)</div>
        <div class="ai-metric">React.js, Angular, Flutter</div>
        <div class="ai-metric">AWS Cloud Services</div>
        <div class="ai-metric">Docker, Jenkins, PostgreSQL</div>
        <br>She's particularly strong in <span class="ai-highlight">full-stack development and cloud technologies</span>.
      </div>
    `;
  }

  // Nice/compliment responses
  if (q.includes('nice') || q.includes('cool') || q.includes('impressive') || q.includes('amazing') || q.includes('great')) {
    return `
      <div class="ai-header">😊 I'm Glad You're Impressed!</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🌟 She Really Is Exceptional</div>
        <p>Navigna has worked incredibly hard to achieve this level of excellence. Her combination of technical skills, academic performance, and leadership experience is quite rare among students.</p>
        <br><span class="ai-highlight">Want to know more?</span> Ask me about her specific projects or achievements!
      </div>
    `;
  }

  // Education/school questions
  if (q.includes('education') || q.includes('school') || q.includes('university') || q.includes('college') || q.includes('gpa') || q.includes('degree')) {
    return `
      <div class="ai-header">🎓 Navigna's Academic Excellence</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🏫 Arizona State University</div>
        <div class="ai-metric">Bachelor of Science - Computer Science</div>
        <div class="ai-metric">Minor in Business</div>
        <div class="ai-metric">Perfect 4.0 GPA</div>
        <div class="ai-metric">Expected Graduation: December 2026</div>
        <br>She's maintained <span class="ai-highlight">perfect academic performance</span> across all semesters while taking on challenging leadership roles.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🏆 Academic Recognition</div>
        <div class="ai-metric">Dean's List (5 consecutive semesters)</div>
        <div class="ai-metric">$22,500+ in Merit Scholarships</div>
        <div class="ai-metric">New American University Scholarship</div>
        <div class="ai-metric">Garmin Scholarship Fund Recipient</div>
        <br>Her <span class="ai-highlight">exceptional academic record</span> speaks to her dedication and intellectual capability.
      </div>
    `;
  }

  // Experience/work questions
  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('internship') || q.includes('teaching')) {
    return `
      <div class="ai-header">💼 Navigna's Professional Experience</div>
      
      <div class="ai-section">
        <div class="ai-section-title">👩‍🏫 Current Teaching Role</div>
        <div class="ai-metric">Teaching Assistant - Software Engineering</div>
        <div class="ai-metric">Arizona State University | May 2025 - Present</div>
        <div class="ai-metric">Managing 100+ students</div>
        <br>She delivers lectures, creates assignments, and provides <span class="ai-highlight">personalized code reviews</span> while managing Ed Discussion with 200+ threads.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🎮 XR Technology Leadership</div>
        <div class="ai-metric">XR Pod Operator</div>
        <div class="ai-metric">Serving 7,000+ weekly users</div>
        <div class="ai-metric">Managing VR/AR experiences</div>
        <br>She oversees <span class="ai-highlight">cutting-edge technology operations</span> and helps students explore immersive learning environments.
      </div>
    `;
  }

  // Best/top questions
  if (q.includes('best') || q.includes('top') || q.includes('most impressive') || q.includes('strongest')) {
    return `
      <div class="ai-header">⭐ Navigna's Top Accomplishments</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🥇 Most Impressive Achievement</div>
        <div class="ai-metric">Multiple Hackathon Winner</div>
        <div class="ai-metric">OpenAI Challenge Champion</div>
        <div class="ai-metric">ASU AI Challenge Winner</div>
        <br>Her <span class="ai-highlight">consistent hackathon victories</span> demonstrate exceptional problem-solving under pressure and innovative thinking.
      </div>

      <div class="ai-section">
        <div class="ai-section-title">💻 Best Technical Project</div>
        <div class="ai-metric">Ethical Policy Simulation Game</div>
        <div class="ai-metric">200+ Active Users</div>
        <div class="ai-metric">35% Decision Quality Improvement</div>
        <br>This <span class="ai-highlight">award-winning project</span> combines AI, education, and social impact - showcasing her ability to create meaningful technology solutions.
      </div>
    `;
  }

  // Confused/unclear responses
  if (q.includes('confused') || q.includes('unclear') || q.includes("don't understand") || q.includes('explain')) {
    return `
      <div class="ai-header">🤔 Let Me Help Clarify!</div>
      
      <div class="ai-section">
        <div class="ai-section-title">💡 I'm Here to Help</div>
        <p>No worries! I can explain anything about Navigna in more detail. Try asking specific questions like:</p>
        <ul class="ai-list">
          <li>"What projects has she worked on?"</li>
          <li>"What are her technical skills?"</li>
          <li>"Tell me about her achievements"</li>
          <li>"What leadership roles has she held?"</li>
        </ul>
        <br><span class="ai-highlight">Feel free to ask naturally</span> - I understand conversational language!
      </div>
    `;
  }

  // Achievements & Awards
  if (q.includes('achievement') || q.includes('award') || q.includes('honor')) {
    return `
      <div class="ai-header">🏆 Navigna's Outstanding Achievements</div>
      
      <div class="ai-section">
        <div class="ai-section-title">🎓 Academic Excellence</div>
        <div class="ai-metric">Perfect 4.0 GPA</div>
        <div class="ai-metric">Dean's List (5 consecutive semesters)</div>
        <div class="ai-metric">$22,500+ in Scholarships</div>
        <br>Navigna maintains <span class="ai-highlight">perfect academic performance</span> while balancing multiple leadership roles and internships.
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
      <div class="ai-header">💻 Navigna's Technical Expertise</div>
      
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
      <div class="ai-header">🚀 Navigna's Featured Projects</div>
      
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
      <div class="ai-header">🏛️ Navigna's Leadership Journey</div>
      
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
      <div class="ai-header">🥇 Navigna's Hackathon Victories</div>
      
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
      <div class="ai-header">⭐ What Makes Navigna Unique</div>
      
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
      <div class="ai-header">🎯 Navigna's Career Aspirations</div>
      
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
      <div class="ai-header">📞 Get in Touch with Navigna</div>
      
      <div class="ai-section">
        <div class="ai-section-title">📧 Email</div>
        <div class="ai-metric">nganguma@asu.edu (Primary)</div>
        <div class="ai-metric">gnavignareddy@gmail.com (Personal)</div>
        <br>Best way to reach Navigna for <span class="ai-highlight">professional inquiries and opportunities</span>.
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

  // Help requests
  if (q.includes('help') || q.includes('what can you do') || q.includes('how do you work')) {
    return `
      <div class="ai-header">🧠 I'm Your Personal Navigna Expert!</div>
      
      <div class="ai-section">
        <div class="ai-section-title">💬 Natural Conversation</div>
        <p>You can talk to me naturally! I understand questions like:</p>
        <ul class="ai-list">
          <li>"Tell me about her projects"</li>
          <li>"What programming languages does she know?"</li>
                      <li>"How can I contact Navigna?"</li>
          <li>"What makes her unique?"</li>
        </ul>
      </div>

      <div class="ai-section">
        <div class="ai-section-title">🔍 Advanced Analysis (for recruiters)</div>
        <ul class="ai-list">
          <li><strong>Company Fit:</strong> "How would she fit at Google?"</li>
          <li><strong>Role Matching:</strong> "What roles would be perfect for her?"</li>
          <li><strong>Competitive Analysis:</strong> "How does she compare to other candidates?"</li>
          <li><strong>Startup Potential:</strong> "Would she be good for a startup?"</li>
        </ul>
        <br><span class="ai-highlight">I provide detailed insights</span> based on her complete portfolio.
      </div>
    `;
  }

  // Smart fallback with context awareness
  if (q.includes('navigna') || q.includes('she') || q.includes('her')) {
    return `
      <div class="ai-header">🤔 I'd Love to Help, But Need More Details</div>
      
      <div class="ai-section">
        <div class="ai-section-title">💡 Could You Be More Specific?</div>
        <p>I can tell you about many aspects of Navigna's background. Try asking about:</p>
        <ul class="ai-list">
          <li><strong>Technical Skills:</strong> "What programming languages does she know?"</li>
          <li><strong>Projects:</strong> "Tell me about her best projects"</li>
          <li><strong>Achievements:</strong> "What awards has she won?"</li>
          <li><strong>Leadership:</strong> "What leadership roles has she held?"</li>
          <li><strong>Contact:</strong> "How can I reach her?"</li>
        </ul>
        <br><span class="ai-highlight">Feel free to ask naturally</span> - I understand conversational language!
      </div>
    `;
  }

  // Generic fallback for unclear queries
  return `
          <div class="ai-header">🤖 I'm Here to Help You Learn About Navigna!</div>
    
    <div class="ai-section">
      <div class="ai-section-title">💭 Not Sure What You're Looking For?</div>
              <p>I can help you discover everything about Navigna Reddy Gangumalla. Here are some popular questions:</p>
        <ul class="ai-list">
          <li>"Who is Navigna?" - Get a complete overview</li>
        <li>"What are her technical skills?" - Programming & technologies</li>
        <li>"Tell me about her projects" - Real-world applications she's built</li>
        <li>"What achievements has she earned?" - Awards and recognition</li>
        <li>"How can I contact her?" - Get in touch information</li>
      </ul>
      <br><span class="ai-highlight">Just ask naturally</span> - I'm designed to understand conversational questions!
    </div>
  `;
}

// CLI commands
const commands = {
  help: () => {
    return `🤖 Advanced AI Portfolio System Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 Navigation:
   start              → Download resume PDF
   ls                 → List sections  
   cd [section]       → Navigate to section
   
🤖 AI Intelligence:
   ai analyze         → Technical analysis
   ai strengths       → Core advantages  
   ai fit for [co]    → Company compatibility
   ai recommend       → Role suggestions
   
🛠️ Utilities:
   portfolio          → Traditional portfolio view
   clear, whoami, pwd, date
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
  },
  start: () => { downloadResume(); return '📄 Downloading resume PDF...'; },
  portfolio: () => { openTraditionalPortfolio(); return '📄 Opening traditional portfolio view...'; },
  chat: () => { openAIChat(); return '🤖 Opening AI chatbot interface...'; },
  ls: () => {
    return `📂 Portfolio Sections:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📖 about/         Personal & professional summary
🎓 education/     Academic achievements & certifications
🛠️ skills/        Technical expertise matrix
💻 projects/      Featured development projects
💼 experience/    Professional work history
🏛️ leadership/    Organizations & leadership roles
🏢 organizations/ Detailed organizational involvement
📞 contact/       Availability & contact info

🤖 AI Commands: ai [query] for intelligent analysis`;
  },
  'cd about': () => { showSection('about'); return '📖 Loading personal profile...'; },
  'cd education': () => { showSection('education'); return '🎓 Academic excellence overview...'; },
  'cd skills': () => { showSection('skills'); return '🛠️ Technical skill matrix...'; },
  'cd projects': () => { showSection('projects'); return '💻 AI project portfolio...'; },
  'cd experience': () => { showSection('experience'); return '💼 Professional timeline...'; },
  'cd leadership': () => { showSection('leadership'); return '🏛️ Leadership & organizations...'; },
  'cd organizations': () => { showSection('organizations'); return '🏢 Organizational involvement...'; },
  'cd contact': () => { showSection('contact'); return '📞 Contact information...'; },
      clear: () => { 
      // Only clear dynamic terminal output, preserve welcome message and static elements
      const outputLines = output.querySelectorAll('.terminal-line');
      outputLines.forEach(line => line.remove());
      return 'Terminal output cleared (static elements preserved)'; 
    },
      whoami: () => `👨‍💻 Navigna Reddy Gangumalla | CS+Business | Cloud Expert
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
  
  // Show mobile back button if on mobile
  showMobileBackButton();
}
function showResume() {
  closeContent();
  document.getElementById('resume').classList.add('active');
}
function closeContent() {
  terminalContainer.classList.remove('split');
  contentContainer.classList.remove('active');
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  
  // Hide mobile back button
  if (window.mobileBackButton && window.innerWidth <= 768) {
    window.mobileBackButton.style.display = 'none';
  }
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
      return { result: '🤖 Opening AI chatbot interface...', isAI: false };
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
  
  // Show mobile back button if on mobile
  showMobileBackButton();
  
  // Hide the helper bubble when chatbot is opened
  const helper = document.getElementById('chatbotHelper');
  if (helper) {
    helper.classList.add('hidden');
  }
}
function closeAIChat() {
  aiModal.classList.remove('show');
  input.focus();
  
  // Hide mobile back button
  if (window.mobileBackButton && window.innerWidth <= 768) {
    window.mobileBackButton.style.display = 'none';
  }
}

function closeChatbotHelper() {
  document.getElementById('chatbotHelper').classList.add('hidden');
}

// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  const toggleThumb = document.getElementById('toggleThumb');
  const isLightMode = body.classList.contains('light-mode');
  
  // Add a little bounce effect
  toggleThumb.style.transform = isLightMode ? 'scale(0.9)' : 'translateX(30px) scale(0.9)';
  
  setTimeout(() => {
    if (isLightMode) {
      // Switch to dark mode
      body.classList.remove('light-mode');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to light mode
      body.classList.add('light-mode');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
    
    // Reset transform
    toggleThumb.style.transform = '';
  }, 100);
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('themeIcon');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.textContent = '☀️';
  } else {
    themeIcon.textContent = '🌙';
  }

  // Initialize mobile optimizations
  initializeMobileOptimizations();
});

// Mobile-specific optimizations
function initializeMobileOptimizations() {
  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    document.body.classList.add('mobile-device');
    
    // Add mobile back button for content sections
    addMobileBackButton();
    
    // Optimize viewport for iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      document.body.classList.add('ios-device');
    }

    // Add touch event listeners for better mobile interaction
    const touchElements = document.querySelectorAll('.quick-option, .example-command, .portfolio-card, .content-card');
    touchElements.forEach(element => {
      element.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(0.98)';
      }, { passive: true });
      
      element.addEventListener('touchend', function() {
        this.style.opacity = '';
        this.style.transform = '';
      }, { passive: true });
      
      element.addEventListener('touchcancel', function() {
        this.style.opacity = '';
        this.style.transform = '';
      }, { passive: true });
    });

    // Optimize scrolling for mobile
    const scrollElements = document.querySelectorAll('.terminal-output, .content-wrapper, .portfolio-content, .ai-chat-body');
    scrollElements.forEach(element => {
      if (element) {
        element.style.webkitOverflowScrolling = 'touch';
        element.style.scrollBehavior = 'smooth';
      }
    });

    // Handle orientation changes
    let orientationChangeTimeout;
    window.addEventListener('orientationchange', function() {
      clearTimeout(orientationChangeTimeout);
      orientationChangeTimeout = setTimeout(() => {
        // Force viewport meta tag refresh
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
          const content = viewport.getAttribute('content');
          viewport.setAttribute('content', content);
        }
        
        // Trigger layout recalculation
        window.dispatchEvent(new Event('resize'));
      }, 500);
    });

    // Prevent iOS zoom on input focus
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        input.setAttribute('data-original-size', input.style.fontSize || '');
        input.style.fontSize = '16px';
      });
      
      input.addEventListener('blur', function() {
        const originalSize = input.getAttribute('data-original-size');
        if (originalSize) {
          input.style.fontSize = originalSize;
        }
      });
    });

    // Improve button touch targets
    const buttons = document.querySelectorAll('button, .quick-option, .example-command, .resume-btn');
    buttons.forEach(button => {
      const currentStyle = window.getComputedStyle(button);
      const currentHeight = parseInt(currentStyle.height);
      
      if (currentHeight < 44) {
        button.style.minHeight = '44px';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
      }
    });

    // Optimize AI modal for mobile
    const aiModal = document.getElementById('aiModal');
    if (aiModal) {
      aiModal.addEventListener('touchmove', function(e) {
        // Prevent background scrolling when modal is open
        if (this.classList.contains('show')) {
          e.preventDefault();
        }
      }, { passive: false });
    }

    // Add haptic feedback for iOS (if supported)
    if (window.navigator && window.navigator.vibrate) {
      const feedbackElements = document.querySelectorAll('.quick-option, .example-command, button');
      feedbackElements.forEach(element => {
        element.addEventListener('touchstart', function() {
          navigator.vibrate(10); // Very light haptic feedback
        }, { passive: true });
      });
    }
  }

  // Handle keyboard visibility on mobile
  let viewport = document.querySelector('meta[name=viewport]');
  let isKeyboardOpen = false;
  
  window.addEventListener('resize', function() {
    if (window.innerHeight < window.screen.height * 0.75) {
      // Keyboard is likely open
      if (!isKeyboardOpen) {
        isKeyboardOpen = true;
        document.body.classList.add('keyboard-open');
      }
    } else {
      // Keyboard is likely closed
      if (isKeyboardOpen) {
        isKeyboardOpen = false;
        document.body.classList.remove('keyboard-open');
      }
    }
  });
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
// These functions are now defined below with enhanced functionality
function downloadResume() {
  // Use the web-friendly filename without spaces
  window.open('Navigna_Reddy_CV.pdf', '_blank');
}

// Portfolio access is now purely click-based
// Touch and wheel gestures removed for cleaner UX

// Essential keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('traditionalPortfolio').classList.contains('active')) {
    closeTraditionalPortfolio();
  }
});

// Initialize portfolio access button visibility
document.addEventListener('DOMContentLoaded', () => {
  updatePortfolioButtonVisibility();
});

// Start Page Functionality
function enterPortfolio() {
  startPage.classList.add('hidden');
  setTimeout(() => {
    startPage.style.display = 'none';
input.focus();
    // Add welcome message to terminal
    setTimeout(() => {
      addToOutput('', 'Welcome to Navigna\'s Interactive Portfolio! Type "help" to get started or try the quick options above.');
    }, 500);
  }, 1000);
}

function explorePortfolio() {
  startPage.classList.add('hidden');
  setTimeout(() => {
    startPage.style.display = 'none';
    showMainContent();
    input.focus();
    // Add welcome message to terminal
    setTimeout(() => {
      addToOutput('', 'Welcome to Navigna\'s Interactive Portfolio! Type "help" to get started or try the quick options above.');
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

// Enhanced Traditional Portfolio JavaScript Functions

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll('[data-animate="counter"] .stat-number');
  
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const increment = target / 100; // Animate over 100 steps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        if (target === 4.0) {
          counter.textContent = current.toFixed(1);
        } else {
          counter.textContent = Math.floor(current);
        }
        requestAnimationFrame(updateCounter);
      } else {
        if (target === 4.0) {
          counter.textContent = '4.0';
        } else if (target >= 1000) {
          counter.textContent = Math.floor(target).toLocaleString() + '+';
        } else {
          counter.textContent = Math.floor(target);
        }
      }
    };
    
    // Start animation after a short delay
    setTimeout(updateCounter, 500);
  });
}

// Progress Bar Animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
      bar.style.setProperty('--target-width', width);
      bar.style.width = width;
    }, 1000);
  });
}

// Enhanced Portfolio Functions
function openTraditionalPortfolio() {
  const portfolio = document.getElementById('traditionalPortfolio');
  if (portfolio) {
    portfolio.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Hide the portfolio access button
    hidePortfolioButton();
    
    // Show mobile back button if on mobile
    showMobileBackButton();
    
    // Trigger animations after portfolio opens
    setTimeout(() => {
      animateCounters();
      animateProgressBars();
      animateOnScroll();
    }, 300);
  }
}

function closeTraditionalPortfolio() {
  const portfolio = document.getElementById('traditionalPortfolio');
  if (portfolio) {
    portfolio.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Hide mobile back button
    if (window.mobileBackButton && window.innerWidth <= 768) {
      window.mobileBackButton.style.display = 'none';
    }
    
    // Show the portfolio access button again
    showPortfolioButton();
  }
}

// Scroll-triggered animations for portfolio sections
function animateOnScroll() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all portfolio sections
  const sections = document.querySelectorAll('.portfolio-section, .skill-category, .portfolio-card, .timeline-item');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
  });
}

// Enhanced skill category hover effects
function initializeSkillInteractions() {
  const skillCategories = document.querySelectorAll('.skill-category');
  
  skillCategories.forEach(category => {
    category.addEventListener('mouseenter', () => {
      const progressBar = category.querySelector('.progress-fill');
      if (progressBar) {
        progressBar.style.transform = 'scaleX(1.05)';
      }
    });
    
    category.addEventListener('mouseleave', () => {
      const progressBar = category.querySelector('.progress-fill');
      if (progressBar) {
        progressBar.style.transform = 'scaleX(1)';
      }
    });
  });
}

// Initialize enhanced portfolio features
document.addEventListener('DOMContentLoaded', () => {
  initializeSkillInteractions();
  
  // Add smooth scrolling for traditional portfolio
  const traditionalPortfolio = document.getElementById('traditionalPortfolio');
  if (traditionalPortfolio) {
    traditionalPortfolio.style.scrollBehavior = 'smooth';
  }
});

// Portfolio Access Button Functionality
function showPortfolioButton() {
  const portfolioBtn = document.getElementById('portfolioAccessBtn');
  if (portfolioBtn) {
    portfolioBtn.style.display = 'flex';
    portfolioBtn.classList.remove('hidden');
  }
}

function hidePortfolioButton() {
  const portfolioBtn = document.getElementById('portfolioAccessBtn');
  if (portfolioBtn) {
    portfolioBtn.classList.add('hidden');
  }
}

// Show/hide portfolio button based on portfolio state
function updatePortfolioButtonVisibility() {
  const traditionalPortfolio = document.getElementById('traditionalPortfolio');
  
  if (traditionalPortfolio?.classList.contains('active')) {
    hidePortfolioButton();
  } else {
    showPortfolioButton();
  }
}

// Keyboard navigation for traditional portfolio
document.addEventListener('keydown', (e) => {
  const traditionalPortfolio = document.getElementById('traditionalPortfolio');
  
  if (e.key === 'Escape' && traditionalPortfolio?.classList.contains('active')) {
    closeTraditionalPortfolio();
  }
  
  // Keep Ctrl+Up arrow as alternative access method
  if (e.key === 'ArrowUp' && e.ctrlKey && !traditionalPortfolio?.classList.contains('active')) {
    e.preventDefault();
    openTraditionalPortfolio();
  }
});

// Enhanced contact card interactions
function initializeContactInteractions() {
  const contactCards = document.querySelectorAll('.contact-card');
  
  contactCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Initialize all enhanced interactions
window.addEventListener('load', () => {
  initializeContactInteractions();
});

// Certificate Modal Functions
function openCertModal(imageSrc, imageAlt) {
  // Prevent the parent anchor link from being triggered
  event.preventDefault();
  event.stopPropagation();
  
  const modal = document.getElementById('certModal');
  const modalImage = document.getElementById('certModalImage');
  const modalCaption = document.getElementById('certModalCaption');
  
  if (modal && modalImage && modalCaption) {
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalCaption.textContent = imageAlt + ' - Certificate';
    modal.classList.add('show');
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  
  if (modal) {
    modal.classList.remove('show');
    
    // Restore body scrolling
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('certModal');
  
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeCertModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeCertModal();
    }
  });
});

// Add mobile back button for better navigation
function addMobileBackButton() {
  // Only add on mobile devices
  if (window.innerWidth > 768) return;
  
  // Create mobile back button
  const backButton = document.createElement('div');
  backButton.className = 'mobile-back-button';
  backButton.innerHTML = '← Back to Terminal';
  backButton.style.cssText = `
    position: fixed;
    top: 20px;
    left: 20px;
    background: #1e40af;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    z-index: 2000;
    cursor: pointer;
    display: none;
    border: none;
    box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
    transition: all 0.3s ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  `;
  
  backButton.addEventListener('click', () => {
    closeAllMobileContent();
  });
  
  // Add touch feedback
  backButton.addEventListener('touchstart', () => {
    backButton.style.transform = 'scale(0.95)';
  });
  
  backButton.addEventListener('touchend', () => {
    backButton.style.transform = 'scale(1)';
  });
  
  document.body.appendChild(backButton);
  
  // Store reference globally
  window.mobileBackButton = backButton;
}

// Close all mobile content and return to terminal
function closeAllMobileContent() {
  // Hide back button
  if (window.mobileBackButton) {
    window.mobileBackButton.style.display = 'none';
  }
  
  // Close traditional portfolio
  const traditionalPortfolio = document.getElementById('traditionalPortfolio');
  if (traditionalPortfolio && traditionalPortfolio.classList.contains('active')) {
    closeTraditionalPortfolio();
  }
  
  // Close content sections
  const contentContainer = document.querySelector('.content-container');
  if (contentContainer && contentContainer.classList.contains('active')) {
    closeContent();
  }
  
  // Close AI modal
  const aiModal = document.getElementById('aiModal');
  if (aiModal && aiModal.classList.contains('show')) {
    closeAIChat();
  }
  
  // Close cert modal
  const certModal = document.getElementById('certModal');
  if (certModal && certModal.classList.contains('show')) {
    closeCertModal();
  }
}

// Show mobile back button when content is active
function showMobileBackButton() {
  if (window.mobileBackButton && window.innerWidth <= 768) {
    window.mobileBackButton.style.display = 'block';
  }
}

// Update existing functions to show back button on mobile
function showMobileBackButtonOnContentOpen() {
  showMobileBackButton();
}

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Resume data for the mock AI
const RESUME_DATA = {
  name: "Shehan",
  role: "Information Technology Undergraduate",
  skills: {
    programming: ["Java", "Python", "JavaScript"],
    frontend: ["HTML5", "CSS3", "React"],
    backend: ["Node.js", "Spring Boot", "Express.js"],
    tools: ["Git", "VS Code", "Postman"]
  },
  education: {
    degree: "Bachelor of Science in Information Technology",
    university: "Srilanka Institue of Information and Technology",
    year: "Expected 2025",
    courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Software Engineering"
    ]
  },
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce website with React frontend and Node.js backend",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      name: "Task Management App",
      description: "Web application for team task management with real-time updates",
      tech: ["JavaScript", "Firebase", "HTML/CSS"]
    }
  ],
  interests: [
    "Artificial Intelligence & Machine Learning",
    "Full-Stack Web Development",
    "Cloud Computing",
    "Open Source Contributions"
  ],
  currentlyLearning: ["Advanced Spring Boot", "AWS Cloud", "React Native", "Docker"]
};

// Mock AI responses based on keywords
function getMockAIResponse(question) {
  const q = question.toLowerCase();
  
  // Define response patterns
  const responses = {
    // Greetings
    'hi|hello|hey': `Hello! I'm Shehan's AI assistant. Ask me about his skills, projects, education, or interests!`,
    
    // Skills
    'skill|programming|language|tech stack': `Shehan's technical skills include:
• Programming: ${RESUME_DATA.skills.programming.join(', ')}
• Frontend: ${RESUME_DATA.skills.frontend.join(', ')}
• Backend: ${RESUME_DATA.skills.backend.join(', ')}
• Tools: ${RESUME_DATA.skills.tools.join(', ')}`,
    
    // Projects
    'project|work|portfolio': `Shehan has worked on these projects:
1. ${RESUME_DATA.projects[0].name}: ${RESUME_DATA.projects[0].description}
   Technologies: ${RESUME_DATA.projects[0].tech.join(', ')}

2. ${RESUME_DATA.projects[1].name}: ${RESUME_DATA.projects[1].description}
   Technologies: ${RESUME_DATA.projects[1].tech.join(', ')}`,
    
    // Education
    'education|study|degree|university|course': `Education:
• ${RESUME_DATA.education.degree}
• ${RESUME_DATA.education.university} - ${RESUME_DATA.education.year}
• Relevant Courses: ${RESUME_DATA.education.courses.join(', ')}`,
    
    // Interests
    'interest|hobby|passion': `Shehan's interests include:
• ${RESUME_DATA.interests.join('\n• ')}`,
    
    // Currently Learning
    'learning|studying|currently': `Currently learning:
• ${RESUME_DATA.currentlyLearning.join('\n• ')}`,
    
    // Experience
    'experience|work experience|internship': `Shehan is currently pursuing his undergraduate degree and has completed several academic projects. He's actively building his portfolio through hands-on projects.`,
    
    // Contact
    'contact|email|linkedin|github|hire': `You can reach Shehan through:
• LinkedIn: linkedin.com/in/shehan
• GitHub: github.com/shehan
• Email: shehan@example.com`,
    
    // Default response
    'default': `I can answer questions about:
• Shehan's skills and tech stack
• Academic projects
• Education and coursework
• Professional interests
• What he's currently learning

Try asking: "What programming languages do you know?" or "Tell me about your projects"`
  };

  // Find matching response
  for (const [pattern, response] of Object.entries(responses)) {
    if (pattern === 'default') continue;
    const patterns = pattern.split('|');
    if (patterns.some(p => q.includes(p))) {
      return response;
    }
  }
  
  return responses.default;
}

// Chat endpoint with mock responses
app.post('/chat', (req, res) => {
  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  // Simulate AI processing delay
  setTimeout(() => {
    const aiResponse = getMockAIResponse(message);
    
    // Format response to match OpenAI API structure
    const mockResponse = {
      choices: [{
        message: {
          content: aiResponse,
          role: "assistant"
        }
      }],
      usage: {
        total_tokens: aiResponse.length / 4,
        prompt_tokens: message.length / 4,
        completion_tokens: aiResponse.length / 4
      }
    };
    
    res.json(mockResponse);
  }, 800); // 0.8 second delay to feel realistic
});

// Additional API endpoints for resume data (optional)
app.get('/api/resume', (req, res) => {
  res.json(RESUME_DATA);
});

app.get('/api/skills', (req, res) => {
  res.json(RESUME_DATA.skills);
});

app.get('/api/projects', (req, res) => {
  res.json(RESUME_DATA.projects);
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Resume Chatbot running on http://localhost:${PORT}`);
  console.log(`📁 No API key required - Fully functional demo!`);
});
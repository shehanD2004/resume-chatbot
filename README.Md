# Resume Chatbot

A **web-based AI chatbot** powered by the OpenAI API that allows users to interactively ask questions about a person's **resume, skills, projects, education, and interests**. Fully customizable for anyone, making it a versatile tool for personal portfolios, resumes, or learning projects.  

---

## 🌟 Features

- Ask questions about technical skills, experience, education, and interests.
- Interactive, responsive, and modern web interface.
- Session persistence: conversation history is saved in the browser session.
- Fully customizable: change name, skills, projects, and other details.
- Open-source and ready for contribution.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **API:** OpenAI API  
- **Development Tools:** Nodemon, dotenv, node-fetch  

---

## ⚡ Prerequisites

- Node.js v18+  
- OpenAI API key (You can get one from [OpenAI](https://platform.openai.com/account/api-keys))  

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/shehanD2004/resume-chatbot.git
cd resume-chatbot
````

2. Install dependencies:

```bash
npm install
```

3. Update `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
PORT=3000
```

## ⚡ Usage

### Run in development mode (with auto-reload):

```bash
npm run dev
```

### Run in production mode:

```bash
npm start
```

Then open your browser at:

```
http://localhost:3000
```

---

## 🔧 Customization

1. Open `public/index.html` (or wherever your resume text is stored).
2. Replace the placeholder resume text with your own information:

```javascript
const RESUME_TEXT = `
Name: John Doe
Role: Software Engineer
Location: Anywhere

TECHNICAL SKILLS:
Programming Languages: JavaScript, Python
Frameworks: React, Node.js, Express
Tools & Platforms: Git, Docker, VS Code

EDUCATION:
- Bachelor of Science in Computer Science
- [University Name]

PROJECTS:
- Project 1: Brief description
- Project 2: Brief description

INTERESTS:
- AI & Machine Learning
- Web Development
- Open Source Contributions
`;
```

3. Save the file and reload your app.

---

## 📄 Folder Structure

```
resume-chatbot/
├─ public/           # Frontend HTML, CSS, JS
│  └─ index.html
├─ server.js         # Node.js Express server
├─ package.json
├─ .gitignore
└─ README.md
```

---

## 💡 Contributing

Contributions are welcome! You can:

* Add new features (e.g., multi-language support, dark mode)
* Improve styling and UX
* Fix bugs or improve code structure
* Add deployment instructions for cloud platforms

Please open a pull request or issue to get started.

---

## 🔒 Security

* Do not commit `.env` files containing API keys.
* Rotate your API keys if accidentally exposed.

---

## 📜 License

This project is open-source under the **MIT License**.

---

## 🙌 Acknowledgements

* [OpenAI](https://openai.com) for the powerful API
* Inspired by personal resume chatbots and portfolio tools

```

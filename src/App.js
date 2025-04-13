import React, { useState } from 'react';
import './App.css';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Assignment data with titles, descriptions, and links
  const assignments = [
    // HTML Assignments (1-5)
    {
      id: 1,
      title: "HTML-Intro",
      description: "Creating a basic webpage structure with semantic HTML5 elements",
      link: "/assignments/as-1.html",
      type: "HTML"
    },
    {
      id: 2,
      title: "HTML-Table-Lists",
      description: "Building interactive forms with various input types and validation",
      link: "/assignments/as-2.html",
      type: "HTML"
    },
    {
      id: 3,
      title: "HTML-Image-Mapping",
      description: "Creating structured data tables with proper semantic markup",
      link: "/assignments/as-3.html",
      type: "HTML"
    },
    {
      id: 4,
      title: "HTML-Forms",
      description: "Implementing images, audio, and video elements with proper attributes",
      link: "/assignments/as-4.html",
      type: "HTML"
    },
    {
      id: 5,
      title: "HTML-Frames-Media-Elements",
      description: "Building accessible web content following WCAG guidelines",
      link: "/assignments/as-5.html",
      type: "HTML"
    },
    // CSS Assignments (6-7)
    {
      id: 6,
      title: "CSS",
      description: "Styling web pages with CSS selectors, properties, and values",
      link: "/assignments/as-6.html",
      type: "CSS"
    },
    {
      id: 7,
      title: "CSS2",
      description: "Creating responsive layouts using Flexbox and Grid",
      link: "/assignments/as-7.html",
      type: "CSS"
    },
    // JavaScript Assignments (8-12)
    {
      id: 8,
      title: "Javascript",
      description: "Introduction to JavaScript syntax and basic programming concepts",
      link: "/assignments/as-8.html",
      type: "JavaScript"
    },
    {
      id: 9,
      title: "JavaScript",
      description: "Working with the Document Object Model and event handling",
      link: "/assignments/as-9.html",
      type: "JavaScript"
    },
    {
      id: 10,
      title: "JavaScript-Functions-Forms",
      description: "Creating and using functions, callbacks, and closures",
      link: "/assignments/as-10.html",
      type: "JavaScript"
    },
    {
      id: 11,
      title: "JavaScript-Dynamic-Elements-Events",
      description: "Working with arrays and array methods for data manipulation",
      link: "/assignments/as-11.html",
      type: "JavaScript"
    },
    {
      id: 12,
      title: "JavaScript-Canvas-Plotly-Z-Index",
      description: "Understanding objects, prototypes, and object-oriented programming",
      link: "/assignments/as-12.html",
      type: "JavaScript"
    },
    // JSX/React Assignments (13-15)
    {
      id: 13,
      title: "JSX-Intro",
      description: "Building reusable React components and understanding props",
      link: "/assignments/as-13.html",
      type: "React"
    },
    {
      id: 14,
      title: "JSX-Part2",
      description: "Using React hooks for state management and side effects",
      link: "/assignments/as-14.html",
      type: "React"
    },
    {
      id: 15,
      title: "JSX-Part3",
      description: "Implementing client-side routing in React applications",
      link: "/assignments/as-15.html",
      type: "React"
    }
  ];

  // Function to handle card click (navigation)
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Web Programming Portfolio</h1>
        <p className="subtitle">A collection of 15 web programming assignments</p>
      </header>

      <main className="assignments-grid">
        {assignments.map((assignment, index) => (
          <div 
            key={assignment.id}
            className={`assignment-card ${assignment.type.toLowerCase()}`}
            style={{ '--animation-order': index + 1 }}
            onMouseEnter={() => setHoveredCard(assignment.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(assignment.link)}
          >
            <div className="card-content">
              <span className="assignment-type">{assignment.type}</span>
              <h2 className="assignment-title">{assignment.title}</h2>
              <p className="assignment-description">{assignment.description}</p>
              <div className={`view-btn ${hoveredCard === assignment.id ? 'visible' : ''}`}>
                View Assignment
              </div>
            </div>
            <div className="card-number">{assignment.id}</div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>Web Programming - Assignment Portfolio © 2025</p>
      </footer>
    </div>
  );
}

export default App;
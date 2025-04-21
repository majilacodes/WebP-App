import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Assignment data with titles and links (descriptions removed)
  const assignments = [
    // HTML Assignments (1-5)
    {
      id: 1,
      title: "HTML: Intro",
      link: "/assignments/as-1.html",
      type: "HTML"
    },
    {
      id: 2,
      title: "HTML: Table & Lists",
      link: "/assignments/as-2.html",
      type: "HTML"
    },
    {
      id: 3,
      title: "HTML: Image Mapping",
      link: "/assignments/as-3.html",
      type: "HTML"
    },
    {
      id: 4,
      title: "HTML: Forms",
      link: "/assignments/as-4.html",
      type: "HTML"
    },
    {
      id: 5,
      title: "HTML: Frames-Media-Elements",
      link: "/assignments/as-5.html",
      type: "HTML"
    },
    // CSS Assignments (6-7)
    {
      id: 6,
      title: "CSS",
      link: "/assignments/as-6.html",
      type: "CSS"
    },
    {
      id: 7,
      title: "CSS: Part 2",
      link: "/assignments/as-7.html",
      type: "CSS"
    },
    // JavaScript Assignments (8-12)
    {
      id: 8,
      title: "Javascript",
      link: "/assignments/as-8.html",
      type: "JavaScript"
    },
    {
      id: 9,
      title: "JavaScript",
      link: "/assignments/as-9.html",
      type: "JavaScript"
    },
    {
      id: 10,
      title: "JavaScript: Functions-Forms",
      link: "/assignments/as-10.html",
      type: "JavaScript"
    },
    {
      id: 11,
      title: "JavaScript: Dynamic-Elements-Events",
      link: "/assignments/as-11.html",
      type: "JavaScript"
    },
    {
      id: 12,
      title: "JavaScript: Canvas-Plotly-Z-Index",
      link: "/assignments/as-12.html",
      type: "JavaScript"
    },
    // JSX/React Assignments (13-15)
    {
      id: 13,
      title: "JSX: Intro",
      link: "/assignments/as-13.html",
      type: "React"
    },
    {
      id: 14,
      title: "JSX: Part 2",
      link: "/assignments/as-14.html",
      type: "React"
    },
    {
      id: 15,
      title: "JSX: Part 3",
      link: "/assignments/as-15.html",
      type: "React"
    }
  ];

  // Function to handle navigation
  const handleAssignmentClick = (link) => {
    window.location.href = link;
  };

  // Filter assignments based on active filter
  const filteredAssignments = activeFilter === 'all' 
    ? assignments 
    : assignments.filter(assignment => assignment.type === activeFilter);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Web Programming Assignments</h1>
        <p className="subtitle">A compilation of 15 web programming assignments</p>
      </header>

      <div className="filters">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'HTML' ? 'active' : ''}`}
          onClick={() => setActiveFilter('HTML')}
        >
          HTML
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'CSS' ? 'active' : ''}`}
          onClick={() => setActiveFilter('CSS')}
        >
          CSS
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'JavaScript' ? 'active' : ''}`}
          onClick={() => setActiveFilter('JavaScript')}
        >
          JavaScript
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'React' ? 'active' : ''}`}
          onClick={() => setActiveFilter('React')}
        >
          React
        </button>
      </div>

      <main className="assignments-list">
        {filteredAssignments.map((assignment) => (
          <div 
            key={assignment.id}
            className="assignment-item"
            onClick={() => handleAssignmentClick(assignment.link)}
          >
            <div className="assignment-number">{assignment.id}</div>
            <div className="assignment-content">
              <div className="assignment-header">
                <h2 className="assignment-title">{assignment.title}</h2>
                <span className="assignment-type">{assignment.type}</span>
              </div>
            </div>
          </div>
        ))}
      </main>

    </div>
  );
}

export default App;
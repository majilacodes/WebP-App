import React, { useState, useEffect, useReducer, useRef, useContext, createContext } from 'react';
import './styles.css'; 
const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
};

const Content = () => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Why don't programmers like nature? It has too many bugs!",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    "Why do Java developers wear glasses? Because they don't C#!"
  ];

  const [joke, setJoke] = useState(jokes[0]);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div style={{ padding: '20px', minHeight: '60vh' }}>
      <p>{joke}</p>
      <button onClick={getRandomJoke}>Get Random Joke</button>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '10px', textAlign: 'center' }}>
      <p>© 2025 React Exercise App - All Rights Reserved</p>
    </footer>
  );
};

const StyledButtonInline = () => {
  return (
    <button
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px'
      }}
    >
      Inline Styled Button
    </button>
  );
};

const StyledButtonInternal = () => {
  return (
    <>
      <style>
        {`
          .internal-styled-button {
            background-color: green;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px;
          }
          .internal-styled-button:hover {
            background-color: darkgreen;
          }
        `}
      </style>
      <button className="internal-styled-button">Internal Styled Button</button>
    </>
  );
};

const StyledButtonExternal = () => {
  return <button className="external-styled-button">External Styled Button</button>;
};

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being initialized');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted to the DOM');
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate: Component has been updated');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed from the DOM');
  }

  updateState = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>Lifecycle Demo</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}

const Parent = () => {
  const message = "Hello from Parent!";
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Parent Component</h3>
      <Child message={message} />
    </div>
  );
};

const Child = ({ message }) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>Child Component</h4>
      <p>Message from parent: {message}</p>
    </div>
  );
};

const ValidatedChild = ({ message }) => {
  if (!message) {
    return <div>Error: Message prop is required!</div>;
  }
  
  if (typeof message !== 'string') {
    return <div>Error: Message prop must be a string!</div>;
  }
  
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
      <h4>Validated Child Component</h4>
      <p>Validated message from parent: {message}</p>
    </div>
  );
};

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Counter with useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

const CounterWithUseReducer = () => {
  const initialState = { count: 0 };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Counter with useReducer</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </div>
  );
};

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        const jokes = [
          "Why don't scientists trust atoms? Because they make up everything!",
          "Why did the scarecrow win an award? Because he was outstanding in his field!",
          "I told my wife she was drawing her eyebrows too high. She looked surprised.",
          "Why don't programmers like nature? It has too many bugs!"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(randomJoke);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setJoke('Failed to fetch joke');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Joke Fetcher with useEffect</h3>
      {loading ? (
        <p>Loading joke...</p>
      ) : (
        <>
          <p>{joke}</p>
          <button onClick={fetchJoke}>Refresh Joke</button>
        </>
      )}
    </div>
  );
};

const AutoFocusForm = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Auto Focus Form with useRef</h3>
      <input ref={inputRef} type="text" placeholder="This input will be focused" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

const ThemeContext = createContext('light');

const ThemedApp = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h3>Themed App with useContext</h3>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  
  const styles = {
    backgroundColor: theme === 'light' ? '#f8f8f8' : '#333',
    color: theme === 'light' ? '#333' : '#f8f8f8',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={styles}>
      <h4>Themed Component</h4>
      <p>Current theme: {theme}</p>
    </div>
  );
};

const FormWithUseState = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Form with useState</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: '10px' }}>
          <h4>Form Data:</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

const FormWithUseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value
    };
    setFormData(data);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Form with useRef</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameRef">Name: </label>
          <input
            type="text"
            id="nameRef"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="emailRef">Email: </label>
          <input
            type="email"
            id="emailRef"
            ref={emailRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div style={{ marginTop: '10px' }}>
          <h4>Form Data:</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(true);

  const toggleLifecycleDemo = () => {
    setShowLifecycleDemo(!showLifecycleDemo);
  };

  const renderContent = () => {
    return (
      <div className="app-container">
        <Header title="React Exercise App" />
        <Content />
        <StyledButtonInline />
        <StyledButtonInternal />
        <StyledButtonExternal />
        <button onClick={toggleLifecycleDemo}>
          {showLifecycleDemo ? 'Hide' : 'Show'} Lifecycle Demo
        </button>
        {showLifecycleDemo && <LifecycleDemo />}
        <Parent />
        <ValidatedChild message="Hello from validated child!" />
        <CounterWithUseState />
        <CounterWithUseReducer />
        <JokeFetcher />
        <AutoFocusForm />
        <ThemedApp />
        <FormWithUseState />
        <FormWithUseRef />
        <Footer />
      </div>
    );
  };

  return renderContent();
}

export default App;
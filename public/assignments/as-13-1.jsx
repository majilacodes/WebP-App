import React, { useState, useEffect } from 'react';

// 1. (i) Create a React component that displays "Hello, React!" inside an <h1> tag without JSX
function HelloWithoutJSX() {
  return React.createElement('h1', null, 'Hello, React!');
}

// 1. (ii) Modify the above code and solve using React JSX
function HelloWithJSX() {
  return <h1>Hello, React!</h1>;
}

// 1. (iii) Modify the above component to display a message stored in a variable
function HelloWithVariable() {
  const message = "Hello, React!";
  return <h1>{message}</h1>;
}

// 2. Create a component that renders a list of three fruits dynamically
function FruitsList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// 3. Create a component that displays a styled message using inline CSS in JSX
function StyledMessage() {
  const styles = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px'
  };

  return (
    <div style={styles}>This is a styled message</div>
  );
}

// 4. Create a component that displays the sum of squares of two numbers inside a <p> tag
function SumOfSquares() {
  const num1 = 3;
  const num2 = 4;
  const sumOfSquares = (num1 * num1) + (num2 * num2);

  return (
    <div>
      <p>The sum of squares of {num1} and {num2} is: {sumOfSquares}</p>
    </div>
  );
}

// 5. Create a component that displays "Good Morning" if isMorning is true, otherwise display "Good Evening"
function Greeting() {
  const isMorning = new Date().getHours() < 12;
  
  return (
    <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>
  );
}

// 6. Create a React component that displays the current day of the week dynamically using JavaScript
function CurrentDay() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];

  return (
    <div>
      <h2>Today is: {currentDay}</h2>
    </div>
  );
}

// 7. Create a React component that checks whether a given number is prime and displays the result
function PrimeChecker() {
  const [number, setNumber] = useState(7);
  const [isPrime, setIsPrime] = useState(true);

  useEffect(() => {
    const checkPrime = (num) => {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    };
    
    setIsPrime(checkPrime(number));
  }, [number]);

  return (
    <div>
      <h3>Prime Number Checker</h3>
      <p>Number: {number}</p>
      <p>{number} is {isPrime ? 'a prime number' : 'not a prime number'}</p>
      <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Next Number</button>
    </div>
  );
}

// 8. Create a React class component called TemperatureConverter
class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 32
    };
  }

  handleCelsiusChange = (e) => {
    const celsius = parseFloat(e.target.value);
    const fahrenheit = (celsius * 9/5) + 32;
    this.setState({
      celsius: celsius,
      fahrenheit: fahrenheit.toFixed(2)
    });
  }

  handleFahrenheitChange = (e) => {
    const fahrenheit = parseFloat(e.target.value);
    const celsius = (fahrenheit - 32) * 5/9;
    this.setState({
      celsius: celsius.toFixed(2),
      fahrenheit: fahrenheit
    });
  }

  render() {
    return (
      <div>
        <h3>Temperature Converter</h3>
        <div>
          <label>Celsius: </label>
          <input 
            type="number" 
            value={this.state.celsius} 
            onChange={this.handleCelsiusChange} 
          />
        </div>
        <div>
          <label>Fahrenheit: </label>
          <input 
            type="number" 
            value={this.state.fahrenheit} 
            onChange={this.handleFahrenheitChange} 
          />
        </div>
      </div>
    );
  }
}

// 9. Create a component that takes a string and displays its reverse inside a <p> tag
function StringReverser() {
  const [inputString, setInputString] = useState("React");
  const reversedString = inputString.split('').reverse().join('');
  
  return (
    <div>
      <h3>String Reverser</h3>
      <input 
        type="text" 
        value={inputString} 
        onChange={(e) => setInputString(e.target.value)} 
        placeholder="Enter a string"
      />
      <p>Original: {inputString}</p>
      <p>Reversed: {reversedString}</p>
      <p>Is Palindrome: {inputString === reversedString ? 'Yes' : 'No'}</p>
    </div>
  );
}

// 10. Create a button that, when clicked, generates and displays a random number between 1 and 100
function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(null);
  
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };

  return (
    <div>
      <h3>Random Number Generator</h3>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

// 11. Check if a Year is a Leap Year
function LeapYearChecker() {
  const [year, setYear] = useState(2024);
  
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  return (
    <div>
      <h3>Leap Year Checker</h3>
      <input 
        type="number" 
        value={year} 
        onChange={(e) => setYear(parseInt(e.target.value))} 
      />
      <p>{year} is {isLeapYear(year) ? 'a leap year' : 'not a leap year'}</p>
    </div>
  );
}

// 12. Create a React class component named UserGreeting
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      lastName: "Doe"
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>User Greeting</h3>
        <div>
          <label>First Name: </label>
          <input 
            type="text" 
            value={this.state.firstName} 
            onChange={this.handleFirstNameChange} 
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input 
            type="text" 
            value={this.state.lastName} 
            onChange={this.handleLastNameChange} 
          />
        </div>
        <h2>Hello, {this.state.firstName} {this.state.lastName}!</h2>
      </div>
    );
  }
}

// Main App component that combines all the exercises
function App() {
  return (
    <div className="App">
      <h1>React Exercises</h1>
      
      <section>
        <h2>1. Hello React Components</h2>
        <HelloWithoutJSX />
        <HelloWithJSX />
        <HelloWithVariable />
      </section>
      
      <section>
        <h2>2. Dynamic Fruits List</h2>
        <FruitsList />
      </section>
      
      <section>
        <h2>3. Styled Message</h2>
        <StyledMessage />
      </section>
      
      <section>
        <h2>4. Sum of Squares</h2>
        <SumOfSquares />
      </section>
      
      <section>
        <h2>5. Conditional Greeting</h2>
        <Greeting />
      </section>
      
      <section>
        <h2>6. Current Day</h2>
        <CurrentDay />
      </section>
      
      <section>
        <h2>7. Prime Number Checker</h2>
        <PrimeChecker />
      </section>
      
      <section>
        <h2>8. Temperature Converter</h2>
        <TemperatureConverter />
      </section>
      
      <section>
        <h2>9. String Reverser</h2>
        <StringReverser />
      </section>
      
      <section>
        <h2>10. Random Number Generator</h2>
        <RandomNumberGenerator />
      </section>
      
      <section>
        <h2>11. Leap Year Checker</h2>
        <LeapYearChecker />
      </section>
      
      <section>
        <h2>12. User Greeting</h2>
        <UserGreeting />
      </section>
    </div>
  );
}

export { App };
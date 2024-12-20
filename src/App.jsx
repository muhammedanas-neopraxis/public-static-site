import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './List'

function App() {
  const [count, setCount] = useState(0)

  const handleRandomCount = (type) => {
    const randomFactor = Math.floor(Math.random() * 3) + 1; // Random increment or decrement
    setCount((prevCount) =>
      type === 'increment' ? prevCount + randomFactor : prevCount - randomFactor
    );
  };

  return (
    <>
      <div className="flex items-center space-x-4 p-4 funny-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo funny-spin" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react funny-bounce"
            alt="React logo"
          />
        </a>
        <h1 className="flex funny-heading">
          Vite + React + <span className="funny-animate">{count}</span> 😂
        </h1>
      </div>
      <div className="card funny-card">
        <button
          className="funny-button"
          onClick={() => handleRandomCount('decrement')}
        >
          👎 Oh no, count down! 👇
        </button>
        <button
          className="funny-button"
          onClick={() => handleRandomCount('increment')}
        >
          👍 Yay, count up! 👆
        </button>
        <p>
          Whoa! You just edited <code>src/App.jsx</code>! 🎉 Save to see more
          laughs.
        </p>
      </div>
      <p className="read-the-docs funny-docs">
        Click on the Vite and React logos for a wild ride!
      </p>
      <button
        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <label className="swap swap-flip text-9xl">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
        <Example/>
</label>
    </>
  );
}

export default App;

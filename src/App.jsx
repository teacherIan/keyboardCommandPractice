import { useState } from 'react';
import './App.css';
import Challenge from './Challenge';

function App() {
  const [challenge, setChallenge] = useState(0);

  return (
    <div className="w-screen h-screen flex justify-center align-center items-center flex-col h-screen">
      {challenge === 0 ? (
        <>
          <h1>Typing Challenges</h1>
          <button
            onClick={() => setChallenge(1)}
            className="btn btn-primary btn-wide m-1"
          >
            Key Command Challenge 1
          </button>
          <button
            onClick={() => setChallenge(2)}
            className="btn btn-primary btn-wide m-1"
          >
            Key Command Challenge 2
          </button>
        </>
      ) : challenge === 1 ? (
        <Challenge setting={1} />
      ) : challenge === 2 ? (
        <Challenge setting={2} />
      ) : challenge === 3 ? (
        <Challenge setting={3} />
      ) : challenge === 4 ? (
        <Challenge setting={4} />
      ) : (
        <h1>Invalid Challenge</h1>
      )}
    </div>
  );
}

export default App;

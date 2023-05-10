import { useState, useEffect } from 'react';
import challengeOne from './challenges/challenge_1.docx';
import challengeTwo from './challenges/challenge_2.docx';

import {
  firstParagraph,
  secondParagraph,
  thirdParagraph,
} from './challenges/text';

function Challenge({ setting }) {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0.0);
  const [finishedOne, setFinishedOne] = useState(false);
  const [finishedTwo, setFinishedTwo] = useState(false);
  const [finishedThree, setFinishedThree] = useState(false);
  const [finishedTime, setFinishedTime] = useState(0.0);
  const [finished, setFinished] = useState(false);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (finished) return;
    setTimeout(() => setTimer(Date.now() - startTime), 100);
  }, [timer]);

  function createInterval() {
    setStartTime(() => Date.now());
  }

  function startCompetition() {
    setStart(true);
    createInterval();
  }

  function handleInput(e, num) {
    if (finished) return;

    if (num === 1) {
      if (e.target.value === firstParagraph[setting - 1]) {
        console.log('Finished one');
        setFinishedOne(true);
      }
    }
    if (num === 2) {
      if (e.target.value === secondParagraph[setting - 1]) {
        console.log('Finished two');
        setFinishedTwo(true);
      }
    }
    if (num === 3) {
      if (e.target.value === thirdParagraph[setting - 1]) {
        console.log('Finished three');
        setFinishedThree(true);
      }
    }
  }

  function checkAnswers() {
    if (finished) return;
    if (finishedOne && finishedTwo && finishedThree) {
      setFinished(true);
      setFinishedTime(timer);
      alert('You finished in ' + (timer * 0.001).toFixed(1) + ' seconds');
    }
  }

  return (
    <>
      {!start ? (
        <>
          <h1>Challenge {setting}</h1>
          <p>
            Clicking start will download a word file onto your computer and
            start a timer{' '}
          </p>
          <p>
            You'll need to correctly copy the requested information from the
            word file onto the correct text area
          </p>
          <p>
            When you're done, click the stop button and the timer will stop and
            your score will be displayed
          </p>
          <p></p>
          <a
            href={setting === 1 ? challengeOne : challengeTwo}
            download="challenge.docx"
          >
            {' '}
            <button
              onClick={startCompetition}
              className="btn btn-primary btn-wide m-1"
            >
              Start
            </button>{' '}
          </a>
        </>
      ) : (
        <>
          <div>
            {finished
              ? (finishedTime * 0.001).toFixed(1)
              : timer > 10000000000
              ? 0
              : (timer * 0.001).toFixed(1)}
          </div>
          <span className="label-text">First Paragraph</span>
          <textarea
            onInput={(e) => handleInput(e, 1)}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>

          <span className="label-text">Second Paragraph</span>
          <textarea
            onInput={(e) => handleInput(e, 2)}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>

          <span className="label-text">Third Paragraph</span>
          <textarea
            onInput={(e) => handleInput(e, 3)}
            placeholder="Type here"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <button
            onClick={checkAnswers}
            className="btn btn-primary btn-wide m-1"
          >
            Check
          </button>
        </>
      )}
    </>
  );
}

export default Challenge;

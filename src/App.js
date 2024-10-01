import "./styles.css";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>Start your adventure at Traverse Town!</h2>
      <div className="box"></div>
      <div className="tabs">
        <div
          onClick={() => action(1)}
          className={`${state === 1 ? "tab active-tab" : "tab"}`}
        >
          Tab 1
        </div>
        <div
          className={`${state === 2 ? "tab active-tab" : "tab"}`}
          onClick={() => action(2)}
        >
          Tab 2
        </div>
        <div
          className={`${state === 3 ? "tab active-tab" : "tab"}`}
          onClick={() => action(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="contents">
        <div
          className={`${state === 1 ? "content active-content" : "content"}`}
        >
          <h2>Content 1</h2>
          <p>
            This is the first tab with an introduction to what is going to be
            provided in this walkthrough.
          </p>
        </div>
        <div
          className={`${state === 2 ? "content active-content" : "content"}`}
        >
          <h2>Content 2</h2>
          <p>
            This is the resources tab with a guide to all abilities and magic.
          </p>
        </div>
        <div
          className={`${state === 3 ? "content active-content" : "content"}`}
        >
          <h2>Content 3</h2>
          <p>
            This is the inventory list tab of what you have obtained and what
            abilities and magic you already know.
          </p>
        </div>
      </div>
    </div>
  );
}

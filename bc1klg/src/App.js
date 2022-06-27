import Slide from "./Components/Slide";
import "./styles.css";
import { useState } from "react";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [i, seti] = useState(0);
  const handlePrev = () => {
    if (i > 0) {
      seti(i - 1);
      <Slide mydata={data[i]} />;
    }
  };
  const handleNext = () => {
    if (i < data.length - 1) {
      seti(i + 1);
      <Slide mydata={data[i]} />;
    }
  };
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide mydata={data[i]} />
      <button data-testid="prev" onClick={handlePrev}>
        Prev
      </button>
      <button data-testid="next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

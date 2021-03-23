import "./App.css";
import React from "react";

function App() {
  const [numbersArr, setNumbersArr] = React.useState([]);
  const cyberclickNumber = () => {
    let arr = [];

    for (let i = 0; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        arr.push("cyberclick");
      } else if (i % 5 == 0) {
        arr.push("click");
      } else if (i % 3 == 0) {
        arr.push("cyber");
      } else {
        arr.push(i);
      }
    }
    setNumbersArr(arr);
  };

  React.useEffect(() => {
    cyberclickNumber();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {numbersArr.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </header>
    </div>
  );
}

export default App;

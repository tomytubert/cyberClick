import "./App.css";
import React from "react";

function App() {
  const [numbersArr, setNumbersArr] = React.useState([]);
  const cyberclickNumber = () => {
    let arr = [];

    for (let number = 0; number <= 100; number++) {

    const isMultOfThree = number % 3 === 0;

    const isMultOfFive = number % 5 === 0;

    const isMultOfFiveAndThree = isMultOfThree && isMultOfFive;

      if (isMultOfFiveAndThree) {
        arr.push("cyberclick");
      }

      if (isMultOfFive) {
        arr.push("click");
      }

      if (isMultOfThree) {
        arr.push("cyber");
      }

      arr.push(number);
      continue;
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

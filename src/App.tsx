import React, { useState } from "react";
import "./App.css";
import Person, { IPerson } from "./person/Person";

const App: React.FC = () => {
  const [persons, setЗersons] = useState<IPerson[]>([
    { id: 0, title: "Галя", description: "adsadsadsadas" },
    { id: 1, title: "Никита", description: "adsadsadsadas" },
    { id: 2, title: "Лёха", description: "adsadsadsadas" },
    { id: 2, title: "Аня", description: "adsadsadsadas" }
  ]);

  setTimeout(() => {
    setЗersons([
      { id: 0, title: "Галя", description: "adsadsadsadas" },
      { id: 5, title: "Вова", description: "adsadsadsadas" },
      { id: 2, title: "Лёха", description: "adsadsadsadas" }
    ]);
  }, 3000);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Learn React</h1>
        <div className="row">
          {persons.map(person => (
            <Person key={person.id} person={person} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;

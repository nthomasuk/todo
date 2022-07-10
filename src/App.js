import { useState } from "react";
import QuestList from "./components/QuestList";

  // const [quests, setQuest] = useState([
  //   { title: }
  // ])

const App = () => {
  return (
    <div className="App">
      <div className="Header">
        <h1>Quests</h1>
        <h2>Welcome to your daily struggle...</h2>
      </div>
      <div className="Content">
        <QuestList />
      </div>
    </div>
  );
}

export default App;

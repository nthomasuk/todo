import { useState } from "react";
import QuestList from "./components/QuestList";
import QuestForm from "./components/QuestForm";

const App = () => {
  const [quests, setQuests] = useState([]);
  
  const handleCreateQuest = (newQuest) => {
    setQuests([
      ...quests,
      newQuest,
    ]);
  };

  const handleQuestUpdate = (update) => {
    const questIndex = quests.findIndex(quest => quest.id === update.id);
    const updatedQuests = [ ...quests ];
    if(updatedQuests[questIndex]) {
      updatedQuests[questIndex].name = update.name;
      updatedQuests[questIndex].rating = update.rating;
      setQuests(updatedQuests);
    }
  };

  const handleQuestDelete = (questId) => {
    const updatedQuests = [];
    quests.forEach(
      quest => {
        if (quest.id !== questId) updatedQuests.push(quest);
      });
      setQuests(updatedQuests);
  };

  const handleToggleChecked = (questItem) => {
    const questIndex = quests.findIndex(quest => quest.id === questItem.id);
    const updatedQuests = [ ...quests ];
    if(updatedQuests[questIndex]) {
      updatedQuests[questIndex].completed = ! updatedQuests[questIndex].completed;
      setQuests(updatedQuests);
    }
  };

  let summary = {
    ratings: 0,
    completed: 0,
    incomplete: 0,
  }
  
  quests.forEach(quest => {
    summary.ratings = summary.ratings + quest.rating;
    if(quest.completed) {
      summary.completed = summary.completed + 1;
    } else {
      summary.incomplete = summary.incomplete + 1;
    }
  });

  return (
    <div className="App">
      <div className="Header">
        <h1>Quests</h1>
        <h2>Welcome to your daily struggle...</h2>
      </div>
      <div className="summary">
        <p>Items: {quests.length}</p>
        <p>Total Ratings: {summary.ratings}</p>
        <p>Total Complete: {summary.complete}</p>
        <p>Total Incomplete: {summary.incomplete}</p>
      </div>
      <div className="Content">
        <QuestForm onCreateQuest={handleCreateQuest} />
        <QuestList
          items={quests}
          onItemUpdate={handleQuestUpdate}
          onItemDelete={handleQuestDelete}
          onToggleChecked={handleToggleChecked}
        />
      </div>
    </div>
  );
}

export default App;

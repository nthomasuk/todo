import { useState } from "react";
import Quest from "./Quest";
import QuestForm from "./QuestForm";

const QuestList = () => {
    const [quests, setQuests] = useState([])

    const addQuest = quest => {
        if(!quest.text || /^\s*$/.test(quest.text)) {
            return;
        }

        const newQuests = [quest, ...quests];
        
        setQuests(newQuests);
    };
    
    const editQuest = (questId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setQuests(prev => prev.map(item => (item.id === questId ? newValue : item)));
    };


    const removeQuest = id => {
        const removeArray = [...quests].filter(quest => quest.id !== id)
        setQuests(removeArray);
    };


    const completeQuest = id => {
        let updatedQuests = quests.map(quest => {
            if (quest.id === id) {
                quest.isComplete = !quest.isComplete;
            }
            return quest;
        });
        setQuests(updatedQuests);
    };

    return (
        <div>
            <QuestForm onSubmit={addQuest}/>
            <Quest 
                quests={quests}
                completeQuest={completeQuest}
                removeQuest={removeQuest}
                editQuest={editQuest}    
            />
        </div>
     );
}
 
export default QuestList;
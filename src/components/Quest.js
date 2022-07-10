import { useState } from "react";
import QuestForm from "./QuestForm";
import QuestList from "./QuestList";
import { AiFillCloseSquare } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"

const Quest = ({quests, completeQuest, removeQuest}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitEdit = value => {
        editQuest(edit.id, value)
        setEdit({
            id: null,
            value: ""
        });
    };

    if(edit.id) {
        return <QuestForm edit={edit} onSubmit={submitEdit} />;
    }

    return quests.map((quest, index) => (
        <div
            className={quest.isComplete ? "quest-row complete" : "quest-row"}
            key={index}
        >
            <div key={quest.id} onClick={() => completeQuest(quest.id)}>
                {quest.text}
            </div>
            <div className="icons">
                <AiFillCloseSquare 
                    className="delete-icon"
                    onClick={() => removeQuest(quest.id)}
                />
                <AiFillEdit 
                    className="edit-icon"
                    onClick={() => setEdit({id: quest.id, value: quest.text})}
                />
            </div>
        </div>
    ));
}
 
export default Quest;
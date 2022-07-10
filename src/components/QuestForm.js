import { useState } from "react";
import StarRating from "./StarRating";

const QuestForm = ({ onCreateQuest }) => {
    const [questName, setQuestName] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        if(! questName ) return

        const newQuest = {
            id: Date.now(),
            name: questName,
            rating,
            completed: false,
        };

        onCreateQuest(newQuest);
        setQuestName("");
    };
    
    return ( 
        <form className="quest-form" onSubmit={handleSubmit}>
            <div className="quest-column">
                <input 
                    className="quest-input"
                    type="text"
                    placeholder="Add a quest..."
                    value={questName}
                    onChange={event => setQuestName(event.target.value)}
                />
                <StarRating value={rating} onChange={setRating} />
            </div>
            <button type="submit" className="setquest-button">Set Quest</button>
        </form>
     );
}
 
export default QuestForm;
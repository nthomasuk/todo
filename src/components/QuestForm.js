import { useState } from "react";
import StarRating from "./StarRating";

const QuestForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 99999999),
            text: input
        });

        setInput("");
    };
    
    return ( 
        <form className="quest-form" onSubmit={handleSubmit}>
            <input 
                className="quest-input"
                type="text"
                placeholder="Add a quest..."
                value={input}
                onChange={handleChange}
            />
            {/* <StarRating value={StarRating.ratingValue}/> */}
            <button className="setquest-button">Set Quest</button>
        </form>
     );
}
 
export default QuestForm;
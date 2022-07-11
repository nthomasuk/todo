import { useState } from "react";
import StarRating from "../components/StarRating";
import {
    AiFillCloseSquare,
    AiFillEdit,
    AiFillCheckCircle,
} from "react-icons/ai";

const QuestList = ({ items, onItemUpdate, onItemDelete, onToggleChecked }) => {

    const [editingItem, setEditingItem] = useState({});

    const renderSavedItem = (item, key) => {
        return (
        <li
            key={key}
            className="quest-card"
        >
        <div className="quest-card-header">
            <span className={item.completed ? "strike" : ""}>
                {item.name}
            </span>
            <StarRating value={item.rating} />
        </div>
        <div className="icons">
            <AiFillEdit 
                className="edit-icon"
                onClick={() => setEditingItem(item)}
            />
            <AiFillCheckCircle 
                className="check-icon"
                onClick={() => onToggleChecked(item)}
            />
            <AiFillCloseSquare 
                className="delete-icon"
                onClick={() => onItemDelete(item.id)}
            />
        </div>
        </li>
        );
    };

    const renderEditingItem = (item, key) => (
        <li
            key={key} 
            className="edit-quest-card"
        >
            <div>
                <input 
                className="quest-input"
                type="text"
                placeholder="Add a quest..."
                value={item.name}
                onChange={event => onItemUpdate({...item, name: event.target.value})}
            />
            <button onClick={() => setEditingItem({})}>
                Update
            </button>
            </div>
            <StarRating
                value={item.rating}
                onChange={value => onItemUpdate({...item, rating: value})}
            />
        </li>
    );

    const listItems = items.map((item, index) => 
        editingItem.name
            ? renderEditingItem(item, index)
            : renderSavedItem(item, index));

    return ( 
        <ul className="quest-list">
            {listItems}
        </ul>
     );
};
 
export default QuestList;

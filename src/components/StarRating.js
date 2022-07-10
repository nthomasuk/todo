import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ value, onChange }) => {
    const [hover, setHover] = useState(null);
    const handleChange = value => {
        if(onChange) onChange(value);
    };
    
    const handleHover = value => {
        if(onChange) setHover(value);
    };
    
    return ( 
        <div>
            {[...Array(5)].map( (star, i) => {
                const ratingValue = i + 1;
                return <label key={i}>
                    <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        onClick={() => handleChange(ratingValue)}
                        
                    />
                    <FaStar 
                        className="star"
                        color={ratingValue <= (hover || value) ? "#d4af37" : "#7a706f"}
                        size={50}
                        onMouseEnter={() => handleHover(ratingValue)}
                        onMouseLeave={() => handleHover(null)}    
                    />
                </label>
            })}
        </div>
     );
}
 
export default StarRating;
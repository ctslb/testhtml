import React, { useState } from 'react';

const Flashcard = ({ question, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="flashcard">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Flashcard;
const FlashcardList = ({ questions }) => {
    return (
        <div className="flashcard-list">
            {questions.map((question, index) => (
                <Flashcard key={index} question={question} />
            ))}
        </div>
    );
};

export default FlashcardList;
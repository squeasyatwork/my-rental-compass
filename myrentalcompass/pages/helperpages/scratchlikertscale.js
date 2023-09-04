import React, { useState } from 'react';
import ScratchQuestionnaire from '~/pages/scratchquestionnaire';

function ScratchLikertScale(questionTitle) {
    // eval('const [' + questionTitle + 'Choice, set' + questionTitle + 'Choice] = useState(null);');

    const [selectedChoice, setSelectedChoice] = useState(null);

    function handleChoice(event) {
        // const choiceValue = event.target.value;
        eval('set' + questionTitle + 'Choice(event.target.value);');
        setSelectedChoice(event.target.value);
    };

    return (
        <div className="likert-options flex justify-center text-lg font-normal pt-4 pb-4">
            <label className={`likert-label ${selectedChoice === '1' ? 'selected' : ''}`}>
                <input type="radio" name="likertScale" value="1" className="likert-radio" onClick={(e) => { handleChoice(e) }} />
                1
            </label>
            <label className={`likert-label ${selectedChoice === '2' ? 'selected' : ''}`}>
                <input type="radio" name="likertScale" value="2" className="likert-radio" onClick={(e) => { handleChoice(e) }} />
                2
            </label>
            <label className={`likert-label ${selectedChoice === '3' ? 'selected' : ''}`}>
                <input type="radio" name="likertScale" value="3" className="likert-radio" onClick={(e) => { handleChoice(e) }} />
                3
            </label>
            <label className={`likert-label ${selectedChoice === '4' ? 'selected' : ''}`}>
                <input type="radio" name="likertScale" value="4" className="likert-radio" onClick={(e) => { handleChoice(e) }} />
                4
            </label>
            <label className={`likert-label ${selectedChoice === '5' ? 'selected' : ''}`}>
                <input type="radio" name="likertScale" value="5" className="likert-radio" onClick={(e) => { handleChoice(e) }} />
                5
            </label>
        </div>
    );
}

export default ScratchLikertScale;
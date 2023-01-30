const repeatString = function(aString, stringMultiplier) {
    let appendedString = '';

    if (stringMultiplier === 0){
        return '';
    } else if (stringMultiplier < 0){
        return 'ERROR';
    } else if (stringMultiplier > 0){
        for(let i = 0; i < stringMultiplier; i++){
            appendedString += aString;
        } return appendedString;
    }
};

// Do not edit below this line
module.exports = repeatString;

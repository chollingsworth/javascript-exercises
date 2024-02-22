const repeatString = function(string, num) {

    let myString = '';

    if (num < 0) {
        return 'ERROR'
        
    }

    for (let i=0; i < num; i++) {
        myString += string;
    };

    console.log(myString);

    return myString.trim();

};

// Do not edit below this line
module.exports = repeatString;

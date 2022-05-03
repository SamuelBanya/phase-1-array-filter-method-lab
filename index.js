// Code your solution here
function findMatching(driverList, matchingName) {
    // console.log("driverList: ", driverList);
    // console.log("driverName: ", matchingName);
    return driverList.filter(function (driverName) {
        return driverName.toLowerCase() === matchingName.toLowerCase();
    });
}

findMatching(["Sam", "Tim", "Allen"], "Sam");

function fuzzyMatch(driverList, queryString) {
    return driverList.filter(function (driverName) {
        // NOTE: The test itself is only expecting the first two characters
        // Since the test is poorly worded in terms of what it is actually looking for, we'll just try to match the first
        // two characters and that's it:
        let firstTwoChars = driverName.slice(0, 2);
        // NOTE: This is good for future reference to obtain the 'middle' and 'ending character' of a name:
        // let middleDriverName = driverName.slice(1, driverName.length - 1);
        // let driverNameEndingChar = driverName.slice(-1);
        // console.log('middleDriverName: ', middleDriverName);
        // console.log('driverNameEndingChar: ', driverNameEndingChar);
        // Breakdown of ideas:
        // middleDriverName.indexOf(queryString) === -1 -->
        // This means that the search query is NOT found in the middle portion of the driver's name
        // driverNameEndingChar.indexOf(queryString) === -1 -->
        // This means that the search query is NOT found in the ending character of the driver's name
        // Goal:
        // We do NOT want to match the name if it matches only the middle letters, or the ending letter character
        // So, we WANT the '=== -1' portion of the ideas above to occur
        // if (firstTwoChars.indexOf(queryString) === -1) {
        if (queryString.indexOf(firstTwoChars) === -1) {
            console.log(`'firstTwoChars': '${firstTwoChars}' is NOT in 'queryString': ${queryString}`);
        }
        // From MDN for '.indexOf()':
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        // If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched.
        else {
            return driverName.indexOf(queryString) !== -1;
        }
    })
}

fuzzyMatch(["Frank", "Joe", "Bob"], "Fran");

function matchName(driverList, matchingString) {
    console.log("driverList: ", driverList);
    console.log("matchingString: ", matchingString);
    
    return driverList.filter(function(driver) {
        console.log("driver: ", driver);
        console.log("driver.name: ", driver.name);        
        return driver.name === matchingString;
    })
}

matchName([{name: "George", hometown: "New York"}, {name: "Jacob", hometown: "Philadelphia"}, {name: "George", hometown: "Washington D.C."}, {name: "Bobby", hometown: "Boston"}], "George");

// https://github.com/hassy008/PH_Assignment-03--JS-Problem-solving
// kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer > 0) { //check condition and if user input any negetive value it will showing error
        let meter = kilometer * 1000;
        return meter;
    } else {
        console.log("Please enter Valid Distance");
    }
}

let resultKmToM = kilometerToMeter(5.5);
console.log(resultKmToM);





// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) { //check condition and if user input any negetive value they will request to enter 0 or leave it blank
        let watchTotal = watch * 50;
        let mobileTotal = mobile * 100;
        let laptopTotal = laptop * 500;

        let totalBudgetCost = watchTotal + mobileTotal + laptopTotal;
        return totalBudgetCost;
    } else {
        console.log("Please enter Valid Number. If you don't buy just any product just enter 0 or leave it blank.");
    }
}

let resultBudgetCalculator = budgetCalculator(50, 10, 7);
console.log(resultBudgetCalculator);







// hotelCost
function hotelCost(days) {
    if (days > 0 && days <= 10) { //a person can't stay in a hotel 0 day. So, we define a condition if user input 0/negetive value it will showing error
        let hotelTotalCost = days * 100;
        return hotelTotalCost;

    } else if (days > 0 && days <= 20) {
        let firstTenDays = 10 * 100;
        let secondTenDays = days - 10; //here we get how many days a person stay after 10days ... 
        let hotelTotalCost = secondTenDays * 80 + firstTenDays;
        return hotelTotalCost;

    } else if (days > 0) {
        let firstTenDays = 10 * 100;
        let secondTenDays = 20 * 80;
        let restOfTheDays = days - 20; //here we get rest days a person stay after 20days... 
        let hotelTotalCost = restOfTheDays * 50 + firstTenDays + secondTenDays;
        return hotelTotalCost;
    }
}

let resultHotelCost = hotelCost(22);
console.log(resultHotelCost);








// megaFriend
let friendsList = ["Abu Bakar", "Abu Saleh ", "Abu Taleb", "Hazrt Shith Asm."];
// let friendsList = [];  //if you want to check by empty array...
let lengthOfName = 0;
let longestName;

function megaFriend(friendsList) {
    if (friendsList.length === 0) { //if you pass empty array it will showing error...
        console.log("Please enter your Friend\'s name");
    } else {
        for (let i = 0; i < friendsList.length; i++) {
            if (friendsList[i].length > lengthOfName) {
                // let lengthOfName = friendsList[i].length; //get length of friends name if needed
                longestName = friendsList[i];
            }
        }
    }
    return longestName;
}

let resultMegaFriend = megaFriend(friendsList);
console.log(resultMegaFriend);


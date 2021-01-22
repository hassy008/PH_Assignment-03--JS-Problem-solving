// kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        let meter = kilometer * 1000;
        return meter;
    } else {
        console.log("Please enter Valid Distance");
    }
}

let resultKmToM = kilometerToMeter(-0.1);
console.log(resultKmToM);





// budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        let watchTotal = watch * 50;
        let mobileTotal = mobile * 100;
        let laptopTotal = laptop * 500;

        let total = watchTotal + mobileTotal + laptopTotal;
        return total;
    } else {
        console.log("Please enter Valid Number. If you don't buy just any product just put 0.");
    }
}

let resultBc = budgetCalculator(-3, 0, 7);
console.log(resultBc);







// hotelCost
function hotelCost(days) {

    if (days > 0 && days <= 10) {

        let hotelTotalCost = days * 100;

        return hotelTotalCost;

    } else if (days > 0 && days <= 20) {
        let firstTenDays = 10 * 100;
        let secondTenDays = days - 10; //here we get rest days... 

        let hotelTotalCost = secondTenDays * 80 + firstTenDays;

        return hotelTotalCost;

    } else if (days > 0) {
        let firstTenDays = 10 * 100;
        let secondTenDays = 20 * 80;
        let restOfTheDays = days - 20;

        let hotelTotalCost = restOfTheDays * 50 + firstTenDays + secondTenDays;

        return hotelTotalCost;
    }
}

let stayDuration = hotelCost(0);
let resultHotelCost = stayDuration;
console.log(resultHotelCost);








// megaFriend
// let friendsList = ["Abu Bakar", "Abu Saleh ", "Abu Taleb", "Hazrt Shith Asmasdasd"];
let friendsList = [];
let lgth = 0;
let longest;

function megaFriend(friendsList) {
    if (friendsList.length === 0) {
        console.log("Please enter your Friend\'s name");
    } else {
        for (let i = 0; i < friendsList.length; i++) {
            if (friendsList[i].length > lgth) {
                let lgth = friendsList[i].length;
                longest = friendsList[i];
            }
        }
    }
    return longest;
}

let longestFrnd = megaFriend(friendsList);
let resultMf = longestFrnd;
console.log(resultMf);
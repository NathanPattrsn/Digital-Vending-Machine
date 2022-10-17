// array of items and their prices is set
const items = ["cola", "twix", "water"];
const price = ["1.50", "0.70", "1.00"];
// assigning the right price to the right product
items[0] = price[0];
items[1] = price[1];
items[2] = price[2];
// setting the user's credit
var usercredit = 0.00;
// function to allow the user to view their credit and add to it if they wish, then shows them their total after deposit
function addcredit(){
const addcredit = prompt("Your credit amount is", usercredit,". Would you like to add credit?");
if(addcredit == true){
	let usercredit = addcredit;
	console.log("Your credit is now", usercredit);
}else if(addcredit == false){
	console.log("Your credit is now", usercredit);
}
}
// function to allow the user to purchase one of the items. User is shown what items they can buy and how much they cost
// user is asked which they would like to purchase and depending which they choose, that item's price is taken off their total credit
// using if else if statements to determine the outcome
function itempurchase(){
console.log("You can purchase one of these", items);
console.log(items[0], "costs", price[0], ".", items[1], "costs", price[1], ".", items[2], "costs", price[2], ".");
const itempurchase = prompt("Which would you like to purchase?");
if(itempurchase == items[0]){
	usercredit = usercredit - price[0];
	console.log("Your credit is now", usercredit);
}else if(itempurchase == items[1]){
	usercredit = usercredit - price[1];
	console.log("Your credit is now", usercredit);
}else if(itempurchase == items[2]){
	usercredit = usercredit - price[2];
	console.log("Your credit is now", usercredit);
}
}
// function to allow user to refund their purchase(s)
// shows user how much they were refunded which add is back to their credit 
function refund(){
const refund1 = prompt("Would you like a refund?");
if(refund1 == true){
	var refund2 = prompt("Which item would you like to refund?");
	if (refund2 == items[0]){
		usercredit = usercredit + items[0];
		console.log("You were refunded", price[0], ", credit is now", usercredit);
	}else if (refund2 == items[1]){
		usercredit = usercredit + items[1];
		console.log("You were refunded", price[1], ", credit is now", usercredit);
	}else if (refund2 == items[2]){
		usercredit = usercredit + items[2];
		console.log("You were refunded", price[2], ", credit is now", usercredit);
	}
} //continued function below is to ask if the user would like another refund and to allow them to do so
var refund3 = prompt("Would you like another refund?");
if(refund3 == true){
	var refund2 = prompt("Which item would you like to refund?");
	if (refund2 == items[0]){
		usercredit = usercredit + items[0];
		console.log("You were refunded", price[0], ", credit is now", usercredit);
	}else if (refund2 == items[1]){
		usercredit = usercredit + items[1];
		console.log("You were refunded", price[1], ", credit is now", usercredit);
	}else if (refund2 == items[2]){
		usercredit = usercredit + items[2];
		console.log("You were refunded", price[2], ", credit is now", usercredit);
	}
}else if(refund1 == false){
	close();
}else if(refund3 == false){
	close();
}
}
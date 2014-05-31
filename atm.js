
function getWithdrawl() {
	console.log("Called getWithdrawl");
	var withdraw = document.getElementById('atm').value;
	var balance = document.getElementById('balance').value;
	console.log(withdraw);
	console.log(balance);
	var bal = computeATM(withdraw, balance);
	alert("balance: " + bal);
	
}

function checkWithDraw(withdraw) {
	if (withdraw % 5) {
		return false;
	}
	if (withdraw > 0 && withdraw < 2000) {
		return true;
	} else {
		return false;
	}

}

function checkBalance(balance) {
	if (balance < 0) {
		return false;
	} else {
		return true;
	}
}

function computeATM(withdraw, balance) {
	var validwithdraw = checkWithDraw(withdraw);
	if (validwithdraw) {
		if (checkBalance(balance)) {
			if (withdraw < (balance - 0.50)) {
				var newbalance = balance - withdraw - 0.50;
				console.log(newbalance);
				return newbalance;
			} else {
				return balance;
			}
		}
	} else {
		return balance;
	}
}
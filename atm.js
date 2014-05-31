$(document).ready(function() {
    
   
    function computeATM(withdraw, balance) {
        var validwithdraw = checkWithDraw(withdraw);
        if (validwithdraw) {
            checkBalance(balance);
        } else {
            //invalid input
        }
        //is withdraw < (balance - .50)
        //return true or false 
    }
    
    function checkWithDraw(withdraw) {
        //check that withdraw is a multiple of 5
        //check that withdraw is > 0 and < 2000
        //return true or false
    }
    
    function checkBalance(balance) {
        //check to make sure not a negative number
    }
    
    

});
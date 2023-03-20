// interface savingaccount
// {
// balance(actype:string,pin:number,rembalance:number):void;
// }
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.balance = function (acctype, balamt) {
        console.log("Account type:" + acctype + " " + "Balance Amount :" + balamt);
    };
    return Account;
}());
var obj1 = new Account();
obj1.balance("savings", 15000);
var obj2 = new Account();
obj2.balance("current", 25000);

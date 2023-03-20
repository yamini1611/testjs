
interface savingaccount {
    balance(acctype: string,
    balamt: number):void;
}

interface currentaccount {
    balance(acctype: string,
        balamt: number):void;
}

class Account  implements savingaccount, currentaccount {
   
  balance(acctype: string, balamt: number) {
      console.log("Account type:" + acctype +" " + "Balance Amount :" + balamt)
  }
}

let obj1 = new Account()
obj1.balance("savings",15000)
let obj2 = new Account()
obj2.balance("current",25000)

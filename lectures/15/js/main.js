var AccountDetails=[{
    AccountTitle:'Sarmad Khurshid',
    AvailableBalance:'5000',
    AccountCurrency:'PKR',
    IBAN:123456
}];


var currentUser=0;
var title=document.getElementById('title')
var balance=document.getElementById('balance')
var currency=document.getElementById('currency')
var IBAN=document.getElementById('IBAN')

title.innerHTML=AccountDetails[currentUser].AccountTitle;
balance.innerHTML=AccountDetails[currentUser].AvailableBalance;
currency.innerHTML=AccountDetails[currentUser].AccountCurrency;
IBAN.innerHTML=AccountDetails[currentUser].IBAN;

function Deposit_Amount() {
    var acc=document.getElementById("Deposit Amount");
    if(event.keycode===13)
        AccountDeatils.balance
}

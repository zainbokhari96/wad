var account = {
    mytitle: "Syed Zain Ali Bokhari",
    mybalance: 70000,
    mycurrency: "PKR",
    myiban: "PKN31241415",

    Deposit : function (e,val){

    if (e.key=="Enter") {
        if (!isNaN(val)) {
            document.getElementById("balance").innerHTML = account.mybalance += parseInt(val);
            document.getElementById("deposit").value = "";
            document.getElementById("deposit-msg").innerHTML = " ";
            Transaction_History(val,"Desposit");
        }
        else {
            document.getElementById("deposit").value = " ";
            document.getElementById("deposit-msg").innerHTML = "Enter Valid Input";
        }
    }
},

    Withdraw : function  (e,val) {
    if(e.key=="Enter")
    {
        if (!isNaN(val)) {
            if(val <= account.mybalance)
            {
                document.getElementById("balance").innerHTML = account.mybalance -= parseInt(val);
                document.getElementById("withdraw").value = " ";
                document.getElementById("withdraw-msg").innerHTML = " ";
                Transaction_History(val,"Withdraw");
            }
            else
            {
                document.getElementById("withdraw").value = " ";
                document.getElementById("withdraw-msg").innerHTML = "Don't Have Sufficient Amount in Account";
            }
        }
        else
        {
            document.getElementById("withdraw").value =" ";
            document.getElementById("withdraw-msg").innerHTML="Enter Valid Input";
        }
    }
}


};

function print_info() {

    document.getElementById("title").innerHTML = account.mytitle;
    document.getElementById("balance").innerHTML = account.mybalance;
    document.getElementById("currency").innerHTML = account.mycurrency;
    document.getElementById("IBAN").innerHTML = account.myiban;
}
print_info();

function Transaction_History(val,msg)
{
   // document.getElementById("transaction-table").innerText +=
     //   new Date()  + msg + + val;

    var table = document.getElementById("transaction-table");
    var row = document.createElement("tr");
    var dateTd = document.createElement("td");
    var d = new Date();
    d = month[d.getMonth()] + ' '+d.getDate() +', '+d.getFullYear()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    dateTd.innerHTML = d;
    var typeTd = document.createElement("td");
    typeTd.innerHTML = msg;
    var amountTd = document.createElement("td");
    amountTd.innerHTML = val;
    row.appendChild(dateTd);
    row.appendChild(typeTd);
    row.appendChild(amountTd);
    table.appendChild(row);

}

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

/*

document.querySelector('#withdraw').addEventListener('onkeyup',function (e) {
    var key = e.keyCode;
    if (key === 13)
    {
        var val= document.querySelector("#withdraw").val;
    }
    var flag = !isNaN(val);
    if (flag && val  > 0) {
        if (val <= account.mybalance) {
            withdraw(val);
            document.querySelector('#withdraw').val = "";
        }
        else {
            document.querySelector('#withdraw-msg').innerHTML = "You Don't have Enough Balance to Proceed ";
        }
    }
    else
    {
        document.querySelector('#withdraw-msg').innerHTML = "Enter Valid Number";

    }
}); */


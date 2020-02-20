                                                                                                              //validation process for the FlowerpageSecurePayment

 var resultcardnumber=false;  
 var resultcvv=false;
 var resultdate=false;
 var resultname=false;
 var resultaddress=false;
 var resultcity=false;
 var resultpincode=false;
 var resultemail=false;         


        
                                                                                       //card number validation must contains 13 or 16 digits
function cardnumbervalidation() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var num = document.getElementById("cardNumber").value;
    var data = regex.test(num);
    if (data) {
        document.getElementById("cardnumber").style.display = "none";
        document.getElementById("cardnumberspace").style.display = "none";
        resultcardnumber=true;
    }
    else {
        document.getElementById("cardnumber").style.display = "block";
        document.getElementById("cardnumberspace").style.display = "block";
    }
}

                                                                                      //security code validation must contains 3 digits
function validateSecurityCode() {
    var cvv = document.getElementById("securityNumber").value;
    var regex = /^[0-9]{3}$/;
    var securitynum = regex.test(cvv);
    if (securitynum) {
        document.getElementById("cvv").style.display = "none";
        document.getElementById("cvvspace").style.display = "none";
        resultcvv=true;
    }
    else {
        document.getElementById("cvv").style.display = "block";
        document.getElementById("cvvspace").style.display = "block";
    }
}

                                                                                      //Date validation cannot be null
function ExpirydateValidation() {
    var month = document.getElementById("months").value;
    if (!month ==0) {

        document.getElementById("yearandmonth").style.display = "none";
         document.getElementById("datespace").style.display = "none";
        resultdate=true;
    }
    else {
        document.getElementById("yearandmonth").style.display = "block";
        document.getElementById("datespace").style.display = "block";
    }
}

                                                                                     //Card holder name validation must contains only letters
function CardholderNameValidation() {
    var name = document.getElementById("cardHoldersName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var cardholdername = regex.test(name);
    if (cardholdername) {

        document.getElementById("name").style.display = "none";
        document.getElementById("namespace").style.display = "none";
       resultname=true;
    }
    else {
        document.getElementById("name").style.display = "block";
        document.getElementById("namespace").style.display = "block";
    }
}

                                                                                    //Address validation must be contains contents
function Addressvalidation() {
    var address = document.getElementById("Address1").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address").style.display = "none";
        document.getElementById("addressspace").style.display = "none";
       resultaddress=true;
    }
    else {
        document.getElementById("address").style.display = "block";
        document.getElementById("addressspace").style.display = "block";
    }
}

                                                                                    //Address validation must be contains contents
function Address2validation() {
    var address = document.getElementById("Address").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address2").style.display = "none";
        document.getElementById("address2space").style.display = "none";

    }
    else {
        document.getElementById("address2").style.display = "block";
        document.getElementById("address2space").style.display = "block";
    }
}

                                                                                      //Address validation must be contains contents
function Address3validation() {
    var address = document.getElementById("Address3").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][(a-zA-Z)(0-9)a-z])?[a-zA-Z]*)*$/;
    var address = regex.test(address);
    if (address) {
        document.getElementById("address3").style.display = "none";
        document.getElementById("address3space").style.display = "none";
    }
    else {
        document.getElementById("address3").style.display = "block";
        document.getElementById("address3space").style.display = "block";
    }
}

                                                                                      //Town validation must contains only letters
function Townvalidation() {
    var town = document.getElementById("City").value;
    var regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
     var card = regex.test(town)
    if (card) {

        document.getElementById("city").style.display = "none";
        document.getElementById("cityspace").style.display = "none";
         resultcity=true;
    }
    else {
        document.getElementById("city").style.display = "block";
        document.getElementById("cityspace").style.display = "block";
    }
}

                                                                                    //Region validation must contains only the letters
function RegionValidation() {
    var regions = document.getElementById("Region").value;
    var regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    var regiondata = regex.test(regions)
    if (regiondata) {

        document.getElementById("region").style.display = "none";
        document.getElementById("regionspace").style.display = "none";

    }
    else {
        document.getElementById("region").style.display = "block";
        document.getElementById("regionspace").style.display = "block";
    }

} 
 
                                                                                       //Postal code validation must start with 6 and must contain only 6 digits
function Postalcodevalidation() {
    var postalcode = document.getElementById("pincode").value;
    var regex = /^(?:6[0-9]{5})$/;
    var code = regex.test(postalcode);
    if (code) {
        document.getElementById("zipcode").style.display = "none";
        document.getElementById("pincodespace").style.display = "none";
       resultpincode=true;
    }
    else {
        document.getElementById("zipcode").style.display = "block";
        document.getElementById("pincodespace").style.display = "block";
    }
}


                                                                                 //Telephone validation must contain 10 munbers
function telephonevalidation() {
    var telephone = document.getElementById("Telephone").value;
    var regex = /^\+?([6-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var telenum = regex.test(telephone)
    if (telenum) {
        document.getElementById("telephone").style.display = "none";
        document.getElementById("phonespace").style.display = "none";

    }
    else {
        document.getElementById("telephone").style.display = "block";
        document.getElementById("phonespace").style.display = "block";
    }
}

                                                                                //fax number must contains above 6 digits number to 13 digits numbers
function faxnumbervalidation() {
    var number = document.getElementById("Fax").value;
    var regex = /^\+?[0-9]{6,13}$/;
    var faxnum = regex.test(number)
    if (faxnum) {
        document.getElementById("fax").style.display = "none";
        document.getElementById("faxspace").style.display = "none";
    }
    else {
        document.getElementById("fax").style.display = "block";
        document.getElementById("faxspace").style.display = "block";
    }
}

                                                                                //email validation must be in coorect format 
function emailvalidation() {
    var mail = document.getElementById("email").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var maildata = regex.test(mail)
    if (maildata) {
        document.getElementById("emailID").style.display = "none";
        document.getElementById("emailspace").style.display = "none";
        resultemail=true;
    }
    else {
        document.getElementById("emailID").style.display = "block";
        document.getElementById("emailspace").style.display = "block";
    }
}

                                                                                   //Overall validation for the payment process
function Payment() {
    cardnumbervalidation();
    validateSecurityCode();
    ExpirydateValidation();
    CardholderNameValidation();
    Addressvalidation();
    Townvalidation();
    Postalcodevalidation();
    emailvalidation();
    if (resultcardnumber&&resultcvv&&resultdate&&resultname&&resultaddress&&resultcity&&resultpincode&&resultemail) {
        alert("payment successfull");
    }
else{
    alert("please fill the required fields");
}
}

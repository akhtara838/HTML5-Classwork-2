
function updateCountryView()
{
    var ddCountry = document.getElementById("country");
    var divCountry = document.getElementById("divCountry");
    if(ddCountry.value== "Yes")
    {
        divCountry.classList.remove("invisible");

    }
    else
    {
        divCountry.classList.add("invisible");
    }
}

function ValidateForm()
{
    var DoB = document.querySelector("#txtdob");
    var errorr = document.querySelector("#doberror");
    var valid = true;
    if(DoB.value == "")
    {
        errorr.classList.remove("invisible");
        errorr.innerHTML = "The Date of Birth cannot be empty."
        document.getElementById('txtdob').style.backgroundColor="yellow";
        valid=false;
    }
    else
    {
        var dobdate = new Date(DoB.value);
        var today = new Date();
        if(dobdate >= today)
        {
            errorr.classList.remove("invisible");
            errorr.innerHTML = "The Date of Birth must be before today's date."
            document.getElementById('txtdob').style.backgroundColor="yellow";
            DoB.classList.add("hasError");
            
            valid=false;
        }
        else{
            errorr.classList.add("invisible");
            errorr.innerHTML = "";
            DoB.classList.remove("hasError");
            document.getElementById('txtdob').style.backgroundColor="white";
        }

    }

    var ddCountry = document.querySelector("#country");
    if (ddCountry.value=="Yes")
    {
        var txtCountry = document.querySelector("#txtcountry");
        var text = document.getElementById("txtCountry");
        var err = document.querySelector("#divCountryError")
        if(txtCountry.value==""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            err.innerHTML = "List at least one country.";
            document.getElementById('txtcountry').style.backgroundColor="yellow";
            valid=false;

        }
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
            document.getElementById('txtcountry').style.backgroundColor="white";
        }
    }

    var elements = document.getElementsByTagName("input");
    var errorry = document.querySelector("#allerror");
    var count = document.querySelector("#divCountryError");
    var invalidChar = ['#', '&', '<','>', '!', '`','"','~'];
    for(let i =0; i <elements.length;i++)
    {
        for(let j =0; j<invalidChar.length;j++)
        {
            if(elements[i].value.indexOf(invalidChar[j])!= -1)
            {
                errorry.classList.remove("invisible");
                count.classList.remove("invisible");
                elements[i].classList.add("hasError");
                elements[i].style.backgroundColor="yellow";
                alert("The yellow boxes contain an invalid character(#&<>!\"\~`) and/or invalid format. Please check your responses before continuing.", 5000);
                valid=false;
            }
        }
    }
    return valid;
}
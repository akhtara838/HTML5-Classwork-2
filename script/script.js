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
    var DoB = document.querySelector("#dob");
    var errorr = document.querySelector("#doberror");
    var valid = true;
    if(DoB.value == "")
    {
        errorr.classList.remove("invisible");
        errorr.innerHTML = "The Date of Birth cannot be empty."
        DoB.classList.add("hasError");
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
            DoB.classList.add("hasError");
            valid=false;
        }
        else{
            errorr.classList.add("invisible");
            errorr.innerHTML = "";
            DoB.classList.remove("hasError");
        }

    }

    var ddCountry = document.querySelector("#country");
    if (ddCountry.value=="Yes")
    {
        var txtCountry = document.querySelector("#txtcountry");
        var err = document.querySelector("#divCountryError")
        if(txtCountry.value==""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            err.innerHTML = "List at least one country.";
            txtCountry.classList.add("hasError");
            valid=false;

        }
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    var elements = document.getElementsByTagName("input");
    var invalidChar = ['#', '&', '<','>', '!', '`','"','~'];
    for(let i =0; i <elements.length;i++)
    {
        for(let j =0; j<invalidChar.length;j++)
        {
            if(elements[i].value.indexOf(invalidChar[j])!= -1)
            {
                elements[i].classList.add("hasError");
                valid=false;
            }
        }
    }
    return valid;
}
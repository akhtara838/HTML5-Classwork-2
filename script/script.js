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
    if(DoB.value == "")
    {
        errorr.classList.remove("invisible");
        errorr.innerHTML = "The Date of Birth cannot be empty.";
        DoB.classList.add("hasError");
    }
    else
    {
        var dobdate = new Date(DoB.value);
        var today = new Date();
        if(dobdate >= today)
        {
            errorr.classList.remove("invisible");
            errorr.innerHTML = "The Date of Birth must be before today's date.";
            DoB.classList.add("hasError");
        }
        else{
            errorr.classList.add("invisible");
            errorr.innerHTML = "";
            DoB.classList.remove("hasError");
        }

    }
    return false;
}
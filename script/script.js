function updateCountryView()
{
    var ddCountry = document.getElementById("country");
    var divCountry = document.getElementById("divCountry");
    if(ddCountry.value== "Yes")
    {
        divCountry.classList.remove('invisible');
        
    }
}
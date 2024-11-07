const comp = ()=>{
    let str1 = document.getElementById('1').value;
    let str2 = document.getElementById('2').value;

    let equal = str1==str2 ? "Strings are equal using Equality Method" : "Strings are not Equal using Equality Method";
    let strictequal = str1===str2 ? "Strings are equal using Strict Equality Method" : "Strings are not Equal using Strict Equality Method";
    let len = str1.length===str2.length ? "Strings are equal using Length Method" : "Strings are not Equal using Length Method";
    let local = str1.localeCompare(str2);
    let ans = "";
    if(local < 0)
    {
        ans = `${str1} comes before ${str2}`;
    }
    else if(local > 0)
    {
        ans = `${str1} comes after ${str2}`;
    }
    else
    {
        ans = `${str1} is equal to ${str2}`;
    }
    document.getElementById('3').innerHTML = `${equal} <br> ${strictequal} <br> ${len} <br> ${ans}`;

}
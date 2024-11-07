const revString = ()=> {
    let str = document.getElementById('rev').value;
    let arr = str.split('');
    let i = 0;
    let j = arr.length-1;
    while(i <j)
    {
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
    }
    document.getElementById('revans').innerText = "Reverse a string is " + arr.join('');
}

const pallinString = ()=>{
    let str = document.getElementById('pallin').value;
    let arr = str.split('');
    let i = 0;
    let j = arr.length - 1;

    while(i <= j)
    {
        if(arr[i]!=arr[j])
        {
            document.getElementById('pallinans').innerText = "Not a pallindrome string";
            return;
        }
        i++;
        j--;
    }
    document.getElementById('pallinans').innerText = "It a pallindrome string";
}

const reptring = ()=>{
    let str = document.getElementById('rep').value;
    let a = document.getElementById('1').value;
    let b = document.getElementById('2').value;

    let newstring = str.replace(a,b);
    document.getElementById('repans').innerText = "New string is " + newstring;
}
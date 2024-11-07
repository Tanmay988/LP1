function generateForTable() {
    let num = parseInt(document.getElementById("forLoop").value);
    let result = ""; // String to store the table content
    if(isNaN(num))
    {
        document.getElementById("For-Loop").innerText = "Enter valid number" ;
        return;
    }

    // Generate multiplication table
    for(let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i} <br>`;
    }

    // Display the result in the <p> element
    document.getElementById("For-Loop").innerHTML = result;
}
function generateWhileTable()
{
    let num = parseInt(document.getElementById('whileLoop').value);
    let result = "";

    if(isNaN(num))
        {
            document.getElementById("while-Loop").innerText = "Enter valid number" ;
            return;
        }
    let i = 1;
    while(i < 11)
    {
        result += `${num} x ${i} = ${num * i} <br>`;
        i++;
    }
    document.getElementById('while-Loop').innerHTML = result;
}
function generateDoWhileTable() {
    let num = parseInt(document.getElementById('doWhileLoop').value);
    let result = "";

    if(isNaN(num))
        {
            document.getElementById("do-while-Loop").innerText = "Enter valid number" ;
            return;
        }
    let i = 1;

    // Do-while loop to generate multiplication table
    do {
        result += `${num} x ${i} = ${num * i} <br>`;
        i++;
    } while (i <= 10);  // Correct condition to iterate from 1 to 10

    // Display result in the <p> element
    document.getElementById('do-while-Loop').innerHTML = result;
}

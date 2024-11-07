function triangleArea() {
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);

    // Validation: Check if inputs are valid numbers and greater than 0
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        document.getElementById('ans').innerHTML = "Please enter valid positive numbers for all sides.";
        return;
    }

    // Validation: Check if sides form a valid triangle
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
        document.getElementById('ans').innerHTML = "The given sides do not form a valid triangle.";
        return;
    }
    // Calculate semi-perimeter
    let s = (a + b + c) / 2;

    // Calculate area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Check if area is a valid number (not NaN or imaginary)
    if (isNaN(area) || area <= 0) {
        document.getElementById('ans').innerHTML = "Error in calculating the area. Please check the inputs.";
    } else {
        document.getElementById('ans').innerHTML = "Area of the triangle: " + area.toFixed(2);
    }
}

function RectangleArea() {
    let l = parseFloat(document.getElementById('L').value);
    let b = parseFloat(document.getElementById('Breadth').value);

    // Validation: Check if inputs are valid numbers and greater than 0
    if (isNaN(l) || isNaN(b) || l <= 0 || b <= 0) {
        document.getElementById('disp').innerText = "Please enter valid positive numbers for length and breadth.";
        return;
    }

    let areaRect = l * b;
    document.getElementById('disp').innerText = "Area of Rectangle: " + areaRect;
}

function circleArea() {
    let r = parseFloat(document.getElementById('R').value);

    if(isNaN(r) || r <= 0)
    {
        document.getElementById('display').innerText = "Please enter valid Radius";
        return;
    }
    let area = r * r * Math.PI;
    document.getElementById('display').innerText = "Area of circle " + area.toFixed(2);

}


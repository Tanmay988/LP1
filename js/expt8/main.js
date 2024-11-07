const btn = document.getElementById('1');

btn.addEventListener('focus', function (event) {
    document.body.style.backgroundColor = 'red';
},true);

document.addEventListener('blur', function (event) {
        document.body.style.backgroundColor = '';
},true);


fetch('https://rich-erin-angler-hem.cyclic.app/students/available', {
    method: 'GET'
})
.then(response => response.json())
.then(data => {
    const codes = data.map(currency => currency.code);
    const currencySelects = document.querySelectorAll('#transacCurrency, #currency');

    currencySelects.forEach(select => {
        codes.forEach(code => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = code;
            select.appendChild(option);
        });
    });
});

// [
//     {
//         "name": "United States Dollar",
//         "symbol": "$",
//         "code": "USD"
//     },
//     {
//         "name": "Euro",
//         "symbol": "€",
//         "code": "EUR"
//     },
//     {
//         "name": "United Arab Emirates Dirham",
//         "symbol": "dh",
//         "code": "AED"
//     },
//     {
//         "name": "Lebanese Pound",
//         "symbol": "L.L.",
//         "code": "LBP"
//     }
// ]

// fetch('https://crowded-cyan-wildebeest.cyclic.app/students/convert', {
//   method: 'POST',
//   body: new FormData(document.querySelector('#test-fetch'))
// })
//   .then(response => response.text())
//   .then(data => alert(data)); 
  


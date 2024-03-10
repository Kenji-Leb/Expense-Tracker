fetch('https://crowded-cyan-wildebeest.cyclic.app/students/available', {
  method: 'GET'
})
  .then(response => response.text())
  .then(data => alert(data));

fetch('https://crowded-cyan-wildebeest.cyclic.app/students/convert', {
  method: 'POST',
  body: new FormData(document.querySelector('#test-fetch'))
})
  .then(response => response.text())
  .then(data => alert(data)); 
  
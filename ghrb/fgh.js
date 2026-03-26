fetch('https://thegportal.github.io/ghrb/gtxt.txt')
  .then(response => {
    if (!response.ok) throw new Error('Network response was baddd~');
    return response.text();
  })
  .then(data => {
    console.log(data);
    document.body.innerHTML = data;
  })
  .catch(error => console.error('Fetch error: ', error, ' :('));

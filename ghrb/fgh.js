fetch('https://thegportal.github.io/ghrb/gtxt.txtt')
  .then(response => {
    if (!response.ok) throw new Error('Network response was baddd~');
    return response.text();
  })
  .then(data => {
    console.log(data);
    document.body.innerHTML = data;
  })
  .catch(error => {
    console.error('Fetch error: ', error, ' :(');
    document.body.innerHTML = `<p>Failed to fetch the GHub data  :(<br>Report a problem:</p><br>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbnf5yjlLtawLyMVYepb8VwwCwgtV4fABgQOi0eBD3_E2npQ/viewform?embedded=true" width="640" height="425">Loading…</iframe>`;
  });

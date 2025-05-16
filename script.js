const search = document.getElementById('search');
const quteLst  = document.getElementById('quote');
const error = document.getElementById('error');
let quotes  = [];
fetch('https://dummyjson.com/quotes')
    .then(res => {
        if(!res.ok) throw new Error('Error, response Not Found');
        return res.json();
    })
    .then(data => {
        quotes = data.quotes;
        showQuotes(quotes);
    })
    .catch(error => {
        error.textContent = 'Failed to load';
        console.log(error);
    });
function showQuotes(quotesF){
    quteLst.innerHTML = '';
    quotesF.forEach(quote => {
        const s = document.createElement('li');
        s.textContent = quote.quote;
        quteLst.appendChild(s);
    })
}

search.addEventListener('input', () => {
    const srh = search.value.toLowerCase();
    const fltr = quotes.filter(q => q.quote.toLowerCase().includes(srh));
    showQuotes(fltr);
})


const links = document.querySelectorAll('a');

function handleClick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
    const responseURL = await fetch(url);
    const responseText = await responseURL.text()

    replaceContent(responseText);
}

function replaceContent(newText){
    const div = document.createElement('div');
    div.innerHTML = newText;
    
    const oldContent = document.querySelector('.content');
    const newContent = div.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = div.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
})

links.forEach((link) => {
    link.addEventListener('click', handleClick)
})
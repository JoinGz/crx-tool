import "../common/base.css"

const moreBtn = document.querySelector('#moreBtn')

moreBtn?.addEventListener('click', () => {
  chrome.tabs.create({url: './options.html'});
})

export {}
/* eslint-disable no-undef */
// sense if the tab is active

chrome.tabs.onActivated.addListener((tab) => {
  // start a new session if target url
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    if (current_tab_info.url.includes('leetcode.com')) {
      console.log(current_tab_info.url);
    }
  });
});

// Show the tool tip
chrome.browserAction.onClicked.addListener('click', function () => {
  const popoverHTML = 
  const popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
  })
})

// Load our data from our data base, or set us up with solid items
let data = (localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : {};
let total = (localStorage.getItem('total')) ? localStorage.getItem('total') : 0;





// function for saving our data
function saveData(totes, obj) { 
  localStorage.setItem('data', JSON.stringify(obj));
  localStorage.setItem('total', totes);
}

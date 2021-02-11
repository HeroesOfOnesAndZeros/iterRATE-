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

// Evaluate if this is a first visit
let data = localStorage.getItem('data');
if (!data) {
  localStorage.setItem('data', data);
  localStorage.setItem('total', 0);
}

// load existing data
data = localStorage.getItem('data');
let total = localStorage.getItem('total') ? ;











// function for saving our data
function saveData (totes, obj) { 
  localStorage.setItem('data', obj);
  localStorage.setItem('total', totes);
}

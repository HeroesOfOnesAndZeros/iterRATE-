// sense if the tab is active

chrome.tabs.query({
    active:true,
    currentWindow: true
}, function(tabs) {
    var tab = tabs[0];
    var url = tabs.url;
  console.log(url)
})


// chrome.tabs.onActivated.addListener(tab => {
//   //start a new session if target url
//   chrome.tabs.get(tab.tabId, current_tab_info => {
    
//     if(current_tab_info.url.includes('leetcode.com')){
//        console.log(current_tab_info.url)
//     }
//   })
    
// })

// get the tab to make sure it's one of our domains 
// console.log domain
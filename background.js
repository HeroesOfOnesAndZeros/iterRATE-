const timesOfCoding = (localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : {};

let currentTab;  
let loginTime;
let duration = (localStorage.getItem('total')) ? localStorage.getItem('total') : 0;
let studyTab;
const hardData = {};

chrome.tabs.onActivated.addListener((tab) => {
// start a new session if target url  
  
  chrome.tabs.get(tab.tabId, (current_tab_info) => {

    if(current_tab_info.url.includes('leetcode.com')){
      currentTab = current_tab_info.url;
      hardData.studyTab = tab;
      if(!timesOfCoding[current_tab_info.url]){
        timesOfCoding[current_tab_info.url] = {};
      }
      loginTime = new Date();
      timesOfCoding[current_tab_info.url][loginTime] = 'start'; 
    }
    if(!current_tab_info.url.includes('leetcode.com')){
      let lastSite;
      if(timesOfCoding[currentTab]){
        
        for(const keys of Object.keys(timesOfCoding[currentTab])){
          lastSite = timesOfCoding[currentTab][keys]
          
        }
      }
      
      if(lastSite === 'start'){
        timesOfCoding[currentTab][new Date()] = 'stop'
        let session = 0;

        for(let i = 0; i < Object.keys(timesOfCoding[currentTab]).length - 1; i += 2){
          session = (Date.parse(Object.keys(timesOfCoding[currentTab])[i + 1]) - Date.parse(Object.keys(timesOfCoding[currentTab])[i]))
        }
        duration += session; 
        hardData.duration = duration;
      }
      
    }   
  });
});




chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    console.log(hardData.studyTab.tabId, tabid, Number(hardData.duration))
    if(hardData.studyTab.tabId === tabid){
    
        //transfer object and stuff back to database here.  
        alert('you should get back to studying')
        saveData(hardData.duration, timesOfCoding)
    }
    
   })
   
   chrome.windows.onRemoved.addListener(function(windowid) {
    alert("window closed")
   })
   

// Show the tool tip
chrome.browserAction.onClicked.addListener('click', function () {

    const popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
      container: 'body'
    })
  })

// function for saving our data
function saveData(totes, obj) { 
    localStorage.setItem('data', JSON.stringify(obj));
    localStorage.setItem('total', totes);
  }



//  || current_tab_info.url.includes('csx.codesmith.io') || current_tab_info.url.includes('www.codewars.com/') || current_tab_info.url.includes('https://developer.mozilla.org/'))
let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  // log.textContent = `The field's value is ${e.target.value.length} character(s) long.`;
  getTab().then(tab => log.textContent = `url:${tab.url} title: ${tab.title}`);
  
}

async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0];
}
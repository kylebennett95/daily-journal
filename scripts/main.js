import {getQuotes} from "./entries.js"


//console.log(entry)


// const htmlString = '<h1>Previous Entries</h1>'
// document.getElementById('entries').innerHTML = htmlString
const getEntries = () => {
let html = "";
const entry = getQuotes();
for (let i = 0; i < entry.length; i++) {
    html += `<div class="taco">
        <p>${entry[i].concept}</p>
        <p>${entry[i].date}</p>
        <p>${entry[i].mood}</p>
        <p>${entry[i].entry}</p>
    </div>`
}
document.getElementById('entries').innerHTML = html;
}

getEntries()
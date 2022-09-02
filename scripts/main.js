import {addNewEntry, getQuotes} from "./entries.js"


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

document.addEventListener("click", (e) => {
    e.preventDefault
    if (e.target.id === "recordButton") {
        console.log("recording entry")
        //Logic to get all values from form
        const date = document.getElementById("date")?.value
        const concCovered = document.getElementById("concepts")?.value
        const jEntry = document.getElementById("text")?.value
        const mood = document.getElementById("moods")?.value

        //format entries into object
    const newEntry = {
        date: date,
        concept: concCovered,
        entry: jEntry,
        mood: mood
    }

    console.log(newEntry)

    addNewEntry(newEntry)
    }
});

document.addEventListener("stateChanged", event => {
    getEntries()
});

getEntries()


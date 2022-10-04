import {addNewEntry, fetchEntries, getEntries, sendEntries} from "./entries.js"

const postEntries = async () => {
let html = "";
await fetchEntries();
const entry = getEntries();
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

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const date = document.querySelector("input[name='entryDate']").value
        const concCovered = document.querySelector("input[name='concepts']").value
        const jEntry = document.querySelector("input[name='text']").value
        const mood = document.querySelector("input[name='moods']").value

        //format entries into object
    const newEntry = {
        date: date,
        concept: concCovered,
        entry: jEntry,
        mood: mood
    }

    sendEntries(newEntry)
    }
});

document.addEventListener("stateChanged", event => {
    postEntries()
});

postEntries()
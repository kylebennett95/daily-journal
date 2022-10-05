import {fetchEntries, getEntries, sendEntries} from "./entries.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "recordButton") {
        const date = document.querySelector("input[name='entryDate']").value
        const concCovered = document.querySelector("input[name='concepts']").value
        const jEntry = document.querySelector("textarea[id='text']").value
        const mood = document.querySelector("select[id='moods']").value

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

document.addEventListener("stateChanged", event => {
    postEntries()
});

postEntries()

const render = async () => {
    await fetchEntries()
    mainContainer.innerHTML = postEntries()
}

  mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const API = "http://localhost:8088"

let journalEntries = [];

export const fetchEntries = async () => {
  const dataFetch = await fetch(`${API}/entries`)
  const serviceEntries = await dataFetch.json()
  journalEntries = serviceEntries
}

// 

export const getEntries = () => {
    return journalEntries.map(entries => ({...entries}))
}

export const addNewEntry = (entries) => {
    const newId = getNewEntryId()
    entries.id = newId
    journalEntries.push(entries)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const sendEntries = async (entriesPosted) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entriesPosted)
    }
  
    const mainContainer = document.querySelector("#container");
    const response = await fetch(`${API}/entries`, fetchOptions);
    const responseJson = await response.json();
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    return responseJson;
  }

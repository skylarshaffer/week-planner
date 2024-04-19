"use strict";
const $addNewEventButton = document.querySelector('#add-new-event-button');
const $dialog = document.querySelector('dialog');
const $cancelButton = document.querySelector('#cancel-button');
const $confirmButton = document.querySelector('#confirm-button');
const $formInputs = document.querySelector('form');
const $tbody = document.querySelector('tbody');
const domQueries = {
    $addNewEventButton,
    $dialog,
    $cancelButton,
    $confirmButton,
    $formInputs,
    $tbody,
};
console.dir($tbody);
for (const key in domQueries) {
    if (!domQueries[key])
        throw new Error(`The ${key} dom query failed`);
}
//  LISTENERS
$addNewEventButton.addEventListener('click', () => {
    $dialog.showModal();
});
$cancelButton.addEventListener('click', () => {
    $dialog.close();
});
$formInputs.addEventListener('submit', (event) => {
    event.preventDefault();
    const $formElements = $formInputs.elements;
    const formSubmission = {
        time: $formElements.time.value,
        day: $formElements.day.value,
        information: $formElements.information.value,
        entryId: data.nextEntryId
    };
    $tbody.prepend(renderEntry(formSubmission));
    data.entries.unshift(formSubmission);
    $dialog.close();
});
function renderEntry(entry) {
    const $tr = document.createElement('tr');
    $tr.classList.add('entry');
    $tr.dataset.entryId = data.nextEntryId.toString();
    $tr.dataset.day = 'Monday';
    const $tdTime = document.createElement('td');
    const $tdInformation = document.createElement('td');
    const $tdActions = document.createElement('td');
    // FOR SUBMIT LISTENER-------
    // for(let i = 0; i < data.entries.length; i++){
    // if(data.entries[i].entryId === formS )
    //   data.entries[i].time = $tdTime.innerHTML
    //   $tdDay.innerHTML
    //   $tdInformation.innerHTML
    $tdTime.innerHTML = entry.time;
    $tdInformation.innerHTML = entry.information;
    $tr.appendChild($tdTime);
    $tr.appendChild($tdInformation);
    return $tr;
}

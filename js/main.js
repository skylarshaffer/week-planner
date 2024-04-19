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
$confirmButton.addEventListener('click', () => {
    const $formElements = $formInputs.elements;
    const formSubmission = {
        time: $formElements.time.selectedOptions,
        day: $formElements.day.selectedOptions,
        information: $formElements.information.value,
    };
    data.entries.unshift(formSubmission);
    $dialog.close();
});

'use strict';
//  DOM
const $addNewEventButton = document.querySelector('#add-new-event-button');
const $dialog = document.querySelector('dialog');
const $cancelButton = document.querySelector('#cancel-button');
const $confirmButton = document.querySelector('#confirm-button');
const domQueries = {
  $addNewEventButton,
  $dialog,
  $cancelButton,
  $confirmButton,
};
for (const key in domQueries) {
  if (!domQueries[key]) throw new Error(`The ${key} dom query failed`);
}
//  LISTENERS
$addNewEventButton.addEventListener('click', () => {
  $dialog.showModal();
});
$cancelButton.addEventListener('click', () => {
  $dialog.close();
});
$confirmButton.addEventListener('click', () => {
  $dialog.close();
});

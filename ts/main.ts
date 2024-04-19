const $addNewEventButton = document.querySelector('#add-new-event-button');
const $dialog = document.querySelector('dialog');
const $cancelButton = document.querySelector('#cancel-button');
const $confirmButton = document.querySelector('#confirm-button');

if (!$addNewEventButton) throw new Error (`the '#add-new-event-button' query failed`);
if (!$dialog) throw new Error (`the 'dialog' query failed`);
if (!$cancelButton) throw new Error (`the '#cancel-button' query failed`);
if (!$confirmButton) throw new Error (`the '#confirm-button' query failed`);

$addNewEventButton.addEventListener('click', (): void => {
  $dialog.showModal();
})

$cancelButton.addEventListener('click', () => {
  $dialog.close();
})

$confirmButton.addEventListener('click', () => {
  $dialog.close();
})

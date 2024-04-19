//  DOM
const $addNewEventButton = document.querySelector(
  '#add-new-event-button',
) as HTMLButtonElement;
const $dialog = document.querySelector('dialog') as HTMLDialogElement;
const $cancelButton = document.querySelector(
  '#cancel-button',
) as HTMLButtonElement;
const $confirmButton = document.querySelector(
  '#confirm-button',
) as HTMLButtonElement;

const domQueries: Record<string, any> = {
  $addNewEventButton,
  $dialog,
  $cancelButton,
  $confirmButton,
};

for (const key in domQueries) {
  if (!domQueries[key]) throw new Error(`The ${key} dom query failed`);
}

//  LISTENERS
$addNewEventButton.addEventListener('click', (): void => {
  $dialog.showModal();
});

$cancelButton.addEventListener('click', () => {
  $dialog.close();
});

$confirmButton.addEventListener('click', () => {
  $dialog.close();
});

interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  information: HTMLTextAreaElement;
}

interface Entry {
  time: string;
  day: string;
  information: string;
}

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

const $formInputs = document.querySelector('form') as HTMLFormElement;

const $tbody = document.querySelector('tbody') as HTMLTableSectionElement;

const domQueries: Record<string, any> = {
  $addNewEventButton,
  $dialog,
  $cancelButton,
  $confirmButton,
  $formInputs,
  $tbody,
};

console.dir($tbody);

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
  const $formElements = $formInputs.elements as FormElements;
  const formSubmission: Entry = {
    time: $formElements.time.selectedIndex,
    day: $formElements.day.selectedIndex,
    information: $formElements.information.value,
  };

  data.entries.unshift(formSubmission);

  $dialog.close();
});

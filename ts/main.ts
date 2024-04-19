interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  information: HTMLTextAreaElement;
}

interface Entry {
  time: string;
  day: string;
  information: string;
  entryId: number;
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
const $select = document.querySelector('select') as HTMLSelectElement;

const $formInputs = document.querySelector('form') as HTMLFormElement;

const $tbody = document.querySelector('tbody') as HTMLTableSectionElement;

const domQueries: Record<string, any> = {
  $addNewEventButton,
  $dialog,
  $cancelButton,
  $confirmButton,
  $formInputs,
  $tbody,
  $select,
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

$formInputs.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $formInputs.elements as FormElements;
  const formSubmission: Entry = {
    time: $formElements.time.value,
    day: $formElements.day.value,
    information: $formElements.information.value,
    entryId: data.nextEntryId,
  };
  $tbody.prepend(renderEntry(formSubmission));

  data.entries.unshift(formSubmission);

  $dialog.close();
});

function renderEntry(entry: Entry): HTMLTableRowElement {
  const $tr = document.createElement('tr');
  $tr.classList.add('entry');
  $tr.dataset.entryId = data.nextEntryId.toString();
  $tr.dataset.day = 'Monday';

  const $tdTime = document.createElement('td') as HTMLTableCellElement;
  const $tdInformation = document.createElement('td') as HTMLTableCellElement;
  const $tdActions = document.createElement('td') as HTMLTableCellElement;
  const $editButton = document.createElement('button') as HTMLButtonElement;
  const $deleteButton = document.createElement('button') as HTMLButtonElement;

  // FOR SUBMIT LISTENER-------
  // for(let i = 0; i < data.entries.length; i++){
  // if(data.entries[i].entryId === formS )
  //   data.entries[i].time = $tdTime.innerHTML
  //   $tdDay.innerHTML
  //   $tdInformation.innerHTML

  $tdTime.innerHTML = entry.time;
  $tdInformation.innerHTML = entry.information;

  $editButton.textContent = 'Edit';
  $deleteButton.textContent = 'Delete';

  $editButton.classList.add('edit-button');
  $deleteButton.classList.add('delete-button');

  $tr.appendChild($tdTime);
  $tr.appendChild($tdInformation);
  $tdActions.appendChild($editButton);
  $tdActions.appendChild($deleteButton);
  $tr.appendChild($tdActions);

  return $tr;
}

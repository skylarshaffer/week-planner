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
const $formTime = document.querySelector('#time') as HTMLSelectElement;
const $formDay = document.querySelector('#day') as HTMLSelectElement;
const $formInformation = document.querySelector(
  '#information',
) as HTMLTextAreaElement;

const domQueries: Record<string, any> = {
  $addNewEventButton,
  $dialog,
  $cancelButton,
  $confirmButton,
  $formInputs,
  $tbody,
  $select,
  $formTime,
  $formDay,
  $formInformation,
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
if(!data.editing){

}
  data.entries.unshift(formSubmission);
if (data.editing){
  $tbody.replaceChild(renderEntry(formSubmission),);
}
  data.editing = null;
  $dialog.close();
});

function renderEntry(entry: Entry): HTMLTableRowElement {
  const $tr = document.createElement('tr');
  $tr.classList.add('hidden');
  $tr.classList.add('entry');
  $tr.dataset.entryId = data.nextEntryId.toString();
  $tr.dataset.day = entry.day;

  const $tdTime = document.createElement('td') as HTMLTableCellElement;
  const $tdInformation = document.createElement('td') as HTMLTableCellElement;
  const $tdActions = document.createElement('td') as HTMLTableCellElement;
  $tdActions.classList.add('hbar');
  const $editButton = document.createElement('button') as HTMLButtonElement;
  const $deleteButton = document.createElement('button') as HTMLButtonElement;


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

$select.addEventListener('change', (event: Event) => {
  const eventTarget = event.target as HTMLSelectElement;
  data.view = eventTarget.value;
  $tbody.dataset.selected = eventTarget.value;
});

$tbody.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLButtonElement;
  const selectedTr = eventTarget.closest('tr') as HTMLTableRowElement;

  event.preventDefault();
  if (eventTarget.innerHTML === 'Delete') {
    selectedTr.remove();
  }

  if (eventTarget.innerHTML === 'Edit') {

    for(let i = 0; i < data.entries.length; i++){
      if(data.entries[i].entryId.toString() === selectedTr.dataset.entryId){
        data.editing = data.entries[i];
        break
      }
    }

    if (!data.editing) throw new Error("The data.entries failed");
    $formDay.value = data.editing.day;
    $formTime.value = data.editing.time;
    $formInformation.value = data.editing.information;

    $dialog.showModal();
  }
});

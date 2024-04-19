var $addNewEventButton = document.querySelector('#add-new-event-button');
var $dialog = document.querySelector('dialog');
var $cancelButton = document.querySelector('#cancel-button');
var $confirmButton = document.querySelector('#confirm-button');
if (!$addNewEventButton)
    throw new Error("the '#add-new-event-button' query failed");
if (!$dialog)
    throw new Error("the 'dialog' query failed");
if (!$cancelButton)
    throw new Error("the '#cancel-button' query failed");
if (!$confirmButton)
    throw new Error("the '#confirm-button' query failed");
$addNewEventButton.addEventListener('click', function () {
    $dialog.showModal();
});
$cancelButton.addEventListener('click', function () {
    $dialog.close();
});
$confirmButton.addEventListener('click', function () {
    $dialog.close();
});

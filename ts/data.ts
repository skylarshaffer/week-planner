interface Data {
  entries: Entry[];
  editing: null | Entry;
  nextEntryId: number;
}

const data: Data = {
  entries: [],
  editing: null,
  nextEntryId: 1,
};

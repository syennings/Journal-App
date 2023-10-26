import { EntryNotes } from "./EntryNotes";
import { Button } from "./CreateButton";
import { EntryMotto } from "./EntryMotto";

export function EntryForm() {
  return (
    <div className="Main">
      <h2> NEW ENTRY </h2>
      <EntryMotto />
      <EntryNotes />
      <Button />
    </div>
  );
}

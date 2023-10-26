import { EntryForm } from "./EntryForm";
import { TabBar } from "./TabBar";
import { EntryList } from "./Entries/EntryList";

export function Main() {
  return (
    <>
      <EntryForm />
      <TabBar> </TabBar>
      <EntryList> </EntryList>
    </>
  );
}

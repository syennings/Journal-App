import { EntryDate } from "./EntryDate";
import { EntryTitle } from "./EntryTitle";
import { EntryDescription } from "./EntryDescription";
import { FavouriteIcon } from "./FavouriteIcon";
import star from "../../resources/star-filled.svg";
import emptystar from "../../resources/star.svg";

export function EntryList() {
  return (
    <>
      <EntryTitle title="The first entry title"></EntryTitle>
      <EntryDate date="23.09.2023"></EntryDate>
      <EntryDescription text="This is the text for the first entry.This is the text for the first entry.This is the text for the first entry."></EntryDescription>
      <FavouriteIcon
        img
        src={star}
        alt="Favourited-Star"
        width="20"
        height="20"
      />
      <EntryTitle title="The second entry title"></EntryTitle>
      <EntryDate date="22.09.2223"></EntryDate>
      <EntryDescription text="This is the text for the second entry."></EntryDescription>
      <FavouriteIcon
        img
        src={emptystar}
        alt="Favourited-Star"
        width="20"
        height="20"
      />
    </>
  );
}

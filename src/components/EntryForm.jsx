export function EntryForm() {
  return (
    <div className="entry-form">
      <h2> New Entry </h2>
      <label htmlFor="motto"> Motto: </label>
      <textarea id="motto" placeholder="Enter Your Motto Here" />
    </div>
  );
}

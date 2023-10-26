export function TabBar() {
  let favouriteCount = 2;
  let entriesCount = 1;

  return (
    <div className="tab-bar">
      <div className="tab">
        <span>Entries</span>
        <div className="badge">{entriesCount}</div>
      </div>
      <div className="tab">
        <span>Favorites</span>
        <div className="badge">{favouriteCount}</div>
      </div>
    </div>
  );
}

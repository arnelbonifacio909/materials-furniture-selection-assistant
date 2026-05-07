import { roomEmojis } from "../data/roomOptions";

export default function Summary({ room, selections, categories }) {
  const selectedEntries = Object.entries(selections).filter(([, v]) => v);
  const missingCount = categories
    ? categories.filter((c) => !selections[c]).length
    : 0;
  const totalCount = categories ? categories.length : 0;
  const progress = totalCount > 0 ? ((totalCount - missingCount) / totalCount) * 100 : 0;

  return (
    <div className="summary-card">
      <h2 className="section-label">Live Summary</h2>

      {!room ? (
        <p className="empty-state">Select a room to begin.</p>
      ) : (
        <>
          <div className="summary-room">
            <span className="summary-room-emoji">{roomEmojis[room]}</span>
            <span className="summary-room-name">{room}</span>
          </div>

          <div className="progress-wrap">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="progress-label">
              {totalCount - missingCount}/{totalCount} selected
            </span>
          </div>

          {selectedEntries.length === 0 ? (
            <p className="empty-state">No options chosen yet.</p>
          ) : (
            <ul className="summary-list">
              {selectedEntries.map(([cat, val]) => (
                <li key={cat} className="summary-item">
                  <span className="summary-cat">{cat}</span>
                  <span className="summary-val">{val}</span>
                </li>
              ))}
            </ul>
          )}

          {missingCount > 0 && (
            <p className="missing-hint">
              {missingCount} field{missingCount > 1 ? "s" : ""} still to complete
            </p>
          )}
        </>
      )}
    </div>
  );
}

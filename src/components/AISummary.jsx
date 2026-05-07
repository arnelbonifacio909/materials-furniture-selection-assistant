const costColors = {
  High: "badge--high",
  Medium: "badge--medium",
  Low: "badge--low",
};

export default function AISummary({ summary, onGenerate, canGenerate }) {
  return (
    <div className="ai-summary-card">
      <div className="ai-summary-header">
        <h2 className="section-label">AI Design Summary</h2>
        <button
          onClick={onGenerate}
          disabled={!canGenerate}
          className="generate-btn"
        >
          ✦ Generate Summary
        </button>
      </div>

      {!summary ? (
        <p className="empty-state">
          {canGenerate
            ? "Click generate to analyse your selections."
            : "Select a room and at least one option first."}
        </p>
      ) : (
        <div className="ai-output">

          <div className="ai-section">
            <span className="ai-section-title">Detected Style</span>
            <span className="style-badge">{summary.styleGuess}</span>
          </div>

          <div className="ai-section">
            <span className="ai-section-title">Selected Items</span>
            <ul className="ai-items-list">
              {summary.selectedItems.map(({ category, material, cost }) => (
                <li key={category} className="ai-item-row">
                  <span className="ai-item-cat">{category}</span>
                  <span className="ai-item-mat">{material}</span>
                  <span className={`cost-badge ${costColors[cost]}`}>{cost}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ai-section">
            <span className="ai-section-title">Overall Cost Tier</span>
            <span className={`cost-badge cost-badge--lg ${costColors[summary.overallCost]}`}>
              {summary.overallCost}
            </span>
          </div>

          {summary.warnings.length > 0 && (
            <div className="ai-section">
              <span className="ai-section-title">Warnings</span>
              <ul className="ai-warn-list">
                {summary.warnings.map((w, i) => (
                  <li key={i} className="ai-warn-item">{w}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.missingCategories.length > 0 && (
            <div className="ai-section">
              <span className="ai-section-title">Missing Selections</span>
              <ul className="ai-missing-list">
                {summary.missingCategories.map((cat) => (
                  <li key={cat} className="ai-missing-item">— {cat}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.recommendations.length > 0 && (
            <div className="ai-section">
              <span className="ai-section-title">Recommendations</span>
              <ul className="ai-rec-list">
                {summary.recommendations.map((r, i) => (
                  <li key={i} className="ai-rec-item">{r}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.isComplete && summary.warnings.length === 0 && (
            <div className="ai-complete">
              ✓ Room fully configured — great choices!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

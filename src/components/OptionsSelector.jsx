export default function OptionsSelector({ categories, selections, onSelect }) {
  if (!categories || Object.keys(categories).length === 0) return null;

  return (
    <div className="options-selector">
      <h2 className="section-label">Customise Materials & Furniture</h2>
      <div className="options-grid">
        {Object.entries(categories).map(([category, choices]) => (
          <div key={category} className="option-card">
            <h3 className="option-category">{category}</h3>
            <div className="option-choices">
              {choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() => onSelect(category, choice)}
                  className={`choice-btn ${
                    selections[category] === choice ? "choice-btn--active" : ""
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

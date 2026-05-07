import { useState } from "react";
import RoomSelector from "./components/RoomSelector";
import OptionsSelector from "./components/OptionsSelector";
import Summary from "./components/Summary";
import AISummary from "./components/AISummary";
import { roomOptions } from "./data/roomOptions";
import { generateSummary } from "./utils/generateSummary";

const rooms = Object.keys(roomOptions);

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [aiSummary, setAiSummary] = useState(null);

  function handleRoomSelect(room) {
    setSelectedRoom(room);
    setSelectedOptions({});
    setAiSummary(null);
  }

  function handleOptionSelect(category, value) {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
    setAiSummary(null);
  }

  function handleGenerate() {
    const categories = selectedRoom
      ? Object.keys(roomOptions[selectedRoom])
      : [];
    const result = generateSummary(selectedRoom, selectedOptions, categories);
    setAiSummary(result);
  }

  const currentCategories = selectedRoom
    ? roomOptions[selectedRoom]
    : {};
  const categoryNames = Object.keys(currentCategories);
  const hasAnySelection = Object.values(selectedOptions).some(Boolean);
  const canGenerate = !!selectedRoom && hasAnySelection;

  return (
    <div className="app-shell">
      <main className="app-main">
        <div className="col-left">
          <RoomSelector
            rooms={rooms}
            selectedRoom={selectedRoom}
            onSelect={handleRoomSelect}
          />

          {selectedRoom && (
            <OptionsSelector
              categories={currentCategories}
              selections={selectedOptions}
              onSelect={handleOptionSelect}
            />
          )}
        </div>

        <div className="col-right">
          <Summary
            room={selectedRoom}
            selections={selectedOptions}
            categories={categoryNames}
          />

          <AISummary
            summary={aiSummary}
            onGenerate={handleGenerate}
            canGenerate={canGenerate}
          />
        </div>
      </main>

      <footer className="app-footer">
        © 2026 Interio — Interior Design Planner
      </footer>
    </div>
  );
}

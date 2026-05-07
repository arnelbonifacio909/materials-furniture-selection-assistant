import { roomEmojis } from "../data/roomOptions";

export default function RoomSelector({ rooms, selectedRoom, onSelect }) {
  return (
    <div className="room-selector">
      <h2 className="section-label">Select Room</h2>
      <div className="room-grid">
        {rooms.map((room) => (
          <button
            key={room}
            onClick={() => onSelect(room)}
            className={`room-btn ${selectedRoom === room ? "room-btn--active" : ""}`}
          >
            <span className="room-emoji">{roomEmojis[room]}</span>
            <span className="room-name">{room}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

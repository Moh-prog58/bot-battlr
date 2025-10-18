import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army = [], onRemove, onDelete }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army ({army.length})</h2>

      <div className="bot-grid">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRemove(bot)}
            onDelete={() => onDelete(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

function BotCard({ bot, onClick, onDelete }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p className="bot-class">{bot.bot_class}</p>
      <p>
        ❤️ {bot.health} &nbsp; ⚔️ {bot.damage} &nbsp; 🛡️ {bot.armor}
      </p>
      {onDelete && (
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot.id);
          }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;

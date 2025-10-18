import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onClick={() => onAdd(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;

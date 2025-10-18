import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete bot");

        setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
        setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onRemove={removeFromArmy}
        onDelete={deleteBot}
      />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;

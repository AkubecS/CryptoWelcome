const messages = [
  "Hello, Crypto! 🪙",
  "Welcome to Web3 🌐",
  "HODL your dreams 💎",
  "Blockchain vibes only ⚡",
  "Stay decentralized 🔗"
];

document.getElementById("btn").addEventListener("click", () => {
  const title = document.getElementById("title");
  title.textContent = messages[Math.floor(Math.random() * messages.length)];
});

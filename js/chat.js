function sendMessage() {
  var userInput = document.getElementById("messageInput").value;

  if (!userInput.trim()) {
      return;
  }

  var userMessageItem = document.createElement("li");
  userMessageItem.textContent = "You : " + userInput;

  var messageList = document.getElementById("messageList");
  messageList.appendChild(userMessageItem);

  document.getElementById("messageInput").value = "";

  var iaMessageItem = document.createElement("li");
  iaMessageItem.textContent = "Coach : ahla bel wahech, how can I help you today?";

  setTimeout(function() {
      messageList.appendChild(iaMessageItem);
  }, 1000); 
}

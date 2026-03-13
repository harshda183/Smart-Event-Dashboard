const eventsContainer = document.getElementById("eventsContainer");
const emptyMessage = document.getElementById("emptyMessage");

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  emptyMessage.style.display = "none";

  const eventCard = document.createElement("div");
  eventCard.className = "event-card";

  eventCard.innerHTML = `
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="badge">${category}</span>
    <p>${description}</p>
  `;

  eventsContainer.appendChild(eventCard);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function clearEvents() {
  eventsContainer.innerHTML = "";
  eventsContainer.appendChild(emptyMessage);
  emptyMessage.style.display = "block";
}

function addSampleEvent() {
  document.getElementById("title").value = "Emifest";
  document.getElementById("date").value = "2025-01-14";
  document.getElementById("category").value = "Meetup";
  document.getElementById("description").value = "Lorem ipsum";
  addEvent();
}

// DOM Demo
const demoBox = document.getElementById("demoBox");



document.addEventListener("keydown", function(e) {
  document.getElementById("keyOutput").innerText = "You pressed: " + e.key;
});

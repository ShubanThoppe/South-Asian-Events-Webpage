

// Helper function to format date to "MMM DD" (e.g., "MAR 30")
function formatDateToMMMDD(dateString) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${month} ${day}`;
}


// Show event details modal
function showModal(card) {
    const modal = document.getElementById("myModal");
    document.getElementById("modalImage").src = card.querySelector("img").src;
    document.getElementById("modalDate").textContent = card.querySelector(".date").textContent;
    document.getElementById("modalType").textContent = card.querySelector(".type").textContent;
    document.getElementById("modalTitle").textContent = card.querySelector(".title").textContent;
    document.getElementById("modalDetails").textContent = card.querySelector(".details").textContent;
    document.getElementById("modalTime").innerHTML =
        card.querySelector(".details i").outerHTML + card.querySelector(".details").nextElementSibling.textContent;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to filter events by month or type
function filterEvents(filter) {
    document.querySelectorAll(".card").forEach((card) => {
        const date = card.getAttribute("data-date").split(" ")[0];
        const type = card.getAttribute("data-type");
        card.style.display = filter === "all" || filter === date || filter === type ? "block" : "none";
    });
}


// Event class updated to use formatted date
class Event {
    constructor(date, type, title, details, time, imageUrl) {
        this.date = date;
        this.type = type;
        this.title = title;
        this.details = details;
        this.time = time;
        this.imageUrl = imageUrl;
    }

    createCard() {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-date", this.date);
        card.setAttribute("data-type", this.type);
        card.setAttribute("onclick", "showModal(this)");

        card.innerHTML = `
            <div class="relative">
                <img alt="${this.title}" src="${this.imageUrl}" />
                <div class="date">${this.date}</div>
            </div>
            <div class="content">
                <div class="type">${this.type}</div>
                <div class="title">${this.title}</div>
                <div class="details">${this.details}</div>
                <div class="details"><i class="far fa-clock"></i> ${this.time}</div>
            </div>
        `;
        return card;
    }
}

// Sample events
var events = [
    new Event("MAR 10", "MUSIC", "Bollywood Night", "FREE • Ages 18+", "8:00 PM - 12:00 AM", "https://storage.googleapis.com/a1aa/image/CX0f6e0v91sBiEnjoPd8JsnK5yD3uyeKhjoFrN4DOlIbdv5nA.jpg"),
    new Event("MAR 12", "DANCE", "Classical Dance Performance", "FREE • All Ages", "6:00 PM - 9:00 PM", "https://storage.googleapis.com/a1aa/image/8P9IiuKkXArsA1m6nNVnC8qOYPzPRefggNMsfO6SBnUUdv5nA.jpg"),
    new Event("MAR 15", "FOOD", "South Asisan Food Festival", "FREE • All Ages", "11:00 AM - 5:00 PM", "https://storage.googleapis.com/a1aa/image/2ks3CD3dTc7MEZt6clqFKzmdI9JhiQ2BfzxuzbE6ED8S3beTA.jpg"),
    new Event("MAR 18", "WELLNESS", "Yoga and Meditation Workshop", "FREE • Ages 12+", "9:00 AM - 12:00 PM", "https://storage.googleapis.com/a1aa/image/sfeAM8UAuskXE01SC4e6THJq2jtotR0sCeHPxX27TwAg6emfE.jpg"),
    new Event("MAR 20", "FILM", "South Asian Film Screening", "FREE • Ages 16+", "7:00 PM - 10:00 PM", "https://storage.googleapis.com/a1aa/image/gtXDxEvqUNKdBtlQmXFlad3MQ1ebBAHk9zsj20D7oHUT3beTA.jpg"),
    new Event("MAR 25", "ART", "South Asian Art Exhibition", "FREE • All Ages", "10:00 AM - 6:00 PM", "https://storage.googleapis.com/a1aa/image/upS9ywQepCU4c6DUeFscHUgqqJSqWGIwFoeS987cN0SCdv5nA.jpg"),
    new Event("MAR 28", "LITERATURE", "South Asian Literature Festival", "FREE • All Ages", "1:00 PM - 5:00 PM", "https://storage.googleapis.com/a1aa/image/UP1otaNeAxx5NiGPdKfuJXKA8vTR16E8Hf8GjN2VWaKYdv5nA.jpg"),
    new Event("MAR 30", "FASHION", "South Asian Fashion Show", "FREE • Ages 18+", "6:00 PM - 9:00 PM", "https://storage.googleapis.com/a1aa/image/77KdyoplRk4GCNINRkklaKT2BKPXL3N5PEa2FeSPneQju38TA.jpg"),
];

// Add events to the grid
const eventGrid = document.getElementById("eventGrid");
events.forEach((event) => {
    eventGrid.appendChild(event.createCard());
});

// Show all events by default
filterEvents("all");
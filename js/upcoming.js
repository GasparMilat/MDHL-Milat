const upcomingContainer = document.getElementById("upcoming_cards")

let upcomingcards = "";
    for (const event of events) {
        if (event.date > currentDate) {
        upcomingcards += 
        `<div class="card">
            <img src=${event.image} />
            <div class="text">
            <h3>${event.name}</h3>
            <p>
            ${event.description}
            </p>
            <button>Details</button>
            </div>
        </div>`;
        }
    }


upcomingContainer.innerHTML = upcomingcards

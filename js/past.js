const pastContainer = document.getElementById("past_cards")

let pastcards = "";
    for (const event of events) {
        if (event.date < currentDate) {
        pastcards += 
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

pastContainer.innerHTML = pastcards

//Renderiza cards por página 
const cardsContainer = document.getElementById("allcards")
let cards = "";
    for (const event of events) {
        cards += 
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
cardsContainer.innerHTML = cards
let ultimateArr = events
const searchInput = document.getElementById('searchbar')

searchInput.addEventListener("keyup", () => {
    let filteredCardsCategory = ultimateArr.filter((event) => event.name.toLowerCase().includes(searchInput.value.trim().toLowerCase()))

    cardsContainer(filteredCardsCategory)})

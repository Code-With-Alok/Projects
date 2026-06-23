const form = document.getElementById("itemForm");
const itemsContainer = document.getElementById("itemsContainer");
const searchBox = document.getElementById("searchBox");

let items = JSON.parse(localStorage.getItem("items")) || [
    {
        id: 1,
        name: "College ID Card",
        type: "Lost",
        category: "ID Card",
        location: "Near Canteen",
        contact: "9899756207",
        description: "Blue ABES ID card lost during lunch break.",
        date: "23/06/2026"
    },
    {
        id: 2,
        name: "Black Wallet",
        type: "Found",
        category: "Wallet",
        location: "Library",
        contact: "9899756207",
        description: "A black wallet was found near the reading table.",
        date: "23/06/2026"
    },
    {
        id: 3,
        name: "Notebook",
        type: "Returned",
        category: "Books",
        location: "CSE Block",
        contact: "9899756207",
        description: "Notebook returned to the owner successfully.",
        date: "23/06/2026"
    }
];

displayItems();
updateStats();
showDateTime();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const item = {
        id: Date.now(),
        name: document.getElementById("itemName").value,
        type: document.getElementById("itemType").value,
        category: document.getElementById("category").value,
        location: document.getElementById("location").value,
        contact: document.getElementById("contact").value,
        description: document.getElementById("description").value,
        date: new Date().toLocaleDateString()
    };

    items.push(item);

    localStorage.setItem("items", JSON.stringify(items));

    displayItems();
    updateStats();

    form.reset();

});

function displayItems(list = items){

    itemsContainer.innerHTML = "";

    if(list.length === 0){
        itemsContainer.innerHTML = "<p>No item found.</p>";
        return;
    }

    list.forEach(item => {

        const card = document.createElement("div");

        card.className = `card ${item.type.toLowerCase()}`;

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Status:</strong> ${item.type}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Location:</strong> ${item.location}</p>
            <p><strong>Contact:</strong> ${item.contact}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p>${item.description}</p>

            <button class="deleteBtn" onclick="deleteItem(${item.id})">
                Delete
            </button>
        `;

        itemsContainer.appendChild(card);

    });

}

function deleteItem(id){

    items = items.filter(item => item.id !== id);

    localStorage.setItem("items", JSON.stringify(items));

    displayItems();
    updateStats();

}

searchBox.addEventListener("keyup", function(){

    const value = searchBox.value.toLowerCase();

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(value) ||
        item.type.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value) ||
        item.location.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value)
    );

    displayItems(filteredItems);

});

function filterItems(type){

    if(type === "All"){
        displayItems(items);
    }
    else{
        const filteredItems = items.filter(item => item.type === type);
        displayItems(filteredItems);
    }

}

function updateStats(){

    let lost = items.filter(item => item.type === "Lost").length;
    let found = items.filter(item => item.type === "Found").length;
    let returned = items.filter(item => item.type === "Returned").length;

    document.getElementById("lostCount").innerHTML = lost;
    document.getElementById("foundCount").innerHTML = found;
    document.getElementById("returnedCount").innerHTML = returned;

}

function showDateTime(){

    document.getElementById("date").innerHTML =
    "Current Date & Time: " + new Date().toLocaleString();

}

setInterval(showDateTime, 1000);

window.onscroll = function(){

    const topBtn = document.getElementById("topBtn");

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

};

function scrollToTop(){

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
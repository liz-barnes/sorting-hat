'use strict';

let cards = [];

const houseColors = [
  {
    house: "Gryffindor",
    color: "#740001",
  },
  {
    house: "Slytherin",
    color: "#1A472A",
  },
  {
    house: "Ravenclaw",
    color: "#0E1A40",
  },
  {
    house: "Hufflepuff",
    color: "#FFF4B1",
  },
];

const buttonEvents = () => {
  document.querySelector("#introBtn").addEventListener("click", showForm);
  document
    .querySelector("#form-container")
    .addEventListener("click", sortStudent);
  document
    .querySelector("#houseCards")
    .addEventListener("click", expelStudents);
};

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const showForm = () => {
  const domString = `<h3 class="text-center mb-3">Enter First Year's Name</h3>
                     <div class="form-body d-flex justify-content-center">
                        <form class="form-inline" id="sortingForm">
                            <div class="form-group mb-2 p-2">
                                <label for="studentName" class="mr-2 text">Student : </label>
                                <input type="text" class="form-control w-45" id="studentNameInput" placeholder="Hermione Granger" required>
                            </div>
                            <button id="formSubmit" type="button" class="btn btn-primary mb-2">Reveal my house!</button>
                        </form>
                    </div>`;

  renderToDom("form-container", domString);
};

const sortStudent = (e) => {
  if (e.target.id === "formSubmit") {
    const inputName = document.getElementById("studentNameInput").value;
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];

    if (inputName.length === 0) {
      errorMessage();
    } else {
      let cardObject = {
        studentName: inputName,
        houseName: randomHouse,
      };

      cards.push(cardObject);
      document.querySelector("#sortingForm").reset();
      cardBuilder(cards);
    }
  }
};

const cardBuilder = (arr) => {
  let card = "";

  for (let i = 0; i < arr.length; i++) {
    card += `<div class="card text-center m-3" style="width: 18rem;" id="card">
                <div class="row no-gutters">
                    <div class="card-body" id="card-body">
                        <h5 class="card-title">${cards[i].studentName}</h5>
                        <p class="card-text">${cards[i].houseName}</p>
                        <a href="#" class="btn btn-danger" type="button" style="backgroundColor: red;">Expel</a>
                    </div>
                </div>
            </div>`;
  }
  
  renderToDom("houseCards", card);
};

const expelStudents = (e) => {
  if (e.target.type === "button") {
    cards.splice(e.target.id, 1);
    cardBuilder(cards);
  }
};

const errorMessage = () => {
  let formAlert = "";

  formAlert = `<div class="alert alert-warning alert-dismissible fade show text-center w-50 m-auto" role="alert">
                    <strong>Bloody Hell!</strong> You must enter a name to be sorted!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
  renderToDom("errorAlert", formAlert);
};

// const houseColor = () => {
//     const bodySelector = document.querySelector('#card')
//     if (card.houseName === houseColors.house) {
//         bodySelector.style.backgroundColor = ${houseColors.color};
//     // } else if (cardObject.houseName === 'Hufflepuff') {
//     //     bodySelector.style.backgroundColor = '#FFED86';
//     // } else if (cardObject.houseName === 'Ravenclaw') {
//     //     bodySelector.style.backgroundColor = '#222F5B';
//     // } else if (cardObject.houseName === 'Slytherin') {
//     //     bodySelector.style.backgroundColor = '#1A472A';
//     // } else {
//     //     bodySelector.style.backgroundColor = '#EEEEEE';
//     // }
// }

const init = () => {
  buttonEvents();
  cardBuilder(cards);
};

init();

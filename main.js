"use strict";

let cards = [];

const houseColors = [
    {
        house: 'Gryffindor',
        color: '#740001',
    },
    {
        house: 'Slytherin',
        color: '#1A472A',
    },
    {
        house: 'Ravenclaw',
        color: '#0E1A40',
    },
    {
        house: 'Hufflepuff',
        color: '#FFF4B1',
    },
]

const buttonEvents = () => {
  document
    .querySelector("#introBtn")
    .addEventListener("click", showForm);
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
  const domString = `<div>
                            <form id="sortingForm">
                                <h3>Enter First-Year's Name Below</h3>
                                <div id="error-message"></div>
                                <div class="form-group d-flex">
                                    <label for="studentName">Student: </label>
                                    <input type="text" class="form-control w-25" id="studentNameInput">
                                </div>
                                <button id="formSubmit" type="button" class="btn btn-primary">Show me my house!</button>
                            </form>
                        </div>`;

  renderToDom("form-container", domString);
};

const sortStudent = (e) => {
  if (e.target.id === "formSubmit") {
    const inputName = document.getElementById("studentNameInput").value;
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    let obj = {
      studentName: inputName,
      houseName: randomHouse,
    };

    cards.push(obj);
    cardBuilder(cards);
  }
};

const cardBuilder = (arr) => {
  let domString = "";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card text-center" style="width: 18rem;">
                        <div class="card-body"`>
                            <h5 class="card-title">${cards[i].studentName}</h5>
                            <p class="card-text">${cards[i].houseName}</p>
                            <a href="#" class="btn btn-primary" type="button">Expel</a>
                        </div>
                    </div>`;
  }
  renderToDom("houseCards", domString);
};

const expelStudents = (e) => {
  if (e.target.type === "button") {
    cards.splice(e.target.id, 1);
    cardBuilder(cards);
  }
};

const errorMessage = (studentNameInput) => {
    if (studentNameInput.length < 1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
        // document.querySelector("#error-message").innerHTML =
        //     `<div style="color: red;>
        //         <p>Type a name to reveal your house!</p>
        //     </div>`;
    }
}

const init = () => {
  buttonEvents();
  cardBuilder(cards);
  errorMessage(studentNameInput);
};

init();

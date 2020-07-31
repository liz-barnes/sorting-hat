'use strict';

// const students = [];

// const sortedStudents = [ 
//     {
//         studentName: 'Harry Potter',
//         houseName: 'Gryffindor'
//     },

//     {
//         studentName: 'Harry Potter',
//         houseName: 'Hufflepuff'
//     },

//     {
//         studentName: 'Harry Potter',
//         houseName: 'Ravenclaw'
//     },

//     {
//         studentName: 'Harry Potter',
//         houseName: 'Slytherin'
//     },
// ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const cardBuilder = (arr) => {
    let domString = ''
    
    for (let i = 0; i < arr.length; i++) {
        
    domString += `<div class="card text-center" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${sortedStudents[i].studentName}</h5>
                            <p class="card-text">${sortedStudents[i].houseName}</p>
                            <a href="#" class="btn btn-primary">Expel</a>
                        </div>
                    </div>`
        }
        printToDom('houseCards', domString);
    };

const handleIntroClickButton = (e) => {
    document.getElementById('introBtn').addEventListener('click', showForm);
};

const showForm = () => {
    document.getElementById('sortingForm').style.display = 'block';
};

const handleSubmitClickButton = (e) => {
    const inputName = document.getElementById('studentNameInput').value
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    let obj = {};
    obj.append('studentName: ${inputName}, houseName: ${randomHouse}')  
}

const buttonEvents = () => {
    document.querySelector('#formSubmit').addEventListener('click', handleSubmitClickButton);
}

const init = () => {
    cardBuilder(sortedStudents);
    // showForm();
    buttonEvents();
    handleIntroClickButton();
}


init();

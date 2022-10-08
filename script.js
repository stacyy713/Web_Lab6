// async function getUsers() {
// let response = await fetch('https://randomuser.me/api');
// let content = await response.json();
// console.log(content);
//
// let user = document.querySelector('#first_user');
// user.innerHTML += `<p id='picture'><img src=${content.results[0].picture.large}></p>`;
// user.innerHTML += `<p id='name'>Name: ${content.results[0].name.first}
// ${content.results[0].name.last}</p>`;
// user.innerHTML += `<p id='cell'>Phone: ${content.results[0].cell}</p>`;
// user.innerHTML += `<p id='city'>City: ${content.results[0].location.city}</p>`;
// user.innerHTML += `<p id='country'>Country: ${content.results[0].location.country}</p>`;
//
// function getUsers() {
//     fetch('https://randomuser.me/api')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .then((data) => createUser(data))
//         .catch(error => console.log(error))
// }
// }
// getUsers();

function generate() {
    let phrase = document.getElementById("success");
    phrase.style.display = "block";
    for (let i = 0; i < 5; i++) {
        fetch('https://randomuser.me/api')
            .then((res) => res.json())
            .then((data) => createUser(data))
            .catch(error => console.log(error))

    }
}

function createUser({results}) {
    let element = document.querySelector('#users')
    element.innerHTML += `<div>${getUser(results)}</div>`
}

function getUser(results) {
    return results.map(user => `
        <div id="block">
        <img src="${user.picture.large}" width="200px" height="200px">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Phone: ${user.cell}</p>
        <p>City: ${user.location.city}</p>
        <p>Country: ${user.location.country}</p>
        </div>`)
}

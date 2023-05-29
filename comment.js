const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })})
    .then((response) => response.json())
    .then((users) => users.forEach((user) => {
            if(user.id<5) {
            let elem = document.createElement("p");
                console.log(user.name);
                console.log(user.body);
                elem.appendChild(document.createTextNode('Usuario: '+user.name));
                elem.appendChild(document.createElement("p"));
                elem.appendChild(document.createTextNode('Comentario: '+user.body));
            ul.appendChild(elem);
        };


        }));

    HTMLResponse.appendChild(ul);
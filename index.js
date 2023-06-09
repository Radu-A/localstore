const myForm = document.getElementById('form');
//Creo el array de objetos que voy a almacenar
let users = [];

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    //Asigno valores de inputs al objeto que voy a añadir al array
    const user = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,  url : document.getElementById("url").value
    }
    //Desestructuro para facilitar la validación
    const {name, email, message, url} = user;
    //Validación expréss
    if (name && email && message && url) {
        //Añado el objeto al array
        users.push(user)
        //Reescribo el array en local storage
        localStorage.setItem("user", JSON.stringify(users));
    } else {
        alert("All fields are required");
    }
    //MOSTRAR USUARIOS EN DOM
    //Elementos HTML
    const uCard = document.createElement("article");
    const uName = document.createElement("p");
    const uEmail = document.createElement("p");
    const uMessage = document.createElement("p");
    const uImg = document.createElement("img");
    //Cargo datos desde local store
    uName.innerHTML = name;
    uEmail.innerHTML = email;
    uMessage.innerHTML = message;
    uImg.src = url;
    //Pinto sobre el DOM
    uCard.appendChild(uName);
    uCard.appendChild(uEmail);
    uCard.appendChild(uMessage);
    uCard.appendChild(uImg);
    document.getElementById("gallery").appendChild(uCard);

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
      }
})


fetch('https://dummyjson.com/users')
    .then((responce) => responce.json())
    .then((json) => userlist(json));

var user = "";

function userlist(items) {

    console.log(items)
    for (var i = 0; i < items.users.length; i++) {
        user += `<div class="box">
        <a href="./click.html?postId=${items.users[i].id}">
        <div class="text-box">
        <p><strong>First Name:</strong> ${items.users[i].firstName}</p>
        <p><strong>Last Name:</strong> ${items.users[i].lastName}</p>
       <span><strongEmail:</strong> ${items.users[i].email}</span>
       <button class="follow">Follow</button>
       </div>
        <div class="img-box">
        <img src="${items.users[i].image}"class="img1"/></a></div>
        </div>`;
    }
    document.getElementById("list").innerHTML = user;
}

const submitform = (e) => {
    e.preventDefault();
    console.log("submit")


    const postUrl = 'https://dummyjson.com/users/add';
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;


    const items = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    };
    fetch(postUrl, {
            method: "POST",
            body: JSON.stringify(items),
        })
        .then((responce) => responce.json())
        .then((resultat) => {
            console.log("succes", resultat);
        })
        .catch((error) => {
            console.error("Error", error);
        })
};


var modal = document.getElementById("contact-modal");

var mybtn = document.getElementById("modal-open");


var span = document.getElementsByClassName("modal-close")[0];


mybtn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
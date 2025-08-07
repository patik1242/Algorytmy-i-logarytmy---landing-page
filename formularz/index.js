const sets = [
    { count: 7, width: "10%", height: "10%", image: "images/animacje/animacje2.png" },
    { count: 7, width: "5%",  height: "5%",  image: "images/animacje/rownanie7.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie5.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie3.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie1.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie2.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie4.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie6.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie8.png" },
    { count: 5,  width: "5%", height: "5%", image: "images/animacje/rownanie10.png" }
];

sets.forEach(set => {
    for (let i = 0; i < set.count; i++) {

        const el = document.createElement("div");
        el.classList.add("animation");

        el.style.left = Math.random() * 90 + "vw";
        el.style.width = set.width;
        el.style.height = set.height;
        el.style.backgroundImage = `url(${set.image})`;
        el.style.animationDelay = Math.random() * 45 + "s";

        document.body.appendChild(el);
    }
});

const usedEmails = [];

function googleSheet(){
    console.log("Funkcja została uruchomiona");

    let email = document.getElementById("email").value.trim();
    let email2 = document.getElementById("email");

    const isInValid = 
    email === "" || !email.includes("@") || !email.includes(".") || email.slice(0, email.indexOf("@")) === "" ||  
    email.slice(email.lastIndexOf(".")+1) === "" || email.slice(email.indexOf("@")+1) === "";

    if(isInValid){
        alert("Podaj poprawny adres e-mail");
        return;
    }

    if (usedEmails.includes(email2)){
        alert("Ten adres został już podany!");
        return;
    }
    
    usedEmails.push(email2);

    let emailFieldName = "entry.2129708413";

    let greeting = document.getElementById("greeting");
    let myP1 = document.getElementById("myP1");
    let submit = document.getElementById("submit");

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScOpRrpbpQysB558zskks6Zw8g9e-3SIrqrLmZLiaSpyjPkDw/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${emailFieldName}=${encodeURIComponent(email)}`
    }).then(() => {
        greeting.textContent = "Dziękujemy za zapis!";
        myP1.innerHTML = `Zapraszamy po więcej niespodzianek :)<br><br>
        <img src = "images/media/facebook.png" style = "width: 15px; height: 15px;"> AlgorytmyIlogarytmy<br>
        <img src = "images/media/instagram.png" style = "width: 15px; height: 15px;"> AlgorytmyIlogarytmy<br>
        <img src = "images/media/tiktok.png" style = "width: 15px; height: 15px;"> AlgorytmyIlogarytmy<br>`;
        email2.style.display = "none";
        submit.style.display = "none";
        console.log("Dziękujemy za zapis!");
    }).catch(err => {
        greeting.textContent = "Błąd zapisu :( Spróbuj jeszcze raz";
        console.error("Błąd zapisu:", err);
    });
};

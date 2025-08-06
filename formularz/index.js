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

document.getElementById("submit").addEventListener("click", function() {
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        alert("Podaj adres e-mail");
        return;
    }

    let emailFieldName = "entry.2129708413"; 

    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScOpRrpbpQysB558zskks6Zw8g9e-3SIrqrLmZLiaSpyjPkDw/formResponse", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `${emailFieldName}=${encodeURIComponent(email)}`
    }).then(() => {
        alert("Dziękujemy za zapis!");
        document.getElementById("email").value = "";
    }).catch(err => {
        console.error("Błąd zapisu:", err);
    });
});


const formulaire =
    document.querySelector("#formulaire-contact");

formulaire.addEventListener("submit", function (event) {

    event.preventDefault();

    const nom = document.querySelector("#nom").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const sujet = encodeURIComponent("Contact depuis le site");

    const contenu = encodeURIComponent(
        `Nom : ${nom}\nEmail : ${email}\n\n${message}`
    );

    window.location.href =
        `mailto:dilaradibek.psychologue@gmail.com?subject=${sujet}` +
        `&body=${contenu}`;

});
```

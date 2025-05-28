function typeWriter(el, text, delay = 100) {
    let i = 0;
    const interval = setInterval(() => {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = text[i];
        el.appendChild(button);
        i++;
        if (i === text.length) clearInterval(interval);
    }, delay);
}


window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    document.getElementById("fully-loaded").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
    const domReady = document.getElementById("dom-ready");
    const domDemo = document.getElementById("dom-demo");
    domReady.textContent = "✅ DOM prêt (DOMContentLoaded)";
    typeWriter(domDemo, "Je_modifie_le_DOM_en_ajoutant_des_boutons.", 50);
});
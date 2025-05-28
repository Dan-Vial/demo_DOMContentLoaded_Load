# Démo : DOMContentLoaded vs Load

Cette démonstration HTML illustre clairement la différence entre les événements `DOMContentLoaded` et `load`, en mettant en avant la possibilité de manipuler le DOM avant le chargement complet de la page (notamment des images).

## 🔍 Objectifs pédagogiques

- Montrer que l'on peut **modifier le DOM immédiatement après `DOMContentLoaded`**.
- Visualiser le **temps nécessaire au chargement des ressources** (ex: image lourde).
- Simuler un cas réel où des éléments dynamiques sont injectés avant que tout soit chargé.

## 🧪 Fonctionnement de la démo

1. **`DOMContentLoaded`** est déclenché dès que le DOM est prêt.
   - On affiche directement un message `✅ DOM prêt`.
   - On injecte dynamiquement quelques éléments HTML (boutons) dans une div.
2. Une **image lourde** est chargée dans la page.
   - Elle retarde l'événement `load`.
3. Une fois **`load`** déclenché :
   - On affiche un message `✅ Tout est chargé (load)`.

<!-- ![video](demo.mp4) -->
<video src="demo.mp4" controls></video>

## ▶️ Pour tester

Placer le dossier sur votre serveur web puis ouvrir dans un navigateur moderne.  
Tu verras :
- le DOM être manipulé juste après son chargement,
- l'image ralentir le `load`,
- et un affichage progressif.

---

## 🔧 Notes techniques

- `DOMContentLoaded` permet d’interagir avec la structure HTML **sans attendre le chargement des images, styles, etc.**
- `load` se déclenche uniquement lorsque **tout est entièrement chargé** (y compris les images).
- Cette démo utilise une image HD de [placebear](https://www.placebear.com/) pour simuler un chargement lent réaliste (9000*7000).
- Aucun framework requis. Pur HTML/CSS/JS.

## 📚 Ressources

Voici quelques liens MDN utiles pour approfondir les concepts utilisés :

- [📖 `DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)
- [📖 `load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
- [📖 Manipulation du DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [📖 Document Object Model](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model)

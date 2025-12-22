# Guide de Conversion CSS - Animation Téléphone

## ✅ Conversions Effectuées

Toutes les valeurs fixes (px) ont été converties en unités relatives (%, vw, vh).

---

## 📐 Formules de Conversion Utilisées

**Base de référence : 1920px de largeur**

- `1px` = `0.052vw` (1/1920 * 100)
- `10px` = `0.52vw`
- `100px` = `5.21vw`

**Exemples courants :**
- `140px` = `7.3vw`
- `60px` = `3.125vw`
- `8px` = `0.42vw`

---

## 🎯 Sections Converties

### 1. **Hauteur Globale**
✅ `.expertise` : `height: calc(100vh - 72px)` (72px = hauteur du header)
✅ `.expertise-animation` : `height: 100%`
✅ `.expertise-phase` : `height: 100%`

### 2. **Phase 1 - Diagramme Complet**

#### Conteneur
- Largeur : `90%` avec `max-width: 46.875vw`
- Hauteur : `80%` (proportionnelle)

#### Boîtes du diagramme
```css
.diagram-box {
    border-radius: 0.42vw;
    padding: 0.52vw 0.78vw;
    min-width: 7.3vw;
}
```

#### Positions des boîtes (À AJUSTER)
- **Sessions** : `top: -9vh`
- **Requêtes** : `top: calc(35% - 8.7vh)`, `left: 2.6vw`
- **Connexion** : `top: calc(35% - 8.7vh)`, `right: 2.6vw`
- **LLM** : `top: calc(48% - 7.1vh)`, `right: 20.7vw`, `min-width: 5.2vw`
- **Utilisateur** : `bottom: 1.6vh`

#### Icône Base de Données
```css
.db-icon {
    width: 3.125vw;  /* 60px */
    height: 3.65vw;  /* 70px */
}

.db-top {
    width: 3.125vw;
    height: 1.04vw;
}

.db-body {
    width: 3.125vw;
    height: 2.86vw;
    top: 0.52vw;
}
```

#### Flèches (18 au total - À AJUSTER)

**Verticales Sessions ↔ DB**
```css
.arrow-sessions-db-down {
    left: 49.4%;
    top: -4.9vh;
    height: 4.3vh;
}

.arrow-db-sessions-up {
    left: 50.7%;
    top: -4.5vh;
    height: 4.2vh;
}
```

**Horizontales DB ↔ Requêtes/Connexion**
```css
.arrow-db-requests {
    left: 10.3vw;
    top: 9%;
    width: 11.7vw;
}

.arrow-db-connexion {
    right: 10.3vw;
    top: 9%;
    width: 11.7vw;
}
```

**Diagonale Connexion ↔ LLM**
```css
.arrow-connexion-llm {
    right: 15.1vw;
    top: 1.8%;
    height: 11.6vh;
}

.arrow-llm-connexion {
    right: 15.1vw;
    top: calc(10.8% - 2.6vh);
    height: 12.4vh;
}
```

**Côté Droit (TCP)**
```css
.arrow-right-vertical {
    right: 5.7vw;
    top: 13.5%;
    height: 19.9vh;
}

.arrow-right-to-user {
    right: 6.4vw;
    top: calc(26% + 15.2vh);
    width: 13.1vw;
}
```

**Côté Gauche (AUTH)**
```css
.arrow-left-vertical {
    left: 6.3vw;
    top: 13.5%;
    height: 19.3vh;
}

.arrow-left-to-user {
    left: 6.4vw;
    top: 74.8%;
    width: 13.3vw;
}
```

**Bidirectionnelles**
```css
.arrow-requests-db {
    left: 9.9vw;
    top: calc(9% - 0.6vh);
    width: 11.7vw;
}

.arrow-connexion-db {
    right: 9.8vw;
    top: calc(9% - 0.6vh);
    width: 11.7vw;
}

.arrow-right-vertical-up {
    right: 6.4vw;
    top: 14.8%;
    height: 18.8vh;
}

.arrow-left-vertical-up {
    left: 5.7vw;
    top: 15.1%;
    height: 19.4vh;
}

.arrow-left-to-user-line {
    left: 5.7vw;
    top: calc(75% + 0.6vh);
    width: 14.3vw;
}

.arrow-right-to-user-line {
    right: 5.7vw;
    top: calc(42% + 10.3vh + 0.6vh);
    width: 14.2vw;
}
```

#### Labels de Connexion
```css
.label-auth {
    top: calc(48% - 8.3vh);
    left: 5vw;
}

.label-feed {
    top: calc(47% - 8.3vh);
    right: 5.5vw;
}

.label-tcp {
    bottom: calc(41% + 3.4vh);
    right: 5.1vw;
}
```

### 3. **Téléphone Unifié**

#### Phase 1
```css
[data-current-phase="1"] .unified-phone {
    transform: translate(-50%, calc(-50% + 15vh)) scale(0.9);
}

.content-phase-1 {
    transform: translate(-50%, -50%) scale(2.4);
}
```

#### Phase 2
```css
[data-current-phase="2"] .unified-phone {
    transform: translate(-50%, -50%) scale(1.2);
}

.content-phase-2 {
    transform: translate(-50%, -64%) scale(4.45);
}
```

#### Phase 3
```css
[data-current-phase="3"] .unified-phone {
    transform: translate(-50%, -70%) scale(1.8);
}

.content-phase-3 {
    width: 6.7vw;
    height: 14vh;
    top: 12%;
}
```

#### Loader
```css
.loader-spinner {
    width: 2.08vw;
    height: 2.08vw;
    border: 0.16vw solid rgba(0, 0, 0, 0.1);
}
```

#### Logo Lupin
```css
.lupin-logo-container {
    gap: 0.625vw;
}

.lupin-logo {
    width: 3.125vw;
}

.lupin-loading-text {
    font-size: 0.26vw;
    border-right: 0.05vw solid #555;
}
```

### 4. **Phase 2 - Diagramme Simplifié**

#### Conteneur
```css
.phase-2 .diagram-container {
    width: 90%;
    max-width: 41.67vw;
    height: 40%;
    padding: 0 1.04vw;
}
```

#### Éléments
```css
.phase-2 .diagram-database {
    top: -10.6%;
    left: -6.98vw;
}

.box-connectivity {
    left: 6.82vw;
}

.box-interface-right {
    top: -5.2%;
    right: 7.03vw;
}
```

#### Lignes de connexion
```css
.phase-2-line-vertical {
    height: 6.3vh;
}

.phase-2-line-left {
    left: calc(50% - 5.7vw);
    width: 7.8vw;
}

.phase-2-line-right {
    right: calc(50% - 5.6vw);
    width: 7.8vw;
}
```

#### DB Label
```css
.phase-2 .db-label {
    top: -6.51vw;
}
```

### 5. **Phase 3 - Texte Apple**

```css
.phase-3 {
    gap: 1.56vw;
}

.apple-text {
    gap: 0.26vw;
    top: 9.375vw;
}

.apple-line {
    font-size: 2.08vw;
    transform: translateY(1.56vw);
}

@media (min-width: 768px) {
    .apple-line {
        font-size: 2.92vw;
    }
}
```

---

## 🛠️ Méthode d'Ajustement Manuel

### 1. Ouvrir les DevTools (F12)
```javascript
// Console pour tester en direct
document.querySelector('.unified-phone').style.transform = 'translate(-50%, calc(-50% + 16vh)) scale(0.9)';
```

### 2. Modifier une valeur à la fois
- Commencez par les éléments centraux (base de données, téléphone)
- Puis les boîtes périphériques
- Enfin les flèches

### 3. Noter les bonnes valeurs
Créez un fichier `ADJUSTMENTS.md` :
```markdown
# Écran 1920x1080
- unified-phone Phase 1: 15vh → 16vh ✓
- arrow-sessions-db-down: 4.3vh → 4.5vh ✓

# Écran 1366x768
- unified-phone Phase 1: 15vh → 14vh ✓
```

### 4. Appliquer les changements
Une fois validé sur tous les écrans, modifiez le CSS final.

---

## 📊 Valeurs Critiques à Ajuster en Priorité

### TOP 10 des ajustements les plus impactants :

1. **Téléphone Phase 1** : `calc(-50% + 15vh)` → Position verticale
2. **Base de données** : `top: calc(35% - 8.3vh)` → Centre de référence
3. **Sessions** : `top: -9vh` → Boîte du haut
4. **Flèche sessions-db** : `top: -4.9vh`, `height: 4.3vh`
5. **Requêtes/Connexion** : `left/right: 2.6vw`
6. **LLM** : `right: 20.7vw`
7. **Flèches horizontales** : `width: 11.7vw`
8. **Flèches verticales** : `height: 19.9vh`, `19.3vh`
9. **Téléphone Phase 3** : `top: -70%`
10. **Texte Apple** : `top: 9.375vw`

---

## 🎨 Astuce de Debug

Ajoutez temporairement des couleurs :
```css
.diagram-box { background: rgba(255, 0, 0, 0.1) !important; }
.arrow { background: blue !important; }
.unified-phone { outline: 2px solid red !important; }
```

---

## 📝 Notes Importantes

- Les valeurs `vh` peuvent varier selon la résolution **verticale**
- Les valeurs `vw` dépendent de la résolution **horizontale**
- Les `%` sont relatifs au **conteneur parent**

Bon courage pour les ajustements ! 🚀

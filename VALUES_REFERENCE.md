# Référence des Conversions Pixels → Unités Relatives

## 📐 Tableau de Conversion Rapide (base 1920px)

| Pixels | VW | Formule |
|--------|-----|---------|
| 5px | 0.26vw | 5/1920*100 |
| 8px | 0.42vw | 8/1920*100 |
| 10px | 0.52vw | 10/1920*100 |
| 12px | 0.625vw | 12/1920*100 |
| 20px | 1.04vw | 20/1920*100 |
| 30px | 1.56vw | 30/1920*100 |
| 40px | 2.08vw | 40/1920*100 |
| 50px | 2.6vw | 50/1920*100 |
| 60px | 3.125vw | 60/1920*100 |
| 100px | 5.21vw | 100/1920*100 |
| 120px | 6.25vw | 120/1920*100 |
| 140px | 7.3vw | 140/1920*100 |
| 180px | 9.375vw | 180/1920*100 |
| 224px | 11.7vw | 224/1920*100 |

---

## 🔄 Conversions Effectuées - Détail

### DIAGRAMME - Boîtes

```css
/* AVANT */
.diagram-box {
    border-radius: 8px;
    padding: 1rem 1.5rem;      /* 16px 24px */
    min-width: 140px;
}

/* APRÈS */
.diagram-box {
    border-radius: 0.42vw;
    padding: 0.52vw 0.78vw;
    min-width: 7.3vw;
}
```

### POSITIONS DES BOÎTES

```css
/* Sessions - AVANT/APRÈS */
top: -172px;  →  top: -9vh;

/* Requêtes - AVANT/APRÈS */
top: calc(35% - 167px);  →  top: calc(35% - 8.7vh);
left: 50px;              →  left: 2.6vw;

/* Connexion - AVANT/APRÈS */
top: calc(35% - 168px);  →  top: calc(35% - 8.7vh);
right: 50px;             →  right: 2.6vw;

/* LLM - AVANT/APRÈS */
top: calc(48% - 137px);  →  top: calc(48% - 7.1vh);
right: 398px;            →  right: 20.7vw;
min-width: 100px;        →  min-width: 5.2vw;

/* Utilisateur - AVANT/APRÈS */
bottom: 30px;  →  bottom: 1.6vh;
```

### BASE DE DONNÉES

```css
/* Icône - AVANT/APRÈS */
width: 60px;   →  width: 3.125vw;
height: 70px;  →  height: 3.65vw;

/* Top - AVANT/APRÈS */
width: 60px;    →  width: 3.125vw;
height: 20px;   →  height: 1.04vw;
border: 2px;    →  border: 0.1vw;

/* Body - AVANT/APRÈS */
width: 60px;       →  width: 3.125vw;
height: 55px;      →  height: 2.86vw;
border-left: 2px;  →  border-left: 0.1vw;
top: 10px;         →  top: 0.52vw;

/* Position globale - AVANT/APRÈS */
top: calc(35% - 160px);  →  top: calc(35% - 8.3vh);
```

### FLÈCHES

```css
/* Sessions ↔ DB Down - AVANT/APRÈS */
left: 49.4%;  →  left: 49.4%;  (inchangé)
top: -94.3px;  →  top: -4.9vh;
height: 82px;  →  height: 4.3vh;

/* Sessions ↔ DB Up - AVANT/APRÈS */
left: 50.7%;  →  left: 50.7%;  (inchangé)
top: -86px;   →  top: -4.5vh;
height: 81px;  →  height: 4.2vh;

/* DB → Requêtes - AVANT/APRÈS */
left: 197px;  →  left: 10.3vw;
width: 224px;  →  width: 11.7vw;

/* DB → Connexion - AVANT/APRÈS */
right: 197px;  →  right: 10.3vw;
width: 224px;  →  width: 11.7vw;

/* Connexion → LLM - AVANT/APRÈS */
right: 290px;  →  right: 15.1vw;
height: 223px;  →  height: 11.6vh;

/* Right Vertical - AVANT/APRÈS */
right: 110px;  →  right: 5.7vw;
height: 382px;  →  height: 19.9vh;

/* Right to User - AVANT/APRÈS */
right: 123px;           →  right: 6.4vw;
top: calc(26% + 292px);  →  top: calc(26% + 15.2vh);
width: 252px;           →  width: 13.1vw;

/* Left Vertical - AVANT/APRÈS */
left: 121px;  →  left: 6.3vw;
height: 370px;  →  height: 19.3vh;

/* Left to User - AVANT/APRÈS */
left: 122px;  →  left: 6.4vw;
width: 255px;  →  width: 13.3vw;
```

### LABELS

```css
/* Auth - AVANT/APRÈS */
top: calc(48% - 160px);  →  top: calc(48% - 8.3vh);
left: 96px;              →  left: 5vw;

/* Feed - AVANT/APRÈS */
top: calc(47% - 160px);  →  top: calc(47% - 8.3vh);
right: 106px;            →  right: 5.5vw;

/* TCP - AVANT/APRÈS */
bottom: calc(41% + 65px);  →  bottom: calc(41% + 3.4vh);
right: 98px;               →  right: 5.1vw;
```

### TÉLÉPHONE UNIFIÉ

```css
/* Phase 1 - AVANT/APRÈS */
transform: translate(-49.7%, 14.9%) scale(0.9);
→
transform: translate(-50%, calc(-50% + 15vh)) scale(0.9);

/* Content Phase 1 - AVANT/APRÈS */
transform: translate(-50%, -50%) scale(2.4);
→
(inchangé)

/* Phase 2 - AVANT/APRÈS */
transform: translate(-50%, -50%) scale(1.2);
→
(inchangé)

/* Phase 3 - AVANT/APRÈS */
transform: translate(-50%, -70%) scale(1.8);
→
(inchangé)

width: 129px;   →  width: 6.7vw;
height: 268px;  →  height: 14vh;
```

### LOADER

```css
/* Spinner - AVANT/APRÈS */
width: 40px;   →  width: 2.08vw;
height: 40px;  →  height: 2.08vw;
border: 3px;   →  border: 0.16vw;
```

### LOGO LUPIN

```css
/* Container - AVANT/APRÈS */
gap: 12px;  →  gap: 0.625vw;

/* Logo - AVANT/APRÈS */
width: 60px;  →  width: 3.125vw;

/* Text - AVANT/APRÈS */
font-size: 5px;       →  font-size: 0.26vw;
border-right: 1px;    →  border-right: 0.05vw;
```

### PHASE 2

```css
/* Container - AVANT/APRÈS */
max-width: 800px;  →  max-width: 41.67vw;
height: 300px;     →  height: 40%;
padding: 0 2rem;   →  padding: 0 1.04vw;

/* Database - AVANT/APRÈS */
top: -203px;  →  top: -10.6%;
left: -134px;  →  left: -6.98vw;

/* Connectivity - AVANT/APRÈS */
left: 131px;  →  left: 6.82vw;

/* Interface - AVANT/APRÈS */
top: -100px;  →  top: -5.2%;
right: 135px;  →  right: 7.03vw;

/* Line Vertical - AVANT/APRÈS */
height: 120px;  →  height: 6.3vh;

/* Line Left - AVANT/APRÈS */
left: calc(50% - 109px);  →  left: calc(50% - 5.7vw);
width: 150px;             →  width: 7.8vw;

/* Line Right - AVANT/APRÈS */
right: calc(50% - 108px);  →  right: calc(50% - 5.6vw);
width: 150px;              →  width: 7.8vw;

/* DB Label - AVANT/APRÈS */
top: -125px;  →  top: -6.51vw;
```

### PHASE 3

```css
/* Gap - AVANT/APRÈS */
gap: 3rem;  →  gap: 1.56vw;  (48px)

/* Apple Text - AVANT/APRÈS */
gap: 0.5rem;  →  gap: 0.26vw;  (8px)
top: 180px;   →  top: 9.375vw;

/* Apple Line - AVANT/APRÈS */
font-size: 2.5rem;      →  font-size: 2.08vw;  (40px)
transform: translateY(30px);  →  transform: translateY(1.56vw);

/* Media Query - AVANT/APRÈS */
font-size: 3.5rem;  →  font-size: 2.92vw;  (56px)
```

---

## 🎯 Zones Sensibles à Ajuster

### ⚠️ Hauteur dépendante (vh)
Ces valeurs changeront selon la hauteur de l'écran :
- Positions verticales des boîtes
- Hauteurs des flèches verticales
- Position du téléphone en Y

### ⚠️ Largeur dépendante (vw)
Ces valeurs changeront selon la largeur de l'écran :
- Positions horizontales (left/right)
- Largeurs des flèches horizontales
- Tailles des éléments

### ⚠️ Critiques à tester
1. Alignement Sessions → DB (flèches verticales)
2. Alignement DB → Requêtes/Connexion (flèches horizontales)
3. Position du téléphone sous "utilisateur"
4. Diagonale Connexion → LLM
5. Centrage Phase 2
6. Position texte Phase 3

---

## 🔍 Comment Identifier les Problèmes

### Désalignement Vertical (vh)
- Symptôme : Flèches ne touchent pas les boîtes verticalement
- Solutions : Ajuster les valeurs `vh` et `%` en `top`/`bottom`

### Désalignement Horizontal (vw)
- Symptôme : Flèches ne touchent pas les boîtes horizontalement
- Solutions : Ajuster les valeurs `vw` et `%` en `left`/`right`

### Taille Incorrecte
- Symptôme : Éléments trop grands ou trop petits
- Solutions : Ajuster `width`/`height` en `vw`/`vh`

---

## 📱 Résolutions de Test Suggérées

- **1920x1080** (Full HD) - Référence
- **1366x768** (Laptop courant)
- **2560x1440** (2K)
- **1440x900** (MacBook)
- **1024x768** (Minimum desktop)

Pour chaque résolution, notez les ajustements nécessaires !

---
title: 'Il Dietro le Quinte di Questo Blog: Astro, Performance ed Estetica'
description: 'Scopri come ho progettato e sviluppato questo portfolio/blog puntando su prestazioni assolute (0 kb di JS al client) e un design ispirato al cosmo e ai videogiochi.'
pubDate: 2026-03-04
---

Quando ho deciso di rinnovare il mio spazio web personale, mi sono posto un obiettivo ambizioso: **unire un'estetica sbalorditiva a prestazioni estreme**. Volevo un luogo digitale che parlasse di me non solo attraverso le parole, ma attraverso l'architettura tecnica e il design stesso.

Ecco il racconto di come è nato questo progetto.

## 1. La Scelta Tecnologica: Astro 🚀

Come *Fullstack Developer*, amo React e lo uso quotidianamente. Tuttavia, per un blog statico e un portfolio, caricare l'intera libreria React sul client (generando kilobyte di *bundle* JavaScript per componenti che non cambiano mai) non era la scelta ottimale.

La soluzione è stata **Astro**.
Astro mi ha permesso di sviluppare utilizzando l'architettura a componenti (proprio come React), ma con un approccio "Zero-JS" di default (Islands Architecture). Questo significa che al momento del "Build", Astro trasforma tutti i miei componenti in puro HTML e CSS, restituendo ai browser degli utenti pagine leggere come piume. Il risultato è proprio quello che cercavo: velocità istantanea e **Lighthouse Score alle stelle**.

## 2. L'Estetica "Mario Galaxy" 🌌

Non volevo il "classico" CV noioso o il tipico layout "Corporate" in scala di grigi. Mettendo insieme la mia passione per i videogiochi e per lo spazio profondo, l'ispirazione visiva chiara era lo stile cosmico e vibrante.

Ho stabilito una **palette colori** precisa in puro Vanilla CSS (`global.css`):
- **Base (Dark Void):** Sfondi quasi neri per non affaticare la vista.
- **Neon Cyan & Magenta:** Accenti cromatici brillanti per i bottoni, le glow-shadows (le ombre luminescenti) e i componenti testuali importanti.
- **Glassmorphism:** Molti dei contenitori principali (le *Galaxy Cards*) sfoggiano sfondi semi-trasparenti, bordi sottili e sfocature (`backdrop-filter: blur`), che ricordano visiere di astronavi o interfacce futuristiche.

## 3. Le Sfide e le Vittorie Tecniche 🛠️

La costruzione del sito ha presentato alcune battaglie stimolanti:

### La Responsività Mobile "A Prova di Bomba"
Uno degli ostacoli è stata l'adattabilità agli schermi piccolissimi. Immagini con larghezza fissata o padding ereditati rischiavano di creare l'insopportabile scorrimento orizzontale su mobile.
- **La Soluzione:** Ho implementato rigidi controlli `max-width: 100%`, `box-sizing: border-box`, e un ingegnoso pre-load (con `fetchpriority="high"`) sull'immagine dell'avatar per distruggere letteralmente le metriche lente del _Largest Contentful Paint (LCP)_.

### L'Abbandono dell'Hamburger Menu
Inizialmente avevo previsto il classico Menu ad Hamburger per i dispositivi mobili basato su codice JavaScript inline. Presto ho realizzato che questo esponeva a ritardi nel rendering e a conflitti con lo scope di esecuzione di Astro.
- **La Soluzione App-like:** L'ho eliminato del tutto. Ho riprogettato la Mobile UI creando una **Bottom Navigation Bar** puramente in CSS (visibile in basso sul telefono). Un pattern ispirato alle vere e proprie App mobili: zero JavaScript, zero fail, ed esecuzione istantanea al tocco. E rispetta persino lo spazio `safe-area-inset-bottom` di iOS!

### Hardening SEO & Sicurezza Assoluta
Con Astro ho reso il sito una roccia:
- Ho iniettato meta-tag potentissimi nel componente globale (Content Security Policy, X-XSS-Protection). Essendo statico non ho un server da difendere, ma proteggo comunque il browser dei visitatori da eventuali code-injection di terze parti (come malevole estensioni browser).
- Ho generato in modo automatico su ogni build una `Sitemap XML`, configurando le intelligenze dei Web Crawler via bot-file. E quando condivido i post, ci sono splendide **Open Graph Cards** pre-impostate che emergono sui feed social.

## Il Futuro dell'Osservatorio 🔭

Questo sito non è un traguardo, ma un **punto di partenza**. È il mio "_Osservatorio personale_" dove poter sperimentare codice visivo, animazioni fluenti, concetti di ottimizzazione e appunti di sviluppo che spero torneranno utili anche a qualcun altro là fuori.

Intanto il Server di Build segnala zero errori, velocità estrema e design in orbita. La missione è stata un grandissimo successo.

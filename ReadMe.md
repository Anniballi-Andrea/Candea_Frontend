# Candea - Frontend

- [English Version](#english-version)
- [Versione Italiana](#versione-italiana)

---

<a name="english-version"></a>
# English Version

Candea is an e-commerce platform dedicated to the sale of artisanal candles. This repository contains the frontend part of the project, built with modern web technologies to provide a seamless and responsive shopping experience.

## Project Overview

Candea allows users to browse a wide catalog of candles, filter them by various criteria, manage a shopping cart, and maintain a wishlist. The application is designed with a focus on usability and elegant design, reflecting the artisanal nature of the products.

## Features

- **Product Catalog**: Browse a variety of candles with dynamic category filtering.
- **Advanced Search**: Real-time search functionality to find specific products quickly.
- **Filtering & Sorting**: Sort products by price, recent arrivals, or popularity (best sellers).
- **Product Details**: Detailed view for each product including descriptions, pricing, and high-quality images.
- **Shopping Cart**:
  - Add/remove items.
  - Update quantities.
  - Persistent storage using `localStorage`.
  - Discount code support.
- **Wishlist**: Save favorite items to a personal wishlist for future purchase.
- **Checkout Flow**: Integrated order summary and checkout form to finalize purchases.
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices using Bootstrap 5.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State Management**: React Context API (Cart, Wishlist, and Search contexts)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **HTTP Client**: [Axios](https://axios-http.com/) for API communication

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/andrea-pugliatti/candea-frontend.git
   cd candea-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```text
src/
├── components/     # Reusable UI components (Header, Footer, Product Cards, etc.)
├── context/        # Context API providers for global state management
├── layout/         # Layout components (DefaultLayout)
├── pages/          # Page components (Home, Products, Cart, etc.)
├── App.jsx         # Main application component and routing
└── main.jsx        # Entry point
```

## API Integration

The frontend communicates with a backend API. It fetches:
- Product lists with sorting and filtering options.
- Specific product details by slug.
- Best-selling products.

---

<a name="versione-italiana"></a>
# Versione Italiana

Candea è una piattaforma di e-commerce dedicata alla vendita di candele artigianali. Questo repository contiene la parte frontend del progetto, realizzata con tecnologie web moderne per offrire un'esperienza di acquisto fluida e reattiva.

## Panoramica del Progetto

Candea permette agli utenti di sfogliare un ampio catalogo di candele, filtrarle secondo vari criteri, gestire un carrello e mantenere una lista dei desideri. L'applicazione è progettata con particolare attenzione all'usabilità e a un design elegante, che rispecchia la natura artigianale dei prodotti.

## Funzionalità

- **Catalogo Prodotti**: Sfoglia una varietà di candele con filtraggio dinamico per categoria.
- **Ricerca Avanzata**: Funzionalità di ricerca in tempo reale per trovare rapidamente prodotti specifici.
- **Filtraggio e Ordinamento**: Ordina i prodotti per prezzo, ultimi arrivi o popolarità (i più venduti).
- **Dettagli Prodotto**: Vista dettagliata per ogni prodotto, incluse descrizioni, prezzi e immagini di alta qualità.
- **Carrello**:
  - Aggiunta/rimozione di articoli.
  - Aggiornamento delle quantità.
  - Memorizzazione persistente tramite `localStorage`.
  - Supporto per codici sconto.
- **Lista dei Desideri (Wishlist)**: Salva i tuoi articoli preferiti in una lista personale per acquisti futuri.
- **Flusso di Checkout**: Riepilogo dell'ordine integrato e modulo di checkout per finalizzare gli acquisti.
- **Design Reattivo (Responsive)**: Layout completamente ottimizzato per desktop, tablet e dispositivi mobili utilizzando Bootstrap 5.

## Tecnologie Utilizzate

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Gestione dello Stato**: React Context API (contesti per Carrello, Lista dei Desideri e Ricerca)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) e [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Client HTTP**: [Axios](https://axios-http.com/) per la comunicazione con le API

## Installazione e Configurazione

1. **Clona il repository**:
   ```bash
   git clone https://github.com/andrea-pugliatti/candea-frontend.git
   cd candea-frontend
   ```

2. **Installa le dipendenze**:
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```

4. **Build per la produzione**:
   ```bash
   npm run build
   ```

## Struttura del Progetto

```text
src/
├── components/     # Componenti UI riutilizzabili (Header, Footer, Schede Prodotto, ecc.)
├── context/        # Provider Context API per la gestione dello stato globale
├── layout/         # Componenti di layout (DefaultLayout)
├── pages/          # Componenti pagina (Home, Prodotti, Carrello, ecc.)
├── App.jsx         # Componente principale dell'applicazione e routing
└── main.jsx        # Punto di ingresso (Entry point)
```

## Integrazione API

Il frontend comunica con un'API di backend. Recupera:
- Liste di prodotti con opzioni di ordinamento e filtraggio.
- Dettagli specifici del prodotto tramite slug.
- Prodotti più venduti.

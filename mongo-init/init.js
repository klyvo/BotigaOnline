db = db.getSiblingDB('botiga');

// 1. Colección de Productos (10 documentos)
db.productes.insertMany([
  { nom: "Teclat Mecànic", preu: 85.50, categoria: "electrònica", estoc: 50, valoracio: 4.5, actiu: true, etiquetes: ["gaming", "perifèrics"], creat_el: new Date() },
  { nom: "Monitor 4K", preu: 320.00, categoria: "electrònica", estoc: 15, valoracio: 4.8, actiu: true, etiquetes: ["pro", "4k"], creat_el: new Date() },
  { nom: "Ratolí Wireless", preu: 45.00, categoria: "electrònica", estoc: 100, valoracio: 4.2, actiu: true, etiquetes: ["oficina"], creat_el: new Date() },
  { nom: "Samarreta Cotó", preu: 19.95, categoria: "roba", estoc: 200, valoracio: 4.0, actiu: true, etiquetes: ["moda", "estiu"], creat_el: new Date() },
  { nom: "Pantalons Tequers", preu: 35.00, categoria: "roba", estoc: 0, valoracio: 3.5, actiu: false, etiquetes: ["outlet"], creat_el: new Date() },
  { nom: "Llum Intel·ligent", preu: 25.00, categoria: "llar", estoc: 30, valoracio: 4.6, actiu: true, etiquetes: ["domòtica"], creat_el: new Date() },
  { nom: "Cafetera de Càpsules", preu: 120.00, categoria: "llar", estoc: 10, valoracio: 4.4, actiu: true, etiquetes: ["cuina"], creat_el: new Date() },
  { nom: "Pilota de Bàsquet", preu: 29.90, categoria: "esport", estoc: 40, valoracio: 4.9, actiu: true, etiquetes: ["nba"], creat_el: new Date() },
  { nom: "Raqueta Tenis", preu: 150.00, categoria: "esport", estoc: 5, valoracio: 4.7, actiu: true, etiquetes: ["pro"], creat_el: new Date() },
  { nom: "Auriculars BT", preu: 65.00, categoria: "electrònica", estoc: 25, valoracio: 4.1, actiu: true, etiquetes: ["àudio"], creat_el: new Date() }
]);

// 2. Colección de Clientes (10 documentos)
db.clients.insertMany([
  { nom: "Marc Gasol", email: "marc@email.com", ciutat: "Girona" },
  { nom: "Laia Sanz", email: "laia@email.com", ciutat: "Corbera" },
  { nom: "Pau Riba", email: "pau@email.com", ciutat: "Barcelona" },
  { nom: "Mireia Belmonte", email: "mire@email.com", ciutat: "Badalona" },
  { nom: "Ricky Rubio", email: "ricky@email.com", ciutat: "El Masnou" },
  { nom: "Alexia Putellas", email: "alexia@email.com", ciutat: "Mollet" },
  { nom: "Joan Roca", email: "joan@email.com", ciutat: "Girona" },
  { nom: "Anna Caula", email: "anna@email.com", ciutat: "Olot" },
  { nom: "Xavi Hernàndez", email: "xavi@email.com", ciutat: "Terrassa" },
  { nom: "Carme Ruscalleda", email: "carme@email.com", ciutat: "Sant Pol" }
]);

// 3. Colección de Comandas (10 documentos) - Usando Referencia
db.comandes.insertMany([
  { client_email: "marc@email.com", producte: "Pilota de Bàsquet", quantitat: 2, total: 59.80, data: new Date() },
  { client_email: "laia@email.com", producte: "Raqueta Tenis", quantitat: 1, total: 150.00, data: new Date() },
  { client_email: "pau@email.com", producte: "Auriculars BT", quantitat: 1, total: 65.00, data: new Date() },
  { client_email: "mire@email.com", producte: "Llum Intel·ligent", quantitat: 3, total: 75.00, data: new Date() },
  { client_email: "ricky@email.com", producte: "Monitor 4K", quantitat: 1, total: 320.00, data: new Date() },
  { client_email: "alexia@email.com", producte: "Samarreta Cotó", quantitat: 5, total: 99.75, data: new Date() },
  { client_email: "joan@email.com", producte: "Cafetera de Càpsules", quantitat: 1, total: 120.00, data: new Date() },
  { client_email: "anna@email.com", producte: "Teclat Mecànic", quantitat: 1, total: 85.50, data: new Date() },
  { client_email: "xavi@email.com", producte: "Ratolí Wireless", quantitat: 2, total: 90.00, data: new Date() },
  { client_email: "carme@email.com", producte: "Samarreta Cotó", quantitat: 1, total: 19.95, data: new Date() }
]);
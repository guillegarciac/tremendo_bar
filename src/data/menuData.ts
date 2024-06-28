const menuData = {
  appetizers: [
    { id: 1, name: "Olives", price: "3.2€" },
    { id: 2, name: "House chips", description: "Chips, olives, piparras, appetizer sauce", price: "3.8€" },
    { id: 3, name: "Combo with mussels", description: "Chips, olives, piparras, mussels, appetizer sauce", price: "6.5€" },
    { id: 4, name: "Combo with anchovies", description: "Chips, olives, piparras, anchovies, appetizer sauce", price: "6.5€" },
    { id: 5, name: "Anchovy Cantábrico '00' (1 filet)", price: "2.5€" },
    { id: 6, name: "Anchovies in vinegar (6u)", price: "6.5€" },
    { id: 7, name: "Gilda", price: "3€" },
    { id: 8, name: "Mussels in escabeche", price: "7.5€" }
  ],
  tapas: [
    { id: 1, name: "Bravas", price: "5.5€" },
    { id: 2, name: "Russian salad", price: "7€" },
    { id: 3, name: "Eggplant chips with truffled honey", price: "8€" },
    { id: 4, name: "Iberian ham croquettes (1u)", price: "2.2€" },
    { id: 5, name: "Clams a la marinera", price: "15€" },
    { id: 6, name: "Cod fritters with citrus mayo (1u)", price: "2.2€" },
    { id: 7, name: "Iberian ham 100% bellota, hand cut 80gr", price: "18€" },
    { id: 8, name: "Bread with tomato", price: "3€" },
    { id: 9, name: "Grilled mussels", price: "9.5€" },
    { id: 10, name: "Fried chicken (marinated 12h)", price: "10.5€" },
    { id: 11, name: "Fresh squid from the market (price depends on availability)", price: "16€" },
    { id: 12, name: "Scallops with caramelized onion on the grill and gratin (4u)", price: "9€" },
    { id: 13, name: "Barcelona-style dry seafood rice (price per person, min 2 people)", price: "19.5€" },
    { id: 14, name: "Broken eggs with Iberian ham", price: "12€" },
    { id: 15, name: "Broken eggs with foie", price: "16€" },
    { id: 16, name: "Veal cheek at low temperature with parmentier and its reduction", price: "16€" },
    { id: 17, name: "Tomato Barbastro, purple onion, and tuna belly", price: "11.5€" },
    { id: 18, name: "Andalusian calamari", price: "13€" },
    { id: 19, name: "Grilled octopus with a touch of kimchi (slightly spicy), causa limeña and pico de gallo", price: "18€" },
    { id: 20, name: "Marinated salmon, tomato Barbastro, avocado, mozzarella and soy and honey emulsion", price: "12.5€" },
    { id: 21, name: "Grilled yellowfin red tuna tataki, teriyaki sauce, wasabi mayonnaise, sesame and sprouts", price: "15€" },
    { id: 22, name: "Yellowfin red tuna tartar with avocado cream", price: "16€" },
    { id: 23, name: "Minute steak tartar", price: "18€" },
    { id: 24, name: "Grilled beef tenderloin with foie and caramelized onion", price: "21.5€" },
    { id: 25, name: "Grilled beef rib steak from Cerdanya (500gr to share)", price: "27€" }
  ],
  desserts: [
    { id: 1, name: "Cheesecake with fruit jam", price: "6€" },
    { id: 2, name: "Chocolate cake with cocoa coating, flaked salt and homemade caramel", price: "6€" },
    { id: 3, name: "Ultra creamy flan with homemade cream", price: "6€" }
  ],
  beers: [
    { id: 1, name: "Estrella Galicia glass", price: "2.5€" },
    { id: 2, name: "Estrella Galicia small", price: "1.9€" },
    { id: 3, name: "Estrella Galicia mug", price: "4.2€" },
    { id: 4, name: "Estrella Galicia", price: "2.5€" },
    { id: 5, name: "Estrella Damm", price: "2.5€" },
    { id: 6, name: "Voll-Damm", price: "2.7€" },
    { id: 7, name: "Estrella Galicia non-alcoholic", price: "2.8€" },
    { id: 8, name: "Estrella Galicia gluten-free", price: "2.8€" },
    { id: 9, name: "Espiga", price: "5€" }
  ],
  wines: {
    white: [
      { id: 1, name: "Fenomenal 2022 (Verdejo)", origin: "D.O Rueda", price: "3.8€/19€" },
      { id: 2, name: "Ca Nestruc 2021 (Xarel.lo, Macabeo, Muscat)", origin: "D.O Catalunya", price: "3.8€/19€" },
      { id: 3, name: "Terra Prima 2022 (Xarel.lo, Macabeo, Moscatel de Fontignac)", origin: "D.O Penedés", price: "21€" },
      { id: 4, name: "El Perro Verde 2022 (Verdejo)", origin: "D.O Rueda", price: "21€" },
      { id: 5, name: "Perafita 2023 (Picapoll)", origin: "D.O Empordà", price: "22€" },
      { id: 6, name: "Gessamí 2022 (Muscat de Frontignan, Sauvignon Blanc, Gewürztraminer)", origin: "D.O Penedés", price: "22€" },
      { id: 7, name: "Terras Gauda 2022 (Albariño, Caiño Blanco, Loureiro)", origin: "D.O Rias Baixas", price: "28€" },
      { id: 8, name: "Can Sumoi Xarel.lo 2022", origin: "D.O Penedés", price: "29€" },
      { id: 9, name: "Belondrade Quinta Apolonia 2022 (Verdejo)", origin: "D.O Rueda", price: "52€" }
    ],
    red: [
      { id: 1, name: "Heraclio Alfaro crianza 2019 (Tempranillo, Garnacha, Graciano)", origin: "D.O Rioja", price: "3.8€/19€" },
      { id: 2, name: "Mas Picosa 2021 ECO (Garnacha, Syrah, Merlot, Tempranillo)", origin: "D.O Montsant", price: "3.8€/19€" },
      { id: 3, name: "Petit Caus 2022 ECO (Merlot, Syrah, Cabernet Franc, Tempranillo)", origin: "D.O Penedés", price: "23€" },
      { id: 4, name: "Pago de los Capellanes 2022 (Fino)", origin: "D.O Ribera del Duero", price: "24€" },
      { id: 5, name: "Vizcarra crianza 2020 (Fino)", origin: "D.O Ribera del Duero", price: "28€" },
      { id: 6, name: "Venta las Vacas 2021 (Fino)", origin: "D.O Ribera del Duero", price: "29€" },
      { id: 7, name: "Gran Caus 2017 (Merlot, Cabernet Franc, Cabernet Sauvignon)", origin: "D.O Penedés", price: "34€" },
      { id: 8, name: "Marques de Murrieta reserva 2019 (Tempranillo, Graciano, Mazuelo)", origin: "D.O Rioja", price: "38€" }
    ],
    rose: [
      { id: 1, name: "Els Nanos 2021 (Trepat ecològic)", origin: "D.O Conca de Barberà", price: "3.8€/19€" }
    ],
    sparkling: [
      { id: 1, name: "Fontallada Brut Nature 2020 (Macabeo, Xarel.lo, Parellada)", origin: "D.O Cava", price: "3.5€/17€" },
      { id: 2, name: "Llopart Brut Nature reserva 2019 (Macabeo, Xarel.lo, Parellada, Chardonnay)", origin: "D.O Cava", price: "32€" }
    ]
  }
};

export default menuData;

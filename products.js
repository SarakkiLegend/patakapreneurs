// Product list (generated from Final_Cracker_Price_List.xlsx).
// mrp = printed rate (shown crossed out) | price = our price (used in the cart)
// rec: true = shows in the Recommendations dropdown; note = short remark shown on the card.
const PRODUCTS = [
  // ---------- 💥 One Sound Crackers ----------
  { id: 1, category: "💥 One Sound Crackers", name: "2 ¾ Kuruvi Crackers", unit: "Pkt", mrp: 40, price: 20 },
  { id: 2, category: "💥 One Sound Crackers", name: "3 ½ Lakshmi Crackers", unit: "Pkt", mrp: 70, price: 35 },
  { id: 3, category: "💥 One Sound Crackers", name: "4\" Lakshmi Crackers", unit: "Pkt", mrp: 80, price: 40 },
  { id: 4, category: "💥 One Sound Crackers", name: "4\" Deluxe Lakshmi Crackers", unit: "Pkt", mrp: 100, price: 50 },
  { id: 5, category: "💥 One Sound Crackers", name: "4\" Super Deluxe Lakshmi", unit: "Pkt", mrp: 125, price: 62.5 },
  { id: 6, category: "💥 One Sound Crackers", name: "4\" Super Deluxe Gold Benten / Lakshmi", unit: "Pkt", mrp: 150, price: 75 },
  { id: 7, category: "💥 One Sound Crackers", name: "4\" Special Bird & Joker Deluxe", unit: "Pkt", mrp: 200, price: 100, rec: true },

  // ---------- 🧨 Bijili Crackers ----------
  { id: 8, category: "🧨 Bijili Crackers", name: "Bijili Red Crackers (100 Pcs)", unit: "Pkt", mrp: 165, price: 82.5 },
  { id: 9, category: "🧨 Bijili Crackers", name: "Sony Red Bijili (100 Pcs)", unit: "Pkt", mrp: 120, price: 80 },

  // ---------- 💥 Two Sound Crackers ----------
  { id: 10, category: "💥 Two Sound Crackers", name: "Two Sound Crackers", unit: "Pkt", mrp: 150, price: 75, rec: true },

  // ---------- ⚡ Sony Thunder World (Colour Shots) ----------
  { id: 11, category: "⚡ Sony Thunder World (Colour Shots)", name: "Seven Colour Shot (5 Pcs)", unit: "Box", mrp: 330, price: 220 },

  // ---------- 🎇 Sony Crackling Colour Shots ----------
  { id: 12, category: "🎇 Sony Crackling Colour Shots", name: "World Wonder (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 13, category: "🎇 Sony Crackling Colour Shots", name: "Crackling Flower (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 14, category: "🎇 Sony Crackling Colour Shots", name: "Flower Garden (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 15, category: "🎇 Sony Crackling Colour Shots", name: "X-Mas Tree (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 16, category: "🎇 Sony Crackling Colour Shots", name: "Crackling Shot Green (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 17, category: "🎇 Sony Crackling Colour Shots", name: "Crackling Shot Red (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 18, category: "🎇 Sony Crackling Colour Shots", name: "Golden Dragon (5 Pcs)", unit: "Box", mrp: 330, price: 282 },
  { id: 19, category: "🎇 Sony Crackling Colour Shots", name: "777 Crackers (5 Pcs)", unit: "Box", mrp: 330, price: 282 },

  // ---------- 🌸 Flower Pots ----------
  { id: 20, category: "🌸 Flower Pots", name: "Flower Pots Big", unit: "Box", mrp: 284, price: 242 },
  { id: 21, category: "🌸 Flower Pots", name: "Flower Pots Ashoka", unit: "Box", mrp: 550, price: 468 },
  { id: 22, category: "🌸 Flower Pots", name: "Flower Pots Giant", unit: "Box", mrp: 650, price: 553 },
  { id: 23, category: "🌸 Flower Pots", name: "Colour Koti", unit: "Box", mrp: 1050, price: 893 },
  { id: 24, category: "🌸 Flower Pots", name: "Whistling Piper (Nightingale, 5 Pcs)", unit: "Box", mrp: 526, price: 448 },
  { id: 25, category: "🌸 Flower Pots", name: "1½\" Twinkling Star", unit: "Box", mrp: 125, price: 60 },
  { id: 26, category: "🌸 Flower Pots", name: "1½\" Twinkling Star (New Sony)", unit: "Pkt", mrp: 110, price: 94 },

  // ---------- 🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.) ----------
  { id: 27, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Red Sun (5 Pcs)", unit: "Box", mrp: 950, price: 570 },
  { id: 28, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Green Garden (5 Pcs)", unit: "Box", mrp: 950, price: 570 },
  { id: 29, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Disney Star (5 Pcs)", unit: "Box", mrp: 950, price: 570 },
  { id: 30, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Crack Jack (5 Pcs)", unit: "Box", mrp: 950, price: 570 },
  { id: 31, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Colour War Mixing (5 Pcs)", unit: "Box", mrp: 950, price: 570 },
  { id: 32, category: "🌈 Colour Fountains / Flower Pots (Indigo, Sun, Twister, etc.)", name: "Golden Twister (5 Pcs)", unit: "Box", mrp: 950, price: 570 },

  // ---------- 🦚 Peacock Fountains ----------
  { id: 33, category: "🦚 Peacock Fountains", name: "Multi Colour Peacock (Sides)", unit: "Pce", mrp: 900, price: 765 },
  { id: 34, category: "🦚 Peacock Fountains", name: "Mega Peacock (Multi Colour Crackling)", unit: "Pce", mrp: 2200, price: 1870 },

  // ---------- ⛲ Fountain Flower Pots ----------
  { id: 35, category: "⛲ Fountain Flower Pots", name: "Dancing Butterfly (Red & Green)", unit: "Box", mrp: 550, price: 468 },
  { id: 36, category: "⛲ Fountain Flower Pots", name: "Amber Crackling", unit: "Box", mrp: 700, price: 595 },
  { id: 37, category: "⛲ Fountain Flower Pots", name: "Silver Crackling", unit: "Box", mrp: 700, price: 595 },
  { id: 38, category: "⛲ Fountain Flower Pots", name: "Yellow Crackling", unit: "Box", mrp: 700, price: 595 },

  // ---------- 🚿 Shower and Shot ----------
  { id: 39, category: "🚿 Shower and Shot", name: "Shower & Shot Fountain", unit: "Box", mrp: 1075, price: 914 },

  // ---------- 💣 Bombs ----------
  { id: 40, category: "💣 Bombs", name: "Bullet Bomb", unit: "Box", mrp: 100, price: 85 },
  { id: 41, category: "💣 Bombs", name: "Deluxe Bull Bomb", unit: "Box", mrp: 250, price: 213 },
  { id: 42, category: "💣 Bombs", name: "King of King (Green)", unit: "Box", mrp: 550, price: 468 },
  { id: 43, category: "💣 Bombs", name: "Classic Bomb", unit: "Box", mrp: 650, price: 553 },
  { id: 44, category: "💣 Bombs", name: "King of King Deluxe Bomb - Sony", unit: "Box", mrp: 340, price: 289 },
  { id: 45, category: "💣 Bombs", name: "Digital DTS Bomb", unit: "Box", mrp: 1100, price: 935 },

  // ---------- ⛲ Fancy Fountains ----------
  { id: 46, category: "⛲ Fancy Fountains", name: "Peacock Dance", unit: "Box", mrp: 900, price: 630, rec: true },

  // ---------- 🎠 Novelty Fountains / Multi-Function ----------
  { id: 47, category: "🎠 Novelty Fountains / Multi-Function", name: "Pikachu (3 Functions)", unit: "Box", mrp: 2450, price: 980 },
  { id: 48, category: "🎠 Novelty Fountains / Multi-Function", name: "Love Dose (6 Shots)", unit: "Box", mrp: 700, price: 595 },
  { id: 49, category: "🎠 Novelty Fountains / Multi-Function", name: "Monkey Star (5 Pcs)", unit: "Box", mrp: 1100, price: 935 },
  { id: 50, category: "🎠 Novelty Fountains / Multi-Function", name: "Dragon Ballz - Millennium Sound (3 Pcs)", unit: "Box", mrp: 1700, price: 1445 },

  // ---------- 🧸 Novelty Fountains ----------
  { id: 51, category: "🧸 Novelty Fountains", name: "Photoflash (5 Pcs)", unit: "Box", mrp: 350, price: 298 },
  { id: 52, category: "🧸 Novelty Fountains", name: "Shinchan (5 Pcs)", unit: "Box", mrp: 600, price: 510 },
  { id: 53, category: "🧸 Novelty Fountains", name: "Money Bank (3 Pcs)", unit: "Box", mrp: 1150, price: 978 },
  { id: 54, category: "🧸 Novelty Fountains", name: "Old is Gold (25 Pcs)", unit: "Box", mrp: 1100, price: 935 },

  // ---------- 🧵 Garland / String Crackers ----------
  { id: 55, category: "🧵 Garland / String Crackers", name: "28 Giant Premium", unit: "10 Pkts", mrp: 750, price: 525 },
  { id: 56, category: "🧵 Garland / String Crackers", name: "100 Premium", unit: "Pce", mrp: 200, price: 140 },
  { id: 57, category: "🧵 Garland / String Crackers", name: "1K Premium Full Count Special", unit: "Pce", mrp: 1750, price: 1225 },
  { id: 58, category: "🧵 Garland / String Crackers", name: "2K Premium Full Count Special", unit: "Pce", mrp: 3250, price: 1950 },
  { id: 59, category: "🧵 Garland / String Crackers", name: "5K Premium Full Count Special", unit: "Pce", mrp: 7500, price: 3000 },

  // ---------- 🍭 Novelty Fountains (Pappu, Lollipop, Emu Egg) ----------
  { id: 60, category: "🍭 Novelty Fountains (Pappu, Lollipop, Emu Egg)", name: "Pappu Shower", unit: "Pce", mrp: 800, price: 680 },
  { id: 61, category: "🍭 Novelty Fountains (Pappu, Lollipop, Emu Egg)", name: "Lollipop", unit: "5 Pcs", mrp: 900, price: 765 },
  { id: 62, category: "🍭 Novelty Fountains (Pappu, Lollipop, Emu Egg)", name: "Emu Egg", unit: "2 Pcs", mrp: 1100, price: 935 },

  // ---------- 🎆 Multi-Shot Aerials ----------
  { id: 63, category: "🎆 Multi-Shot Aerials", name: "12 Shot Be Happy (New)", unit: "Pce", mrp: 1050, price: 735 },
  { id: 64, category: "🎆 Multi-Shot Aerials", name: "15 Multi Colour Shot & Crackling Special", unit: "Pce", mrp: 1500, price: 1050 },
  { id: 65, category: "🎆 Multi-Shot Aerials", name: "20-20 Special Crackling", unit: "Pce", mrp: 2000, price: 1400 },
  { id: 66, category: "🎆 Multi-Shot Aerials", name: "30 Multi Colour Shot - Budget", unit: "Pce", mrp: 2200, price: 1540 },
  { id: 67, category: "🎆 Multi-Shot Aerials", name: "30 Multi Colour & Crackling Special", unit: "Pce", mrp: 2700, price: 1890 },
  { id: 68, category: "🎆 Multi-Shot Aerials", name: "60 Multi Colour - Budget", unit: "Pce", mrp: 4250, price: 2550 },
  { id: 69, category: "🎆 Multi-Shot Aerials", name: "60 Multi Colour & Crackling Special", unit: "Pce", mrp: 4750, price: 2850 },
  { id: 70, category: "🎆 Multi-Shot Aerials", name: "120 Multi Colour & Crackling Special", unit: "Pce", mrp: 9000, price: 5400 },
  { id: 71, category: "🎆 Multi-Shot Aerials", name: "240 Multi Colour & Crackling Special", unit: "Pce", mrp: 17500, price: 10500 },

  // ---------- 🎆 Fancy Aerials / Fancy Shells ----------
  { id: 72, category: "🎆 Fancy Aerials / Fancy Shells", name: "1½\" Fancy", unit: "Pce", mrp: 225, price: 135 },
  { id: 73, category: "🎆 Fancy Aerials / Fancy Shells", name: "2\" Fancy", unit: "Pce", mrp: 550, price: 330 },
  { id: 74, category: "🎆 Fancy Aerials / Fancy Shells", name: "Penta Colourful Crackling (5 in 1, 5 Pcs)", unit: "Box", mrp: 1000, price: 600 },
  { id: 75, category: "🎆 Fancy Aerials / Fancy Shells", name: "3½\" Fancy", unit: "Pce", mrp: 1750, price: 1050 },
  { id: 76, category: "🎆 Fancy Aerials / Fancy Shells", name: "3½\" Niagara Falls R&G White Coconut", unit: "Pce", mrp: 1950, price: 1170 },

  // ---------- 🏏 Themed Novelties (IPL & Social Media) ----------
  { id: 77, category: "🏏 Themed Novelties (IPL & Social Media)", name: "CSK", unit: "Box", mrp: 1650, price: 990, rec: true, note: "Night Sky shot (330 each) · Best value for money" },
  { id: 78, category: "🏏 Themed Novelties (IPL & Social Media)", name: "RCB", unit: "Box", mrp: 1650, price: 990, rec: true, note: "Night Sky shot (330 each) · Best value for money" },
  { id: 79, category: "🏏 Themed Novelties (IPL & Social Media)", name: "MI", unit: "Box", mrp: 1650, price: 990, rec: true, note: "Night Sky shot (330 each) · Best value for money" },
  { id: 80, category: "🏏 Themed Novelties (IPL & Social Media)", name: "Selfie", unit: "Pce", mrp: 2150, price: 1290 },
  { id: 81, category: "🏏 Themed Novelties (IPL & Social Media)", name: "Facebook", unit: "Pce", mrp: 2150, price: 1290 },
  { id: 82, category: "🏏 Themed Novelties (IPL & Social Media)", name: "Instagram", unit: "Pce", mrp: 2150, price: 1290 },
  { id: 83, category: "🏏 Themed Novelties (IPL & Social Media)", name: "Twitter", unit: "Pce", mrp: 2150, price: 1290 },
  { id: 84, category: "🏏 Themed Novelties (IPL & Social Media)", name: "WhatsApp", unit: "Pce", mrp: 2150, price: 1290 },
  { id: 85, category: "🏏 Themed Novelties (IPL & Social Media)", name: "Skype", unit: "Pce", mrp: 2150, price: 1290 },

  // ---------- 🌠 Big Fancy Aerials / Sky Shots ----------
  { id: 86, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Shadow Fight (Double Ball, 1 Pce)", unit: "Box", mrp: 980, price: 980 },
  { id: 87, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Third Planet (2 Pcs)", unit: "Box", mrp: 4250, price: 2550, rec: true, note: "High discount" },
  { id: 88, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Boom Crunchy (2 Pcs)", unit: "Box", mrp: 4250, price: 2550 },
  { id: 89, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Golden Fairy (2 Pcs)", unit: "Box", mrp: 4250, price: 2550 },
  { id: 90, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Sky Woofer (2 Pcs)", unit: "Box", mrp: 4250, price: 2550 },
  { id: 91, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Honey Comb (2 Pcs)", unit: "Box", mrp: 4250, price: 2550 },
  { id: 92, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Dandiya (2 Pcs)", unit: "Box", mrp: 4250, price: 2550 },
  { id: 93, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Avatar (2 Pcs)", unit: "Box", mrp: 4250, price: 2550, rec: true, note: "High discount" },
  { id: 94, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Terror (3 Pcs)", unit: "Box", mrp: 740, price: 555 },
  { id: 95, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Killer (3 Pcs)", unit: "Box", mrp: 740, price: 555 },
  { id: 96, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Challenger (3 Pcs)", unit: "Box", mrp: 740, price: 555 },
  { id: 97, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Thriller (3 Pcs)", unit: "Box", mrp: 740, price: 555 },
  { id: 98, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Commander (3 Pcs)", unit: "Box", mrp: 740, price: 555 },
  { id: 99, category: "🌠 Big Fancy Aerials / Sky Shots", name: "Ranger (3 Pcs)", unit: "Box", mrp: 740, price: 555 },

  // ---------- 🌍 Premium Fancy Aerials - Country Series ----------
  { id: 100, category: "🌍 Premium Fancy Aerials - Country Series", name: "Paris (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 101, category: "🌍 Premium Fancy Aerials - Country Series", name: "London (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 102, category: "🌍 Premium Fancy Aerials - Country Series", name: "Denmark (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 103, category: "🌍 Premium Fancy Aerials - Country Series", name: "Germany (2 Pcs)", unit: "Box", mrp: 810, price: 700, rec: true, note: "Night Sky shot (350 each) · Best value for money" },
  { id: 104, category: "🌍 Premium Fancy Aerials - Country Series", name: "Poland (2 Pcs)", unit: "Box", mrp: 810, price: 700, rec: true, note: "Night Sky shot (350 each) · Best value for money" },
  { id: 105, category: "🌍 Premium Fancy Aerials - Country Series", name: "Finland (2 Pcs)", unit: "Box", mrp: 810, price: 700, rec: true, note: "Night Sky shot (350 each) · Best value for money" },
  { id: 106, category: "🌍 Premium Fancy Aerials - Country Series", name: "Italy (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 107, category: "🌍 Premium Fancy Aerials - Country Series", name: "Sweden (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 108, category: "🌍 Premium Fancy Aerials - Country Series", name: "Norway (2 Pcs)", unit: "Box", mrp: 810, price: 608 },
  { id: 109, category: "🌍 Premium Fancy Aerials - Country Series", name: "Spain (2 Pcs)", unit: "Box", mrp: 810, price: 608 },

  // ---------- 🗼 Premium Fancy Aerials - Landmark Series ----------
  { id: 110, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Buckingham", unit: "Pce", mrp: 408, price: 306 },
  { id: 111, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Eiffel", unit: "Pce", mrp: 408, price: 350, rec: true, note: "Night Sky shot (350) · Best value for money" },
  { id: 112, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Danish", unit: "Pce", mrp: 408, price: 306 },
  { id: 113, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Warsaw", unit: "Pce", mrp: 408, price: 306 },
  { id: 114, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Helsinki", unit: "Pce", mrp: 408, price: 306 },
  { id: 115, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Pisa", unit: "Pce", mrp: 408, price: 306 },
  { id: 116, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Swedish", unit: "Pce", mrp: 408, price: 306 },
  { id: 117, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Oslo", unit: "Pce", mrp: 408, price: 350, rec: true, note: "Night Sky shot (350) · Best value for money" },
  { id: 118, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Barcelona", unit: "Pce", mrp: 408, price: 306 },
  { id: 119, category: "🗼 Premium Fancy Aerials - Landmark Series", name: "Berlin", unit: "Pce", mrp: 408, price: 306 },

  // ---------- 🆕 New Collection - Fancy Items ----------
  { id: 120, category: "🆕 New Collection - Fancy Items", name: "Colour 12 Shot (New)", unit: "Pce", mrp: 402, price: 305 },
  { id: 121, category: "🆕 New Collection - Fancy Items", name: "Rang Chakkar (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 122, category: "🆕 New Collection - Fancy Items", name: "Dance Aur Dance (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 123, category: "🆕 New Collection - Fancy Items", name: "Silver Spider (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 124, category: "🆕 New Collection - Fancy Items", name: "Silver Comet (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 125, category: "🆕 New Collection - Fancy Items", name: "105 Colour Balls (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 126, category: "🆕 New Collection - Fancy Items", name: "Raider of the Last Ark (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 127, category: "🆕 New Collection - Fancy Items", name: "Sky Bloom (New)", unit: "Pce", mrp: 640, price: 480 },
  { id: 128, category: "🆕 New Collection - Fancy Items", name: "15 Shot Dil Mange More (New)", unit: "Pce", mrp: 640, price: 480 },

  // ---------- ✨ Fancy Fountains / Novelties (Special) ----------
  { id: 129, category: "✨ Fancy Fountains / Novelties (Special)", name: "25th Hour", unit: "Pce", mrp: 842, price: 632 },
  { id: 130, category: "✨ Fancy Fountains / Novelties (Special)", name: "Colour Queen", unit: "Pce", mrp: 3380, price: 2535 },
  { id: 131, category: "✨ Fancy Fountains / Novelties (Special)", name: "Crackling Coconut", unit: "Pce", mrp: 3480, price: 2610 },
  { id: 132, category: "✨ Fancy Fountains / Novelties (Special)", name: "Volcano (High Voltage)", unit: "Pce", mrp: 6038, price: 4530 },
  { id: 133, category: "✨ Fancy Fountains / Novelties (Special)", name: "Sweet 16 (Silver Whistle)", unit: "Pce", mrp: 762, price: 575 },

  // ---------- 🎁 Fancy Items - 2 Pcs Boxes (Series 1) ----------
  { id: 134, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Blue Chip (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 135, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Neela Angels (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 136, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Golden Octopus (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 137, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Magic Pop Pop (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 138, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Monster (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 139, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Silver Rain (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 140, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Pop Corn (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 141, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Sim 2 (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 142, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Grass Gross (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 143, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Cappuccino (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },
  { id: 144, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 1)", name: "Gem Park (2 Pcs)", unit: "Box", mrp: 1976, price: 1482 },

  // ---------- 🎁 Fancy Items - 2 Pcs Boxes (Series 2) ----------
  { id: 145, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Hercules (2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },
  { id: 146, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "X-Men (2 Pcs)", unit: "Box", mrp: 2330, price: 1750, rec: true, note: "Night Sky shot" },
  { id: 147, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Bruce Lee (2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },
  { id: 148, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "7th Sense (2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },
  { id: 149, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Colour Plus (2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },
  { id: 150, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Zulk War (Ring, 2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },
  { id: 151, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Butterfly in the Sky (2 Pcs)", unit: "Box", mrp: 2330, price: 1750, rec: true, note: "Night Sky shot" },
  { id: 152, category: "🎁 Fancy Items - 2 Pcs Boxes (Series 2)", name: "Oscar (2 Pcs)", unit: "Box", mrp: 2330, price: 1750 },

  // ---------- 💥 Boom Series (3 Pcs) ----------
  { id: 153, category: "💥 Boom Series (3 Pcs)", name: "Royal Boom (3 Pcs)", unit: "Box", mrp: 940, price: 705 },
  { id: 154, category: "💥 Boom Series (3 Pcs)", name: "Yellow Boom (3 Pcs)", unit: "Box", mrp: 940, price: 705 },
  { id: 155, category: "💥 Boom Series (3 Pcs)", name: "Red Boom (3 Pcs)", unit: "Box", mrp: 940, price: 705 },
  { id: 156, category: "💥 Boom Series (3 Pcs)", name: "Green / Multi Boom (3 Pcs)", unit: "Box", mrp: 940, price: 730, rec: true, note: "Night Sky shot" },
  { id: 157, category: "💥 Boom Series (3 Pcs)", name: "Milky Boom (3 Pcs)", unit: "Box", mrp: 940, price: 730, rec: true, note: "Night Sky shot" },
  { id: 158, category: "💥 Boom Series (3 Pcs)", name: "Twin Boom (3 Pcs)", unit: "Box", mrp: 940, price: 705 },

  // ---------- 🌧️ Shower Series (3 Pcs) ----------
  { id: 159, category: "🌧️ Shower Series (3 Pcs)", name: "Indian Showers (3 Pcs)", unit: "Box", mrp: 960, price: 720 },
  { id: 160, category: "🌧️ Shower Series (3 Pcs)", name: "Arctic Showers (3 Pcs)", unit: "Box", mrp: 960, price: 720 },
  { id: 161, category: "🌧️ Shower Series (3 Pcs)", name: "Atlantic Showers (3 Pcs)", unit: "Box", mrp: 960, price: 720 },
  { id: 162, category: "🌧️ Shower Series (3 Pcs)", name: "Antarctic Showers (3 Pcs)", unit: "Box", mrp: 960, price: 720 },
  { id: 163, category: "🌧️ Shower Series (3 Pcs)", name: "Pacific Showers (3 Pcs)", unit: "Box", mrp: 960, price: 720 },

  // ---------- 🎆 Multi-Shot Aerials (Shot Count in Name) ----------
  { id: 164, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Transporter - 3", unit: "Pce", mrp: 3320, price: 2430 },
  { id: 165, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Power - 60", unit: "Pce", mrp: 3900, price: 2925 },
  { id: 166, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Black & White", unit: "Pce", mrp: 5480, price: 4110 },
  { id: 167, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "361 Degrees - 30", unit: "Pce", mrp: 5480, price: 4110 },
  { id: 168, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Zodiac - 30", unit: "Pce", mrp: 5480, price: 4110 },
  { id: 169, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Zero Hour - 30", unit: "Pce", mrp: 5480, price: 4110 },
  { id: 170, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Golden Eye - 30", unit: "Pce", mrp: 5480, price: 4110, rec: true, note: "Night Sky 30 shot" },
  { id: 171, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "Terminator - 120", unit: "Pce", mrp: 7606, price: 5710, rec: true, note: "Night Sky 120 shot with 25% off" },
  { id: 172, category: "🎆 Multi-Shot Aerials (Shot Count in Name)", name: "N-Joi - 240", unit: "Pce", mrp: 14676, price: 11000, rec: true, note: "Night Sky 240 shot with 25% off" },

  // ---------- 🎇 Multi-Shot / Fancy Specials ----------
  { id: 173, category: "🎇 Multi-Shot / Fancy Specials", name: "Ulta - Pulta 75", unit: "Pce", mrp: 10010, price: 8260 },
  { id: 174, category: "🎇 Multi-Shot / Fancy Specials", name: "Carnival", unit: "Pce", mrp: 12026, price: 7215 },
  { id: 175, category: "🎇 Multi-Shot / Fancy Specials", name: "Pyro Garden", unit: "Pce", mrp: 13970, price: 8382 },
  { id: 176, category: "🎇 Multi-Shot / Fancy Specials", name: "The Scorpion King", unit: "Pce", mrp: 20332, price: 12200 },
  { id: 177, category: "🎇 Multi-Shot / Fancy Specials", name: "Hollywood Park", unit: "Pce", mrp: 21216, price: 12730 },
  { id: 178, category: "🎇 Multi-Shot / Fancy Specials", name: "Euro - II", unit: "Pce", mrp: 23696, price: 14000, rec: true, note: "Night Sky shot" },
  { id: 179, category: "🎇 Multi-Shot / Fancy Specials", name: "Azzaroo", unit: "Pce", mrp: 25108, price: 15070 },
  { id: 180, category: "🎇 Multi-Shot / Fancy Specials", name: "21st Century", unit: "Pce", mrp: 25286, price: 15170 },

  // ---------- ⚡ Flash Crackers ----------
  { id: 181, category: "⚡ Flash Crackers", name: "Flash", unit: "Pce", mrp: 2900, price: 1950, rec: true, note: "Heavy Night Sky shot" },

  // ---------- ✨ Sparklers ----------
  { id: 182, category: "✨ Sparklers", name: "7 cm Electric Sparklers", unit: "10 Box", mrp: 500, price: 400 },
  { id: 183, category: "✨ Sparklers", name: "7 cm Glittering Sparklers", unit: "10 Box", mrp: 600, price: 480 },
  { id: 184, category: "✨ Sparklers", name: "7 cm Green Sparklers", unit: "10 Box", mrp: 650, price: 520, rec: true, note: "For lighting the sky shots" },
  { id: 185, category: "✨ Sparklers", name: "7 cm Red Sparklers", unit: "10 Box", mrp: 700, price: 560 },
  { id: 186, category: "✨ Sparklers", name: "10 cm Electric Sparklers", unit: "5 Box", mrp: 450, price: 360 },
  { id: 187, category: "✨ Sparklers", name: "10 cm Glittering Sparklers", unit: "5 Box", mrp: 550, price: 440, rec: true, note: "For lighting the sky shots" },
  { id: 188, category: "✨ Sparklers", name: "10 cm Green Sparklers", unit: "5 Box", mrp: 600, price: 480 },
  { id: 189, category: "✨ Sparklers", name: "10 cm Red Sparklers", unit: "5 Box", mrp: 650, price: 520 },
  { id: 190, category: "✨ Sparklers", name: "15 cm Electric Sparklers", unit: "2 Box", mrp: 450, price: 360 },
  { id: 191, category: "✨ Sparklers", name: "15 cm Glittering Sparklers", unit: "2 Box", mrp: 500, price: 400, rec: true, note: "For lighting the sky shots" },
  { id: 192, category: "✨ Sparklers", name: "15 cm Green Sparklers", unit: "2 Box", mrp: 550, price: 440 },
  { id: 193, category: "✨ Sparklers", name: "15 cm Red Sparklers", unit: "2 Box", mrp: 600, price: 480 },
  { id: 194, category: "✨ Sparklers", name: "30 cm Electric Sparklers", unit: "2 Box", mrp: 450, price: 360 },
  { id: 195, category: "✨ Sparklers", name: "30 cm Glittering Sparklers", unit: "2 Box", mrp: 500, price: 400, rec: true, note: "For lighting the sky shots" },
  { id: 196, category: "✨ Sparklers", name: "30 cm Green Sparklers", unit: "2 Box", mrp: 550, price: 330 },
  { id: 197, category: "✨ Sparklers", name: "30 cm Red Sparklers", unit: "2 Box", mrp: 600, price: 360, rec: true, note: "For lighting the sky shots" },
  { id: 198, category: "✨ Sparklers", name: "50 cm Electric Sparklers", unit: "Tube", mrp: 750, price: 450 },
  { id: 199, category: "✨ Sparklers", name: "50 cm Glittering Sparklers", unit: "Tube", mrp: 800, price: 480 },

  // ---------- 🌟 Specialty Sparklers ----------
  { id: 200, category: "🌟 Specialty Sparklers", name: "30 cm Crackling Comets Kids Special (New)", unit: "Box", mrp: 1100, price: 660 },
  { id: 201, category: "🌟 Specialty Sparklers", name: "50 cm Mingle Mega Mix (6 in 1) Sparklers (UV Packing)", unit: "Box", mrp: 1250, price: 750 },

  // ---------- 🧨 Party Bombs ----------
  { id: 202, category: "🧨 Party Bombs", name: "Red Dragon (10 Pcs)", unit: "Box", mrp: 1750, price: 950 },
  { id: 203, category: "🧨 Party Bombs", name: "Paper Bomb 250", unit: "Pce", mrp: 250, price: 200 },
  { id: 204, category: "🧨 Party Bombs", name: "Paper Bomb 500", unit: "Pce", mrp: 500, price: 425, rec: true },

  // ---------- 🎁 Gift Boxes ----------
  { id: 205, category: "🎁 Gift Boxes", name: "Spider Man (25 Items)", unit: "Box", mrp: 1200, price: 1200 },
  { id: 206, category: "🎁 Gift Boxes", name: "Hulk (35 Items)", unit: "Box", mrp: 1800, price: 1530 },
  { id: 207, category: "🎁 Gift Boxes", name: "Iron Man (45 Items)", unit: "Box", mrp: 2400, price: 2040 },
  { id: 208, category: "🎁 Gift Boxes", name: "Doomsday (55 Items)", unit: "Box", mrp: 3000, price: 2550 }
];

// Last updated: Jan 25, 2026
// Location data
// Format: { city, country, lat, lng, type, periods: [{ start, end }] }
// Types: "lived", "business", "personal", "both"

const travelData = [

  // ####
  // # AUSTRIA
  // ####
  {
    city: "Bregenz",
    country: "Austria",
    lat: 47.5031,
    lng: 9.7471,
    type: "personal",
    periods: [
      { start: "2022-12-10", end: "2022-12-11" }  // exact date to be updated - weekend while in Feldkirch
    ]
  },
  {
    city: "Dornbirn",
    country: "Austria",
    lat: 47.4125,
    lng: 9.7417,
    type: "personal",
    periods: [
      { start: "2023-01-14", end: "2023-01-15" }  // exact date to be updated - weekend while in Feldkirch
    ]
  },
  {
    city: "Feldkirch",
    country: "Austria",
    lat: 47.2333,
    lng: 9.6000,
    type: "lived",
    periods: [
      { start: "2022-10-01", end: "2023-02-28" }
    ]
  },
  {
    city: "Salzburg",
    country: "Austria",
    lat: 47.8095,
    lng: 13.0550,
    type: "personal",
    periods: [
      { start: "2021-11-06", end: "2021-11-06" }
    ]
  },
  {
    city: "Vienna",
    country: "Austria",
    lat: 48.2082,
    lng: 16.3738,
    type: "personal",
    periods: [
      { start: "2022-12-15", end: "2022-12-16" }
    ]
  },

  // ####
  // # BAHRAIN
  // ####
  {
    city: "Bahrain",
    country: "Bahrain",
    lat: 26.0667,
    lng: 50.5577,
    type: "personal",
    periods: [
      { start: "2024-08-27", end: "2024-08-27" }
    ]
  },

  // ####
  // # BELGIUM
  // ####
  {
    city: "Brussels",
    country: "Belgium",
    lat: 50.8503,
    lng: 4.3517,
    type: "both",
    periods: [
      { start: "2026-09-15", end: "2026-09-21" }
    ]
  },

  // ####
  // # CZECH REPUBLIC
  // ####
  {
    city: "Prague",
    country: "Czech Republic",
    lat: 50.0755,
    lng: 14.4378,
    type: "personal",
    periods: [
      { start: "2022-03-11", end: "2022-03-13" },
      { start: "2023-07-15", end: "2023-07-18" }  // exact date to be updated
    ]
  },

  // ####
  // # FRANCE
  // ####
  {
    city: "Annecy",
    country: "France",
    lat: 45.8992,
    lng: 6.1294,
    type: "both",
    periods: [
      { start: "2026-02-10", end: "2026-03-16" }
    ]
  },
  {
    city: "Avignon",
    country: "France",
    lat: 43.9493,
    lng: 4.8055,
    type: "personal",
    periods: [
      { start: "2024-07-15", end: "2024-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Bordeaux",
    country: "France",
    lat: 44.8378,
    lng: -0.5792,
    type: "personal",
    periods: [
      { start: "2024-10-20", end: "2024-10-20" }
    ]
  },
  {
    city: "Camaret-sur-Mer",
    country: "France",
    lat: 48.2747,
    lng: -4.5997,
    type: "personal",
    periods: [
      { start: "2020-07-15", end: "2020-07-22" }  // exact date to be updated
    ]
  },
  {
    city: "Chambéry",
    country: "France",
    lat: 45.5646,
    lng: 5.9178,
    type: "personal",
    periods: [
      { start: "2012-07-15", end: "2012-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Deauville",
    country: "France",
    lat: 49.3583,
    lng: 0.0667,
    type: "personal",
    periods: [
      { start: "2018-07-15", end: "2018-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Evreux",
    country: "France",
    lat: 49.0241,
    lng: 1.1508,
    type: "personal",
    periods: [
      { start: "2023-07-15", end: "2023-07-22" }  // exact date to be updated
    ]
  },
  {
    city: "Lyon",
    country: "France",
    lat: 45.7640,
    lng: 4.8357,
    type: "personal",
    periods: [
      { start: "2024-09-11", end: "2024-09-16" }
    ]
  },
  {
    city: "Metz",
    country: "France",
    lat: 49.1193,
    lng: 6.1757,
    type: "personal",
    periods: [
      { start: "2010-07-15", end: "2010-07-22" }  // exact date to be updated
    ]
  },
  {
    city: "Paris",
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
    type: "lived",
    periods: [
      { start: "2016-09-01", end: "2020-12-31" },
      { start: "2021-09-01", end: "2021-09-30" },
      { start: "2024-07-31", end: "2024-08-07" },
      { start: "2024-11-01", end: "2024-11-03" },
      { start: "2024-12-31", end: "2025-01-03" },
      { start: "2025-07-20", end: "2025-07-22" },
      { start: "2025-10-17", end: "2025-10-19" },
      { start: "2025-12-26", end: "2025-12-27" }
    ]
  },
  {
    city: "Perpignan",
    country: "France",
    lat: 42.6986,
    lng: 2.8956,
    type: "personal",
    periods: [
      { start: "2024-10-04", end: "2024-10-06" }
    ]
  },
  {
    city: "Rouen",
    country: "France",
    lat: 49.4432,
    lng: 1.0999,
    type: "personal",
    periods: [
      { start: "2025-02-15", end: "2025-02-22" }  // exact date to be updated
    ]
  },
  {
    city: "Strasbourg",
    country: "France",
    lat: 48.5734,
    lng: 7.7521,
    type: "personal",
    periods: [
      { start: "2024-10-23", end: "2024-10-23" }
    ]
  },
  {
    city: "Tours",
    country: "France",
    lat: 47.3941,
    lng: 0.6848,
    type: "personal",
    periods: [
      { start: "2024-10-21", end: "2024-10-22" }
    ]
  },
  {
    city: "Trouville",
    country: "France",
    lat: 49.3658,
    lng: 0.0808,
    type: "personal",
    periods: [
      { start: "2018-07-15", end: "2018-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Lille",
    country: "France",
    lat: 50.6292,
    lng: 3.0573,
    type: "personal",
    periods: [
      { start: "2019-07-15", end: "2019-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Marseille",
    country: "France",
    lat: 43.2965,
    lng: 5.3698,
    type: "personal",
    periods: [
      { start: "2014-07-15", end: "2014-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Toulouse",
    country: "France",
    lat: 43.6047,
    lng: 1.4442,
    type: "personal",
    periods: [
      { start: "2013-07-15", end: "2013-07-17" }  // exact date to be updated
    ]
  },
  {
    city: "Montpellier",
    country: "France",
    lat: 43.6108,
    lng: 3.8767,
    type: "personal",
    periods: [
      { start: "2023-07-15", end: "2023-07-15" }  // exact date to be updated
    ]
  },
  {
    city: "Reims",
    country: "France",
    lat: 49.2583,
    lng: 4.0317,
    type: "personal",
    periods: [
      { start: "2016-01-15", end: "2016-01-17" }  // exact date to be updated
    ]
  },
  {
    city: "Noirmoutier",
    country: "France",
    lat: 46.9986,
    lng: -2.2453,
    type: "personal",
    periods: [
      { start: "2010-07-15", end: "2010-07-17" }  // exact date to be updated
    ]
  },

  // ####
  // # GERMANY
  // ####
  {
    city: "Berlin",
    country: "Germany",
    lat: 52.5200,
    lng: 13.4050,
    type: "both",
    periods: [
      { start: "2025-11-04", end: "2025-11-10" }
    ]
  },
  {
    city: "Düsseldorf",
    country: "Germany",
    lat: 51.2277,
    lng: 6.7735,
    type: "both",
    periods: [
      { start: "2026-08-11", end: "2026-08-24" }
    ]
  },
  {
    city: "Frankfurt am Main",
    country: "Germany",
    lat: 50.1109,
    lng: 8.6821,
    type: "lived",
    periods: [
      { start: "1999-01-01", end: "2016-08-31" },
      { start: "2024-07-08", end: "2024-07-09" },
      { start: "2024-09-09", end: "2024-09-10" },
      { start: "2024-09-30", end: "2024-09-30" },
      { start: "2024-12-30", end: "2024-12-30" },
      { start: "2025-01-30", end: "2025-01-31" },
      { start: "2025-05-24", end: "2025-05-26" },
      { start: "2026-08-25", end: "2026-08-31" },
      { start: "2026-09-08", end: "2026-09-14" }
    ]
  },
  {
    city: "Freiburg",
    country: "Germany",
    lat: 47.9990,
    lng: 7.8421,
    type: "personal",
    periods: [
      { start: "2024-10-03", end: "2024-10-03" }
    ]
  },
  {
    city: "Garding",
    country: "Germany",
    lat: 54.3333,
    lng: 8.7833,
    type: "personal",
    periods: [
      { start: "2024-12-24", end: "2024-12-26" }
    ]
  },
  {
    city: "Hamburg",
    country: "Germany",
    lat: 53.5511,
    lng: 9.9937,
    type: "both",
    periods: [
      { start: "2024-11-16", end: "2024-11-17" },
      { start: "2025-01-27", end: "2025-01-29" },
      { start: "2025-04-18", end: "2025-04-20" },
      { start: "2026-10-13", end: "2026-10-19" }
    ]
  },
  {
    city: "Heidgraben",
    country: "Germany",
    lat: 53.7167,
    lng: 9.6833,
    type: "personal",
    periods: [
      { start: "2024-12-21", end: "2024-12-23" },
      { start: "2024-12-27", end: "2024-12-29" }
    ]
  },
  {
    city: "Munich",
    country: "Germany",
    lat: 48.1351,
    lng: 11.5820,
    type: "lived",
    periods: [
      { start: "2021-10-01", end: "2022-08-31" },
      { start: "2023-03-01", end: "2025-11-03" },
      { start: "2025-11-11", end: "2025-11-17" },
      { start: "2025-12-28", end: "2026-01-04" },
      { start: "2026-01-17", end: "2026-02-09" },
      { start: "2026-03-17", end: "2026-06-08" },
      { start: "2026-07-14", end: "2026-08-10" },
      { start: "2026-09-01", end: "2026-09-07" },
      { start: "2026-09-22", end: "2026-10-12" },
      { start: "2026-10-20", end: "present" }
    ]
  },
  {
    city: "Nuremberg",
    country: "Germany",
    lat: 49.4521,
    lng: 11.0767,
    type: "personal",
    periods: [
      { start: "2021-12-15", end: "2021-12-15" }  // exact date to be updated
    ]
  },
  {
    city: "Schloss Neuschwanstein",
    country: "Germany",
    lat: 47.5576,
    lng: 10.7498,
    type: "personal",
    periods: [
      { start: "2025-05-03", end: "2025-05-04" }
    ]
  },
  {
    city: "Oberstdorf",
    country: "Germany",
    lat: 47.4097,
    lng: 10.2789,
    type: "personal",
    periods: [
      { start: "2010-02-15", end: "2010-02-22" }  // exact date to be updated
    ]
  },
  {
    city: "Potsdam",
    country: "Germany",
    lat: 52.3906,
    lng: 13.0645,
    type: "personal",
    periods: [
      { start: "2024-10-01", end: "2024-10-02" }
    ]
  },
  {
    city: "Saarbrücken",
    country: "Germany",
    lat: 49.2402,
    lng: 6.9969,
    type: "personal",
    periods: [
      { start: "2017-10-01", end: "2017-10-07" }  // exact date to be updated
    ]
  },

  // ####
  // # INDONESIA
  // ####
  {
    city: "Bali",
    country: "Indonesia",
    lat: -8.3405,
    lng: 115.0920,
    type: "personal",
    periods: [
      { start: "2025-12-18", end: "2025-12-18" },
      { start: "2025-12-24", end: "2025-12-25" }
    ]
  },
  {
    city: "Nusa Penida",
    country: "Indonesia",
    lat: -8.7275,
    lng: 115.5444,
    type: "personal",
    periods: [
      { start: "2025-12-19", end: "2025-12-23" }
    ]
  },

  // ####
  // # ITALY
  // ####
  {
    city: "Alberobello",
    country: "Italy",
    lat: 40.7846,
    lng: 17.2376,
    type: "personal",
    periods: [
      { start: "2020-04-15", end: "2020-04-16" }  // exact date to be updated - Puglia road trip
    ]
  },
  {
    city: "Bari",
    country: "Italy",
    lat: 41.1171,
    lng: 16.8719,
    type: "personal",
    periods: [
      { start: "2020-04-17", end: "2020-04-18" }  // exact date to be updated - Puglia road trip
    ]
  },
  {
    city: "Bergamo",
    country: "Italy",
    lat: 45.6983,
    lng: 9.6773,
    type: "personal",
    periods: [
      { start: "2021-07-02", end: "2021-07-03" }  // exact date to be updated - beginning of Milan stay
    ]
  },
  {
    city: "Bologna",
    country: "Italy",
    lat: 44.4949,
    lng: 11.3426,
    type: "personal",
    periods: [
      { start: "2021-07-27", end: "2021-07-28" }  // exact date to be updated - end of Milan stay
    ]
  },
  {
    city: "Cinque Terre",
    country: "Italy",
    lat: 44.1461,
    lng: 9.6439,
    type: "personal",
    periods: [
      { start: "2021-07-29", end: "2021-07-31" }  // exact date to be updated - end of Milan stay
    ]
  },
  {
    city: "Florence",
    country: "Italy",
    lat: 43.7696,
    lng: 11.2558,
    type: "personal",
    periods: [
      { start: "2021-07-26", end: "2021-07-27" }  // exact date to be updated - end of Milan stay
    ]
  },
  {
    city: "Milan",
    country: "Italy",
    lat: 45.4642,
    lng: 9.1900,
    type: "personal",
    periods: [
      { start: "2021-07-01", end: "2021-07-31" }
    ]
  },
  {
    city: "Monopoli",
    country: "Italy",
    lat: 40.9510,
    lng: 17.2900,
    type: "personal",
    periods: [
      { start: "2020-04-18", end: "2020-04-19" }  // exact date to be updated - Puglia road trip
    ]
  },
  {
    city: "Ostuni",
    country: "Italy",
    lat: 40.7297,
    lng: 17.5780,
    type: "personal",
    periods: [
      { start: "2020-04-19", end: "2020-04-20" }  // exact date to be updated - Puglia road trip
    ]
  },
  {
    city: "Pompei",
    country: "Italy",
    lat: 40.7462,
    lng: 14.4989,
    type: "personal",
    periods: [
      { start: "2020-04-20", end: "2020-04-21" }  // exact date to be updated - Puglia road trip
    ]
  },
  {
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lng: 12.4964,
    type: "lived",
    periods: [
      { start: "2021-01-01", end: "2021-06-30" }
    ]
  },
  {
    city: "Venice",
    country: "Italy",
    lat: 45.4408,
    lng: 12.3155,
    type: "personal",
    periods: [
      { start: "2020-03-01", end: "2020-03-07" }  // exact date to be updated
    ]
  },

  // ####
  // # LIECHTENSTEIN
  // ####
  {
    city: "Schaan",
    country: "Liechtenstein",
    lat: 47.1647,
    lng: 9.5077,
    type: "business",
    periods: [
      { start: "2022-10-01", end: "2023-02-28" }
    ]
  },

  // ####
  // # MALAYSIA
  // ####
  {
    city: "Johor Bahru",
    country: "Malaysia",
    lat: 1.4927,
    lng: 103.7414,
    type: "personal",
    periods: [
      { start: "2024-08-18", end: "2024-08-18" }
    ]
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    lat: 3.1390,
    lng: 101.6869,
    type: "personal",
    periods: [
      { start: "2024-08-14", end: "2024-08-17" }
    ]
  },

  // ####
  // # MOROCCO
  // ####
  {
    city: "Fes",
    country: "Morocco",
    lat: 34.0181,
    lng: -5.0078,
    type: "personal",
    periods: [
      { start: "2024-10-10", end: "2024-10-12" }
    ]
  },

  // ####
  // # NETHERLANDS
  // ####
  {
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.3676,
    lng: 4.9041,
    type: "personal",
    periods: [
      { start: "2020-10-15", end: "2020-10-16" }  // exact date to be updated - spring or autumn 2020, while in Paris
    ]
  },
  {
    city: "Delft",
    country: "Netherlands",
    lat: 52.0116,
    lng: 4.3571,
    type: "personal",
    periods: [
      { start: "2020-10-17", end: "2020-10-17" }  // exact date to be updated - spring or autumn 2020, while in Paris
    ]
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    lat: 51.9225,
    lng: 4.4792,
    type: "personal",
    periods: [
      { start: "2020-10-18", end: "2020-10-19" }  // exact date to be updated - spring or autumn 2020, while in Paris
    ]
  },
  {
    city: "Utrecht",
    country: "Netherlands",
    lat: 52.0907,
    lng: 5.1214,
    type: "business",
    periods: [
      { start: "2025-11-18", end: "2025-11-23" }
    ]
  },
  {
    city: "Venlo",
    country: "Netherlands",
    lat: 51.3704,
    lng: 6.1724,
    type: "personal",
    periods: [
      { start: "2020-08-22", end: "2020-08-22" }  // exact date to be updated - summer while in Paris
    ]
  },

  // ####
  // # NORWAY
  // ####
  {
    city: "Oslo",
    country: "Norway",
    lat: 59.9139,
    lng: 10.7522,
    type: "personal",
    periods: [
      { start: "2022-07-15", end: "2022-07-22" }  // exact date to be updated - summer 22
    ]
  },

  // ####
  // # OMAN
  // ####
  {
    city: "Muscat",
    country: "Oman",
    lat: 23.5880,
    lng: 58.3829,
    type: "personal",
    periods: [
      { start: "2024-08-11", end: "2024-08-11" }
    ]
  },

  // ####
  // # PORTUGAL
  // ####
  {
    city: "Ribamar",
    country: "Portugal",
    lat: 39.0833,
    lng: -9.3333,
    type: "personal",
    periods: [
      { start: "2024-10-08", end: "2024-10-09" }
    ]
  },

  // ####
  // # SINGAPORE
  // ####
  {
    city: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    type: "personal",
    periods: [
      { start: "2024-08-19", end: "2024-08-19" }
    ]
  },

  // ####
  // # SPAIN
  // ####
  {
    city: "Barcelona",
    country: "Spain",
    lat: 41.3874,
    lng: 2.1686,
    type: "personal",
    periods: [
      { start: "2024-10-07", end: "2024-10-07" }
    ]
  },
  {
    city: "Malaga",
    country: "Spain",
    lat: 36.7213,
    lng: -4.4213,
    type: "personal",
    periods: [
      { start: "2024-10-13", end: "2024-10-14" }
    ]
  },
  {
    city: "San Sebastian",
    country: "Spain",
    lat: 43.3183,
    lng: -1.9812,
    type: "personal",
    periods: [
      { start: "2024-10-19", end: "2024-10-19" }
    ]
  },
  {
    city: "Sevilla",
    country: "Spain",
    lat: 37.3891,
    lng: -5.9845,
    type: "personal",
    periods: [
      { start: "2024-10-17", end: "2024-10-17" }
    ]
  },
  {
    city: "Toledo",
    country: "Spain",
    lat: 39.8628,
    lng: -4.0273,
    type: "personal",
    periods: [
      { start: "2024-10-15", end: "2024-10-16" },
      { start: "2024-10-18", end: "2024-10-18" }
    ]
  },

  // ####
  // # SWEDEN
  // ####
  {
    city: "Gothenburg",
    country: "Sweden",
    lat: 57.7089,
    lng: 11.9746,
    type: "personal",
    periods: [
      { start: "2022-09-19", end: "2022-09-21" }
    ]
  },
  {
    city: "Stockholm",
    country: "Sweden",
    lat: 59.3293,
    lng: 18.0686,
    type: "personal",
    periods: [
      { start: "2022-09-01", end: "2022-09-30" }
    ]
  },

  // ####
  // # SWITZERLAND
  // ####
  {
    city: "Zurich",
    country: "Switzerland",
    lat: 47.3769,
    lng: 8.5417,
    type: "personal",
    periods: [
      { start: "2023-01-15", end: "2023-01-15" },
      { start: "2023-06-25", end: "2023-06-25" }
    ]
  },

  // ####
  // # THAILAND
  // ####
  {
    city: "Bangkok",
    country: "Thailand",
    lat: 13.7563,
    lng: 100.5018,
    type: "personal",
    periods: [
      { start: "2024-08-12", end: "2024-08-13" },
      { start: "2024-08-24", end: "2024-08-26" },
      { start: "2025-11-24", end: "2025-11-29" },
      { start: "2025-12-16", end: "2025-12-17" }
    ]
  },
  {
    city: "Phang Nga",
    country: "Thailand",
    lat: 8.4500,
    lng: 98.5167,
    type: "personal",
    periods: [
      { start: "2025-12-10", end: "2025-12-12" }
    ]
  },
  {
    city: "Phuket",
    country: "Thailand",
    lat: 7.8804,
    lng: 98.3923,
    type: "personal",
    periods: [
      { start: "2024-08-20", end: "2024-08-23" },
      { start: "2025-12-09", end: "2025-12-09" },
      { start: "2025-12-13", end: "2025-12-15" }
    ]
  },

  // ####
  // # UK
  // ####
  {
    city: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    type: "both",
    periods: [
      { start: "2026-06-09", end: "2026-07-13" }
    ]
  },

  // ####
  // # USA
  // ####
  {
    city: "Boulder",
    country: "USA",
    lat: 40.0150,
    lng: -105.2705,
    type: "business",
    periods: [
      { start: "2026-01-10", end: "2026-01-10" }
    ]
  },
  {
    city: "Denver",
    country: "USA",
    lat: 39.7392,
    lng: -104.9903,
    type: "business",
    periods: [
      { start: "2026-01-05", end: "2026-01-09" }
    ]
  },
  {
    city: "New York",
    country: "USA",
    lat: 40.7128,
    lng: -74.0060,
    type: "business",
    periods: [
      { start: "2026-01-11", end: "2026-01-16" }
    ]
  },

  // ####
  // # VIETNAM
  // ####
  {
    city: "Da Nang",
    country: "Vietnam",
    lat: 16.0544,
    lng: 108.2022,
    type: "personal",
    periods: [
      { start: "2025-11-30", end: "2025-12-02" }
    ]
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.8231,
    lng: 106.6297,
    type: "personal",
    periods: [
      { start: "2025-12-04", end: "2025-12-08" }
    ]
  },
  {
    city: "Hoi An",
    country: "Vietnam",
    lat: 15.8801,
    lng: 108.3380,
    type: "personal",
    periods: [
      { start: "2025-12-03", end: "2025-12-03" }
    ]
  }
];

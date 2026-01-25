// Last updated: Jan 25, 2026
// Location data
// Format: { city, country, lat, lng, type, periods: [{ start, end }] }
// Types: "lived", "business", "personal", "both"

const travelData = [
  {
    city: "Frankfurt am Main",
    country: "Germany",
    lat: 50.1109,
    lng: 8.6821,
    type: "lived",
    periods: [
      { start: "1999-01-01", end: "2016-08-31" },
      { start: "2026-08-25", end: "2026-08-31" },
      { start: "2026-09-08", end: "2026-09-14" }
    ]
  },
  {
    city: "Paris",
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
    type: "lived",
    periods: [
      { start: "2016-09-01", end: "2019-12-31" },
      { start: "2025-12-26", end: "2025-12-27" }
    ]
  },
  {
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lng: 12.4964,
    type: "lived",
    periods: [
      { start: "2020-01-01", end: "2020-06-30" }
    ]
  },
  {
    city: "Munich",
    country: "Germany",
    lat: 48.1351,
    lng: 11.5820,
    type: "lived",
    periods: [
      { start: "2020-07-01", end: "2022-08-31" },
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
    city: "Schaan",
    country: "Liechtenstein",
    lat: 47.1647,
    lng: 9.5077,
    type: "lived",
    periods: [
      { start: "2022-09-01", end: "2023-02-28" }
    ]
  },
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
    city: "Utrecht",
    country: "Netherlands",
    lat: 52.0907,
    lng: 5.1214,
    type: "both",
    periods: [
      { start: "2025-11-18", end: "2025-11-23" }
    ]
  },
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
    city: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    type: "both",
    periods: [
      { start: "2026-06-09", end: "2026-07-13" }
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
    city: "Brussels",
    country: "Belgium",
    lat: 50.8503,
    lng: 4.3517,
    type: "both",
    periods: [
      { start: "2026-09-15", end: "2026-09-21" }
    ]
  },
  {
    city: "Hamburg",
    country: "Germany",
    lat: 53.5511,
    lng: 9.9937,
    type: "both",
    periods: [
      { start: "2026-10-13", end: "2026-10-19" }
    ]
  },
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
    city: "Hoi An",
    country: "Vietnam",
    lat: 15.8801,
    lng: 108.3380,
    type: "personal",
    periods: [
      { start: "2025-12-03", end: "2025-12-03" }
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
    city: "New York",
    country: "USA",
    lat: 40.7128,
    lng: -74.0060,
    type: "business",
    periods: [
      { start: "2026-01-11", end: "2026-01-16" }
    ]
  },
  {
    city: "Stockholm",
    country: "Sweden",
    lat: 59.3293,
    lng: 18.0686,
    type: "personal",
    periods: [
      { start: "2022-09-22", end: "2022-10-22" }
    ]
  },
  {
    city: "Milan",
    country: "Italy",
    lat: 45.4642,
    lng: 9.1900,
    type: "personal",
    periods: [
      { start: "2020-07-01", end: "2020-07-31" }
    ]
  },
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
    city: "Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    type: "personal",
    periods: [
      { start: "2024-08-19", end: "2024-08-19" }
    ]
  },
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
    city: "Ribamar",
    country: "Portugal",
    lat: 39.0833,
    lng: -9.3333,
    type: "personal",
    periods: [
      { start: "2024-10-08", end: "2024-10-09" }
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
    city: "Strasbourg",
    country: "France",
    lat: 48.5734,
    lng: 7.7521,
    type: "personal",
    periods: [
      { start: "2024-10-23", end: "2024-10-23" }
    ]
  }
];

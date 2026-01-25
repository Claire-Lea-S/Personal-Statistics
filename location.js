// Location data
// Format: { city, country, lat, lng, periods: [{ start, end }] }

const travelData = [
  {
    city: "Frankfurt am Main",
    country: "Germany",
    lat: 50.1109,
    lng: 8.6821,
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
    periods: [
      { start: "2020-01-01", end: "2020-06-30" }
    ]
  },
  {
    city: "Munich",
    country: "Germany",
    lat: 48.1351,
    lng: 11.5820,
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
    city: "Vaduz",
    country: "Liechtenstein",
    lat: 47.1410,
    lng: 9.5209,
    periods: [
      { start: "2022-09-01", end: "2023-02-28" }
    ]
  },
  {
    city: "Berlin",
    country: "Germany",
    lat: 52.5200,
    lng: 13.4050,
    periods: [
      { start: "2025-11-04", end: "2025-11-10" }
    ]
  },
  {
    city: "Utrecht",
    country: "Netherlands",
    lat: 52.0907,
    lng: 5.1214,
    periods: [
      { start: "2025-11-18", end: "2025-11-23" }
    ]
  },
  {
    city: "Annecy",
    country: "France",
    lat: 45.8992,
    lng: 6.1294,
    periods: [
      { start: "2026-02-10", end: "2026-03-16" }
    ]
  },
  {
    city: "London",
    country: "UK",
    lat: 51.5074,
    lng: -0.1278,
    periods: [
      { start: "2026-06-09", end: "2026-07-13" }
    ]
  },
  {
    city: "Düsseldorf",
    country: "Germany",
    lat: 51.2277,
    lng: 6.7735,
    periods: [
      { start: "2026-08-11", end: "2026-08-24" }
    ]
  },
  {
    city: "Brussels",
    country: "Belgium",
    lat: 50.8503,
    lng: 4.3517,
    periods: [
      { start: "2026-09-15", end: "2026-09-21" }
    ]
  },
  {
    city: "Hamburg",
    country: "Germany",
    lat: 53.5511,
    lng: 9.9937,
    periods: [
      { start: "2026-10-13", end: "2026-10-19" }
    ]
  },
  {
    city: "Bangkok",
    country: "Thailand",
    lat: 13.7563,
    lng: 100.5018,
    periods: [
      { start: "2025-11-24", end: "2025-11-29" },
      { start: "2025-12-16", end: "2025-12-17" }
    ]
  },
  {
    city: "Da Nang",
    country: "Vietnam",
    lat: 16.0544,
    lng: 108.2022,
    periods: [
      { start: "2025-11-30", end: "2025-12-02" }
    ]
  },
  {
    city: "Hoi An",
    country: "Vietnam",
    lat: 15.8801,
    lng: 108.3380,
    periods: [
      { start: "2025-12-03", end: "2025-12-03" }
    ]
  },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    lat: 10.8231,
    lng: 106.6297,
    periods: [
      { start: "2025-12-04", end: "2025-12-08" }
    ]
  },
  {
    city: "Phuket",
    country: "Thailand",
    lat: 7.8804,
    lng: 98.3923,
    periods: [
      { start: "2025-12-09", end: "2025-12-09" },
      { start: "2025-12-13", end: "2025-12-15" }
    ]
  },
  {
    city: "Phang Nga",
    country: "Thailand",
    lat: 8.4500,
    lng: 98.5167,
    periods: [
      { start: "2025-12-10", end: "2025-12-12" }
    ]
  },
  {
    city: "Bali",
    country: "Indonesia",
    lat: -8.3405,
    lng: 115.0920,
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
    periods: [
      { start: "2025-12-19", end: "2025-12-23" }
    ]
  },
  {
    city: "Denver",
    country: "USA",
    lat: 39.7392,
    lng: -104.9903,
    periods: [
      { start: "2026-01-05", end: "2026-01-09" }
    ]
  },
  {
    city: "Boulder",
    country: "USA",
    lat: 40.0150,
    lng: -105.2705,
    periods: [
      { start: "2026-01-10", end: "2026-01-10" }
    ]
  },
  {
    city: "New York",
    country: "USA",
    lat: 40.7128,
    lng: -74.0060,
    periods: [
      { start: "2026-01-11", end: "2026-01-16" }
    ]
  }
];

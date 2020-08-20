export const regionOptions = [
  { key: 'North', text: 'North', value: 'North' },
  { key: 'South', text: 'South', value: 'South' },
  { key: 'East', text: 'East', value: 'East' },
  { key: 'West', text: 'West', value: 'West' },
  { key: 'Central', text: 'Central', value: 'Central' }
];

// Value is set as integer so that the backend will receive just a number
// and return search results that can accomodate at least the higher range
// of pax
export const paxOptions = [
  { key: '1-5', text: '1-5 pax', value: 5 },
  { key: '6-10', text: '6-10 pax', value: 10 },
  { key: '> 11', text: '> 11 pax', value: 11 }
];

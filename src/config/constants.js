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
  { key: '1-5', text: '1-5', value: 5 },
  { key: '6-10', text: '6-10', value: 10 },
  { key: '> 11', text: '> 11', value: 11 }
];

export const ratingsOptions = [
  { key: '5', text: '5', value: '5' },
  { key: '4', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '2', text: '2', value: '2' },
  { key: '1', text: '1', value: '1' },
  { key: '0', text: '0', value: '0' }
];

const config = {
  style: 'mapbox://styles/seiha-men/ckcv43tkn03ld1irxp9uqghpw',
  accessToken: 'pk.eyJ1Ijoic2VpaGEtbWVuIiwiYSI6ImNrYWhleDBsaDAxM2UyeG80OHc1emp6bXIifQ.R0aJpShr0KmWvJDcEYab5Q',
  CSV: 'https://docs.google.com/spreadsheets/d/1GLWqvoaBXHYIPWJZ52Co8MuFRMtdIsvU9BZZuLVsmH0/gviz/tq?tqx=out:csv&sheet=Sheet1',
  center: [-75.701, 45.421], // Lng, Lat
  zoom: 15, // Default zoom
  title: 'Go Bank Businesses',
  description: 'Explore our wonderful shops and enjoy what the neighborhood has to offer.',
  sideBarInfo: ['Name', 'Address', 'Hours'],
  popupInfo: ['Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Type of Business: ',
      columnHeader: 'Type',
      listItems: [
        'Financial Institution',
        'Coffee & Tea',
        'Beauty & Wellness',
        'Retail',
        'Shopping',
        'Museum & Gallery',
        'Museum + Gallery',
        'Restaurants',
        'Food & Drink',
        'Food',
        'Services',
        'French'
      ]
    }
  ]

}

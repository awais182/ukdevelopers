/**
 * PROJECT LOCATIONS CONFIGURATION
 * 
 * Update this file with the actual coordinates for each UK project in Lahore.
 * Format: [latitude, longitude]
 * 
 * How to use:
 * 1. Get the exact latitude/longitude for each project location
 * 2. Update the corresponding coordinates below
 * 3. The map will automatically update with the new locations
 * 4. Save and refresh the page
 * 
 * Example:
 * 'Gulberg III': [31.5500, 74.3400],
 * 
 * Latitude: North-South (increases going North)
 * Longitude: East-West (increases going East)
 * 
 * Lahore Center: 31.5497, 74.3436
 */

export const projectCoordinates: Record<string, [number, number]> = {
  // Azam Cloth Market Area - All projects at same precise location
  'Azam Cloth Market, Lahore, Pakistan': [31.614307038726437, 74.39377701818957],
  'UK 1\nUK Center': [31.586344043741292, 74.3200963034158],
  'UK 2\nBasit Commercial Center': [31.58635676190031, 74.32174535385633],
  'UK 3\nBilal Center': [31.58608016244308, 74.32204608269203],
  'UK 4\nHamza Center': [31.586622322010953, 74.31969449618492],
  'UK 5\nUK Plaza': [31.586941900090142, 74.32208731152771],
  'UK 7\nUmair Center': [31.58666304003077, 74.31942580971001],
  'UK 8\nUmer Center': [31.58523408262173, 74.3212842808741],
  'UK 9\nShuraim Center': [31.5868085036192, 74.31937265385635],
  'UK 10\nFaizan Center': [31.585733884212516, 74.31983020970998],
  
  // Other Locations
  'Dasako chowk, Kot Abdul Malik, Pakistan': [31.617217946796025, 74.24537948087541],
  'UK 6\nBilal Housing Road Scheme': [31.617217946796025, 74.24537948087541],
  'Model Town': [31.5250, 74.3450],
  'Main Circular Road Badami Bagh, Lahore, Pakistan': [31.588205123008812, 74.32086089601208],
  'UK 11 Auto Mall': [31.588205123008812, 74.32086089601208],
  'Hyde Park': [31.5350, 74.3300],
  'UK 12': [31.5350, 74.3300],
  'Askari': [31.5000, 74.3400],
  'UK 13': [31.5000, 74.3400],
  'Valencia': [31.5550, 74.3600],
  'UK 14': [31.5550, 74.3600],
  'Cavalry Ground': [31.5800, 74.3400],
  'Etihad Town Phase 1, Near Thokar Main, Raiwind Road': [31.451606226612146, 74.23533356318393],
  'UK 15\nLuxury Villas': [31.451606226612146, 74.23533356318393],
  'Lawrence Road': [31.5350, 74.3150],
  'UK 16': [31.5800, 74.3400],
  'Racecourse': [31.5450, 74.3550],
  'UK 17': [31.5350, 74.3150],
};

/**
 * PROJECT ADDRESS DETAILS
 * Add full addresses for each project location
 * Format: { fullName, streetAddress, city, postalCode }
 */
export const projectAddresses: Record<string, {
  fullName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
}> = {
  'Azam Cloth Market, Lahore, Pakistan': {
    fullName: 'UK Developers - Azam Cloth Market',
    streetAddress: 'Azam Cloth Market, Lahore, Pakistan',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
  'Model Town': {
    fullName: 'UK Six - Model Town',
    streetAddress: 'Avenue Road, Model Town',
    city: 'Lahore, Pakistan',
    postalCode: '54700'
  },
  'Main Circular Road Badami Bagh, Lahore, Pakistan': {
    fullName: 'UK Eleven - Auto Mall',
    streetAddress: 'Main Circular Road, Badami Bagh, Opposite Kashmiri Gate, Azam Cloth Market',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
  'Hyde Park': {
    fullName: 'UK Twelve - Hyde Park',
    streetAddress: 'Hyde Park',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
  'Askari': {
    fullName: 'UK Thirteen - Askari',
    streetAddress: 'Askari Housing Scheme',
    city: 'Lahore, Pakistan',
    postalCode: '54850'
  },
  'Valencia': {
    fullName: 'UK Fourteen - Valencia',
    streetAddress: 'Valencia Town',
    city: 'Lahore, Pakistan',
    postalCode: '54810'
  },
  'Cavalry Ground': {
    fullName: 'UK Fifteen - Cavalry Ground',
    streetAddress: 'Cavalry Ground',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
  'Etihad Town Phase 1, Near Thokar Main, Raiwind Road': {
    fullName: 'UK Fifteen - Etihad Town',
    streetAddress: 'Etihad Town Phase 1, Near Thokar Main, Raiwind Road',
    city: 'Lahore, Pakistan',
    postalCode: '54700'
  },
  'Lawrence Road': {
    fullName: 'UK Sixteen - Lawrence Road',
    streetAddress: 'Lawrence Road',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
  'Racecourse': {
    fullName: 'UK Seventeen - Racecourse',
    streetAddress: 'Racecourse Area',
    city: 'Lahore, Pakistan',
    postalCode: '54000'
  },
};

/**
 * HEAD OFFICE LOCATION
 * CS-12, Falcon, Downtown, Fazaia Housing scheme, Phase-1, Block H, Raiwind Road, Lahore, Pakistan
 * Coordinates: [31.5740, 74.2960] (Updated with exact GPS location)
 */
export const officeCoordinates: [number, number] = [31.378916982578726, 74.24711672455791];

/**
 * HOW TO UPDATE COORDINATES:
 * 
 * Option 1: Use Google Maps
 * 1. Go to maps.google.com
 * 2. Search for the location
 * 3. Right-click on the exact spot
 * 4. Click on the coordinates at the top to copy
 * 5. Paste here
 * 
 * Option 2: Use GPS Coordinates
 * 1. Get the exact GPS coordinates from the property manager
 * 2. Paste directly
 * 
 * Option 3: Use Online Converter
 * 1. Search "GPS to decimal converter"
 * 2. Convert and paste coordinates
 * 
 * EXAMPLE COORDINATES IN LAHORE:
 * - Gulberg: 31.5500, 74.3400
 * - DHA: 31.5100, 74.3300
 * - Defence: 31.5200, 74.3350
 * - Mall Road: 31.5450, 74.3350
 * - Model Town: 31.5250, 74.3450
 * 
 * Once you provide the actual coordinates, the map will display
 * all 17 projects at their exact locations.
 */

import { LocationMarker } from 'models/Geo';

const getMarkerLabel = (label: string): LocationMarker['label'] => {
  switch (label) {
    case 'attraction':
      return 'attraction';
    case 'restaurant':
      return 'restaurant';
    case 'hotel':
      return 'hotel';
    default:
      return 'attraction';
  }
};

export default getMarkerLabel;

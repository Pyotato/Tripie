import COLORS from 'constants/colors';

/**
 * 좌표 사이 간선 스타일
 * : https://docs.mapbox.com/style-spec/reference/layers/#line
 */
const lineLayerStyle = {
  id: 'line-animation',
  type: 'line',
  source: 'line',
  layout: {
    'line-cap': 'round',
    'line-join': 'round',
  },
  paint: {
    'line-color': COLORS[100],
    'line-width': 3,
    'line-opacity': 0.8,
  },
};

export default lineLayerStyle;

'use client';
import { Poi } from 'models/Aws';
import { createRef, useRef } from 'react';

import usePoi from 'hooks/usePoi';

import { MapProvider } from 'react-map-gl/dist/esm/exports-maplibre';
import { Carousel } from '../../../../../shared/components/Carousel';
import AwsMap from '../Map';
import PoiCard from './PoiCard';

export type PoisProps = { type: 'pois'; value: { pois: Poi[] } };

const ArticlePois = ({ item }: { item: PoisProps }) => {
  const { pois } = item.value;
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(pois.map(() => createRef()));
  const { center, current, setCurrent, coordinates } = usePoi({ pois });

  return (
    <MapProvider>
      <Carousel carouselProps={pois}>
        {pois.map((poi, index) => (
          <PoiCard
            action={() => setCurrent(`0-${index}`)}
            poi={poi}
            cardRef={cardRefs.current[index]}
            key={index + poi.id + poi.source.areas?.[0]?.id}
            selected={current === `0-${index}`}
          />
        ))}
      </Carousel>
      {coordinates.length === 0 ? null : (
        <AwsMap locations={coordinates} center={center} current={current} setCurrent={setCurrent} />
      )}
    </MapProvider>
  );
};

export default ArticlePois;

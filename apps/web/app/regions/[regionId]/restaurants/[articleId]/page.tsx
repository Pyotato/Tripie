'use server';
import { Card, Container, TripieImage } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import getArticleDetail from 'app/api/articles/detail';
import RegionBody from 'app/regions/_components/RegionBody';
import AttractionTitle from 'app/regions/_components/shared/_sections/AttractionTitle';
import { sharedMetaData } from 'app/shared-metadata';
import API from 'constants/api-routes';
import ROUTE from 'constants/routes';
import { Metadata, ResolvingMetadata } from 'next';
import { getPreferredTitle } from 'utils/string';
import Style from './restaurants.module.scss';

const cx = classNames.bind(Style);

type Props = {
  params: Promise<{ regionId: string; articleId: string }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const regionId = (await params).regionId;
  const articleId = (await params).articleId;

  const { data } = await getArticleDetail('retaurant', regionId, articleId);

  const previousImages = (await parent).openGraph?.images || [];
  const title = getPreferredTitle({ names: data?.source.names });
  const description = data?.source?.comment ?? '';

  return {
    title,
    description,
    openGraph: {
      ...sharedMetaData,
      title,
      description,
      images: [data?.source.image.sizes.full.url ?? '', ...previousImages],
      url: `${API.BASE_URL}${ROUTE.REGIONS.href}/restaurant/${regionId}/${articleId}`,
    },
  };
}

const Articles = async ({ params }: { params: Promise<{ regionId: string; articleId: string }> }) => {
  const { data, blurredThumbnail } = await getArticleDetail(
    'retaurant',
    (await params).regionId,
    (await params).articleId
  );

  if (data == null) {
    return <>missing...</>;
  }
  return (
    <Container applyMargin="top" margin="l" align="center">
      <Card.Content className={cx('fit-content')}>
        <Container margin="m" applyMargin="top-left-right">
          <AttractionTitle names={data.source.names} />
        </Container>
        <Container margin="m" applyMargin="all" className={cx('img-container')}>
          <TripieImage
            blurDataURL={blurredThumbnail?.data}
            src={data.source.image.sizes.full.url}
            sizes="large"
            alt={`${data.source.image.sizes.full.url}의 썸네일`}
          />
        </Container>
        <RegionBody source={data.source} dataUrl={data.id} />
      </Card.Content>
    </Container>
  );
};

export default Articles;

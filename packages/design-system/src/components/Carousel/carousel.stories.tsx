import type { Meta, StoryObj } from '@storybook/react';

import { useEffect } from 'react';
import { useAppTheme } from '../../hooks';
import TripieImage from '../TripieImage/TripieImage';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'tripie-ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '인스타그램의 이미지 carousel와 같이 임계점을 넘어야 해당 이미지에 고정되는 carousel 컴포넌트입니다.ex. 기본은 인접한 게시물의 60%가 보여야 해당 콘텐츠로 넘어갑니다.',
      },
    },
  },
  argTypes: {},
  decorators: [
    (story, context) => {
      const { mode, setMode } = useAppTheme();
      const selectedTheme = context.globals.theme || mode;

      useEffect(() => {
        setMode(selectedTheme);
      }, [selectedTheme]);

      return <div className={`${context.globals.theme}`}>{story()}</div>;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/1037f801-0b0e-40b1-bff1-c5be7d66eab1.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/1037f801-0b0e-40b1-bff1-c5be7d66eab1.jpeg',
    sourceUrl: 'huistenbosch.co.jp/gourmet/64',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJnTUYvOFFBRlFFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQXdULzJnQU1Bd0VBQWhBREVBQUFBRXN6MkdGSC84UUFKUkFBQWdJQkFnUUhBQUFBQUFBQUFBQUFBUUlEQkJJQUVRVVVNVkVURlNFaU1sSnkvOW9BQ0FFQkFBRS9BRnQwR3hyclRYbW5iWmc3bkdMY2RHUDI3alVGV0VoY1ZnbEhVeU14YmNkOGZUVnpqbEdLSzBKSjRzekZKNFlpSU14WS9FKzNwcFpxL0pWZk1PS1N6TWNDd2pjSXY0eFRZNi8veEFBYUVRQUNBZ01BQUFBQUFBQUFBQUFBQUFBQkVRQVNBaE5oLzlvQUNBRUNBUUUvQU53b0dNbDEyTS8veEFBWUVRRUJBQU1BQUFBQUFBQUFBQUFBQUFBQkVRQVN3Zi9hQUFnQkF3RUJQd0RSckU1bi85az0nIC8+CiAgPC9zdmc+Cg==',
  },
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/5aa4fd86-ce45-4675-a227-a1577bd8d823.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/5aa4fd86-ce45-4675-a227-a1577bd8d823.jpeg',
    sourceUrl: 'huistenbosch.co.jp/gourmet/329',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJBVUcvOFFBRkFFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQmYvYUFBd0RBUUFDRUFNUUFBQUEwNW16eld2L3hBQWhFQUFEQUFFREJBTUFBQUFBQUFBQUFBQUJBZ01SQUFRVEJSSWhNUlFWWWYvYUFBZ0JBUUFCUHdDa3BmRVZJQ2ZLaUZITGVQYlp5UXZyOE9vN0xkYm8zanVKSkpPSWhheHFmTEgwZTBnRWE2cjA1NUZhSStUSHRkeU1qTFpKeVJyN3ppdFMrOUNxenFxRW9DUW9HVHIveEFBYkVRQURBUUFEQVFBQUFBQUFBQUFBQUFBQkF4RUNBQklUSWYvYUFBZ0JBZ0VCUHdCU2J2eGRoUnU4OVFWMHlUNFFlZi9FQUJvUkFBSUNBd0FBQUFBQUFBQUFBQUFBQUFFQ0F4SUFJekgvMmdBSUFRTUJBVDhBRnh0aGtmcFltMmYvMlE9PScgLz4KICA8L3N2Zz4K',
  },
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/0e054e18-9b82-4382-a239-75891abfd614.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/0e054e18-9b82-4382-a239-75891abfd614.jpeg',
    sourceUrl: 'huistenbosch.co.jp/gourmet/73',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FNQUFBQW9MUTlUQUFBQmpGQk1WRVVEQUFDOFhFNjZVMHdNQ0FpaVpFTzdnbC9EaFZvR0F3VzFjRXVNVlRzVkVoVXVLUzBVQ3cwd0xUQTRORG1pYUV5ZlhqNm1ia3lYWHo2SlBqbkdURVFlR3lYT2syZjBzUXIzNjloYWRpeUlxRE5pU1RsR05pNC9MQ3pkbm5GTEd4eUVTeTdDZFVMN3p5cjd4NHl5UFRpM2UwaktpbGJTV1ZQeHNCbXNTRCtYYWovVmRXYWFQVFpXVjJTbVNEZm1tUjcvMlNiUGZGdjV4aVgyOVBEODkrdUVocG1pbWp2OC9QcnUyOGhEUDBRdlBDZmd4cWRzbGl5SmhZbVJlR1QxcHdMR3kyMzZ6bVIzWGxDZ2JFVFdtV0pUT1N2Z21WclRqVldvV3pheVprbXJuWHBpWDJWM0hSekxoVjVJUlV4NVNUYTRtSVBDZWs5MVJpK2liRHlOTGlyYWYzR3RrempwZEdUb3ExSDhvNWZHa1ZIaHFUcnBybDM2MXBQd3dYYmNhbHZrNHVESmxsMy8xb25pcGgzZmpES3pzTE95a3gyWWRSUHN3SVYvZVg3WHRKMkpoU3hqWFYybGx4dGFneS8vNHF6MjM4VDR1VDNMNEVPeHRDcjh3MXRXVlJUZjJNL3pueURSMUVHL3VIMjh5a1gvcWkvUjA5cVhsWjRrTFJTeXMwYm95MFgvOHBSSllDVzR0anlYeWdvQUFBQUFDWEJJV1hNQUFoY29BQUlYS0FFUCsrY1dBQUFCQWtsRVFWUjRuRFhIWlZlREFCaEE0UmNHak5oZ3hJaDFkM2VIM2QzZDNkMU8vZU1lOWZoOHVlZkNjTHhzcm55K1FmbTFubis1cTU5QVBtNnVXSjdlRzlXUGRsc3RaZzloYUc3LzlQcWgxZW9vemVhbFd0d0ZUeXFWS2RTMDJ0ZnovYzE1THJjQm5veVMxTTQweTJQcG9ucFVVck1RVWtMYmU4ZVdxOXVHakdNQ1BnSEo1ZFcxblRSZmlKQUhXMHRUTGhlZ1VlOUtERVVvbWR0Y21CNFhNRUJpYVhkaVBTRVRSTUR2RnlnTTBMQWtSZWNSWXBJa1RTWVR4c0hzWWhCQmd6NXlGQ2NKbnVKNEVNV3dOT01iQ1RnR0IvcjdjTW9LWTZ4ZGREb05FYS9EM2RQZFpXZUFOckpHeHNqYWVxMDJ4a3pUT2dBQXZjNWcwT2wvL041Zi91bS9BVElpSytQS3lJZ2tBQUFBQUVsRlRrU3VRbUNDJyAvPgogIDwvc3ZnPgo=',
  },
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/24201c4a-ad69-489c-bd73-96b830ce9040.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/24201c4a-ad69-489c-bd73-96b830ce9040.jpeg',
    sourceUrl: 'huistenbosch.co.jp/gourmet/66#photo',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJnTUUvOFFBRlFFQkFRQUFBQUFBQUFBQUFBQUFBQUFBQkFYLzJnQU1Bd0VBQWhBREVBQUFBSkNGZXdWSC84UUFJeEFBQVFNREJBSURBQUFBQUFBQUFBQUFBZ0VEQkJFU0lRQUZFeUlHTVRKQllmL2FBQWdCQVFBQlB3Q1REOGJoczJUNGR6dnNXMk83cDV4MjA5UDNTRklSM2hjYVVBUVE1VzBKYkV3aVpUTk5iZURUVUxjQWZKS2lWUmRKQ080UitRMVgzK2EyOTlpWkZtdXlsYjVXMUVVS3hWVHRYNjlEU21kZi84UUFHQkVCQVFBREFBQUFBQUFBQUFBQUFBQUFBZ0VBRWlILzJnQUlBUUlCQVQ4QU5STTV0TS8veEFBWUVRRUJBQU1BQUFBQUFBQUFBQUFBQUFBQkFnQURJZi9hQUFnQkF3RUJQd0RZWGFWZEp6UC8yUT09JyAvPgogIDwvc3ZnPgo=',
  },
  {
    sizes: 'large',
    alt: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/e3dc3514-e5c7-456e-93c2-e342483aa769.jpeg',
    src: 'https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/e3dc3514-e5c7-456e-93c2-e342483aa769.jpeg',
    sourceUrl: 'huistenbosch.co.jp/gourmet/58#information',
    blurDataURL:
      'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDUnPgogICAgPGZpbHRlciBpZD0nYicgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSdzUkdCJz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgIDwvZmlsdGVyPgogICAgPGltYWdlIHByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnIGZpbHRlcj0ndXJsKCNiKScgeD0nMCcgeT0nMCcgaGVpZ2h0PScxMDAlJyB3aWR0aD0nMTAwJScgCiAgICBocmVmPSdkYXRhOmltYWdlL2F2aWY7YmFzZTY0LC85ai8yd0JEQUFnSUNBZ0pDQWtLQ2drTkRnd09EUk1SRUJBUkV4d1VGaFFXRkJ3ckd4OGJHeDhiS3lZdUpTTWxMaVpFTlM4dk5VUk9RajVDVGw5VlZWOTNjWGVjbk5ILzJ3QkRBUWdJQ0FnSkNBa0tDZ2tORGd3T0RSTVJFQkFSRXh3VUZoUVdGQndyR3g4Ykd4OGJLeVl1SlNNbExpWkVOUzh2TlVST1FqNUNUbDlWVlY5M2NYZWNuTkgvd2dBUkNBQVFBQkFEQVNJQUFoRUJBeEVCLzhRQUZnQUJBUUVBQUFBQUFBQUFBQUFBQUFBQUJRWUgvOFFBRkFFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQlAvYUFBd0RBUUFDRUFNUUFBQUFsZEFGWE9yL3hBQWpFQUFCQXdNRUFnTUFBQUFBQUFBQUFBQURBUUlFQlNFaUFCRVNFd1l4UVdGeS85b0FDQUVCQUFFL0FQSG80MmxFYkRkRE0rYjNYVVhqR0lpRmlMTGN1WElqdnJmYk4ya3FsSEIzQlJpakt4K0QrbEZIYjgzMUhTbFZFSFlhc1F4eUh0dzV2ZUgxYTZhLy84UUFHQkVBQWdNQUFBQUFBQUFBQUFBQUFBQUFBQUVDRVNMLzJnQUlBUUlCQVQ4QWl0MmYvOFFBR0JFQUF3RUJBQUFBQUFBQUFBQUFBQUFBQWhFaEFBSC8yZ0FJQVFNQkFUOEFJWHl4Yi8vWicgLz4KICA8L3N2Zz4K',
  },
];

export const Default: Story = {
  name: 'Carousel.Image.2',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 2).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf3: Story = {
  name: 'Carousel.Image.3',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 3).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf4: Story = {
  name: 'Carousel.Image.4',
  render: () => {
    return (
      <Carousel
        items={images.slice(0, 4).map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

export const CarouselImageOf5: Story = {
  name: 'Carousel.Image.5',
  render: () => {
    return (
      <Carousel
        items={images.map((item, index) => (
          <TripieImage.WithSourceUrl
            sizes="large"
            key={item.src + index}
            alt={item.alt}
            src={item.src}
            sourceUrl={item.sourceUrl}
            blurDataURL={item.blurDataURL}
          />
        ))}
      />
    );
  },
};

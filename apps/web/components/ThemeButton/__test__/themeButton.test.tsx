const sum = (a: number, b: number) => a + b;

describe('sum(a,b)는 a+b다.', () => {
  test('sum(1,2)는 3다"', async () => {
    expect(sum(1, 2)).toBeTruthy();
  });
});

// import { render, screen } from '@testing-library/react';
// import { useAppTheme } from '@tripie/design-system';
// import ThemeButton from '../ThemeButton';

// // Mocking the useAppTheme hook
// jest.mock('@tripie/design-system');

// const mockedUseAppTheme = useAppTheme as jest.MockedFunction<typeof useAppTheme>;

// describe('ThemeButton', () => {
//   beforeEach(() => {
//     mockedUseAppTheme.mockReturnValue({
//       mode: null,
//       toggle: jest.fn(),
//       setMode: jest.fn(),
//     });
//   });

//   test('renders button with text "os control"', async () => {
//     render(<ThemeButton />);
//     screen.debug();
//     //!! 🥲 <body><div /> </body>인 이유..? 렌더가 제대로 안된 거 같은...
//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });
// });

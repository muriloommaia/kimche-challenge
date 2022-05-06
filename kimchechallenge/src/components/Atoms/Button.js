import tw from 'tailwind-styled-components/dist/tailwind';

export const Button = tw.button`
  p-3 py-4 border-y-4 border-x-2 border-black
  ${({ selected }) => (selected ? 'bg-gray-400' : 'bg-gray-300')}
`;

import React from 'react';
import { Title } from '../Atoms/Title';
import { Background } from '../Containers/Container.Background';
import { Flex } from '../Containers/Flex';

export default function Header() {
  return (
    <div>
      <Background
        color='primary'
        image='primary'
      >
        <Flex
          align='center'
          padding='4rem 0'
          justify='center'
        >
          <Title>
            Country search
          </Title>
        </Flex>
      </Background>
    </div>
  );
}

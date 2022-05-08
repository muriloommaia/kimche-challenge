import React from 'react';
import { Title } from '../Atoms/Title';
import { ContainerHeader } from '../Containers/Container.Header';

export default function Header() {
  return (
    <div>
      <ContainerHeader>
        <Title>
          Country search
        </Title>
      </ContainerHeader>
    </div>
  );
}

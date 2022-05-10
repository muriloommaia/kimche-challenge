/* eslint-disable max-len */
import React from 'react';
import { Line } from '../Atoms/Line';
import { Paragraph } from '../Atoms/Paragraph';
import { Background } from '../Containers/Container.Background';
import { MediaScreen } from '../Containers/Container.media';
import { Flex } from '../Containers/Flex';

export default function Footer() {
  return (
    <Background
      color='primary'
      width='100%'
      image='primary'
    >
      <MediaScreen
        xlWidth='1280px'
        xlMargin='auto'
      >
        <Flex
          padding='2.1rem 1rem'
          justify='space-around'
        >
          <Flex
            direction='column'
          >
            <Paragraph color='secondary'>
              Tecnologias utilizadas:
            </Paragraph>
            <Line height='1px' color='secondary' />
            <Paragraph color='secondary'>
              JavaScript
            </Paragraph>
            <Paragraph color='secondary'>
              React
            </Paragraph>
            <Paragraph color='secondary'>
              Redux
            </Paragraph>
            <Paragraph color='secondary'>
              StyledComponents
            </Paragraph>
            <Paragraph color='secondary'>
              GraphQL
            </Paragraph>
          </Flex>
          <Flex
            direction='column'
          >
            <Paragraph color='secondary'>
              Mi contacto:
            </Paragraph>
            <Line height='1px' color='secondary' />
            <Paragraph color='secondary'>
              <a href='https://www.linkedin.com/in/murilommaia' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-linkedin' />
                {' '}
                LinkedIn
              </a>
            </Paragraph>
            <Paragraph color='secondary'>
              <a href='https://github.com/muriloommaia' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-github' />
                {' '}
                GitHub
              </a>
            </Paragraph>
            <Paragraph color='secondary'>
              |+54| 11 2584 - 8669
            </Paragraph>
          </Flex>
        </Flex>
      </MediaScreen>
    </Background>
  );
}

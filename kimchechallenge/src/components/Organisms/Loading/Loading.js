import React from 'react';
import { LoadingDisplay } from './Loading.Display';
import { LoadingPoint } from './Loading.Point';

export default function Loading() {
  return (
    <LoadingDisplay>
      <LoadingPoint />
      <LoadingPoint />
      <LoadingPoint />
    </LoadingDisplay>
  );
}

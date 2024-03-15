import React from 'react';
import Routes from './utils/Routes';
import { ExpandedProvider } from './context/ExpandedContext';

export default function App() {
  return (
    <ExpandedProvider>
      <Routes />
    </ExpandedProvider>
  );
}


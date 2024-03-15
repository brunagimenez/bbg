import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ExpandedContext = createContext();

export function ExpandedProvider({ children }) {
  const [expanded, setExpanded] = useState(false);

  const expandedActive = useMemo(() => ({ expanded, setExpanded }), [expanded]);

  return (
    <ExpandedContext.Provider value={ expandedActive }>
      {children}
    </ExpandedContext.Provider>
  );
}

ExpandedProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

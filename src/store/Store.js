import React, { useState } from 'react';

export const IMPERIAL = 'IMPERIAL';
export const METRIC = 'METRIC';

export const ModeContext = React.createContext(METRIC);
export const UserContext = React.createContext([]);

const Store = props => {
  const [currentMode, setCurrentMode] = useState(METRIC);
  const [height, setHeight] = useState(undefined);
  const [weight, setWeight] = useState(undefined);
  const [isReady, setIsReady] = useState(false);
  const [bmi, setBmi] = useState(undefined);

  return (
    <ModeContext.Provider value={[currentMode, setCurrentMode]}>
      <UserContext.Provider
        value={[
          height,
          weight,
          isReady,
          bmi,
          setHeight,
          setWeight,
          setIsReady,
          setBmi
        ]}
      >
        {props.children}
      </UserContext.Provider>
    </ModeContext.Provider>
  );
};

export default Store;

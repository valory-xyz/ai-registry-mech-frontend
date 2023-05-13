import React, { useState } from 'react';
import ListAgents from './components/ListAgents';
import AgentDetails from './components/details';

export const Registry = () => {
  const [selectedMech, setSelectedMech] = useState(null);

  const handleMechClick = (mech) => {
    setSelectedMech(mech);
  };

  const handleGoBack = () => {
    setSelectedMech(null);
  };

  return (
    <div>
      {selectedMech ? (
        <AgentDetails mech={selectedMech} onGoBack={handleGoBack} />
      ) : (
        <ListAgents onMechClick={handleMechClick} />
      )}
    </div>
  );
};

import React, { useState } from 'react';
import ProcessForm, { ProcessInput } from './components/ProcessForm';
import ProcessList, { Process } from './components/ProcessList';

export default function App() {
  const [processes, setProcesses] = useState<Process[]>([]);

  const handleAdd = (input: ProcessInput) => {
    const total =
      input.complexity +
      input.frequency +
      input.data +
      input.manualEffort +
      input.compliance +
      input.impact;
    const average = total / 6;
    let priority: Process['priority'] = 'Low';
    if (average >= 4) priority = 'High';
    else if (average >= 2.5) priority = 'Medium';

    setProcesses([
      ...processes,
      { ...input, total, priority }
    ]);
  };

  return (
    <div>
      <h1>AI Agent Factory Process Evaluator</h1>
      <ProcessForm onAdd={handleAdd} />
      <ProcessList processes={processes} />
    </div>
  );
}

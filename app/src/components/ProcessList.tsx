import React from 'react';

export interface Process {
  name: string;
  complexity: number;
  frequency: number;
  data: number;
  manualEffort: number;
  compliance: number;
  impact: number;
  total: number;
  priority: 'High' | 'Medium' | 'Low';
}

interface Props {
  processes: Process[];
}

export default function ProcessList({ processes }: Props) {
  if (!processes.length) return <p>No processes added yet.</p>;
  return (
    <div>
      {processes.map((p, i) => (
        <div key={i} className="process">
          <strong>{p.name}</strong> - Score: {p.total} / 30 - Priority: {p.priority}
        </div>
      ))}
    </div>
  );
}

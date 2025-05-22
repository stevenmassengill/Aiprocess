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
    <table className="process-table">
      <thead>
        <tr>
          <th>Process</th>
          <th>Complexity</th>
          <th>Frequency</th>
          <th>Data</th>
          <th>Manual Effort</th>
          <th>Compliance</th>
          <th>Impact</th>
          <th>Total</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {processes.map((p, i) => (
          <tr key={i}>
            <td>{p.name}</td>
            <td>{p.complexity}</td>
            <td>{p.frequency}</td>
            <td>{p.data}</td>
            <td>{p.manualEffort}</td>
            <td>{p.compliance}</td>
            <td>{p.impact}</td>
            <td>{p.total}</td>
            <td className={`priority ${p.priority.toLowerCase()}`}>{p.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

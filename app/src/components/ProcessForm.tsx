import React, { useState } from 'react';

export interface ProcessInput {
  name: string;
  complexity: number;
  frequency: number;
  data: number;
  manualEffort: number;
  compliance: number;
  impact: number;
}

interface Props {
  onAdd: (input: ProcessInput) => void;
}

const scoreOptions = [1, 2, 3, 4, 5];

export default function ProcessForm({ onAdd }: Props) {
  const [input, setInput] = useState<ProcessInput>({
    name: '',
    complexity: 3,
    frequency: 3,
    data: 3,
    manualEffort: 3,
    compliance: 3,
    impact: 3
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: name === 'name' ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.name) return;
    onAdd(input);
    setInput({ ...input, name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Process Name
        <input name="name" value={input.name} onChange={handleChange} type="text" />
      </label>
      <label>
        Complexity & Predictability
        <select name="complexity" value={input.complexity} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label>
        Frequency & Volume
        <select name="frequency" value={input.frequency} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label>
        Data Availability & Quality
        <select name="data" value={input.data} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label>
        Manual Effort & Resource Intensity
        <select name="manualEffort" value={input.manualEffort} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label>
        Compliance and Risk Requirements
        <select name="compliance" value={input.compliance} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label>
        Impact on Revenue or Customer Experience
        <select name="impact" value={input.impact} onChange={handleChange}>
          {scoreOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <button type="submit">Add Process</button>
    </form>
  );
}

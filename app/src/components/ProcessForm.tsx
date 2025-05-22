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

const processes = [
  'Develop Budgets',
  'Manage Capital Planning',
  'Design Capital Structure',
  'Manage Cash Flow/Treasury',
  'Cash Disbursements',
  'Collections',
  'Bank Relationships',
  'Credit Administration',
  'Short-term Investments/Borrowing',
  'Cash Forecasting',
  'Foreign Exchange',
  'Financial Risk',
  'Finance & Accounting Transactions',
  'Process Accounts Payable',
  'Process Payroll & Benefits',
  'Manage Travel & Entertainment Expenses',
  'Process Accounts Receivable & Collections',
  'General Ledger Accounting (Close the Books)',
  'Journal Entries',
  'Consolidation',
  'Drafting & Reporting Financial Statements',
  'Report Information',
  'Internal Financial & Management Information',
  'Provide Financial Information to External Parties',
  'Executive Certification',
  'Disclosure Procedures',
  'Manage Tax Functions',
  'Ensure Federal Tax Compliance',
  'Ensure State and Local Tax Compliance',
  'Ensure International Tax Compliance',
  'Manage Tax Controversies',
  'Manage Business Continuity Planning'
];

const scoreDescriptions: Record<string, Record<number, string>> = {
  complexity: {
    1: 'Very simple, rule-based tasks',
    2: 'Mostly predictable with few exceptions',
    3: 'Moderately complex with clear patterns',
    4: 'Complex, includes some unstructured data',
    5: 'Highly complex, judgment intensive'
  },
  frequency: {
    1: 'Rare or low volume',
    2: 'Occasional, small volume',
    3: 'Regular with moderate volume',
    4: 'Frequent and high volume',
    5: 'Very frequent, massive volume'
  },
  data: {
    1: 'Little or poor-quality data',
    2: 'Some data available',
    3: 'Adequate data and quality',
    4: 'Large volumes of good data',
    5: 'Abundant, high-quality data'
  },
  manual: {
    1: 'Minimal manual work required',
    2: 'Some manual effort',
    3: 'Moderate workload',
    4: 'Labor intensive',
    5: 'Extremely resource heavy'
  },
  compliance: {
    1: 'Low regulatory impact or risk',
    2: 'Some compliance considerations',
    3: 'Moderate oversight required',
    4: 'High accuracy/regulatory scrutiny',
    5: 'Strict compliance, high risk'
  },
  impact: {
    1: 'Minor improvement potential',
    2: 'Limited impact',
    3: 'Noticeable benefit',
    4: 'Significant benefit',
    5: 'Major revenue or CX impact'
  }
};

const tooltips = {
  complexity:
    'Assess how complicated the task is and whether it follows clear rules or patterns.',
  frequency: 'Determine how often the process occurs and the volume it handles.',
  data: 'Evaluate the volume and quality of data available to inform the AI.',
  manual:
    'Estimate the current manual workload and pain points that automation could reduce.',
  compliance:
    'Consider regulatory constraints and risk of errors when applying AI.',
  impact:
    'Estimate the potential upside if the process is improved with AI.'
};

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
        <select name="name" value={input.name} onChange={handleChange}>
          <option value="">Select a process</option>
          {processes.map(p => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
      <label>
        Complexity &amp; Predictability
        <span className="tooltip" title={tooltips.complexity}>?</span>
        <select name="complexity" value={input.complexity} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.complexity[o]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Frequency &amp; Volume
        <span className="tooltip" title={tooltips.frequency}>?</span>
        <select name="frequency" value={input.frequency} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.frequency[o]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Data Availability &amp; Quality
        <span className="tooltip" title={tooltips.data}>?</span>
        <select name="data" value={input.data} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.data[o]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Manual Effort &amp; Resource Intensity
        <span className="tooltip" title={tooltips.manual}>?</span>
        <select name="manualEffort" value={input.manualEffort} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.manual[o]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Compliance and Risk Requirements
        <span className="tooltip" title={tooltips.compliance}>?</span>
        <select name="compliance" value={input.compliance} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.compliance[o]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Impact on Revenue or Customer Experience
        <span className="tooltip" title={tooltips.impact}>?</span>
        <select name="impact" value={input.impact} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>
              {o} - {scoreDescriptions.impact[o]}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Process</button>
    </form>
  );
}

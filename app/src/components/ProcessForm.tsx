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

const processNames = [
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

const scoreOptions = [1, 2, 3, 4, 5];

const scoreDescriptions = {
  complexity: [
    'Very simple and rules based',
    'Mostly predictable',
    'Moderately complex',
    'Complex with many exceptions',
    'Highly complex or unpredictable'
  ],
  frequency: [
    'Rarely occurs',
    'Occasional',
    'Regular',
    'Frequent',
    'High volume or constant'
  ],
  data: [
    'Very little data available',
    'Limited data',
    'Adequate data',
    'Good quality data',
    'Large clean data set'
  ],
  manual: [
    'Minimal manual effort',
    'Some manual steps',
    'Moderate manual work',
    'Significant manual work',
    'Almost completely manual'
  ],
  compliance: [
    'Low regulatory impact',
    'Some guidelines',
    'Moderate requirements',
    'Strict requirements',
    'Highly regulated or risky'
  ],
  impact: [
    'Limited impact',
    'Minor improvements',
    'Moderate benefit',
    'High benefit',
    'Critical to revenue or experience'
  ]
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
          {processNames.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>
      <label>
        Complexity &amp; Predictability
        <span className="tooltip" title={tooltips.complexity}>?</span>
        <select name="complexity" value={input.complexity} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.complexity[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <label>
        Frequency &amp; Volume
        <span className="tooltip" title={tooltips.frequency}>?</span>
        <select name="frequency" value={input.frequency} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.frequency[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <label>
        Data Availability &amp; Quality
        <span className="tooltip" title={tooltips.data}>?</span>
        <select name="data" value={input.data} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.data[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <label>
        Manual Effort &amp; Resource Intensity
        <span className="tooltip" title={tooltips.manual}>?</span>
        <select name="manualEffort" value={input.manualEffort} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.manual[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <label>
        Compliance and Risk Requirements
        <span className="tooltip" title={tooltips.compliance}>?</span>
        <select name="compliance" value={input.compliance} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.compliance[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <label>
        Impact on Revenue or Customer Experience
        <span className="tooltip" title={tooltips.impact}>?</span>
        <select name="impact" value={input.impact} onChange={handleChange}>
          {scoreOptions.map(o => (
            <option key={o} value={o}>{`${o} - ${scoreDescriptions.impact[o - 1]}`}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Process</button>
    </form>
  );
}

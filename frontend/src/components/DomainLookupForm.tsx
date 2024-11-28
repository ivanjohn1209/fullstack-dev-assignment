import React, { useState } from 'react';

interface DomainLookupFormProps {
  onSubmit: (domain: string, type: string) => void;
}

const DomainLookupForm: React.FC<DomainLookupFormProps> = ({ onSubmit }) => {
  const [domain, setDomain] = useState('');
  const [type, setType] = useState('domain');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(domain, type);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter domain name"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="domain">Domain Information</option>
        <option value="contact">Contact Information</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Lookup
      </button>
    </form>
  );
};

export default DomainLookupForm;

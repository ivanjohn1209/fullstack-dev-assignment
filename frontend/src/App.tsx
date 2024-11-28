import React, { useState } from 'react';
import DomainLookupForm from './components/DomainLookupForm';
import DomainInfoTable from './components/DomainInfoTable';
import ErrorAlert from './components/ErrorAlert';
import { fetchDomainData } from './utils/apiClient';

const App: React.FC = () => {
  const [domainData, setDomainData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async (domain: string, type: string) => {
    try {
      setError(null);
      const response = await fetchDomainData(domain,type);
      setDomainData(response);
    } catch (err: any) {
      setError(err.message);
      setDomainData(null);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Domain Lookup Tool</h1>
      <DomainLookupForm onSubmit={handleLookup} />
      {error && <ErrorAlert message={error} />}
      {domainData && <DomainInfoTable data={domainData} />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProvenanceDetails from './ProvenanceDetails';
import ProvenanceTimeline from './ProvenanceTimeline';
import useProvenanceData from '../hooks/useProvenanceData';

const DataProvenanceViewer: React.FC = () => {
  const [searchId, setSearchId] = useState<string>('');
  const { provenanceData, loading, error } = useProvenanceData(searchId);

  const handleSearch = (id: string) => {
    setSearchId(id);
  };

  return (
    <div className="bg-white rounded-lg border shadow-2xl mx-auto min-w-full p-5">
      <h1 className="text-2xl font-bold mb-4">Data Provenance Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {provenanceData && (
        <>
          <ProvenanceDetails data={provenanceData} />
          <ProvenanceTimeline events={provenanceData.events} />
        </>
      )}
    </div>
  );
};

export default DataProvenanceViewer;

import React from 'react';
import { ProvenanceData } from '../utils/getProvenanceData';

interface ProvenanceDetailsProps {
  data: ProvenanceData;
}

const ProvenanceDetails: React.FC<ProvenanceDetailsProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Provenance Details</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Created:</strong> {new Date(data.created).toLocaleString()}</p>
      <p><strong>Creator:</strong> {data.creator}</p>
      <p><strong>Size:</strong> {data.size} bytes</p>
      <p><strong>Content Type:</strong> {data.contentType}</p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Tags</h3>
      <ul className="list-disc pl-5">
        {data.tags.map((tag, index) => (
          <li key={index}>{tag.name}: {tag.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProvenanceDetails;

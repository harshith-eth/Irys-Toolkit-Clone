import React from 'react';
import { ProvenanceEvent } from '../utils/getProvenanceData';

interface ProvenanceTimelineProps {
  events: ProvenanceEvent[];
}

const ProvenanceTimeline: React.FC<ProvenanceTimelineProps> = ({ events }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Provenance Timeline</h2>
      <ul className="border-l-2 border-blue-500">
        {events.map((event, index) => (
          <li key={index} className="mb-4 ml-6 relative">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              {new Date(event.timestamp).toLocaleString()}
            </time>
            <h3 className="text-lg font-semibold">{event.type}</h3>
            <p className="mb-4 text-base font-normal text-gray-500">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvenanceTimeline;

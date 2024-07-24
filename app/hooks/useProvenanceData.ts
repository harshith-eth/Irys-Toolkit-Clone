import { useState, useEffect } from 'react';
import { getProvenanceData, ProvenanceData } from '../utils/getProvenanceData';

const useProvenanceData = (id: string) => {
  const [provenanceData, setProvenanceData] = useState<ProvenanceData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getProvenanceData(id);
        setProvenanceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { provenanceData, loading, error };
};

export default useProvenanceData;

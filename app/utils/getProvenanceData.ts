import { Query } from "@irys/query";

export interface ProvenanceData {
  id: string;
  created: number;
  creator: string;
  size: number;
  contentType: string;
  tags: { name: string; value: string }[];
  events: ProvenanceEvent[];
}

export interface ProvenanceEvent {
  timestamp: number;
  type: string;
  description: string;
}

export async function getProvenanceData(id: string): Promise<ProvenanceData> {
  const network = process.env.NEXT_PUBLIC_NETWORK || "devnet";
  const query = new Query({ network });
  
  try {
    const result = await query.search("irys:transactions").id(id).limit(1).execute();

    if (result.length === 0) {
      throw new Error("Data not found");
    }

    const transaction = result[0];

    const provenanceData: ProvenanceData = {
      id: transaction.created: transaction.timestamp,
      creator: transaction.owner,
      size: transaction.size,
      contentType: transaction.tags.find(tag => tag.name === "Content-Type")?.value || "unknown",
      tags: transaction.tags,
      events: [
        {
          timestamp: transaction.timestamp,
          type: "Creation",
          description: "Data object created and uploaded to Irys network"
        }
      ]
    };

    // Fetch additional events (e.g., modifications, transfers) here
    // This would require additional queries or API calls to get the full history

    return provenanceData;
  } catch (error) {
    console.error("Error fetching provenance data:", error);
    throw error;
  }
}

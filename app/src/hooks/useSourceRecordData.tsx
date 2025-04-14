import { useQuery } from "@tanstack/react-query";
import { getSourceRecord } from "@api";

export interface IUseSourceRecordData {
  sourceRecordId?: string;
  enabled?: boolean;
}

export const useSourceRecordData = (props: IUseSourceRecordData) => {
  const { sourceRecordId } = props; // Use the id from props or set it to undefined

  const query = useQuery({
    queryKey: ["sourceRecord", sourceRecordId],
    queryFn: () => getSourceRecord(sourceRecordId),
    refetchOnWindowFocus: true,
    staleTime: 0,
    enabled: !!sourceRecordId, // Only run the query if sourceRecordId is defined
  });

  const sourceRecord = query?.data?.data || null;

  // console.log("useSourceRecordData", sourceRecord);

  return { ...query, sourceRecord };
};

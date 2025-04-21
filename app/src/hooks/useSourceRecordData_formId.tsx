import { useQuery } from "@tanstack/react-query";
import { getSourceRecord_by_formId } from "@api";

export interface IUseSourceRecordData_formId {
  formId?: string;
}

// This hook fetches source record data based on the provided formId.
export const useSourceRecordData_formId = (
  props: IUseSourceRecordData_formId
) => {
  const { formId } = props; // Use the id from props or set it to undefined
  const query = useQuery({
    queryKey: ["sourceRecord_formId", formId],
    queryFn: () => getSourceRecord_by_formId(formId),
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
  const sourceRecords = query?.data?.data || null;
  return { ...query, sourceRecords };
};

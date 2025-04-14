import { useQuery } from "@tanstack/react-query";
import { getForm } from "@api";

export interface IUseFormData {
  id?: string;
  enabled?: boolean;
}

export const useFormData = (props: IUseFormData) => {
  const id = props?.id || undefined; // Use the id from props or set it to undefined
  const enabled = props?.enabled || true; //default to true if not provided
  const key = id ? id : "all";
  const query = useQuery({
    queryKey: ["formData", key],
    queryFn: () => getForm(id),
    enabled,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
  const form = query?.data?.data || null;
  return { ...query, form };
};

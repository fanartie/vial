import { useQuery } from "@tanstack/react-query";
import { getForm } from "@api";

export interface IUseFormData {
  id?: string;
}

export const useFormData = (props: IUseFormData) => {
  const id = props?.id || undefined; // Use the id from props or set it to undefined
  const query = useQuery({ queryKey: ["todos"], queryFn: () => getForm(id) });
  const form = query?.data?.data || null;
  return { ...query, form };
};

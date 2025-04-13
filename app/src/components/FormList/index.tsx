import { useFormData } from "@hooks";

const FormList = () => {
  const { isLoading, isError, form } = useFormData({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading form</div>;
  if (!form) return <div>No form data available</div>;

  //   console.log(form);

  return (
    <div>
      {form.map((field: any) => (
        <div key={field.id}>
          <h3>{field.name}</h3>
          <p>{field.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FormList;

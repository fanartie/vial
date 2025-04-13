import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormBuilder } from "@components";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FormBuilder />
    </QueryClientProvider>
  );
};

export default App;

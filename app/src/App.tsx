import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormBuilder } from "@pages";
import { AppProvider } from "@context";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <FormBuilder />
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;

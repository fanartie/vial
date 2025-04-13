import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormList } from "@components";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FormList />
    </QueryClientProvider>
  );
};

export default App;

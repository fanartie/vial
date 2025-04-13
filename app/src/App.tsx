import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, FormBuilder } from "@pages";
import { AppProvider } from "@context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/form-builder/:formId" element={<FormBuilder />} />
            <Route
              path="/form-builder-preview/:formId"
              element={<FormBuilder />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;

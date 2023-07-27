import { RouterProvider } from 'react-router-dom';
import { ScreenshotProvider } from './utils/screenshotContext.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import { ThemeProvider } from './hooks/ThemeContext';
import { useApiErrorBoundary } from './hooks/ApiErrorBoundaryContext';
import { router } from './routes';
//import { useState } from 'react';

const App = () => {
  const { setError } = useApiErrorBoundary();
  //const [refreshAttempted, setRefreshAttempted] = useState(false);
  
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        console.log('Error', error);
        if (error?.response?.status === 401){
          //if (!refreshAttempted) {
          //  setRefreshAttempted(true);
            window.dispatchEvent(new CustomEvent('unauthorized'));
       //   } else {
         //   window.dispatchEvent(new CustomEvent('maxRefreshAttemptsExceeded'));
          // }
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} position="top-right" />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default () => (
  <ScreenshotProvider>
    <App />
  </ScreenshotProvider>
);

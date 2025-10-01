import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import FormPage from './pages/FormPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'form'>('welcome');

  return (
    <>
      {currentPage === 'welcome' ? (
        <WelcomePage onNext={() => setCurrentPage('form')} />
      ) : (
        <FormPage onBack={() => setCurrentPage('welcome')} />
      )}
    </>
  );
}

export default App;

import { useStore } from './stores/useStore';
import { useEffect } from 'react';

import './App.css';
import WalletList from './components/WalletList';
import Total from './components/Total';

function App() {
  const { fetchData } = useStore();
  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Total />
      <WalletList />
    </>
  );
}

export default App;

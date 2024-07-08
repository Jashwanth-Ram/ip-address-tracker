import { useEffect, useState } from 'react'
import { Home } from './components/home'
import { IPDATA } from './@types/map';
import { useIP } from './hooks/useip';

import './App.css'

function App() {

  const { getIPData } = useIP();

  const[query,setQuery] = useState<string>('');
  const [data, setData] = useState<IPDATA>({
    isp: "",
    timezone: "",
    ip: "",
    region: "",
    country: "",
    longitude: 0,
    latitude: 0,
  });

  const handleQuery = async (key: string) => {
    const response = await getIPData(key);
    if (response?.ip) {
      setData(response);
      setQuery("");
    }
  };

  useEffect(() => {
    async function init() {
      const response = await getIPData();
      if (response?.ip) {
        setData(response);
      }
    }
    init();
  }, []);


  const props = {
    query,
    setQuery,
    handleQuery,
    data,
  };


  return (
    <div className='App'>
      <Home {...props}/>


    </div>

  )
}

export default App

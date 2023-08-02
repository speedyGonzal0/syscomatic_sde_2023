import { ChakraProvider } from '@chakra-ui/react'

import Layout from './layout/Layout';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Layout/>
      </div>
    </ChakraProvider>
  );
}

export default App;

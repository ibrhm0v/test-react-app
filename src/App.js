import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Center, Button, useToast } from '@chakra-ui/react'

function App() {

  const toast = useToast()

  return (
    <ChakraProvider>
      <Center>
        <Button onClick={() => toast({description: "Sa kardeşş"})}>
          Bana tıkla!!
        </Button>
      </Center>
    </ChakraProvider>
  );
}

export default App;

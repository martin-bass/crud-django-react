import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

//Pages
import PostList from "./pages/PostsList";

//Chakra UI
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navigation />
        <Container
          minH={"100vh"}
          centerContent
          paddingX={0}
          paddingY={16}
          overflowX="hidden"
          maxW={"container.xl"}
        >
          <Routes>
            <Route element={<PostList />} path="/"></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

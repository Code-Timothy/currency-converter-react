import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header title="RateMate Calc" />
      <Form />
      <Footer disclaimer="Exchange rates come from the European Central Bank website" />
    </Container>
  );
}

export default App;

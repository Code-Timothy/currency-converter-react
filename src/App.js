import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Button from "./Button";
import Result from "./Result";
import Info from "./Info";

function App() {
  return (
    <Container>
      <main className="main">
        <Section
          title="Currency"
          body={<Form />}
          extraSectionContent={<Button />}
        />
        <Section
          title="Result"
          extraClassName="section--white"
          body={<Result />}
          extraSectionContent={<Info />}
        />
      </main>
    </Container>
  );
}

export default App;

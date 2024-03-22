import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Button from "./Button";

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
          body={
            <>
              <p>700 <span>PLN</span></p>
            </>
          }
        />
      </main>
    </Container>
  );
}

export default App;

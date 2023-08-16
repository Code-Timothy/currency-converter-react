import Paragraph from "./Paragraph/index";
import Info from "./Info/index";

function App() {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend"> Kalkulator walut </legend>

        <Paragraph
          labelContent="Wybierz walutę :"
          body={
            <select className="form__input" id="currencySelect">
              <option value="USD">Dolar Amerykański</option>
              <option value="EUR">Euro</option>
              <option value="CHF">Frank Szwajcarski</option>
              <option value="GBP">Funt Brytyjski</option>
            </select>
          }
        />

        <Paragraph
          labelContent="Wpisz kwotę w PLN :"
          body={
            <input
              className="form__input"
              id="amount"
              type="number"
              name="amount"
              step="0.1"
              min="0"
              required
            />
          }
        />

        <Paragraph
          labelContent="Wynik : "
          body={<span>result</span>}
        />

        <Paragraph
          labelContent="Wciśnij aby przeliczyć : "
          body={<button className="form__button">Przelicz</button>}
        />

        <Info info="*Kursy walut są z dnia 08.08.2023 ze strony NBP.*" />
      </fieldset>
    </form>
  )
};

export default App;

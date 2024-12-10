import Header from "./Header";

function App() {
  return (
    <main className="main">
      <Header title="RateMate Calc" />
      <form className="form">
        <p className="form__paragraph">
          <label>
            <span className="form__labelText">Enter the amount</span>
            <input className="form__input" type="number" min="1" step="0.01"
              placeholder="Enter the amount in PLN" required />
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <span className="form__labelText">Select currency</span>
            <select className="form__input" name="currency">
              <option className="form__option" value="USD">Dolar Amerykański</option>
              <option className="form__option" value="GBP">Funt Brytyjski</option>
              <option className="form__option" value="EUR" selected>Euro</option>
              <option className="form__option" value="BTC">Bitcoin</option>
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          You will get: <span className="form__result"></span>
        </p>
        <p className="form__paragraph">
          <button className="form__button">CONVERTE</button>
        </p>
      </form>
      <div className="information">
        <p className="information__paragraph">**** **** **** 1234</p>
        <p className="information__paragraph information__paragraph--smaller">
          Exchange rates come from the European Central Bank website
        </p>
      </div>
    </main>
  );
}

export default App;

import { useCountries } from "./hooks/useCountries";
import { Form } from "./components/Form/Form";

function App() {
  const { isLoading, countries } = useCountries();

  return isLoading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
      <>
        <Form onSubmit={(formValues) => console.log({ formValues})}></Form>
        <pre>{JSON.stringify(countries, null, 2)}</pre>
    </>
  );
}

export default App;

import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;

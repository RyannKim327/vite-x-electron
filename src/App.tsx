import Form from "./pages/form";
import Index from "./pages/index";

function App() {
  return (
    <div className="h-dvh w-dvw">
      <div className="flex flex-col items-center">
        <Index />
        <Form />
      </div>
    </div>
  );
}

export default App;

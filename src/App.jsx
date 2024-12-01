import Button from "./Components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-green-500 font-bold gap-x-2">
      <Button background="bg-red-500">Login</Button>
      <Button background="bg-sky-500">Register</Button>
      <Button></Button>
    </div>
  );
}

export default App;

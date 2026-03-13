import UseWindowSize from "./hooks/WindowSize"

function App() {
  const size = UseWindowSize();
  return (
    <div>"The window size is {size}"</div>
  );
}

export default App

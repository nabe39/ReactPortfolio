import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import { Hero } from "./pages";
function App() {
  return (
    <>
      <div className="container-header">
        <Header />
        <Hero />
      </div>
      <MainLayout />
    </>
  );
}

export default App;

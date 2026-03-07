import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import { Hero, Contact } from "./pages";
function App() {
  return (
    <>
      <div className="container-header">
        <Header />
        <Hero />
      </div>
      <MainLayout />
      <Contact />
    </>
  );
}

export default App;

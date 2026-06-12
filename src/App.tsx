import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import useNavigation from "./hooks/useNavigation";
import Pages from "./layouts/Pages";
import "./App.css";

function App() {
  const isLoading = useNavigation();

  return (
    <>
      <Preloader isLoading={isLoading} />

      <Navbar />

      <main className="page-content">
        <Pages />
      </main>

      <Footer />
    </>
  );
}

export default App;
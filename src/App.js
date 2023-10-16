import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
        <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

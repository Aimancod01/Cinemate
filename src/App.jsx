import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-slate-700">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

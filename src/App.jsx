import { Routes, Route } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Dashboard/Home/Home";
import Product from "./Components/Dashboard/Product/Product";
import Invoice from "./Components/Dashboard/Invoice/Invoice";
import Statistic from "./Components/Dashboard/Statistic/Statistic";
import Settings from "./Components/Dashboard/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

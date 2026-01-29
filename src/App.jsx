import { Routes, Route } from "react-router";
import Home from "./page/Home";
import PublicLayout from "./layout/PublicLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

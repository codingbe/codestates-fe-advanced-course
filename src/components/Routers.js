import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import Nav from "./Nav";

export default function Routers() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

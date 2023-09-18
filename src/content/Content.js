import { Routes, Route } from "react-router";
import Hooks from "./Hooks";

export default function Content() {
    return (
        <Routes>
            <Route path="*" element={<Hooks />}></Route>
            <Route path="/hooks/*" element={<Hooks />}></Route>
        </Routes>
    );
}
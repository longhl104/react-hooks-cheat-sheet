import { Routes, Route } from "react-router"
import UseState from "./hooks/UseState"
import UseEffect from "./hooks/UseEffect"
import UseContext from "./hooks/UseContext"
import UseLayoutEffect from "./hooks/UseLayoutEffect"
import UseReducer from "./hooks/UseReducer"
import UseCallback from "./hooks/UseCallback"
import UseMemo from "./hooks/UseMemo"

export default function Hooks() {
    return (
        <Routes>
            <Route path="/" element={<UseState />}></Route>
            <Route path="/use-state" element={<UseState />}></Route>
            <Route path="/use-effect" element={<UseEffect />}></Route>
            <Route path="/use-context" element={<UseContext />}></Route>
            <Route path="/use-layout-effect" element={<UseLayoutEffect />}></Route>
            <Route path="/use-reducer" element={<UseReducer />}></Route>
            <Route path="/use-callback" element={<UseCallback />}></Route>
            <Route path="/use-memo" element={<UseMemo />}></Route>
        </Routes>
    )
}
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Navbar() {
    const menubar = useRef(null);
    const navigate = useNavigate();
    const items = [
        {
            label: 'Hooks',
            items: [
                {
                    label: 'useState',
                    command: () => { navigate("hooks/use-state") },
                },
                {
                    label: 'useEffect',
                    command: () => { navigate("/hooks/use-effect") },
                },
                {
                    label: 'useContext',
                    command: () => { navigate("/hooks/use-context") },
                },
                {
                    label: 'useLayoutEffect',
                    command: () => { navigate("/hooks/use-layout-effect") },
                },
                {
                    label: 'useReducer',
                    command: () => { navigate("/hooks/use-reducer") },
                },
                {
                    label: 'useCallback',
                    command: () => { navigate("/hooks/use-callback") },
                },
                {
                    label: 'useMemo',
                    command: () => { navigate("/hooks/use-memo") },
                },
            ]
        },
    ];

    return (
        <div className="card">
            <Menubar ref={menubar} model={items}></Menubar>
        </div>
    );
}
import { Button } from "primereact/button";
import { useReducer } from "react";

const initializeState = () => ({
    width: 100,
});

// ✅ note how the value returned from the fn above overrides initialState below: 
const initialState = { width: 15 };
const reducer = (state, action) => {
    switch (action) {
        case "plus":
            return { width: state.width + 15 };
        case "minus":
            return { width: Math.max(state.width - 15, 2) };

        default:
            throw new Error("Some error happens.");
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState, initializeState);

    return (
        <>
            <h1>useReducer</h1>
            <p>useReducer may be used as an alternative to useState. It's ideal for complex state logic where there's a dependency on previous state values or a lot of state sub-values.</p>
            <div className="border-round border-1" style={{ height: '30px', width: state.width }}></div>
            <div className="mt-2 flex flex-wrap gap-2">
                <Button label="Increase bar size" onClick={() => dispatch('plus')}></Button>
                <Button label="Decrease bar size" onClick={() => dispatch('minus')}></Button>
            </div>
        </>
    );
}
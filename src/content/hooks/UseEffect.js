import { useEffect, useState } from "react";
import { Button } from "primereact/button";

export default function UseEffect() {
    useEffect(() => {
        document.title = "useEffect Hook";

        const clicked = () => console.log("Window is clicked!");
        window.addEventListener("click", clicked);

        // It’s pretty common to clean up an effect after some time.
        // This is possible by returning a function from within the effect function passed to useEffect. Below is an example with addEventListener.
        return () => {
            window.removeEventListener("click", clicked);
        }
    }, []);

    const [numApples, setNumApples] = useState(1);
    useEffect(() => {
        console.log(`I have ${numApples} apples.`);
    });

    return (
        <>
            <h1> useEffect </h1>
            <p> With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. </p>

            <p> I have {numApples} apples. </p>
            <Button label="Add an apple" onClick={() => setNumApples(numApples => numApples + 1)}></Button>
        </>
    );
}
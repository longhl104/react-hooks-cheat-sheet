import { Button } from "primereact/button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {
    const [show, setShow] = useState(false);
    const popups = [useRef(), useRef()];
    const buttons = [useRef(), useRef()];

    const showPopup = i => {
        const { left, bottom } = buttons[i].current.getBoundingClientRect();
        popups[i].current.style.left = `${left}px`;
        popups[i].current.style.top = `${bottom + 25}px`;
    }

    useEffect(() => {
        if (!show)
            return;

        showPopup(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    useLayoutEffect(() => {
        if (!show)
            return;

        showPopup(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    return (
        <>
            <h1>useLayoutEffect</h1>
            <p>What's the difference between useEffect and useLayoutEffect? The function passed to useEffect fires after layout and paint — i.e., after the render has been committed to the screen. This is OK for most side effects that shouldn't block the browser from updating the screen.</p>

            <p>There are cases where you may not want the behavior useEffect provides, though; for example, if you need to make a visual change to the DOM as a side effect, useEffect won't be the best choice.</p>

            <p>To prevent the user from seeing flickers of changes, you can use useLayoutEffect. The function passed to useLayoutEffect will be run before the browser updates the screen.</p>

            <div className="flex gap-2">
                <Button label="Toggle popup using useEffect" ref={buttons[0]} onClick={() => setShow(s => !s)}></Button>
                <Button label="Toggle popup using useLayoutEffect" ref={buttons[1]} onClick={() => setShow(s => !s)}></Button>
            </div>

            {show && (
                <>
                    <div className="absolute border-round border-1 p-2" ref={popups[0]}>
                        This is a popup
                    </div>

                    <div className="absolute border-round border-1 p-2" ref={popups[1]}>
                        This is a popup
                    </div>
                </>
            )}
        </>
    );
}
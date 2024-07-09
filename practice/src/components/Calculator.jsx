import { useState, useEffect } from "react";
function Calculator() {
    const [result, setresult] = useState("result");
    const [x, setx] = useState("");
    const [y, sety] = useState("");

    useEffect(() => {
        if (x && y) {
            setresult(parseInt(x) + parseInt(y))
        }
    }, [x,y])


    return (
        <>

            <input value={x} onChange={(e) => setx(e.target.value)} />
            <input value={y} onChange={(e) => sety(e.target.value)} />
            <div>{result}</div>

        </>
    )
}
export default Calculator;
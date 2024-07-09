import { useRef, useState, useEffect } from "react";
import "./App.css";

export default function App() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    const sRef = useRef();
    const tRef = useRef();
    const fRef = useRef();

    const handleValue = (e, elem) => {
        let val = e.target.value;

        switch (elem) {
            case "first":
                if (val.length <= 1) {
                    setFirst(val);
                    if (val) sRef.current.focus();
                }
                break;
            case "second":
                if (val.length <= 1) {
                    setSecond(val);
                    if (val) tRef.current.focus();
                    else sRef.current.focus();
                }
                break;
            case "third":
                if (val.length <= 1) {
                    setThird(val);
                    if (val) fRef.current.focus();
                    else tRef.current.focus();
                }
                break;
            case "fourth":
                if (val.length <= 1) {
                    setFourth(val);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (first && second && third && fourth) {
            console.log(`OTP: ${first}${second}${third}${fourth}`);
        }
    }, [first, second, third, fourth]);

    const handleClick = (e, elem) => {
        switch (elem) {
            case "first":
                setFirst("");
                break;
            case "second":
                setSecond("");
                break;
            case "third":
                setThird("");
                break;
            case "fourth":
                setFourth("");
                break;
            default:
                break;
        }
    }

    return (
        <div className="otp">
            <input
                autoFocus
                value={first}
                onClick={(e) => handleClick(e, "first")}
                onChange={(e) => handleValue(e, "first")}
            />
            <input
                ref={sRef}
                value={second}
                onClick={(e) => handleClick(e, "second")}
                onChange={(e) => handleValue(e, "second")}
            />
            <input
                ref={tRef}
                value={third}
                onClick={(e) => handleClick(e, "third")}
                onChange={(e) => handleValue(e, "third")}
            />
            <input
                ref={fRef}
                value={fourth}
                onClick={(e) => handleClick(e, "fourth")}
                onChange={(e) => handleValue(e, "fourth")}
            />
        </div>
    );
}

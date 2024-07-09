import { useEffect } from "react";
function Timer() {
    useEffect(() => {
        let n = 0;
        let interval = setInterval(() => {
            n++;
            console.log(n);
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])
    return (
        <>
            <div>Timer</div>
        </>
    )
}
export default Timer;
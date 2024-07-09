import { useEffect, useRef } from "react";

function App() {

  const usernameRef = useRef()
  const passwordRef = useRef()
  const buttonRef = useRef()

  const handlePress = (e) => {
    if (e.key == "Enter") {
      passwordRef.current.focus()
    }
  }
  const handlePressPassword = (e) => {
    if (e.key == "Enter") {
      buttonRef.current.click()
    }
  }
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  return (
    <>
      <div>
        <label htmlFor="username">username</label>
        <input type="text"
          id="username"
          ref={usernameRef}
          onKeyDown={handlePress} />

      </div>
      <br />
      <div>
        <label htmlFor="password">password</label>
        <input type="password"
          id="password"
          ref={passwordRef}
          onKeyDown={handlePressPassword} />
      </div>
      <br />
      <button
        ref={buttonRef}
        onClick={() => {
          let username = usernameRef.current.value;
          let password = passwordRef.current.value;
          let user = { username, password }
          console.log(user);
        }}
      >log in</button>

    </>
  )
}
export default App;
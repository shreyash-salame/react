import myimage from "../assets/favicon.ico"
function Header(){
    return (
        <>
           <header>
            <ul>
                <a href="">About</a>
                <a href="">Home</a>
                <a href="">Login</a>
                <a href="">Offers</a>
            </ul>
            <img src={myimage} alt="" />
           </header>
        </>
    )
}
export default Header;
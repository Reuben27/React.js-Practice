const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1> Just a Navbar </h1>
            <div className = "links">
                <a href = "/"> Home </a>
                <a href = "reactjs.org" style = {{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                }}> React.js </a>
            </div>
        </nav>
    );
}

//background-color does not work in JSX as - is the minus sign so Camel case is used.
//{} = Dynamic Value
export default Navbar;
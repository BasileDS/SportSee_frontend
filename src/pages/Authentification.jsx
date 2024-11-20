import { useNavigate, useOutletContext } from "react-router-dom"
import sportseeLogo from "../assets/sportsee-logo.svg"
import "../styles/auth.css"

export default function Authentification () {

    const [ , setUserId ] = useOutletContext()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const userIdInputValue = document.querySelector("#userIdInput").value
        setUserId(userIdInputValue)
        navigate("profil/" + userIdInputValue)
    }

    return (
        <div className="auth">
            <img src={sportseeLogo} alt="sportsee logo"  className="img-logo"/>
            <h1 className="auth-title">Connexion</h1>
            <form action="" method="post">
                <div className="inputEls">
                    <input className="input" type="text" id="userIdInput" placeholder="Enter user Id" name="uname" required />
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </form> 
        </div>
    )
}
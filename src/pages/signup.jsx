import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account created successfully!");
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div class = 'background' id = "center">
        <div class = 'panel' id = 'signup-panel'>
        <form onSubmit={handleSignup}>
            <h2 id = 'signup'>Sign Up</h2>
            <span id = 'signup-items'>
                <label for = 'email'>Email:</label><br></br>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br></br>
                <label for = 'passwprd'>Password:</label><br></br>
                <input type="password" placeholder="Password (min 6 chars)" value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
            </span>
            <button type="submit">Create Account</button>
            <p>{message}</p>
        </form>
        </div>
    </div>    
  );
}

export default SignUp;
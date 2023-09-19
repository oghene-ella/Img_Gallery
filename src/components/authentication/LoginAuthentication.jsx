import { useState, useEffect } from 'react'
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const LoginAuthentication = () => {
    const [authUser, setAuthUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                navigate("/home");
            }
            else {
                setAuthUser(null)
                navigate("/")
            }
        });

        return () => {
            authChange();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
            })
            .catch((err) => {
                console.log(err);
            });
	};

    return (
		<section>
			{authUser ? (
				<>
					<p>{`Logged In as ${authUser.email}`}</p>
					<button onClick={userSignOut}>Sign Out</button>
				</>
			) : (
				<>
					<p>Logged Out</p>
				</>
			)}
		</section>
	);
}

export default LoginAuthentication
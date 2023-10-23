'use client'

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { app } from "@/app/functions/client"

export default function AuthPage ()  {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const router = useRouter()

    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential === null) {
            return;
        }
        const token = credential.accessToken
        const user = result.user;

        <Link></Link>

        console.log("token:", token,", user: ", user)


        router.push("/")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential)
    })

}


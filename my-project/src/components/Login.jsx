import { useState,useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [ErrorMessage,setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)

    return (
        <div>
            <div className="relative">
            <Header/>
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="background" />
            </div>

            <form onSubmit={(e)=>{
                e.preventDefault();
            }} className="absolute top-28 left-96 flex justify-center flex-col ml-16 pl-20 pr-20 pt-16 pb-16 gap-5 h-96 bg-black bg-opacity-80 rounded-sm">
                <h1 className="text-2xl font-extrabold text-white  w-60">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input ref={name} className=" w-60 pl-4 pr-9 pt-1 pb-1 bg-gray-600 text-white" type="text" placeholder="Name"/>}
                
                <input ref={email} className=" w-60 pl-4 pr-9 pt-1 pb-1 bg-gray-600 text-white" type="text" placeholder="Email Address"/>
                
                <input ref={password} className=" w-60 pl-4 pr-9 pt-1 pb-1 bg-gray-600" type="password" placeholder="Password" />
                
                <p className="text-red-600">{ErrorMessage}</p>

                <button className="font-bold text-white bg-red-600  w-60 pt-1 pb-1 rounded-md" onClick={()=>{
                    console.log(email.current.value);
                    console.log(password.current.value);

                    const message = validate(email.current.value,password.current.value,name.current.value);
                    setErrorMessage(message);
                }}>{isSignInForm?"Sign In":"Sign Up"}</button>
                
                <h1 className="text-white cursor-pointer" onClick={()=>{
                    setIsSignInForm(!isSignInForm)
                }}>{isSignInForm?"New to Netflix? Sign Up now":"Already a user? Sign In now"}</h1>
            </form>
            </div>
        </div>
    )
}

export default Login;
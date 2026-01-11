import { lazy, Suspense, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Loader from "../components/loaders/Loader.jsx";
import SplashScreen from "../components/loaders/SplashScreen.jsx";

const Login = lazy(() => import("../components/AuthForms/Login.jsx"));
const SignUp = lazy(() => import("../components/AuthForms/Signup.jsx"));

const Auth = () => {
    const navigate = useNavigate();
    const [showLoginUi, setShowLoginUi] = useState(true);

    const [showSplash, setShowSplash] = useState(false);

    if (window.localStorage.getItem("token") && !showSplash) {
        return <Navigate to="/" />;
    }

    const handleAuthSuccess = () => {
        setShowSplash(true);

        setTimeout(() => {
            navigate("/");
        }, 5000); // 3500
    };


    if (showSplash) {
        return <SplashScreen />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-teal-400 to-blue-500 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header Toggle */}
                <div className="flex bg-gray-100 p-1">
                    <button
                        onClick={() => setShowLoginUi(true)}
                        className={`flex-1 py-3 text-sm font-bold transition-all ${showLoginUi ? "bg-white text-blue-600 shadow" : "text-gray-500"}`}
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => setShowLoginUi(false)}
                        className={`flex-1 py-3 text-sm font-bold transition-all ${!showLoginUi ? "bg-white text-pink-600 shadow" : "text-gray-500"}`}
                    >
                        SIGN UP
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-6">
                    <Suspense fallback={<Loader />}>
                        {showLoginUi ? (
                            // onAuthSuccess pass kiya
                            <Login setShowLoginUi={setShowLoginUi} onAuthSuccess={handleAuthSuccess} />
                        ) : (
                            <SignUp setShowLoginUi={setShowLoginUi} onAuthSuccess={handleAuthSuccess} />
                        )}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Auth;























// import { lazy, Suspense, useState } from "react";
// import { Navigate } from "react-router";
// import Loader from "../components/loaders/Loader.jsx";

// // Lazy load the Login and SignUp components
// const Login = lazy(() => import("../components/AuthForms/Login.jsx"));
// const SignUp = lazy(() => import("../components/AuthForms/Signup.jsx"));

// const Auth = () => {

//     const [showLoginUi, setShowLoginUi] = useState(true); // true -> show login, false -> show signup


//     if (window.localStorage.getItem("token")) {
//         return <Navigate to="/" /> //+++++++++++ 
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#D9ECC7] to-[#07A3B2] p-6">

//             <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative">

//                 {/* Header */}
//                 <div className="px-6 py-6 bg-white/90 flex items-center justify-between">
//                     <h1 className="text-2xl font-bold text-indigo-600"></h1>
//                     <div className="flex gap-2">
//                         <button
//                             type="button"
//                             onClick={() => setShowLoginUi(true)}
//                             className={`px-3 py-1 rounded-md text-sm font-medium ${showLoginUi ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                         >
//                             Login
//                         </button>
//                         <button
//                             type="button"
//                             onClick={() => setShowLoginUi(false)}
//                             className={`px-3 py-1 rounded-md text-sm font-medium ${!showLoginUi ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                         >
//                             Sign up
//                         </button>
//                     </div>
//                 </div>

//                 {/* Sliding panels wrapper */}
//                 <Suspense
//                     fallback={<Loader />}
//                 >

//                     <div
//                         className={`flex w-[200%] transform transition-transform duration-500 ${showLoginUi ? "translate-x-0 h-96" : "-translate-x-1/2"}`}
//                         style={{ willChange: "transform" }}
//                     >
//                         <Login setShowLoginUi={setShowLoginUi} />
//                         <SignUp setShowLoginUi={setShowLoginUi} />
//                     </div>

//                 </Suspense>

//             </div>
//         </div>
//     );
// };

// export default Auth;
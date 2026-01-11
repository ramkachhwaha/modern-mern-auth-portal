import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import apiRequestHandler from "../../webservices/getway.js";
import endpointUrls from "../../webservices/endpointUrls.js";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

function Login({ setShowLoginUi, onAuthSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { register, handleSubmit, formState } = useForm();
    // console.log(formState);
    // const {resErrors, setResError} = useState("")

    const handleLogin = useCallback(async (data) => {
        setLoading(true);
        // console.log(data);

        try {
            let response = await apiRequestHandler("POST", endpointUrls.LOGIN_USER, data);
            // console.log(response);

            if (response.success) {
                window.localStorage.setItem("token", response.data.token);

                onAuthSuccess();
            } else {
                toast.error(response.message || "Login failed");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
        setLoading(false);
    }, [onAuthSuccess]);

    return (
        <div className="animate-fade-in space-y-4">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Welcome Back</h3>
                <p className="text-gray-500 text-sm">Login to continue</p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        // placeholder="Phone Number || Email"
                        placeholder="Number || Email"
                        className={`w-full px-4 py-3 bg-gray-200 border text-gray-600 placeholder-gray-400 rounded-lg 
                            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400
                             ${errors.login_user ? 'border-red-500' : 'border-gray-200'}`}
                        {...register("login_user", { required: "Number || Email is required" })}
                    />
                    {errors.login_user && <span className="text-red-500 text-xs">{errors.login_user.message}</span>}

                </div>

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className={`w-full px-4 py-3 placeholder-gray-400 text-gray-600 bg-gray-200 
                             transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 
                            ${errors.password ? 'border-red-500' : 'border-gray-200'}`}
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        karein="true"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 cursor-pointer
            hover:text-gray-800 focus:outline-none"
                    >
                        {/* Conditionally Icon Dikhayenge */}
                        {showPassword ? (
                            <GoEyeClosed />
                        ) : (
                            <RxEyeOpen />
                        )}
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 text-white font-bold rounded-lg shadow cursor-pointer transition-transform active:scale-95 
                    ${loading ? "bg-blue-300" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                    {loading ? "Processing..." : "LOGIN"}
                </button>
            </form>

            <div className="text-center mt-4">
                <span className="text-gray-600 text-sm">Don't have an account? </span>
                <button
                    onClick={() => setShowLoginUi(false)}
                    className="text-blue-600 font-bold hover:underline text-sm"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Login;





























// import { useCallback, useState } from "react";
// import { useForm } from "react-hook-form";
// import apiRequestHandler from "../../webservices/getway";
// import endpointUrls from "../../webservices/endpointUrls";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";


// function Login({ setShowLoginUi }) {

//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(false);
//     const { register, reset, handleSubmit, formState: { errors } } = useForm()

//     // login form
//     const handleLogin = useCallback(async (data) => {
//         setLoading(true)
//         let response = await apiRequestHandler("POST", endpointUrls.LOGIN_USER, data);
//         if (response.success) {

//             window.localStorage.setItem("token", response.data.token)
//             reset()
//             navigate("/"); // +++++++++++
//         } else {
//             toast.error(response.message)
//         }
//         setLoading(false);

//     }, [navigate, reset]);


//     return (
//         <>
//             <div className="w-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
//                 <div className="px-6 py-4">
//                     <div className="flex justify-center mx-auto">
//                         <img
//                             className="w-auto h-7 sm:h-8"
//                             src="https://static.thenounproject.com/png/1827853-200.png"
//                             alt=""
//                         />
//                     </div>

//                     <h3
//                         className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200"
//                     >
//                         Welcome
//                     </h3>

//                     <p
//                         className="mt-1 text-center text-gray-500 dark:text-gray-400"
//                     >
//                         Login Account
//                     </p>

//                     {/* Success / Error Message */}
//                     <div className="px-6 mt-4">
//                         {(errors.username?.message || errors.password?.message) && (
//                             <div
//                                 role="status"
//                                 aria-live="polite"
//                                 className={`p-3 rounded-md text-sm bg-red-50 text-red-800 border border-red-100"`}
//                             >
//                                 {errors.username?.message || errors.password?.message}
//                             </div>
//                         )}
//                     </div>

//                     <form onSubmit={handleSubmit(handleLogin)} >

//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 placeholder="Phone Number"
//                                 aria-label="Phone Number"
//                                 type="tel"
//                                 {...register("login_user", { required: "username can not be empty" })}
//                             />
//                             {errors.username?.message && <p className="text-red-600 text-sm">{errors.username?.message}</p>}

//                         </div>

//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 type="password"
//                                 placeholder="Password"
//                                 aria-label="Password"
//                                 {...register("password", { required: "password is Required" })}
//                             />
//                             {errors.password?.message && <p className="text-red-600 text-sm">{errors.password?.message}</p>}

//                         </div>

//                         <div className="flex items-center justify-between mt-4">
//                             <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

//                             <button
//                                 className={`px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer
//                                     dark:text-gray-900
//                                     ${loading ? "bg-indigo-400 cursor-progress" : "bg-indigo-600"}
//                                     `}
//                                 disabled={loading}

//                             >
//                                 Sign In
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
//                     <span
//                         className="text-sm text-gray-600 dark:text-gray-900"
//                     >
//                         Don't have an account?
//                     </span>

//                     <span
//                         type="button"
//                         onClick={() => setShowLoginUi(false)}
//                         className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
//                     >
//                         Sign up
//                     </span>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Login;

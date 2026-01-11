import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import apiRequestHandler from '../../webservices/getway.js';
import endpointUrls from '../../webservices/endpointUrls.js';
import { toast } from 'react-toastify';
import { GoEyeClosed } from 'react-icons/go';
import { RxEyeOpen } from 'react-icons/rx';

function SignUp({ setShowLoginUi, onAuthSuccess }) {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = useCallback(async (data) => {
        setLoading(true);
        try {
            let response = await apiRequestHandler("POST", endpointUrls.SIGNUP_USER, data);

            if (response.success) {
                setShowLoginUi(true);
                toast.error("Account created! Please Login.");
            } else {
                toast.error(response.message || "Signup Failed");
            }
        } catch (error) {
            console.error(error, "error in signup page");
        }
        setLoading(false);
    }, [setShowLoginUi]);

    return (
        <div className="animate-fade-in space-y-4">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Create Account</h3>
            </div>

            <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3  placeholder-gray-400 text-gray-600 bg-gray-200 
                             transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        {...register("user_name", {
                            required: "Full name is required",
                            pattern: /^[A-Za-z]+$/i,
                            minLength: 2,
                            maxLength: 32
                        })}
                    />
                    {errors.user_name && <span className="text-red-500 text-xs">Full Name is required</span>}
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full px-4 py-3 placeholder-gray-400 text-gray-600 bg-gray-200 
                             transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        {...register("phone", {
                            required: "mobile no. is required", pattern: {
                                value: /^(\+91[/-\s]?)?[0]?(91)?[6-9]\d{9}$/,
                                message: "invalid mobile number"
                            }
                        })}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 placeholder-gray-400 text-gray-600 bg-gray-200 
                             transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        {...register("email", {
                            required: "email is required", pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "email id is not valid"

                            }
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                </div>
                <div className='relative' >
                    <input
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 placeholder-gray-400 text-gray-600 bg-gray-200 
                             transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        {...register("password", {
                            required: "password is required"
                        })}
                    />
                    {errors.password && <span className="text-red-500 text-xs">Password is required</span>}

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
                    className={`w-full py-3 text-white font-bold rounded-lg cursor-pointer shadow transition-transform active:scale-95 
                    ${loading ? "bg-pink-300 cursor-progress " : "bg-pink-600 hover:bg-pink-700"}`}
                >
                    {loading ? "Creating..." : "SIGN UP"}
                </button>
            </form>

            <div className="text-center mt-4">
                <span className="text-gray-600 text-sm">Already have an account? </span>
                <button onClick={() => setShowLoginUi(true)} className="text-pink-600 font-bold hover:underline text-sm">Login</button>
            </div>
        </div>
    );
}

export default SignUp;




























// import { useForm } from 'react-hook-form';
// import apiRequestHandler from '../../webservices/getway.js';
// import endpointUrls from '../../webservices/endpointUrls.js';

// function SingUp({ setShowLoginUi }) {

//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState({
//         success: "",
//         error: ""
//     });

//     const { register, reset, handleSubmit, formState: { errors } } = useForm();


//     // fn for sign up  form
//     const handleSignup = useCallback(async (data) => {
//         setLoading(true)
//         let response = await apiRequestHandler("POST", endpointUrls.SIGNUP_USER, data);
//         if (response.success) {
//             setMessage({ success: response.message })
//             reset()
//             setShowLoginUi(true);
//         } else {
//             setMessage({ error: response.message })
//         }
//         setLoading(false);
//     }, [reset, setShowLoginUi]);


//     return (
//         <>

//             <div className="w-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800  ">

//                 <div className="px-6 py-4">
//                     <div className="flex justify-center mx-auto">
//                         <img
//                             className="w-auto h-7 sm:h-8"
//                             src="https://static.vecteezy.com/system/resources/thumbnails/010/311/112/small/new-member-icon-on-white-background-create-account-sign-add-contact-symbol-new-user-logo-flat-style-vector.jpg"
//                             alt="New Member Icon"
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
//                         Create Account
//                     </p>

//                     {/* Success / Error Message */}
//                     <div className="px-6 mt-4">
//                         {(message.success) && (
//                             <div
//                                 role="status"
//                                 aria-live="polite"
//                                 className={`p-3 rounded-md text-sm bg-green-50 text-green-800 border border-green-100 `}
//                             >
//                                 {message.success}
//                             </div>
//                         )}
//                         {(message.error) && (
//                             <div
//                                 role="status"
//                                 aria-live="polite"
//                                 className={`p-3 rounded-md text-sm bg-red-50 text-red-800 border border-red-100 `}
//                             >
//                                 {message.error}
//                             </div>
//                         )}
//                     </div>

//                     <form onSubmit={handleSubmit(handleSignup)}  >
//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 type="text"
//                                 placeholder="Name"
//                                 aria-label="Name"
//                             />
//                             {(errors.user_name?.message) && (
//                                 <div
//                                     role="status"
//                                     aria-live="polite"
//                                     className="text-sm bg-red-50 text-red-800"
//                                 >
//                                     {errors.user_name?.message}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 placeholder="Phone Number"
//                                 aria-label="Phone Number"
//                                 type="tel"
//                                 {...register("phone", {
//                                     required: "mobile no. is required", pattern: {
//                                         value: /^(\+91[/-\s]?)?[0]?(91)?[6-9]\d{9}$/,
//                                         message: "invalid mobile number"
//                                     }
//                                 })}
//                             />
//                             {(errors.phone?.message) && (
//                                 <div
//                                     role="status"
//                                     aria-live="polite"
//                                     className="text-sm bg-red-50 text-red-800"
//                                 >
//                                     {errors.phone?.message}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 type="email"
//                                 placeholder="Email Address"
//                                 aria-label="Email Address"
//                                 {...register("email", {
//                                     required: "email is required", pattern: {
//                                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                         message: "email id is not valid"

//                                     }
//                                 })}
//                             />
//                             {(errors.email?.message) && (
//                                 <div
//                                     role="status"
//                                     aria-live="polite"
//                                     className="text-sm bg-red-50 text-red-800"
//                                 >
//                                     {errors.email?.message}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="w-full mt-4">
//                             <input
//                                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
//                                 type="password"
//                                 placeholder="Password"
//                                 aria-label="Password"
//                                 {...register("password", { required: "password is required" })}

//                             />
//                             {(errors.password?.message) && (
//                                 <div
//                                     role="status"
//                                     aria-live="polite"
//                                     className="text-sm bg-red-50 text-red-800"
//                                 >
//                                     {errors.password?.message}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="flex items-center justify-between mt-4">
//                             <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

//                             <button
//                                 className={`px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer ${loading ? "bg-pink-400 cursor-progress" : "bg-pink-600"} `}
//                             >
//                                 Sign In
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
//                     <span
//                         className="text-sm text-gray-600 dark:text-gray-200"
//                     >
//                         I have account?
//                     </span>

//                     <a
//                         type="button"
//                         onClick={() => setShowLoginUi(true)}
//                         className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
//                     >
//                         Login
//                     </a>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default SingUp;

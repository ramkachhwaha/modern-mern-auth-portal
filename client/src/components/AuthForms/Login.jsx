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

    // console.log(errors);

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

            {/* error messages++++++++ */}

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
                    {/* console.log(errors); */}
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
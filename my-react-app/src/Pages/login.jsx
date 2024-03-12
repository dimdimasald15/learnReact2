import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout
            title="Login"
            subtitle="Welcome, Please sign in!"
        >
            <FormLogin/>
            <p className="text-sm mt-5 text-center">
                Don't have an account? Please <Link to="/register" className="font-bold text-blue-600">Register</Link>
            </p>
        </AuthLayout>
    );
}

export default LoginPage;
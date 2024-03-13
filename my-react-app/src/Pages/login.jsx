import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout
            title="Login"
            type = "login"
            subtitle="Welcome, Please sign in!"
        >
            <FormLogin/>
        </AuthLayout>
    );
}

export default LoginPage;
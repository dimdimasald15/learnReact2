import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <>
        <h1 className="font-bold text-blue-900">Hello {username}! Good morning!</h1>
        </>
    )
}

export default ProfilePage;
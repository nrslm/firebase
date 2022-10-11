import { useSelector } from "react-redux";

export function useAuth(){
    console.log(useSelector)
    const { email, token, id } = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
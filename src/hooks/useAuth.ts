import {useAppSelector} from "./redux-hooks.ts";

interface IUseAuthReturn {
    isAuth: boolean
    email: string | null
    token: string | null
    id: string | null
}

export const useAuth = ():IUseAuthReturn  => {
    const {email, token, id} = useAppSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
import React, {useEffect} from 'react';

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const state = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])
    if (state?.loading)
    {return <h1>Идёт Загрузка</h1>}
    if (state?.error)
    {
        return <h1>{state.error}</h1>
    }
    return (
        <div>
            {state?.users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;
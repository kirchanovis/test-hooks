import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { getTestUserInfo } from './../../api/mock'
import { Context } from './../../context'
import { Preloader } from '../../components/Preloader';
import { ProfileBlock } from '../../components/ProfileBlock';
import { Message } from '../../components/Message';

function Profile() {
    const { state, dispatch } = useContext(Context),
        [id] = useState(state.user.data.id),
        [hiddenMessage, setHiddenMessage] = useState(true)

    useEffect(() => {
    /* userInfo(id).then((req) => {
      setUser(req.data.data)
    }) */
        dispatch({
            type: 'LOADING_PROFILE'
        })
        if (id) {
            getTestUserInfo(id).then((req) => {
                if (req.data.data[0].status === 'ok') {
                    dispatch({
                        type: 'SUCCESS_PROFILE'
                    })
                    dispatch({
                        type: 'GET_PROFILE',
                        payload: req.data.data[0].data
                    })
                } else {
                    dispatch({
                        type: 'ERROR_PROFILE',
                        payload: 'Неизвестная ошибка'
                    })
                    setHiddenMessage(false)
                    setTimeout(() => {
                        setHiddenMessage(true)
                    }, 3000);
                }
            })
                .catch(() => {
                    dispatch({
                        type: 'ERROR_PROFILE',
                        payload: 'Сервер не доступен'
                    })
                    setHiddenMessage(false)
                    setTimeout(() => {
                        setHiddenMessage(true)
                    }, 3000);
                })
        }
    }, [dispatch, id]);

    if (!state.user.data.id) { return <Redirect to="/login" /> }

    return (
        <div className="profile">
            <Preloader active={state.profile.loading} />
            <Message
                hidden={hiddenMessage}
                text={state.profile.errorMessage}
            />
            <ProfileBlock
                city={state.profile.data.city || ''}
                languages={state.profile.data.languages || []}
                social={state.profile.data.social || []}
            />
        </div>
    );
}

export default Profile;
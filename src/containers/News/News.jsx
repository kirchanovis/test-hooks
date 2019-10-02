import React, { useEffect, useContext, useState } from 'react';
import { Preloader } from '../../components/Preloader';
import { getNews } from './../../api'
import { Context } from './../../context'
import { NewsItem } from '../../components/NewsItem';
import { Message } from '../../components/Message';
import './style.scss'

function News() {
    const { state, dispatch } = useContext(Context),
        [count, setCount] = useState(0),
        [hiddenMessage, setHiddenMessage] = useState(true)

    useEffect(() => {
        dispatch({
            type: 'LOADING_NEWS'
        })
        getNews().then((req) => {
            if (req.data.status === 'ok') {
                dispatch({
                    type: 'SUCCESS_NEWS'
                })
                dispatch({
                    type: 'GET_NEWS',
                    payload: req.data.data
                })
                setCount(req.data.data.length)
            } else {
                dispatch({
                    type: 'ERROR_NEWS',
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
                    type: 'ERROR_NEWS',
                    payload: 'Сервер не доступен'
                })
                setHiddenMessage(false)
                setTimeout(() => {
                    setHiddenMessage(true)
                }, 3000);
            })
    }, [dispatch]);

    return (
        <div className="news">
            <Preloader active={state.news.loading} />
            <Message
                hidden={hiddenMessage}
                text={state.news.errorMessage}
            />
            {state.news.data.map((elem, id) =>
                <NewsItem
                    key={id}
                    title={elem.title}
                    text={elem.text}
                />
            )}
            <div className="newsItem__length">Всего новостей {count}</div>
        </div>
    );
}

export default News;
import React, { useEffect, useContext, useState } from 'react';
import { Preloader } from '../../components/Preloader';
import { getNews } from './../../api'
import { Context } from './../../context'
import { NewsItem } from '../../components/NewsItem';
import { Message } from '../../components/Message';
import './style.scss'
import { loadingNews, successNews, errorNews, getNewsApi } from './../../actions/news';

function News() {
    const { state, dispatch } = useContext(Context),
        [count, setCount] = useState(0),
        [hiddenMessage, setHiddenMessage] = useState(true)

    useEffect(() => {
        dispatch(getNewsApi([]))
        dispatch(loadingNews())
        getNews().then((req) => {
            if (req.data.status === 'ok') {
                dispatch(successNews())
                dispatch(getNewsApi(req.data.data))
                setCount(req.data.data.length)
            } else {
                dispatch(errorNews('Неизвестная ошибка'))
                setHiddenMessage(false)
                setTimeout(() => {
                    setHiddenMessage(true)
                }, 3000);
            }
        })
            .catch(() => {
                dispatch(errorNews('Сервер не доступен'))
                setHiddenMessage(false)
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
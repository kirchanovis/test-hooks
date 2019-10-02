import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, {
    delayResponse: 1000
});

mock.onGet('/testUser/1').reply(200, {
    data: [
        {
            status: 'ok',
            data: {
                userId: 1,
                city: 'Москва',
                languages: [
                    'English',
                    'Русский'
                ],
                social: [
                    {
                        label: 'vk',
                        link: 'vk.com/maxpfrontend'
                    },
                    {
                        label: 'telegram',
                        link: 't.me/maxpfrontend'
                    },
                    {
                        label: 'web',
                        link: 'https://maxpfrontend.ru'
                    },
                    {
                        label: 'youtube',
                        link: 'https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q'
                    },
                    {
                        label: 'twitter',
                        link: 'https://twitter.com/MaxPatsiansky'
                    },
                    {
                        label: 'twitch',
                        link: 'http://twich.tv/maxpfrontend'
                    }
                ]
            }
        }

    ]
});

export const getTestUserInfo = (id) => {
    return axios.get(`/testUser/${id}`)
}
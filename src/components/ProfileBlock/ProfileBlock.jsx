import React from 'react';
import { ProfileBlockFlex, ProfileBlockElem, ProfileBlockLang, ProfileBlockCity, ProfileBlockLeft, ProfileBlockRight, ProfileBlock as Root } from './styles'
import { Avatar } from '../Icons/Avatar';
import { Vk } from '../Icons/Vk';
import { Twitter } from '../Icons/Twitter';
import { Web } from '../Icons/Web';
import { Youtube } from '../Icons/Youtube';
import { Telegram } from '../Icons/Telegram';
import { Twitch } from '../Icons/Twitch';

type Props = {

    city: string,

    languages: Array,

    social: Array
}

type PropsIcon = {
    label: string
}

function ProfileBlock(props: Props) {
    const {
        city,
        languages,
        social
    } = props

    function Icons(props: PropsIcon) {
        switch (props.label) {
            case 'vk':
                return <Vk />;
            case 'web':
                return <Web />;
            case 'youtube':
                return <Youtube />;
            case 'telegram':
                return <Telegram />;
            case 'twitch':
                return <Twitch />;
            case 'twitter':
                return <Twitter />;
            default:
                return null;
        }
    }

    return (
        <Root>
            <ProfileBlockLeft>
                <Avatar
                    width={64}
                    height={64}
                />
            </ProfileBlockLeft>
            <ProfileBlockRight>
                <ProfileBlockElem>
                Город: <ProfileBlockCity>{city}</ProfileBlockCity>
                </ProfileBlockElem>
                <ProfileBlockElem>
                    <div>Знание языков:</div>
                    <ProfileBlockElem>
                        {languages.map((elem, id) =>
                            <ProfileBlockLang key={id}>{elem}</ProfileBlockLang>
                        )}
                    </ProfileBlockElem>
                </ProfileBlockElem>

                <ProfileBlockElem>
                Ссылки:
                </ProfileBlockElem>
                <ProfileBlockFlex>
                    {social.map((elem, id) => {
                        return (
                            <div key={id}>
                                <a
                                    href={`${(elem.link.indexOf('http') !== -1) ? elem.link : `http://${elem.link}`}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icons label={elem.label}/>
                                </a>
                            </div>
                        )
                    }
                    )}
                </ProfileBlockFlex>
            </ProfileBlockRight>
        </Root>
    );
}

export default ProfileBlock;
import styled from 'styled-components'

export const
    ProfileBlock = styled.div`
        background: #fafafa;
        max-width: 600px;
        margin: 20px auto;
        padding: 15px;
        border: 1px solid #ebebeb;
        box-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px, rgba(0,0,0,0.09804) 0px 1px 2px 0px;
        display: flex;
    `,
    ProfileBlockLeft = styled.div`
        flex: 0 0 80px
    `,
    ProfileBlockRight = styled.div`
        flex:1;
        font-family: Roboto;
        font-weight: 400;
        font-size: 15px;
        color: #636363;
    `,
    ProfileBlockElem = styled.div`
        padding: 10px 0;
    `,
    ProfileBlockCity = styled.span`
        color: #4a89dc;
    `,
    ProfileBlockFlex = styled.div`
        display: flex;
        & div{
            flex: 0 0 32px;
        }
    `,
    ProfileBlockLang = styled.div`
        color: #4a89dc;
        padding: 0 10px;
    `;
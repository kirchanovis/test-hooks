import React from 'react';
import './Preloader.scss';

type Props = {

    active: boolean
}

function Preloader(props: Props) {
    const {
        active
    } = props

    return (
        <React.Fragment>
            { active && (
                <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                        <div className="pswp__preloader__cut">
                            <div className="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Preloader;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './SectionBar.css';

export const SectionBar = (props) => {
    const [poetry, setPoetry] = useState(false);
    const [args, setArgs] = useState(false);
    const [infoText, setInfoText] = useState(false);
    const [narNon, setNarNon] = useState(false);
    const [fiction, setFiction] = useState(false);
    const [digLib, setDigLib] = useState(false);
    const [freshLit, setFreshLit] = useState(false);

    useEffect(() => {
        if (
            props.data.filter(
                (item) => item.Section === 'HMH Fresh Lit Preview'
            ).length !== 0
        ) {
            setFreshLit(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Poetry').length !== 0
        ) {
            setPoetry(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Argument').length !==
            0
        ) {
            setArgs(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Informational Text')
                .length !== 0
        ) {
            setInfoText(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Narrative Nonfiction')
                .length !== 0
        ) {
            setNarNon(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Fiction').length !== 0
        ) {
            setFiction(true);
        }
        if (
            props.data.filter((item) => item.Section === 'Digital Library')
                .length !== 0
        ) {
            setDigLib(true);
        }
    }, [props]);

    return (
        <div className='barBanner'>
            <div className='choicesContainer'>
                {freshLit ? (
                    <p className='navButton'>
                        <Link
                            to='HMH Fresh Lit Preview'
                            spy={true}
                            smooth={true}>
                            HMH Fresh Lit
                        </Link>
                    </p>
                ) : null}
                {args ? (
                    <p className='navButton'>
                        <Link
                            activeClass='active'
                            to='Arguments'
                            spy={true}
                            smooth={true}>
                            Argument
                        </Link>
                    </p>
                ) : null}
                {infoText ? (
                    <p className='navButton'>
                        <Link to='Informational Texts' spy={true} smooth={true}>
                            Informational Text
                        </Link>
                    </p>
                ) : null}
                {narNon ? (
                    <p className='navButton'>
                        <Link
                            to='Narrative Nonfiction'
                            spy={true}
                            smooth={true}>
                            Narrative Nonfiction
                        </Link>
                    </p>
                ) : null}
                {fiction ? (
                    <p className='navButton'>
                        <Link to='Fiction' spy={true} smooth={true}>
                            Fiction
                        </Link>
                    </p>
                ) : null}
                {poetry ? (
                    <p className='navButton'>
                        <Link to='Poetry' spy={true} smooth={true}>
                            Poetry
                        </Link>
                    </p>
                ) : null}
                {digLib ? (
                    <p className='navButton'>
                        <Link to='Digital Library' spy={true} smooth={true}>
                            Digital Library
                        </Link>
                    </p>
                ) : null}
            </div>
        </div>
    );
};

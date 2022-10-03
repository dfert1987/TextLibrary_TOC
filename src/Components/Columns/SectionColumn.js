import React from 'react';
import printIcon from '../../Assets/Icons/printIcon.svg';
import ebookIcon from '../../Assets/Icons/ebookIcon.svg';
import pptIcon from '../../Assets/Icons/pptIcon.svg';
import FreshLitIcon from '../../Assets/Icons/FreshLit.svg';
import '../CSS/Main.css';

export const SectionColumn = (props) => {
    const iconsSpacing = (item) => {
        let lengthArray = [];

        if (item.PPTLink) {
            lengthArray.push(item.PPTLink);
        }
        if (item.PDFLink) {
            lengthArray.push(item.PDFLink);
        }
        if (item.DigitalLink) {
            lengthArray.push(item.DigitalLink);
        }

        const iconLength = () => {
            let foundLength = lengthArray.length;
            if (foundLength && foundLength === 3) {
                return 'three';
            } else if (foundLength && foundLength === 2) {
                return 'two';
            } else if (foundLength && foundLength === 1) {
                return 'one';
            } else return null;
        };

        if (item.Section === 'Poetry') {
            return `icons poetry ${iconLength()}`;
        }
        if (item.Lexile > 999 && item.Section !== 'Digital Library') {
            return `icons wide ${iconLength()}`;
        } else if (
            (item.Lexile < 999 && item.Section !== 'Digital Library') ||
            item.Section === 'Poetry'
        ) {
            return `icons ${iconLength()}`;
        }
        return `icons digitalLibrary ${iconLength()}`;
    };

    const stripes = (index) => {
        if (index === 0 || index % 2 === 0) {
            return 'titleAuthorLex';
        } else {
            return 'titleAuthorLex tan';
        }
    };

    const texts = (section, allTitles) => {
        console.log(allTitles);
        if (section && allTitles) {
            return section.map((item, index) => (
                <React.Fragment key={allTitles.indexOf(item.Title)}>
                    <div className={stripes(index)}>
                        <div className='titleAuthor'>
                            {item.FreshLit === true &&
                            item.Section !== 'HMH Fresh Lit Preview' ? (
                                <div className='lit-logo row'>
                                    <img
                                        src={FreshLitIcon}
                                        alt='Fresh Lit Logo'
                                        className='freshLitIcon'
                                    />
                                </div>
                            ) : null}
                            <b className='titles'>{item.Title}</b>
                            <div className='byWho'>
                                {item.Author ? (
                                    <>{`${item.Genre} ${item.Author}`}</>
                                ) : (
                                    <>{`${item.Genre}`}</>
                                )}
                            </div>
                        </div>
                        <div className={iconsSpacing(item)}>
                            {item.DigitalLink ? (
                                <a
                                    href={item.DigitalLink}
                                    title='Digital Link'
                                    className='link'>
                                    <img
                                        src={ebookIcon}
                                        alt='ebook-icon'
                                        className='linkIcon ebook'
                                    />
                                </a>
                            ) : null}
                            {item.PDFLink ? (
                                <a
                                    href={item.PDFLink}
                                    title='PDF Link'
                                    className='link'>
                                    <img
                                        src={printIcon}
                                        alt='pdf-icon'
                                        className='linkIcon pdf'
                                    />
                                </a>
                            ) : null}
                            {item.PPTLink ? (
                                <a
                                    href={item.PPTLink}
                                    title='PPT Link'
                                    className='link'>
                                    <img
                                        src={pptIcon}
                                        alt='PPT-icon'
                                        className='linkIcon ppt'
                                    />
                                </a>
                            ) : null}
                            {item.TGLink ? (
                                <a href={item.TGLink} title='TG Link'>
                                    <img
                                        src={printIcon}
                                        alt='Teacher-Guide-icon'
                                        className='linkIcon TG'
                                    />
                                </a>
                            ) : null}
                        </div>
                        {item.Lexile ? (
                            <div className='lexiContainer'>
                                <b className='lexi'>{item.Lexile}</b>
                            </div>
                        ) : null}
                    </div>
                </React.Fragment>
            ));
        }
    };

    return (
        <div className='titleAuthorContainer'>
            {texts(props.section, props.allTitles)}
        </div>
    );
};

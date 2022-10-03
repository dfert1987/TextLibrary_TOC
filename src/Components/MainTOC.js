import React, { useState, useEffect } from 'react';
import { SectionColumn } from './Columns/SectionColumn';
import { SkillsColumn } from './Columns/SkillsColumn';
import { ConnectionsColumn } from './Columns/ConnectionsColumn';
import { SectionBar } from './SearchAndSort/SectionBar';
import { data } from '../Assets/data';
import printIcon from '../Assets/Icons/printIcon.svg';
import ebookIcon from '../Assets/Icons/ebookIcon.svg';
import pptIcon from '../Assets/Icons/pptIcon.svg';
import FreshLitGreen from '../Assets/Icons/FreshLitGreen2.svg';
import _ from 'lodash';
import './CSS/Main.css';

export const MainTOC = () => {
    const [args, setArgs] = useState();
    const [infoTexts, setInfoTexts] = useState();
    const [narNons, setNarnNons] = useState();
    const [fictions, setFictions] = useState();
    const [poems, setPoems] = useState();
    const [digLibs, setDigLibs] = useState();
    const [freshLits, setFreshLits] = useState();
    const [titles, setTitles] = useState();
    const [infoTitles, setInfoTitles] = useState();
    const [narNonTitles, setNarNonTitles] = useState();
    const [fictionTitles, setFictionTitles] = useState();
    const [poemTitles, setPoemTitles] = useState();
    const [digLibTitles, setDigLibTitles] = useState();
    const [freshLitTitles, setFreshLitTitles] = useState();
    const [skillChunksArgs, setSkillChunksArgs] = useState();
    const [skillChunksInfo, setSkillChunksInfo] = useState();
    const [skillChunksNarNons, setSkillChunksNarNons] = useState();
    const [skillChunksFictions, setSkillChunksFictions] = useState();
    const [skillChunksPoems, setSkillChunksPoems] = useState();
    const [skillChunksDigLibs, setSkillChunksDigLibs] = useState();
    const [skillChunksFreshLits, setSkillChunksFreshLits] = useState();
    const [visibleItems, setVisibleItems] = useState(data);

    useEffect(() => {
        let typeArgs = visibleItems.filter(
            (item) => item.Section === 'Argument'
        );
        let sortedArgs = typeArgs.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typeInfoTexts = visibleItems.filter(
            (item) => item.Section === 'Informational Text'
        );
        let sortedInfoTexts = typeInfoTexts.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typeNarNons = visibleItems.filter(
            (item) => item.Section === 'Narrative Nonfiction'
        );
        let sortedNarNons = typeNarNons.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typeFictions = visibleItems.filter(
            (item) => item.Section === 'Fiction'
        );
        let sortedFictions = typeFictions.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typePoems = visibleItems.filter(
            (item) => item.Section === 'Poetry'
        );
        let sortedPoems = typePoems.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typeFreshLits = visibleItems.filter(
            (item) => item.Section === 'HMH Fresh Lit Preview'
        );
        let sortedFreshLits = typeFreshLits.sort((a, b) => {
            if (a.Lexile !== b.Lexile) {
                return a.Lexile - b.Lexile;
            } else
                return a.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '') >
                    b.Title.replace(/^The /, '')
                        .replace(/^A /, '')
                        .replace(/^An /, '')
                    ? 1
                    : -1;
        });
        let typeDigLibs = visibleItems.filter(
            (item) => item.Section === 'Digital Library'
        );
        let sortedDigLibs = typeDigLibs.sort((a, b) => {
            return a.Title.replace(/^The /, '')
                .replace(/^A /, '')
                .replace(/^An /, '') >
                b.Title.replace(/^The /, '')
                    .replace(/^A /, '')
                    .replace(/^An /, '')
                ? 1
                : -1;
        });

        setNewArgs(sortedArgs);
        setNewInfoTexts(sortedInfoTexts);
        setNewNarNons(sortedNarNons);
        setNewFictions(sortedFictions);
        setNewPoems(sortedPoems);
        setNewDigLibs(sortedDigLibs);
        setNewFreshLits(sortedFreshLits);
    }, [visibleItems]);

    const setNewFreshLits = (sortedFreshLits) => {
        if (sortedFreshLits) {
            const sortFreshLits = sortedFreshLits.map((freshLit) => freshLit);
            setFreshLits(sortFreshLits);

            const sortTitles = sortedFreshLits.map(
                (freshLit) => freshLit.Title
            );
            setFreshLitTitles(sortTitles);
        }

        const onlySkills = sortedFreshLits.map((freshLit) =>
            _.pick(freshLit, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksFreshLits(onlySkills);
    };

    const setNewDigLibs = (sortedDigLibs) => {
        console.log(sortedDigLibs);
        if (sortedDigLibs) {
            const sortDigLibs = sortedDigLibs.map((digLib) => digLib);
            setDigLibs(sortDigLibs);

            const sortTitles = sortedDigLibs.map((digLib) => digLib.Title);
            setDigLibTitles(sortTitles);
        }

        const onlySkills = sortedDigLibs.map((digLib) =>
            _.pick(digLib, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksDigLibs(onlySkills);
    };

    const setNewPoems = (sortedPoems) => {
        if (sortedPoems) {
            const sortPoems = sortedPoems.map((poem) => poem);
            setPoems(sortPoems);

            const sortTitles = sortedPoems.map((poem) => poem.Title);
            setPoemTitles(sortTitles);
        }

        const onlySkills = sortedPoems.map((poem) =>
            _.pick(poem, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksPoems(onlySkills);
    };

    const setNewFictions = (sortedFictions) => {
        if (sortedFictions) {
            const sortFictions = sortedFictions.map((fiction) => fiction);
            setFictions(sortFictions);

            const sortTitles = sortedFictions.map((fiction) => fiction.Title);
            setFictionTitles(sortTitles);
        }

        const onlySkills = sortedFictions.map((fiction) =>
            _.pick(fiction, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksFictions(onlySkills);
    };

    const setNewNarNons = (sortedNarNons) => {
        if (sortedNarNons) {
            const sortNarNons = sortedNarNons.map((narNon) => narNon);
            setNarnNons(sortNarNons);

            const sortTitles = sortedNarNons.map((narNon) => narNon.Title);
            setNarNonTitles(sortTitles);
        }

        const onlySkills = sortedNarNons.map((narNon) =>
            _.pick(narNon, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksNarNons(onlySkills);
    };

    const setNewArgs = (sortedArgs) => {
        if (sortedArgs) {
            const sortArgs = sortedArgs.map((arg) => arg);
            setArgs(sortArgs);

            const sortTitles = sortedArgs.map((arg) => arg.Title);
            setTitles(sortTitles);
        }

        const onlySkills = sortedArgs.map((arg) =>
            _.pick(arg, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksArgs(onlySkills);
    };

    const setNewInfoTexts = (sortedInfo) => {
        if (sortedInfo) {
            const sortInfos = sortedInfo.map((info) => info);
            setInfoTexts(sortInfos);

            const sortTitles = sortedInfo.map((info) => info.Title);
            setInfoTitles(sortTitles);
        }

        const onlySkills = sortedInfo.map((info) =>
            _.pick(info, ['Skill1', 'Skill2', 'Skill3', 'Skill4'])
        );
        setSkillChunksInfo(onlySkills);
    };

    const tableSection = (sectionName, allOfSection, chunkType, allTitles) => {
        if (allOfSection && allOfSection.length > 0) {
            return (
                <div className='argumentSection'>
                    {sectionName === 'Argument' ? (
                        <div className='intro-and-title lib'>
                            <div className='introContainer'>
                                <h2 className='intro-title'>
                                    Leveled Text Library
                                </h2>
                                <div className='intro'>
                                    These short texts are organized by Lexile
                                    score within each category. Click the icons
                                    to open an online text or a printable PDF.
                                    You may choose to link a Leveled Text to
                                    your instruction for a particular skill or a
                                    grade-level
                                    <span className='intro-italic'>
                                        {' '}
                                        Into Literature
                                    </span>{' '}
                                    unit.
                                </div>
                            </div>
                            <div className='keyContainer digitalLib'>
                                <p className='keyHeader'>Key to Icons</p>
                                <div className='keyMain'>
                                    <span className='keyItem'>
                                        <img
                                            src={ebookIcon}
                                            alt='online icon'
                                            className='keyIcon'
                                        />
                                        <p className='keyText'>Online</p>
                                    </span>
                                    <span className='keyItem'>
                                        <img
                                            src={printIcon}
                                            alt='printable icon'
                                            className='keyIcon'
                                        />
                                        <p className='keyText'>Printable</p>
                                    </span>
                                    <span className='keyItem'>
                                        <img
                                            src={pptIcon}
                                            alt='slides icon'
                                            className='keyIcon'
                                        />
                                        <p className='keyText'>Lesson Slides</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    {sectionName === 'Digital Library' ? (
                        <div className='intro-and-title lib'>
                            <div className='introContainer'>
                                <h2 className='intro-title'>Digital Library</h2>
                                <p className='intro digLibrary'>
                                    To access a book-length work online, click
                                    the icon and navigate it by opening the
                                    Contents menu. You may choose to teach a
                                    book in concert with an{' '}
                                    <i>Into Literature</i> unit or use it for
                                    independent reading. Long Read Study Guides
                                    and accompanying Teacher Guides are
                                    available for some texts that you may wish
                                    to use for whole-class instruction.
                                </p>
                            </div>
                            <div className='keyContainer digitalLib'>
                                <p className='keyHeader'>Key to Icons</p>
                                <div className='keyMain'>
                                    <span className='keyItem'>
                                        <img
                                            src={ebookIcon}
                                            alt='digital-novel-icon'
                                            className='keyIcon'
                                        />
                                        <p className='keyText'>Online Text</p>
                                    </span>
                                    <span className='keyItem'>
                                        <img
                                            src={printIcon}
                                            alt='teacher-guide-icon'
                                            className='keyIcon'
                                        />
                                        <p className='keyText'>
                                            Printable Study Guide
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <header className='headerBar'>
                        <div className='headerBarTextContainer'>
                            <h3 className='typeHeader'>{sectionName}</h3>
                        </div>
                    </header>
                    <div className='columnsContainer'>
                        {sectionName === 'Digital Library' ? (
                            <>
                                <div className='splitColumn leftSide'>
                                    <header className='columnHeader'>
                                        <h4 className='columnHeaderText'>
                                            Texts
                                        </h4>
                                    </header>
                                    <div className='args'>
                                        <div className='textsColumns'>
                                            <SectionColumn
                                                section={allOfSection}
                                                allTitles={allTitles}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='splitColumn rightSide'>
                                    <header className='columnHeader'>
                                        <h4 className='columnHeaderText'>
                                            Connections to{' '}
                                            <i>Into Literature</i>
                                        </h4>
                                    </header>
                                    <div className='connectionsContainer'>
                                        <div className='connectionsList'>
                                            <ConnectionsColumn
                                                section={allOfSection}
                                                allTitles={allTitles}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='mainColumn leftColumn'>
                                    <header className='columnHeader'>
                                        <h4 className='columnHeaderText'>
                                            Texts
                                        </h4>
                                        {sectionName !== 'Poetry' ? (
                                            <h4 className='columnHeaderText'>
                                                Lexile
                                            </h4>
                                        ) : null}
                                    </header>
                                    <div className='argsAndLex'>
                                        <div className='textsColumns'>
                                            <SectionColumn
                                                section={allOfSection}
                                                allTitles={allTitles}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mainColumn centerColumn'>
                                    <header className='columnHeaderMiddle'>
                                        <h4 className='columnHeaderText'>
                                            Key Skills
                                        </h4>
                                    </header>
                                    <div className='skillsContainer'>
                                        <div className='skillsList'>
                                            <SkillsColumn
                                                section={allOfSection}
                                                chunkType={chunkType}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mainColumn rightColumn'>
                                    <header className='columnHeaderRight'>
                                        <h4 className='columnHeaderTextRight'>
                                            Connections to{' '}
                                            <i>Into Literature</i>
                                        </h4>
                                    </header>
                                    <div className='connectionsContainer'>
                                        <div className='connectionsList'>
                                            <ConnectionsColumn
                                                section={allOfSection}
                                                allTitles={allTitles}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            );
        } else return null;
    };

    return (
        <div className='main'>
            <div className='searches'>
                <SectionBar
                    className='sectionBar'
                    data={visibleItems}
                    setVisibleItems={setVisibleItems}
                />
            </div>
            <div className='titleSection'>
                <h1 className='mainTitle'>Text Library Contents</h1>
                <p className='main-blurb'>
                    Find a wide variety of texts in our online library to meet
                    the reading needs and interests of every student. Click the
                    links at the top of the screen to jump to a different genre
                    or to explore complete book-length works in the Digital
                    Library.
                </p>
            </div>
            <div className='intro-and-title'>
                <h3 className='fresh-section'>
                    <img
                        className='fresh-large'
                        alt='Fresh Lit Logo'
                        src={FreshLitGreen}
                    />
                    <p className='preview'>Preview</p>
                </h3>
                <div className='Container'>
                    <p className='keyHeader'>Key to Icons</p>
                    <div className='keyMain'>
                        <span className='keyItem'>
                            <img
                                src={ebookIcon}
                                alt='ebook-icon'
                                className='keyIcon'
                            />
                            <p className='keyText'>Online</p>
                        </span>
                        <span className='keyItem'>
                            <img
                                src={printIcon}
                                alt='pdf-icon'
                                className='keyIcon'
                            />
                            <p className='keyText'>Printable</p>
                        </span>
                        <span className='keyItem slides-fresh'>
                            <img
                                src={pptIcon}
                                alt='PPT Icon'
                                className='keyIcon'
                            />
                            <p className='keyText'>Lesson Slides</p>
                        </span>
                    </div>
                </div>
            </div>
            <section id='HMH Fresh Lit Preview'>
                {tableSection(
                    'HMH Fresh Lit Preview',
                    freshLits,
                    skillChunksFreshLits,
                    freshLitTitles
                )}
            </section>
            <section id='Arguments'>
                <div className='padding'></div>
                {tableSection('Argument', args, skillChunksArgs, titles)}
            </section>
            <section id='Informational Texts'>
                <div className='padding'></div>

                {tableSection(
                    'Informational Text',
                    infoTexts,
                    skillChunksInfo,
                    infoTitles
                )}
            </section>
            <section id='Narrative Nonfiction'>
                <div className='padding'></div>
                {tableSection(
                    'Narrative Nonfiction',
                    narNons,
                    skillChunksNarNons,
                    narNonTitles
                )}
            </section>
            <section id='Fiction'>
                <div className='padding'></div>
                {tableSection(
                    'Fiction',
                    fictions,
                    skillChunksFictions,
                    fictionTitles
                )}
            </section>
            <section id='Poetry'>
                <div className='padding'></div>
                {tableSection('Poetry', poems, skillChunksPoems, poemTitles)}
            </section>
            <section id='Digital Library'>
                {tableSection(
                    'Digital Library',
                    digLibs,
                    skillChunksDigLibs,
                    digLibTitles
                )}
            </section>
        </div>
    );
};

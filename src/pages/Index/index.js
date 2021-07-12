import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import Posts from '../../assets/posts/posts.json';
import { BiMoon, BiSun, BiFontFamily, BiX, BiSearchAlt2 } from 'react-icons/bi'

export default function Index(){

    const [Theme, setTheme] = useState(window.localStorage.getItem('theme'));
    const [Font, setFont] = useState(window.localStorage.getItem('font'));
    const [Search, setSearch] = useState(false);
    const [Query, setQuery] = useState('');
    const styleHandler = { display: Search ? 'none' : 'block' }

    function toggleTheme(){

        Theme === 'light' || Theme === null ? setTheme('dark') : setTheme('light')
    }

    function toggleFont(){

        Font === 'sans' || Font === null ? setFont('serif') : setFont('sans')
    }

    useEffect(() => {

        window.localStorage.setItem('theme', Theme);

    }, [Theme])

    useEffect(() => {

        window.localStorage.setItem('font', Font)
    }, [Font])

    const queryFilter = (Post) => {


        return Post.tags.includes(Query)
    }

    return(
        <main className={Theme === 'light' || Theme === null ? "main-light" : "main-dark"}>
            <header>
                <div className="logo">
                    <label id="tacuquex">tacuquex</label>
                    <label id="est">est. 2021</label>
                </div>
                <div className="buttons" style={{ width: Search ? '320px' : '170px' }}>
                    <input id="query" onChange={(e) => { setQuery(e.target.value.toLowerCase()) }} style={{display: Search ? 'block' : 'none'}} placeholder="Search for genres, albums, etc..." type="text" />
                    {
                        Search ? <BiX onClick={() => {setSearch(false); setQuery('')}} size={24}/> :
                        <BiSearchAlt2 onClick={() => {setSearch(true)}} size={24}/>
                    }
                    <BiFontFamily style={ styleHandler } onClick={() => { toggleFont() }} size={24}/>
                    {
                        Theme === "light" ? 
                        <BiMoon style={ styleHandler } onClick={() => { toggleTheme() }} size={24}/> :
                        <BiSun style={ styleHandler } onClick={() => { toggleTheme() }} size={24}/>
                    }
                </div>
            </header>
            {
                Query === '' ?
                    Posts.posts.map((e) => (<Post font={ Font } coverUrl={ e.cover_url } rating={ e.rating } date={ e.date } artist={ e.artist } albumTitle={ e.albumTitle } review={ e.review_paragraphs } year={ e.year } quote={ e.quote }/>)) : 
                    Posts.posts.filter(queryFilter).length > 0 ?
                        Posts.posts.filter(queryFilter).map((e) => (<Post font={ Font } coverUrl={ e.cover_url } rating={ e.rating } date={ e.date } artist={ e.artist } albumTitle={ e.albumTitle } review={ e.review_paragraphs } year={ e.year } quote={ e.quote }/>)) :
                        <div className={ Theme === 'light' || Theme === null ? "page404" : "page404-dark" }>
                            <h1>404</h1>
                            <h2>Nada encontrado</h2>
                        </div>
                // Posts.posts.map((e) => (<Post font={ Font } coverUrl={ e.cover_url } rating={ e.rating } date={ e.date } artist={ e.artist } albumTitle={ e.albumTitle } review={ e.review_paragraphs } year={ e.year } quote={ e.quote }/>))
            }
        </main>
    );
}
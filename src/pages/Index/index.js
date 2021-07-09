import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import Posts from '../../assets/posts/posts.json';
import { BiMoon, BiSun, BiFontFamily, BiFilterAlt, BiSearchAlt2 } from 'react-icons/bi'

export default function Index(){

    const [Theme, setTheme] = useState(window.localStorage.getItem('theme'));
    const [Font, setFont] = useState(window.localStorage.getItem('font'));

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

    return(
        <main className={Theme === 'light' || Theme === null ? "main-light" : "main-dark"}>
            <header>
                <div className="logo">
                    <label id="tacuquex">tacuquex</label>
                    <label id="est">est. 2021</label>
                </div>
                <div className="buttons">
                    <BiSearchAlt2 size={24}/>
                    <BiFilterAlt size={24}/>
                    <BiFontFamily onClick={() => { toggleFont() }} size={24}/>
                    {
                        Theme === "light" ? 
                        <BiMoon onClick={() => { toggleTheme() }} size={24}/> :
                        <BiSun onClick={() => { toggleTheme() }} size={24}/>
                    }
                </div>
            </header>
            {
                Posts.posts.map((e) => (<Post font={ Font } coverUrl={e.cover_url} rating={e.rating} date={e.date} artist={e.artist} albumTitle={e.albumTitle} review={e.review_paragraphs} year={e.year} quote={e.quote}/>))
            }
        </main>
    );
}
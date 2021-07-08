import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';

import Posts from '../../assets/posts/posts.json';

export default function Index(){

    return(
        <main>
            <Header/>
            {
                Posts.posts.map((e) => (<Post coverUrl={e.cover_url} rating={e.rating} date={e.date} artist={e.artist} albumTitle={e.albumTitle} review={e.review_paragraphs} year={e.year} quote={e.quote}/>))
            }
        </main>
    );
}
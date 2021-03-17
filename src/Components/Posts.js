import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Post from './Post';
import ListaPosts from './ListaPosts'
function Posts() {
    const [listaposts, setListaPosts] = useState([]);
    const agregarPosts = (post) => {
        setListaPosts(listaposts.concat(post));
    }

    const cargandoPostsWeb = async () => {
        let datos = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json());
        setListaPosts(datos);
    }

    useEffect(() => {
        cargandoPostsWeb();
    }, []);
    return <div>
        <Menu />
        <div className="row">
            <div className="col-lg-4">
                <Post agregarPosts={agregarPosts} />
            </div>
            <div className="col-lg-8">
                <ListaPosts listaposts={listaposts} />
            </div>
        </div>
    </div>
}
export default Posts;
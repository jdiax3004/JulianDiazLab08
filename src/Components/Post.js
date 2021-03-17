import React, { useState } from 'react';
function Post(props) {
    const [post, setUser] = useState({
        postId: 0,
        id: 0,
        name: "",
        email: "",
        body: ""
    })

    const cambiarValor = (e) => {
        const { name, value, type } = e.target;
        setUser({ ...post, [name]: (type === 'number') ? parseInt(value) : value });
        //limpiar();
    }

    const limpiar = () => {
        setUser({
            postId: 0,
            id: 0,
            name: "",
            email: "",
            body: ""
        })
    }
    return <div>
        <div className="card">
            <div className="card-header">Datos del Post</div>
            <div className="card-body">
                <div class="form-group">
                    <label for="exampleInputEmail1">Post</label>

                    <input class="form-control" type="number"
                        name="postId"
                        id="postId"
                        placeholder="Digite el Post Id"
                        onChange={cambiarValor}
                        value={post.postId} /></div>
                <div class="form-group">     <label for="exampleInputEmail1">ID </label>
                    <input class="form-control"
                        type="number"
                        name="id"
                        id="id"
                        placeholder="Digite el Id"
                        onChange={cambiarValor}
                        value={post.id} /></div>
                <div class="form-group">     <label for="exampleInputEmail1">Nombre</label>
                    <input
                       class="form-control" type="text"
                        name="name"
                        id="name"
                        placeholder="Digite el nombre"
                        onChange={cambiarValor}
                        value={post.name} /></div>
                <div class="form-group">    <label for="exampleInputEmail1">Correo Electrónico</label>
                    <input
                       class="form-control" type="text"
                        name="email"
                        id="email"
                        placeholder="Digite el email"
                        onChange={cambiarValor}
                        value={post.email} /></div>
                <div class="form-group">     <label for="exampleInputEmail1">Texto</label>
                    <input type="text"
                       class="form-control" name="body"
                        id="body"
                        placeholder="Digite el body"
                        onChange={cambiarValor}
                        value={post.body} /></div>
            </div>
            <div className="card-footer">
                <button
                    className="btn btn-primary"
                    onClick={() => { props.agregarPosts(post) }}
                >Guardar</button>
                <button
                    className="btn btn-danger"
                    onClick={limpiar}
                >Cancelar</button>
            </div>
        </div>
    </div>
}
export default Post;
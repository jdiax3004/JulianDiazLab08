function ListaPosts(props){
const mostrarFilas=()=>{
    return props.listaposts.map((post,index)=>{
        return <tr key={index}>
            <td>{post.postId}</td>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.body}</td>
        </tr>
    })
}
return <div>
    <table className="table table-bordered">
        <thead class="thead-light">
            <tr>
                <th>Post</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Texto</th>
            </tr>
        </thead>
        <tbody>
            {props.listaposts.length===0?<tr><td colSpan={4}>Cargando...</td></tr>:
            mostrarFilas()}
        </tbody>
    </table>
</div>
}
export default ListaPosts;
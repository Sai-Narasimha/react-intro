export const Links = ()=>{
    const links = ['Services', 'Projects',"About"]
    return (
        <div style = {{ width : "20%", display: 'flex', justifyContent:"space-around",fontWeight:'500'}}>
            {links.map((ele)=>(
                <p>{ele}</p>
            ))}
        </div>
    )
}
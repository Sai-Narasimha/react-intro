import './MobInfo.css';
export const MobInfo = ()=>{
    const info = [
        {
            headLine : "Mobile Operating System",
            data : [
                'Anroid', 'Blackberry','Iphone','Windows Phone'
            ]
        },
        {
            headLine : "Mobile Manufacturer",
            data : [
                'Samsung', 'HTC','Micromax','Apple'
            ]
        }
    ]
    
    return (
        info.map((ele)=>(
            <div>
                <h1 >{ele.headLine}</h1>
                <ul>
                    
                    {ele.data.map((item,i)=>(
                        <li className = {i%2 === 0 ? "round" : "box"}>{item}</li>
                    ))}
                </ul>
            </div>
        ))
    )
}
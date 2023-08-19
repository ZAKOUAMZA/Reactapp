export default function Cweet({id,name,content,like,ondelete}){
    const onlike=()=>{
        console.log("Like",name);
    };
    
    return(
        <div className="cweet">
        <button onClick={()=> ondelete(id)} className="delete">❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={()=>onlike()} className="button">{like} ❤️</button>
        </div>
    )
}
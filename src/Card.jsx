import "./index.css"

export function Card({ countrie, onClick }){
    return(
        <div className="card" onClick={() => onClick(countrie)}>
            <h1>{countrie.name}</h1>
            <img src={countrie.image} alt="" />
        </div>
    )
}
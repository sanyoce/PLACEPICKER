import { Card } from "./Card"
import "./index.css"

export function CardBlock({ imagesBase, blockName, blockNameClass, onClick }){
    return(
        <div className="cardBlock">
            <div className="cardBlockHeader">
                <h2>{blockName}</h2>
            </div>
            <div className={blockNameClass}>
                {imagesBase.map((countries) =>(
                    <Card 
                        key={countries.id} 
                        countrie={countries}
                        onClick={onClick}
                    />
                ))}
            </div>
        </div>
    )
}
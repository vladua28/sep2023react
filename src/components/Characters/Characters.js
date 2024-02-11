import {characters} from "../../data/data";
import {Character} from "../Character/Character";

const Characters = () => {
    return (
        <div>
            {characters.map((character, index) => (<Character key={index} character={character}/>))}
        </div>
    );
};

export {Characters};
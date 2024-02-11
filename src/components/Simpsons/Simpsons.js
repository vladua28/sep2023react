import {simpsons} from "../../data/data";
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    return (
        <div>
            {simpsons.map(simpson => (<Simpson simpson={simpson}/>))}
        </div>
    );
};

export {Simpsons};
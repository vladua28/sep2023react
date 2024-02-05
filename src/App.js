import {Simpson} from "./components/Simpson";

const App = () => {
    return (
        <div>
            <Simpson
                name={'Homer'}
                sex={'Male'}
                age={37}
                src={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            />
            <Simpson
                name={'Marge'}
                sex={'Female'}
                age={37}
                src={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}
            />
            <Simpson
                name={'Bart'}
                sex={'Male'}
                age={10}
                src={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <Simpson
                name={'Lisa'}
                sex={'Male'}
                age={8}
                src={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
            <Simpson
                name={'Maggie'}
                sex={'Female'}
                age={1}
                src={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
            />
        </div>
    );
};

export {App};
const Simpson = ({name, sex, age, src}) => {
    return (
        <>
            <h2>{name} Simpson</h2>
            <p>Sex: {sex}</p>
            <p>Age: {age}</p>
            <img src={src} alt={name}/>
        </>
    );
};

export {Simpson};
const Simpson = ({simpson}) => {

    let {name, surname, age, info, photo} = simpson;
    return (
        <>
            <h2>{name} {surname}</h2>
            <p>Age: {age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </>
    );
};

export {Simpson};
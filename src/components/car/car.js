const Car = (props) => {
    // console.log(props.car.name);
    return (
        <div>
            <span>Car Name: {props.car.name}</span>&nbsp;
            <span>Car Color: {props.car.color}</span>&nbsp;
            <span>Car Price: {props.car.price}</span>&nbsp;
        </div>
    );
}

export default Car;
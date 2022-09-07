import React from 'react';
import Car from '../car/car';
import CarListService from '../../services/carlistservice';

class CarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cars: [] };
    }

    componentDidMount() {
        this.retrieveCars();
    }

    retrieveCars = () => {
        CarListService.getAll()
            .then(response => {
                this.setState({cars: response.data});
                console.log(this.state.cars);
            })
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        return (
            <div className='container-md'>
                <h2>Car List</h2>
                {this.state.cars.map((car) => <Car car={car} />)}
            </div>
        );
    }
}

export default CarList;
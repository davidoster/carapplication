import React from 'react';
import CarListService from '../../services/carlistservice';

class CarForm extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.saveCar = this.saveCar.bind(this);
        this.newCar = this.newCar.bind(this);

        this.state = {
            id: null,
            name: "",
            color: "",
            description: 0,
            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    newCar() {
        this.setState({
            id: null,
            name: "",
            color: "",
            price: 0,
            submitted: false
        });
    }

    saveCar() {
        var data = {
            name: this.state.name,
            color: this.state.color,
            price: this.state.price,
        };
        CarListService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    color: response.data.color,
                    price: response.data.price,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newCar}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Color</label>
                            <input
                                type="text"
                                className="form-control"
                                id="color"
                                required
                                value={this.state.color}
                                onChange={this.onChangeColor}
                                name="color"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                name="price"
                            />
                        </div>
                        <button onClick={this.saveCar} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default CarForm;
import http from "../http-common";

const getAll = () => {
  return http.get("/cars");
};

const CarListService = {
    getAll
};

export default CarListService;
/*
export default function getCars() {
    let cars;
    axios.get('http://localhost:8085/api/cars')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            cars = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return (error);
        })
        .then(function () {
            // always executed
        });
    return(cars);
}*/
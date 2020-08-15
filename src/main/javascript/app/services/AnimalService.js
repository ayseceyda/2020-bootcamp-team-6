import axios from 'axios';

const ANIMAL_API_BASE_URL =  "http://localhost:8086/api/v1/animals";

class AnimalService{

    getAnimals(){
        return axios.get(ANIMAL_API_BASE_URL);
    }
}

export default new AnimalService()
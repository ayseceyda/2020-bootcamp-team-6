import axios from 'axios';

const APPOINTMENTS_API_BASE_URL = "http://localhost:8086/appointments"

class AppointmentService{

    createAppointment(appointment){
        return axios.post(APPOINTMENTS_API_BASE_URL, appointment);
    }

}


export default new AppointmentService()
import axios from 'axios';

const COMMENTS_API_BASE_URL = "http://localhost:8086/commentses"

class CommentService{

    createComments(comment){
        return axios.post(COMMENTS_API_BASE_URL, comment);
    }

}


export default new CommentService()
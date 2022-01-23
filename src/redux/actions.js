
import axios from 'axios';

// Get posts
export const getPosts = () => async (dispatch) => {
  console.log("in action")
    const res =await axios.get('http://schoolerp.schoolsupdate.co.in/api/StuRegistration/Getallregi');
       dispatch({
      type: "GET_POSTS",
      payload: res.data.allstureg,
    });
  
};
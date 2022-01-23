const initialState = {
    posts: [],
       
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log(type)

    switch (type) {
      case "GET_POSTS":
        return {
          ...state,
          posts: payload,
          
        };
       
      default:
        return state;
    }
  }
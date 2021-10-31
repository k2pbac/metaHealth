//REDUCER -  how our actions transform state from one state to next state - based on action modify store

const saveApplicationData = (state = null, action) => {
  switch (action.type) {
    case "DATA":
      return action.payload;
    default:
      return null;
  }
};

export default saveApplicationData;

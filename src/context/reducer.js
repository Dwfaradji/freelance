export const initialState = {
  template: "Standard",
  colors: {},
  fonts: {},
  checkbox: {},
  form: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
  case "ADD_TEMPLATE":
    return {
      ...state,
      template: action.payload,
    };
  case "ADD_COLORS":
    return {
      ...state,
      colors: action.payload,
    };
  case "ADD_FONTS":
    return {
      ...state,
      fonts: action.payload,
    };
  case "ADD_CHECKBOX":
    return {
      ...state,
      checkbox: action.payload,
    };
  case "ADD_FORM":
    return {
      ...state,
      form: action.payload,
    };
    // autres actions
  default:
    return state;
  }
};

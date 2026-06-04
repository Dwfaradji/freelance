interface State {
  template: string;
  colors: Record<string, any>;
  fonts: Record<string, any>;
  checkbox: Record<string, boolean>;
  form: string;
  status: boolean;
}

interface Action {
  type: string;
  payload: any;
}

export const initialState: State = {
  template: 'Standard',
  colors: {},
  fonts: {},
  checkbox: {},
  form: '',
  status: false,
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TEMPLATE':
      return {
        ...state,
        template: action.payload,
      };
    case 'ADD_COLORS':
      return {
        ...state,
        colors: action.payload,
      };
    case 'ADD_FONTS':
      return {
        ...state,
        fonts: action.payload,
      };
    case 'ADD_CHECKBOX':
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          [action.payload.page]: action.payload.value, // Mettre à jour uniquement la sélection de la page actuelle
        },
      };
    case 'ADD_FORM':
      return {
        ...state,
        form: action.payload,
      };
    case 'ADD_STATUS':
      return {
        ...state,
        status: action.payload,
      };
    //
    // autres actions
    default:
      return state;
  }
};

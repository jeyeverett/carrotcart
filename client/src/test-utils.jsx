import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { rootReducer } from './redux/root-reducer';

// export const renderWithState = (
//   ui,
//   { initialState, ...renderOptions } = {}
// ) => {
//   const store = createStore(rootReducer, initialState);
//   const Wrapper = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
//   );

//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// };

// // re-export everything
// export * from '@testing-library/react';

// // override render method
// export { renderWithState as render };

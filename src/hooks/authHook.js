import { useDispatch } from 'react-redux';

import { reloadAuth } from 'redux/auth';

export const useReloadAuth = () => {
  const dispatch = useDispatch();

  const reloadAuthFromLocalStorage = () => {
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');
    dispatch(reloadAuth({ token, user: user && JSON.parse(user) }));
  };

  return reloadAuthFromLocalStorage;
};

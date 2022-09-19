import { apiBase } from "./instance";
import { BehaviorSubject } from 'rxjs';
import { USER_LOCAL_STORE } from '../constants';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(USER_LOCAL_STORE)));

const login = (data) => apiBase({
    url: '/signin',
    method: 'POST',
    data
});

const register = (data) => apiBase({
    url: '/signup',
    method: 'POST',
    data
});

const updateUser = (data) => {
    localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(data));
    currentUserSubject.next(data);
};

const logout = () => {
    localStorage.removeItem(USER_LOCAL_STORE);
    currentUserSubject.next(null);
};

const authService = {
    login,
    updateUser,
    logout,
    register,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value; },
}

export default authService;
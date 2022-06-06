import { fetchEmployeesService } from '../services/employee-service.js';

export const fetchEmployees = async ()=> {
    try {
        const res = await fetchEmployeesService();
        return Promise.resolve (res);
    } catch(err) {
        return Promise.reject (err);
    }
}
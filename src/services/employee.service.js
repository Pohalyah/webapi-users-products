import { selectAll } from "../models/employee.model.js";

/**
 * Service de gestion des employés.
 * Va appeler le modèle "employee" pour requêtage de la base de donées.
 */
class EmployeeService {

    /**
     * Récupération de tous les employés
     */
    async findAll(page = 1, limit = 10) {

        let employees = await selectAll();
        return employees;
    }

}

export default new EmployeeService();
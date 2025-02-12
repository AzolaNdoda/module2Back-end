import { getEmployees, getSingleEmployee, insertEmployee, updateEmployee, removeEmployee } from "../model/employeesDb.js";

const getEmployeesCon = async (req, res) => {
    try {
        const employees = await getEmployees();
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve employees' });
    }
};

const getSingleEmployeeCon = async (req, res) => {
    try {
        const { employee_id } = req.params;
        const employee = await getSingleEmployee(employee_id);
        res.json({ employee });
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve employee' });
    }
};

const insertEmployeeCon = async (req, res) => {
    let {employee_id, name, position, salary, email, department_id} = req.body
    res.json({employees: await insertEmployee(employee_id, name, position, salary, email, department_id)})
}

const updateEmployeeCon = async (req, res) => {
    try {
        const { employee_id } = req.params;
        const { position, salary, department_id } = req.body;
        const updatedEmployee = await updateEmployee(position, salary, department_id, employee_id);
        res.json({ employee: updatedEmployee });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update employee' });
    }
};

const removeEmployeeCon = async (req, res) => {
    // try {
        const { employee_id } = req.params;
        const removedEmployee = await removeEmployee(employee_id);
        res.json({ employee: removedEmployee }); 
    // } catch (error) {
        // res.status(500).json({ error: 'Failed to remove employee' });
    }
// };

export { getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, updateEmployeeCon, removeEmployeeCon };

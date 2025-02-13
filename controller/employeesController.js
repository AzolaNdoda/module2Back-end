const { getSingleEmployee, insertEmployee, updateEmployee, removeEmployee } = require('../services/employeeService'); 

const getSingleEmployeeCon = async (req, res) => {
    const { employee_id } = req.params;
    try {
        const employee = await getSingleEmployee(employee_id);
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching employee details" });
    }
};

const insertEmployeeCon = async (req, res) => {
    const { name, gender, position, salary, employmentHistory, email, department_id } = req.body;
    try {
        await insertEmployee(name, gender, position, salary, employmentHistory, email, department_id);
        res.status(201).json({ message: "Employee added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding employee" });
    }
};

const updateEmployeeCon = async (req, res) => {
    const { employee_id } = req.params;
    const { position, salary, department_id } = req.body;
    try {
        await updateEmployee(employee_id, position, salary, department_id);
        res.status(200).json({ message: "Employee updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" });
    }
};

const removeEmployeeCon = async (req, res) => {
    const { employee_id } = req.params;
    try {
        await removeEmployee(employee_id);
        res.status(200).json({ message: "Employee removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error removing employee" });
    }
};

// ✅ Export using CommonJS syntax
module.exports = { 
    getSingleEmployeeCon, 
    insertEmployeeCon, 
    updateEmployeeCon, 
    removeEmployeeCon 
};

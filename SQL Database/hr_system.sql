CREATE DATABASE hr_system;
USE hr_system;
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    position VARCHAR(100)NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    employmentHistory VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    department_id INT NOT NULL
);
DROP TABLE employees;
INSERT INTO employees (employee_id, name, gender, position, salary, employmentHistory, email, department_id)
VALUES (1, "Sibongile Nkosi", "Female", "Software Engineer", 70000.00, "Joined in 2015, promoted to Senior in 2018", "sibongile.nkosi@moderntech.com", 1),
	   (2, "Lungile Moyo", "Male", "HR Manager", 80000.00, "Joined in 2013, promoted to Manager in 2017", "lungile.moyo@moderntech.com", 2),
	   (3, "Thabo Molefe", "Male", "Quality Analyst", 55000.00, "Joined in 2018", "thabo.molefe@moderntech.com", 3),
	   (4, "Keshav Naidoo", "Male", "Sales Representative", 60000.00, "Joined in 2020", "keshav.naidoo@moderntech.com", 4),
	   (5, "Zanele Khumalo", "Female", "Marketing Specialist", 58000.00, "Joined in 2019", "zanele.khumalo@moderntech.com", 5),
	   (6, "Sipho Zulu", "Male", "UI/UX Designer", 65000.00, "Joined in 2016", "sipho.zulu@moderntech.com", 6),
	   (7, "Naledi Moeketsi", "Female", "DevOps Engineer", 72000.00, "Joined in 2017", "naledi.moeketsi@moderntech.com", 7),
	   (8, "Farai Gumbo", "Male", "Content Strategist", 56000.00, "Joined in 2021", "farai.gumbo@moderntech.com", 8),
	   (9, "Karabo Dlamini", "Female", "Accountant", 62000.00, "Joined in 2018", "karabo.dlamini@moderntech.com", 9),
	   (10, "Fatima Patel", "Female", "Customer Support Lead", 58000.00, "Joined in 2016", "fatima.patel@moderntech.com", 10);
CREATE TABLE department (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100)
);
INSERT INTO department (department_id, department_name)
VALUES (1, "Development"),
	   (2, "HR"),
	   (3, "QA"),
	   (4, "Sales"),
	   (5, "Marketing"),
	   (6, "Designing"),
	   (7, "DevOps"),
	   (8, "Content creation"),
	   (9, "Accounting"),
	   (10, "Support");
CREATE TABLE `hr_system`.`employmenthistory` (
  `employment_id` INT NOT NULL AUTO_INCREMENT,
  `employee_id` INT NOT NULL,
  `employment_year` INT NOT NULL,
  `event` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`employment_id`),
  INDEX `employee_id_idx` (`employee_id` ASC) VISIBLE,
  CONSTRAINT `employee_id`
    FOREIGN KEY (`employee_id`)
    REFERENCES `hr_system`.`employees` (`employee_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
INSERT INTO employmentHistory (employment_id, employee_id, employment_year, event)
VALUES (101, 1, 2015, "Joined and promoted to senior in 2018"),
	   (102, 2, 2013, "Join and promoted to manager in 2017"),
	   (103, 3, 2018, "Joined"),
	   (104, 4, 2020, "Joined"),
       (105, 5, 2019, "Joined"),
       (106, 6, 2016, "Joined"),
       (107, 7, 2017, "Joined"),
       (108, 8, 2021, "Joined"),
       (109, 9, 2018, "Joined"),
       (110, 10, 2016, "Joined");
CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    employee_id INT NOT NULL,
    date DATE NOT NULL,
    attendance_status VARCHAR(100) NOT NULL
  );
INSERT INTO attendance (attendance_id, employee_id, date, attendance_status)
VALUES (1, 1, "2024-11-25", "Present"),
       (2, 1, "2024-11-26", "Absent"),
       (3, 1, "2024-11-27", "Present"),
       (4, 1, "2024-11-28", "Present"),
       (5, 1, "2024-11-29", "Present"),
       (6, 2, "2024-11-25", "Present"),
       (7, 2, "2024-11-26", "Present"),
       (8, 2, "2024-11-27", "Absent"),
       (9, 2, "2024-11-28", "Present"),
       (10, 2, "2024-11-29", "Present"),
       (11, 3, "2024-11-25", "Present"),
       (12, 3, "2024-11-26", "Present"),
       (13, 3, "2024-11-27", "Present"),
       (14, 3, "2024-11-28", "Absent"),
       (15, 3, "2024-11-29", "Present"),
       (16, 4, "2024-11-25", "Absent"),
       (17, 4, "2024-11-26", "Present"),
       (18, 4, "2024-11-27", "Present"),
       (19, 4, "2024-11-28", "Present"),
       (20, 4, "2024-11-29", "Present"),
       (21, 5, "2024-11-25", "Present"),
       (22, 5, "2024-11-26", "Present"),
       (23, 5, "2024-11-27", "Absent"),
       (24, 5, "2024-11-28", "Present"),
       (25, 5, "2024-11-29", "Present"),
       (26, 6, "2024-11-25", "Present"),
       (27, 6, "2024-11-26", "Present"),
       (28, 6, "2024-11-27", "Absent"),
       (29, 6, "2024-11-28", "Present"),
       (30, 6, "2024-11-29", "Present"),
       (31, 7, "2024-11-25", "Present"),
       (32, 7, "2024-11-26", "Present"),
       (33, 7, "2024-11-27", "Present"),
       (34, 7, "2024-11-28", "Absent"),
       (35, 7, "2024-11-29", "Present"),
       (36, 8, "2024-11-25", "Present"),
       (37, 8, "2024-11-26", "Absent"),
       (38, 8, "2024-11-27", "Present"),
       (39, 8, "2024-11-28", "Present"),
       (40, 8, "2024-11-29", "Present"),
       (41, 9, "2024-11-25", "Present"),
       (42, 9, "2024-11-26", "Present"),
       (43, 9, "2024-11-27", "Present"),
       (44, 9, "2024-11-28", "Absent"),
       (45, 9, "2024-11-29", "Present"),
       (46, 10, "2024-11-25", "Present"),
       (47, 10, "2024-11-26", "Present"),
       (48, 10, "2024-11-27", "Absent"),
       (49, 10, "2024-11-28", "Present"),
       (50, 10, "2024-11-29", "Present");
CREATE TABLE leaveRequest (
    leaveRequest_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    employee_id INT NOT NULL,
    leave_date DATE NOT NULL,
    leave_status VARCHAR(100) NOT NULL
);
INSERT INTO leaveRequest (leaveRequest_id, employee_id, leave_date, leave_status)
VALUES (1, 1, "2024-11-22", "Approved"),
       (2, 1, "2024-12-01", "Pending"),
	   (3, 2, "2024-11-15", "Denied"),
	   (4, 2, "2024-12-02", "Approved"),
	   (5, 3, "2024-11-10", "Approved"),
	   (6, 3, "2024-12-05", "Pending"),
	   (7, 4, "2024-11-20", "Approved"),
	   (8, 5, "2024-12-01", "Pending"),
	   (9, 6, "2024-11-18", "Approved"),
       (10, 7, "2024-11-22", "Pending"),
       (11, 8, "2024-12-02", "Approved"),
       (12, 9, "2024-11-19", "Denied"),
	   (13, 10, "2024-12-03", "Pending");
CREATE TABLE leave_reason_lookup (
    leaveReason_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    leaveReason VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL
);
INSERT INTO leave_reason_lookup  (leaveReason_id, name, leaveReason, description)
VALUES (1, "Sibongile Nkosi", "Sick Leave", "Leave for illness"),
       (2, "Lungile Moyo", "Vacation", "Time off for vacation"),
       (3, "Thabo Molefe", "Medical Appointment", "Leave for medical appointments"),
       (4, "Keshav Naidoo", "Bereavement", "Leave due to the death of a loved one"),
       (5, "Zanele Khumalo", "Childcare", "Leave to care for children"),
       (6, "Sipho Zulu", "Sick Leave", "Leave for illness"),
       (7, "Naledi Moeketsi", "Vacation", "Time off for vacation"),
	   (8, "Farai Gumbo", "Medical Appointment", "Leave for medical appointments"),
	   (9, "Karabo Dlamini", "Childcare", "Leave to care for children"),
	   (10, "Fatima Patel", "Vacation", "Time off for vacation");
CREATE TABLE payroll (
    pay_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    hours_worked INT NOT NULL,
    leave_deductions INT NOT NULL,
    final_salary DECIMAL(10, 2) NOT NULL
);
INSERT INTO payroll (pay_id, name, hours_worked, leave_deductions, final_salary)
VALUES (1, "Sibongile Nkosi", 160, 8, 69500.00),
       (2, "Lungile Moyo", 150, 10, 79000.00),
	   (3, "Thabo Molefe", 170, 4, 54800.00),
	   (4, "Keshav Naidoo", 165, 6, 59700.00),
	   (5, "Zanele Khumalo", 158, 5, 57850.00),
	   (6, "Sipho Zulu", 168, 2, 64800.00),
       (7, "Naledi Moeketsi", 175, 3, 71800.00),
       (8, "Farai Gumbo", 160, 0, 56000.00),
       (9, "Karabo Dlamini", 155, 5, 61500.00),
	   (10, "Fatima Patel", 162, 4, 57750.00);
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);
INSERT INTO users (user_id, name, email, password)
VALUES
(1, "Lungile Moyo", "lungile.moyo@moderntech.com", "lungilemoyo@1"),
(2, "Amy Flamy", "amy.flamy@moderntech.com", "amyflamy@2"),
(3, "Maya Mchelm", "maya.mchelm@moderntech.com", "mayamchelm@3"),
(4, "Justina Roodts", "justina.Roodts@moderntech.com", "justinaroodts@4"),
(5, "Zayn Haman", "zayn.haman@moderntech.com", "zaynhaman@5"),
(6, "Themba Xaba", "themba.xaba@moderntech.com", "thembaxaba@6");
SET SQL_SAFE_UPDATES = 0;
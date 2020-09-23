import React from "react";

function EmployeeOrder(props) {
    let sortOrder = (props.order === "descending" ? 1 : -1)
    let employeeList = props.employeeList
    switch (props.sortBy) {
        case ("fName"):
            employeeList = employeeList.sort((a, b) => (a.name.first > b.name.first) ? sortOrder : -sortOrder);
            break;
        case ("lName"):
            employeeList = employeeList.sort((a, b) => (a.name.last > b.name.last) ? sortOrder : -sortOrder);
            break;
        case ("city"):
            employeeList = employeeList.sort((a, b) => (a.location.city > b.location.city) ? sortOrder : -sortOrder);
            break;
        case ("phoneNum"):
            employeeList = employeeList.sort((a, b) => (a.phone > b.phone) ? sortOrder : -sortOrder);
            break;
        case ("email"):
            employeeList = employeeList.sort((a, b) => (a.email > b.email) ? sortOrder : -sortOrder);
            break;
        default:
            break;
    }
    return (
        <div>
            {employeeList.map(employee => (
                <div className="row d-flex align-items-center" key={employee.email}>
                    <div className="col-md-1"><img src={employee.picture.medium} alt="Emp Img" /></div>
                    <div className="col-md-1">{employee.name.first}</div>
                    <div className="col-md-1">{employee.name.last}</div>
                    <div className="col-md-2">{employee.location.city}</div>
                    <div className="col-md-2">{employee.phone}</div>
                    <div className="col-md-3">{employee.email}</div>
                </div>
            ))}
        </div>
    )
}

export default EmployeeOrder;
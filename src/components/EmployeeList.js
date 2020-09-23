import React from "react";
import axios from "axios";
import TableHeaders from "./TableHeaders";
import EmployeeOrder from "./EmployeeOrder";

class EmployeeList extends React.Component {
  state = {
    sortBy: "lName",
    order: "descending",
    search: this.props.query,
    employees: []
  };

  async componentDidMount() {
    try {
      const employeeList = await axios.get("https://randomuser.me/api/?results=50");
      console.log(employeeList);
      this.setState({ employees: employeeList.data.results })
    } catch (err) {
      console.log(err)
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      search: props.query,
    };
  }

  handleBtnClick = event => {
    (this.state.sortBy !== event.target.name) || (this.state.order === "ascending") ? this.setState({ order: "descending" }) : this.setState({ order: "ascending" });

    this.setState({ sortBy: event.target.name })
  }

  searchList() {
    let employeeList = this.state.employees;
    if (employeeList.length === 0) {
      return employeeList;
    } else if (this.state.search !== "") {
      employeeList = employeeList.filter(employee => {
        return (
          employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.location.city.toLowerCase().includes(this.state.search.toLowerCase()) ||
          employee.phone.includes(this.state.search) ||
          employee.email.toLowerCase().includes(this.state.search.toLowerCase())
        );
      })
    }
    return employeeList;
  }

  render() {
    return (
      <div className="container" style={{maxWidth:"1280px"}}>
        <TableHeaders
          handleBtnClick={this.handleBtnClick}
          sortBy={this.state.sortBy}
          order={this.state.order} />
        <EmployeeOrder
          employeeList={this.searchList()}
          sortBy={this.state.sortBy}
          order={this.state.order} />
      </div>
    )
  }
}

export default EmployeeList;
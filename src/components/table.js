import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import Chart from "./Chart";
import { people } from "../peopleData";
import Pagination from './Pagignation'


class TableS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      searchTerm: "",
      loading: "",
      postPerPage: 5,
      currentPage: 1,
      export: "",
      people: people,
      editx: -1,
      data: "",
    };
    this.exportPDF = this.exportPDF.bind(this);
    this.ExportCSV = this.ExportCSV.bind(this);
    this.paginate = this.paginate.bind(this);

  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/commands/")
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((e) => console.log(e));
  }
  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleEdit = (i) => {
    console.log("editing");
    console.log(i);
  };

  handleDelete = (i) => {
    console.log("i " + i);
    // axios.delete(`http://localhost:5000/api/commands/${i}`)
    //     .then((response) => console.log(response))
    //     .catch((e) => console.log(e))
    this.setState({
      people: this.state.people.filter((data) => data.Material_Number !== i),
    });
  };

  startEditing = (i) => {
    this.setState({ editx: i });
  };

  stopEditing = (i, data) => {
    this.setState({ editx: -1 });
    console.log("i " + i);
    console.log("i data" + data);

    axios
      .put(`http://localhost:5000/api/commands/${i}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  handleChange = (e, Name, i) => {
    const { value } = e.target;
    console.log("i=>" + i);
    console.log("Name=>" + Name);

    this.setState((state) => ({
      data: state.people.map((row, j) => {
        // (row.Material_Number === i ? { ...row, [Name]: value } : row)
        if (row.Material_Number === i) {
          console.log("got it");
          console.log("row" + row[Name]);
          {
            row[Name] = value;
          }
        } else {
          console.log("not");
        }
      }),
    }));
  };
  onChange = (e) => {
    if (e.target.value === "PDF") {
      this.exportPDF();
    } else {
      this.ExportCSV();
    }
  };

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(15);
    const title = "My Awesome Report";
    const headers = [
      [
        "Material_Number",
        "col2018_Average_Price",
        "col2019_Average_Price",
        "col2020_Average_Price",
      ],
    ];
    const data = this.state.people.map((elt) => [
      elt.Material_Number,
      elt.col2018_Average_Price,
      elt.col2019_Average_Price,
      elt.col2020_Average_Price,
    ]);
    let content = {
      startY: 50,
      head: headers,
      body: data,
    };
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf");
  };
  ExportCSV = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(this.state.people);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "Excel" + fileExtension);
  };
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
   paginate(pageNumber) {
        this.setState({ currentPage: pageNumber })
   }
  
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postPerPages;
    const indexofFirstPost = indexOfLastPost - this.state.postPerPages;
    const currentPosts = this.state.data.slice(indexofFirstPost, indexOfLastPost)
    return (
      <section className="p-t-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title-5 m-b-35">data table</h3>
              <div className="table-data__tool">
                <div className="table-data__tool-left">
                  <div className="rs-select2--light rs-select2--md">
                    <div className="md-form mt-0">
                      <input
                        onChange={this.handleSearch}
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div className="dropDownSelect2"></div>
                  </div>
                  <div className="rs-select2--light rs-select2--sm"></div>
                </div>
                <div className="table-data__tool-right">
                  <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                    <select
                      className="custom-select"
                      onChange={this.onChange}
                      name=" type"
                    >
                      <option selected="selected">Export</option>
                      <option value="PDF">PDF</option>
                      <option value="Word">Word</option>
                    </select>
                    <div className="dropDownSelect2"></div>
                  </div>
                </div>
              </div>
              <div className="table-responsive table-responsive-data2">
                <table className="table table-data2">
                  <thead>
                    <tr>
                      <th>Material_Number</th>
                      <th>col2018_Average_Price</th>
                      <th>col2019_Average_Price</th>
                      <th>col2020_Average_Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.people
                      ? this.state.people
                          .filter(
                            (data) =>
                              `${data.Material_Description} ${data.Material_Number}`
                                .toUpperCase()
                                .indexOf(this.state.searchTerm.toUpperCase()) >=
                              0
                          )
                          .map((data, index) => {
                            const currentlyEdit =
                              this.state.editx === index ? true : false;
                            return (
                              <tr className="tr-shadow">
                                <td>
                                  {currentlyEdit ? (
                                    <TextField
                                      onChange={(e) =>
                                        this.handleChange(
                                          e,
                                          "Material_Number",
                                          data.Material_Number
                                        )
                                      }
                                      name="Material_Number"
                                      value={data.Material_Number}
                                    />
                                  ) : (
                                    data.Material_Number
                                  )}
                                </td>

                                <td className="desc">
                                  {currentlyEdit ? (
                                    <TextField
                                      onChange={(e) =>
                                        this.handleChange(
                                          e,
                                          "col2018_Average_Price",
                                          data.Material_Number
                                        )
                                      }
                                      name="col2018_Average_Price"
                                      value={data.col2018_Average_Price}
                                    />
                                  ) : (
                                    data.col2018_Average_Price
                                  )}
                                </td>
                                <td className="desc">
                                  <span class="status--process">
                                    {currentlyEdit ? (
                                      <TextField
                                        onChange={(e) =>
                                          this.handleChange(
                                            e,
                                            "col2019_Average_Price",
                                            data.Material_Number
                                          )
                                        }
                                        name="col2019_Average_Price"
                                        value={data.col2019_Average_Price}
                                      />
                                    ) : (
                                      data.col2019_Average_Price
                                    )}
                                  </span>
                                </td>
                                <td className="desc">
                                  {currentlyEdit ? (
                                    <TextField
                                      onChange={(e) =>
                                        this.handleChange(
                                          e,
                                          "col2020_Average_Price",
                                          data.Material_Number
                                        )
                                      }
                                      name="col2020_Average_Price"
                                      value={data.col2020_Average_Price}
                                    />
                                  ) : (
                                    data.col2020_Average_Price
                                  )}
                                </td>
                                <td>
                                  <div className="table-data-feature">
                                    {currentlyEdit ? (
                                      <button
                                        className="item"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Send"
                                      >
                                        <CheckIcon
                                          onClick={() =>
                                            this.stopEditing(
                                              data.Material_Number,
                                              data
                                            )
                                          }
                                        />
                                      </button>
                                    ) : (
                                      <button
                                        className="item"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Send"
                                      >
                                        <EditIcon
                                          onClick={() =>
                                            this.startEditing(index)
                                          }
                                        />
                                      </button>
                                    )}
                                  </div>
                                </td>
                                <td>
                                  <div className="table-data-feature">
                                    <button
                                      className="item"
                                      onClick={() =>
                                        this.handleDelete(data.Material_Number)
                                      }
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Send"
                                    >
                                      <DeleteIcon />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                      : ""}
                  </tbody>
                </table>
                
                                    <Pagination postPerPages={this.state.postPerPages}
                                            totalPosts={this.state.data.length}
                                            paginate={this.paginate} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(TableS);

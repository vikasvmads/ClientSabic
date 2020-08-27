import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';


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
            people: [
                { name: "Keanu Reeves", profession: "Actor", number: "123456" },
                { name: "Lionel Messi", profession: "Football Player", number: "123456" },
                { name: "Cristiano Ronaldo", profession: "Football Player", number: "123456" },
                { name: "Jack Nicklaus", profession: "Golf Player", number: "123456" },
            ],
            editx: -1
        }
        this.exportPDF = this.exportPDF.bind(this);
        this.ExportCSV = this.ExportCSV.bind(this);
    }
    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleEdit = (i) => {
        console.log("editing")
        console.log(i);
    }

    handleDelete = (i) => {
        this.setState({
            people: this.state.people.filter((x, j) =>
                j !== i
            )
        })
    }

    startEditing = (i) => {
        this.setState({ editx: i })
    }

    stopEditing = () => {
        this.setState({ editx: -1 })
    }
    handleChange = (e, Name, i) => {
        console.log(e);
        const { value } = e.target;
        this.setState(state => ({
            people: state.people.map((row, j) => (j === i ? { ...row, [Name]: value } : row))
        }))
    }
    onChange = (e) => {
        if (e.target.value === "PDF") {
            this.exportPDF();
        } else {
            this.ExportCSV();
        }
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);
        const title = "My Awesome Report";
        const headers = [["NAME", "email", "description"]];
        const data = this.state.people.map(elt => [elt.name, elt.profession, elt.profession]);
        let content = {
            startY: 50,
            head: headers,
            body: data
        };
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
    ExportCSV = () => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(this.state.people);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "Excel" + fileExtension);
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
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
                                            <input onChange={this.handleSearch} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                        </div>
                                        <div className="dropDownSelect2"></div>
                                    </div>
                                    <div className="rs-select2--light rs-select2--sm">
                                    </div>
                                </div>
                                <div className="table-data__tool-right">
                                    <div className="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                        <select className="custom-select" onChange={this.onChange} name="type">
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
                                            <th>name</th>
                                            <th>email</th>
                                            <th>Number</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.people
                                                .filter(
                                                    data =>
                                                        `${data.name} ${data.profession} ${data.number} `
                                                            .toUpperCase()
                                                            .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                                                .map((data, index) => {
                                                    const currentlyEdit = (this.state.editx === index) ? true : false;
                                                    return (
                                                        <tr className="tr-shadow">
                                                            <td>
                                                                {currentlyEdit ?
                                                                    <TextField onChange={e => this.handleChange(e, "name", index)} name="name" value={data.name} />
                                                                    :
                                                                    data.name
                                                                }
                                                            </td>
                                                            <td>
                                                                <span className="block-email">
                                                                    {currentlyEdit ?
                                                                        <TextField onChange={e => this.handleChange(e, "profession", index)} name="profession" value={data.profession} />
                                                                        :
                                                                        <span className="block-email">{data.profession}</span>
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td className="desc">
                                                                {currentlyEdit ?
                                                                    <TextField onChange={e => this.handleChange(e, "number", index)} name="number" value={data.number} />
                                                                    :
                                                                    data.number
                                                                }
                                                            </td>
                                                            <td>
                                                                <div className="table-data-feature">
                                                                    {currentlyEdit ?
                                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                                            <CheckIcon onClick={() => this.stopEditing(index)} />
                                                                        </button> :
                                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                                            <EditIcon onClick={() => this.startEditing(index)} />
                                                                        </button>}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="table-data-feature">
                                                                    <button className="item" onClick={() => this.handleDelete(index)} data-toggle="tooltip" data-placement="top" title="Send">
                                                                        <DeleteIcon />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(TableS);
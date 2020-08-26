import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'; import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
//import { fasignout } from '@fortawesome/free-solid-svg-icons'


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            searchTearm: "",
            loading: "",
            postPerPage: 5,
            currentPage: 1,
            export: "",
            people: [
                { name: "Keanu Reeves", profession: "Actor" },
                { name: "Lionel Messi", profession: "Football Player" },
                { name: "Cristiano Ronaldo", profession: "Football Player" },
                { name: "Jack Nicklaus", profession: "Golf Player" },
            ]
        }
        this.exportPDF = this.exportPDF.bind(this);
        this.ExportCSV = this.ExportCSV.bind(this);

    }
    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({
            searchTearm: e.target.value
        })
    }

    onChange = (e) => {
        if (e.target.value === "PDF") {
            console.log("PDF")
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
                                        {/* <select className="js-select2" name="time">
                                            <option selected="selected">Today</option>
                                            <option value="">3 Days</option>
                                            <option value="">1 Week</option>
                                        </select> */}
                                    </div>
                                </div>
                                <div className="table-data__tool-right">
                                    <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                                        <i className="zmdi zmdi-plus"></i>add item</button>
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
                                            <th>
                                                <label className="au-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="au-checkmark"></span>
                                                </label>
                                            </th>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>description</th>
                                            {/* <th>date</th> */}
                                            {/* <th>status</th> */}
                                            {/* <th>price</th> */}
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tr-shadow">
                                            <td>
                                                <label className="au-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="au-checkmark"></span>
                                                </label>
                                            </td>
                                            <td>Lori Lynch</td>
                                            <td>
                                                <span className="block-email">lori@example.com</span>
                                            </td>
                                            <td className="desc">Samsung S8 Black</td>
                                            {/* <td>2018-09-27 02:12</td> */}
                                            {/* <td>
                                                <span className="status--process">Processed</span>
                                            </td>
                                            <td>$679.00</td> */}
                                            <td>
                                                <div className="table-data-feature">
                                                    <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                        {/* <i className="zmdi zmdi-mail-send"></i> */}
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <div className="table-data-feature">
                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="spacer"></tr>
                                        <tr className="tr-shadow">
                                            <td>
                                                <label className="au-checkbox">
                                                    {/* <input type="checkbox"> */}
                                                    <span className="au-checkmark"></span>
                                                </label>
                                            </td>
                                            <td>Lori Lynch</td>
                                            <td>
                                                <span className="block-email">john@example.com</span>
                                            </td>
                                            <td className="desc">iPhone X 64Gb Grey</td>
                                            <div className="table-data-feature">
                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                    {/* <i className="zmdi zmdi-mail-send"></i> */}
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </div>
                                            <td>
                                                <div className="table-data-feature">
                                                    <span class="glyphicon glyphicon-edit"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="spacer"></tr>
                                        <tr className="tr-shadow">
                                            <td>
                                                <label className="au-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="au-checkmark"></span>
                                                </label>
                                            </td>
                                            <td>Lori Lynch</td>
                                            <td>
                                                <span className="block-email">lyn@example.com</span>
                                            </td>
                                            <td className="desc">iPhone X 256Gb Black</td>
                                            <div className="table-data-feature">
                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                    {/* <i className="zmdi zmdi-mail-send"></i> */}
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </div>
                                            <td>
                                                <div className="table-data-feature">


                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="spacer"></tr>
                                        <tr className="tr-shadow">
                                            <td>
                                                <label className="au-checkbox">
                                                    <input type="checkbox" />
                                                    <span className="au-checkmark"></span>
                                                </label>
                                            </td>
                                            <td>Lori Lynch</td>
                                            <td>
                                                <span className="block-email">doe@example.com</span>
                                            </td>
                                            <td className="desc">Camera C430W 4k</td>
                                            <div className="table-data-feature">
                                                <button className="item" data-toggle="tooltip" data-placement="top" title="Send">
                                                    {/* <i className="zmdi zmdi-mail-send"></i> */}
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>
                                            </div>
                                            <td>
                                                <div className="table-data-feature">

                                                </div>
                                            </td>
                                        </tr>
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
)(Table);
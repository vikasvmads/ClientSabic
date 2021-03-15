import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './images/icons/favicon.ico';
import './vendor/animate/animate.css';
import './vendor/select2/select2.min.css';
import './vendor/perfect-scrollbar/perfect-scrollbar.css';
import Paginations from './Pagignation'
import './css/util.css';
import './css/main.css';
import './js/main.js';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "",
            searchTerm: "",
            loading: false,
            postPerPages: 8,
            currentPage: 1
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.paginate = this.paginate.bind(this);

    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(response => this.setState({ data: response }))
            .catch(error => console.log(error));
    }

    handleSearch(e) {
        this.setState({ searchTerm: e.target.value });
    }

    //change page
    paginate(pageNumber) {
        this.setState({ currentPage: pageNumber })
    }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postPerPages;
        const indexofFirstPost = indexOfLastPost - this.state.postPerPages;
        const currentPosts = this.state.data.slice(indexofFirstPost, indexOfLastPost)
        return (
            < div className="limiter" >
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div class="col-xs-3">
                            <input className="formcontrol" onChange={this.handleSearch} type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="panel-body table-responsive">
                            <div className="table100 ver1 m-b-110">
                                <table data-vertable="ver1">
                                    <thead>
                                        <tr className="row100 head">
                                            <th className="column100 column2" data-column="column2">userId</th>
                                            <th className="column100 column3" data-column="column3">id</th>
                                            <th className="column100 column2" data-column="column2">userId</th>
                                            <th className="column100 column3" data-column="column3">id</th>
                                            <th className="column100 column2" data-column="column2">userId</th>
                                            <th className="column100 column3" data-column="column3">id</th>
                                        </tr>
                                    </thead>
                                    {
                                        this.state.data ? (this.state.searchTerm ? this.state.data
                                            .filter(//taking data
                                                data =>
                                                    `${data.userId} ${data.id} ${data.title} `
                                                        .toUpperCase()
                                                        .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                                            .map(data => (//filter data
                                                <tbody>
                                                    <tr className="row100">
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                    </tr>
                                                </tbody>)) :
                                            currentPosts.map(data => (//filter data
                                                <tbody>
                                                    <tr className="row100">
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                        <td className="column100 column1" data-column="column1">{data.userId}</td>
                                                        <td className="column100 column2" data-column="column2">{data.id}</td>
                                                    </tr>
                                                </tbody>))
                                        )
                                            : ""
                                    }
                                </table>
                                {
                                    this.state.searchTerm ? "" :
                                    <Paginations postPerPages={this.state.postPerPages}
                                            totalPosts={this.state.data.length}
                                            paginate={this.paginate} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Data;

import React, {Component} from 'react';

class CartTable extends Component {
    render() {
        return (
            <div>
                <table className="table table-hover mt-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price (so'm)</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Samsung Galaxy A31</td>
                        <td>2 400 000</td>
                        <td>
                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-success mr-2">
                                    <i className="fas fa-plus"/>
                                </button>
                                <button type="button" className="btn btn-warning mr-2">
                                    <i className="fas fa-minus"/>
                                </button>
                                <button type="button" className="btn btn-danger">
                                    <i className="fas fa-trash"/>
                                </button>
                            </div>
                            <button className="btn btn-primary ml-5">
                                buy
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jerom Selinjer: Javdarzordagi xaloskor</td>
                        <td>34 000</td>
                        <td>
                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-success mr-2">
                                    <i className="fas fa-plus"/>
                                </button>
                                <button type="button" className="btn btn-warning mr-2">
                                    <i className="fas fa-minus"/>
                                </button>
                                <button type="button" className="btn btn-danger">
                                    <i className="fas fa-trash"/>
                                </button>
                            </div>
                            <button className="btn btn-primary ml-5">
                                buy
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CartTable;
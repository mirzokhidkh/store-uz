import React, {Component} from 'react';

class Orders extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item"><strong>user</strong> : G'ishmat</li>
                    <li className="list-group-item"><strong>products count</strong> : 2 </li>
                    <li className="list-group-item"> <strong>products </strong> :
                        <ul className="list-group">
                            <li className="list-group-item">Samsung Galaxy A31 (2 400 000 so'm)</li>
                            <li className="list-group-item">Jerom Selinjer: Javdarzordagi xaloskor (34 000 so'm)</li>
                        </ul>
                    </li>
                    <li className="list-group-item"><strong>email</strong> : gishmat@gmail.com</li>
                    <li className="list-group-item"><strong>total sum</strong> : 2 434 000 so'm</li>
                </ul>
            </div>
        );
    }
}

export default Orders;
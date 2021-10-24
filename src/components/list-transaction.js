import ModalTransaction from './modal-transaction';

function ListTransaction() {
    return (
        <div className="container">
        <h5 className="card-title mb-3 mt-5">Incoming Transaction</h5>
            <div className="card mb-5">
                <div className="card-body">
                    <table class="table table-striped mt-4">
                        <tr className="text-center mb-3">
                            <th>No</th>
                            <th>Users</th>
                            <th>Trip</th>
                            <th>Bukti Transfer</th>
                            <th>Status Payment</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                        <tr className="text-center">
                            <td>1</td>
                            <td>Barak Obama</td>
                            <td>Amerika</td>
                            <td>Bca.jpg</td>
                            <td>Pending</td>
                            <td>
                                <ModalTransaction />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>2</td>
                            <td>Barak Obama</td>
                            <td>Amerika</td>
                            <td>Bca.jpg</td>
                            <td>Pending</td>
                            <td>
                                <ModalTransaction />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td>3</td>
                            <td>Barak Obama</td>
                            <td>Amerika</td>
                            <td>Bca.jpg</td>
                            <td>Pending</td>
                            <td>
                                <ModalTransaction />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }
  
export default ListTransaction;
  
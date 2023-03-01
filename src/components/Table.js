import React from 'react'

function Table() {
    return (
        
        <div class='container'>
            <table class="table table-striped-columns">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TIMESTAMP</th>
                        <th scope="col">APPLICATION_NAME</th>
                        <th scope="col">LEVEL</th>
                        <th scope="col">MESSAGE</th>
                        <th scope="col">HANDLED_BY</th>
                        <th scope="col">HANDLED_TIME</th>
                        <th scope="col">COMMENT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>xx</td>
                        <td>xx</td>
                        <td>xx</td>
                        <td>xx</td>
                        <td>xx</td>
                        <td>xx</td>
                        <td>xx</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table
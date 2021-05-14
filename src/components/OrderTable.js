import React from 'react'

export const OrderTable = ({orders}) => {
    return (
        <div className='modal-table'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((x,i)=>{
                            return (
                                <tr>
                                    <td>{i}</td>
                                    <td>{x.Date}</td>
                                    <td>{x.Amount}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

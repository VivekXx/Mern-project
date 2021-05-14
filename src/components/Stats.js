import React from 'react'

export const Stats = ({customers}) => {
    let counts = {}
    customers.forEach(x=>{
        if (x.Name in counts)counts[x.Name]+=1
        else counts[x.Name]=1
    })
    return (
        
            <div className='stats'>
                <div className='box'>
                    <h1>
                        {customers.length}
                    </h1>
                    <h2>Orders</h2>
                </div>
                <div className='box'>
                    <h1>{customers.map(x=>x.Amount).reduce((x,y)=>x+y)}</h1>
                    <h2>Amount</h2>
                </div>
                <div className='box'>
                    <h1>
                        {Object.keys(counts).length}
                    </h1>
                    <h2>Customers</h2>
                </div>
            </div>
        
    )
}

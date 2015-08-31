import React from 'react';
import DataTable from '../../src/DataTable';

class Demo extends React.Component {
    render() {
        var columns = [
            {name: 'material', label: 'Material'},
            {name: 'quantity', label: 'Quantity', numeric: true},
            {name: 'price', label: 'Unit Price', numeric: true}
        ];

        var data = [
            {material: 'Acrylic (Transparent)', quantity: 25, price: '$2.90'},
            {material: 'Plywood (Birch)', quantity: 50, price: '$1.25'},
            {material: 'Laminate (Gold on Blue)', quantity: 10, price: '$2.35'}
        ];

        return (
            <div>
                <DataTable columns={columns} data={data} selectable={true} />
            </div>
        );
    }
}


React.render(<Demo />, document.getElementById('app'));

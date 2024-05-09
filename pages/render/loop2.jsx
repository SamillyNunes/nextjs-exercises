import products from "../../data/productsList";

export default function Loop2(){
    const withBorder = {
        border: "1px solid #fff"
    };

    function renderRows(){
        return products.map(product => (
            <tr key={product.id} style={withBorder} >
                <td> {product.id} </td>
                <td> {product.name} </td>
                <td> {product.price} </td>

            </tr>
        ));
    }

    return (
        <div>
            <table style={withBorder} >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );

}
const Item = ({ product, img, name, price }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid brown',
                margin: '10px',
            }}
        >
            <img src={img} width="300px" alt={name} />
            <h1>{name}</h1>
            <h2>$ {price}</h2>
        </div>
    );
};

export default Item;

const InlineStylingJSObjects = () => {
    let divContainer = { display: 'block', color: 'blue', margin: '30px' };
    let textColor = { color: 'pink' };
    let colorValue = 'red';
    let isPrimary = false;

    return (
        <div style={divContainer}>
            <h3 style={textColor}>inline styling js objects</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, perferendis.</p>
            <p style={{ color: colorValue }}>Lorem ipsum dolor sit amet.</p>
            <p style={{ color: isPrimary ? 'red' : 'green' }}>
                Lorem ipsum dolor, sit amet.
            </p>
        </div>
    );
};

export default InlineStylingJSObjects;


const ZodzioIlgis = () => {
    let preke = 'ilgiausias'

    const zodzioIlgis = (zodis) => {
        return zodis.length;
    };

    return (
        <div>
            <p>{preke}</p>
            <p>{zodzioIlgis(preke)}</p>
        </div>
    )
}

export default ZodzioIlgis

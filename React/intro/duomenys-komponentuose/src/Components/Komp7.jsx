const Komp7 = () => {

    let links = [
        { id: 1, url: '/', title: 'hasd' },
        { id: 2, url: '/', title: 'qwer' },
        { id: 3, url: '/', title: 'zxcv' },
        { id: 4, url: '/', title: 'vbnm' }
    ]

    return (
        <div>
            <h1>komp7</h1>
            <ul>
                {links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>)}
            </ul>
        </div>
    )
};

export default Komp7;









import "./dock.scss";

function icon(props) {
    return (
        <>
            <li className="li-2">
                <div className="name">{props.name}</div>
                <img className="ico" src={props.source} alt="" />
            </li>
        </>
    );
}

export default icon;

import "./info.css"

const Info = ({ name, biography }) => {
    return (
        <div class="text-container">
            <h2 className="name">{name}</h2>
            <span className="biography">{biography}</span>
        </div>
    )
}

export default Info;

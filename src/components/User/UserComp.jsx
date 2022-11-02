import './UserComp.css'
export default function UserComp({ name, username, email, phone, site }) {
    return (
        <div className="user-container">
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <span>{`username : ${username}`}</span>
            </div>
            <div>
                <span>{`email : ${email}`}</span>
            </div>
            <div>
                <span>{`phone : ${phone}`}</span>
            </div>
            <div>
                <span>{`site : ${site}`}</span>
            </div>
        </div>
    )
}

export default function Card({name,username,email,phone}) {
    return (
        <div className="container" >
            <div className="userDiv">
                <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
                <h3>Name-{name}</h3>
                <h3>Username-{username}</h3>
                <h3>Email-{email}</h3>
                <h3>Phone-{phone}</h3>
            </div>
        </div>
    )
}

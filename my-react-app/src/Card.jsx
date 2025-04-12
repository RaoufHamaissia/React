
    function Card({ title, description }) {
        return (
            <div className="card">
                <img className="card-image" src ="https://media.licdn.com/dms/image/v2/D5603AQHx_hCVsyya_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694454119626?e=2147483647&v=beta&t=xJnQwzeU2tRKkz8ex7eZGA2S7Bw7rkLTq5K1vsNiL-8" alt="profile picture"></img>
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>
            </div>
        );
    }


    export default Card;
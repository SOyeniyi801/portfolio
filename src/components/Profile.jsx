function Profile(){
    return(
        <div className="container">
            <img className="profile_pic" alt="" src={process.env.PUBLIC_URL + '/elements/DSC09736.jpg'} />
        </div>
    )
}

export default Profile
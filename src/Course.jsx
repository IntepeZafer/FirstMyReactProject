function Course({title , description , img}) {
    return ( 
        <div>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Course;
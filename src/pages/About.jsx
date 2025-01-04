function About() {
    return (
        <div className="about-section" style={{ backgroundColor: '#1ABC9C' }}>
            <div className="container">
                <div className="row justify-content-center text-center text-white vh-100 align-items-center">
                    <div className="col-12">
                        <h2 className=" mb-4" style={{ fontSize: '40px', fontWeight:'700' }}>ABOUT COMPONENT</h2>
                        <div className="d-flex align-items-center justify-content-center mb-4">
                            <div className="line"></div>
                            <div className="star mx-3">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="line"></div>
                        </div>

                        <div className="row px-5">
                            <div className="col-md-6 mb-4">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes
                                    the complete source files including HTML, CSS, and JavaScript as well as
                                    optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    Freelancer is a free bootstrap theme created by Route. The download includes
                                    the complete source files including HTML, CSS, and JavaScript as well as
                                    optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
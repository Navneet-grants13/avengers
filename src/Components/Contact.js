import React from 'react';


export default function Contact() {
    return (

        <div className="container" bgcolor="#000000">
            <h2 className="text-uppercase text-center" >
                contact us
                </h2>

            <div className="row justify-content-evenly">
                <div className="col-4 my-3" >
                    <div >
                        <h3 className="contact-title">Get in touch</h3>
                        <h6>We're just a step away.</h6>
                        <iframe title="/" width="100%" height="380" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    <div className="map-footer-main">
                        <div className="map-footer">
                            <h5>Call Us</h5>
                            <h6><a href="tel:+918833664455">+918833664455</a></h6>
                        </div>
                        <div className="map-footer">
                            <h5>E-mail Us</h5>
                            <h6><a href="tel:+918833664455">+918833664455</a></h6>
                        </div>
                        <div className="map-footer">
                            <h5>Address</h5>
                            <h6><a href="tel:+918833664455">+918833664455</a></h6>
                        </div>

                    </div>
                </div>
                <div className="col-4 my-3 form">
                    <div>
                        <form>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="First name"/>
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"/>
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        
                        <div className="form-floating">
                            <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2" rows="6"></textarea>
                            <label htmlFor="floatingTextarea2">Let us know your problem</label>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className="form-footer">
                        <h5>We'll get back to you in 1-2 business days.</h5>
                    </div>
                </div>
               
            </div>

</div>


        );
}


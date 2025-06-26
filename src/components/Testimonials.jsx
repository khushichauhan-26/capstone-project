export default function Testimonials() {
    return (
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer1.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Rahul</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>This website has completely transformed my meal times! The food is consistently delicious, and the ordering 
                        process is so easy. I highly recommend it to anyone looking for great food delivered quickly </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer2.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Sia</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>"I was blown away by the quality and variety of food available on this 
                        website. From appetizers to desserts, everything was fresh and flavorful. 
                        Definitely my new go-to for online food orders </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/reviewer3.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Urmila</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>"The website is a breeze to navigate, and the customer service is top-notch. 
                        I had a slight issue with my order, and they resolved it quickly and efficiently. A fantastic experience overall </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  

  
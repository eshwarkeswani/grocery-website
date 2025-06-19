import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Review.css'
function Review() {

    return (
        <>
            <section id='clients'>

                <div className="client-heading">
                    <h3>Client's Review</h3>
                </div>

                <div className="client-box-container">


                    <div className="client-box">

                        <div className="client-profile">
                            <img src="/images/user1.webp" alt="client" />
                            <div className="profile-text">
                                <strong>Eshwar Keswani</strong>
                                <span>CEO</span>
                            </div>
                        </div>


                        <div className="rating">
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                        </div>


                        <p>"As a business leader, I understand the importance of delivering quality and trust to our customers. This product/service has not only met our expectations but exceeded them. The attention to detail, customer service, and efficiency are unmatched. I highly recommend it to anyone looking for reliable solutions in this space. Truly a game-changer!".</p>


                    </div>



                    <div className="client-box">

                        <div className="client-profile">
                            <img src="/images/user2.webp" alt="client" />
                            <div className="profile-text">
                                <strong>Sophia</strong>
                                <span>Accountant</span>
                            </div>
                        </div>


                        <div className="rating">
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                        </div>



                        <p>"As an accountant, accuracy and reliability are key in everything I do.
                             This product/service has made managing finances and operations significantly easier. 
                             The seamless integration with our existing processes has saved us valuable time and 
                             reduced errors. I am confident in recommending it to others in my field.".</p>


                    </div>



                    <div className="client-box">

                        <div className="client-profile">
                            <img src="/images/user3.webp" alt="client" />
                            <div className="profile-text">
                                <strong>David</strong>
                                <span>Manager</span>
                            </div>
                        </div>


                        <div className="rating">
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                            <FontAwesomeIcon className='star' icon={faStar} />
                        </div>


                        <p>"As a manager, I am always looking for tools that help improve team productivity and streamline operations. 
                            This product has exceeded my expectations. It has simplified our workflow, improved communication, 
                            and allowed us to stay on top of tasks efficiently. 
                            I highly recommend it to any team looking to optimize their processes."</p>


                    </div>


                </div>


            </section>



        </>
    );

}
export default Review
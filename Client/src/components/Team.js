import Team1 from '../assets/img/dev1.JPG';
import Team2 from '../assets/img/me.jpeg';
import "../assets/css/team.css"; // Importing the CSS file for team styles
const Team = () => {
    return (
        <>
        
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div
                            className="bg-primary mb-3 mx-auto"
                            style={{ width: '60px', height: '2px' }}
                        ></div>
                        <h1 className="display-5 mb-5">Team Members</h1>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Member 1 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img
                                        className="img-fluid"
                                        src={Team1}
                                        alt="Ayan Mandal"
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Ayan Mandal</h5>
                                    <span className="text-primary">DESIGN AND CODING</span>
                                </div>
                            </div>
                        </div>

                        {/* Member 2 */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="overflow-hidden position-relative">
                                    <img
                                        className="img-fluid"
                                        src={Team2}
                                        alt="Arijit Malik"
                                        style={{
                                            width: '100%',
                                            height: '300px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Arijit Malik</h5>
                                    <span className="text-primary">DEVELOPMENT & FRONTEND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;

import Team1 from '../assets/img/dev1.JPG'

const Team=()=>{
    return(
        <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-primary mb-3 mx-auto" style={{width: '60px' ,imgheight: '2px'}}></div>
                <h1 className="display-5 mb-5">Team Member</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src={Team1} alt=""/>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Ayan Mandal</h5>
                            <span className="text-primary">DESIGN AND CODING</span>
                        </div>
                    </div>
                </div>
               

               
            </div>
        </div>
    </div>
        </>
    );

}
export default Team;
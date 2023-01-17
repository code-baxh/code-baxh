/* eslint-disable @next/next/no-img-element */
import 'react-circular-progressbar/dist/styles.css';
import ListingData from '../../../data/Careers/Listing.json';
import Link from "next/link";

const Intro = () => {

  return (
    <section id="sectionJobList" className="intro section-padding mb-4 pb-0 section section-job-list gradient-light--lean-left">
    <div class="container">
    <div className="row justify-content-center">
      <div class="col-md-8 col-lg-7 col-xl-6 text-center mb-4">
        <h2 class="section__title mb-4">Job Listing</h2>
      </div>

      <div class="col-md-12 mb-4">
        <p>
        Do you want to work in tech? We work with clients from a variety of backgrounds and industries, ranging from start-ups that are implementing new technology for the first time to huge multinational banks, enterprises, and government agencies trying to improve their existing tech processes.
        Whether you're just starting at the entry or graduate level or whether you're ready for a fresh challenge, we have the perfect tech job for you.
        </p>
      </div>


      <div className="col-md-12 ">
        <div className="job-list__wrapper">

    <ul>
    {
      ListingData.job.map((item, index) => (
        <li className="wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={item.id}>
                    <div href="career-single.html" class="card p-0 mb-3 border-0 shadow-sm mt-4">
                    <Link href={"/description/description" + parseInt(index + 1)} state={{ from: "occupation" }}>

                      <div class="card-body job-card">
                        <span class="row job-card2 justify-content-between align-items-center">
                          <span class="col-md-5 color--heading text-secondary">
                            <span class="badge badge-circle background--danger text-white mr-3">{item.abbrev}</span> {item.title}
                          </span>
    
                          <span class="col-5 col-md-3 my-3 my-sm-0 color--text">
                            <i class="fas fa-clock mr-1"></i> {item.type}
                          </span>
    
                          <span class="col-7 col-md-3 my-3 my-sm-0 color--text">
                            <i class="fas fa-map-marker-alt mr-1"></i> {item.location}
                          </span>
                          <span class="d-none d-md-block col-1 text-center color--text">
                            <small><i class="fas fa-chevron-right"></i></small>
                          </span>
                        </span>
                      </div>
                      </Link>    
                      </div>                    
                   </li>
                )) }
            </ul>
                
                </div>        
              </div>  
          </div>
        </div>
      </section>   

  )
}

export default Intro
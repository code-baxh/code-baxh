import ServicesData from '../../../data/About/Blogs.json';

const Services = () => {
  return (
    <div className="services section-padding ">
      <div className="container">
      <h3 className='text-center mb-4'>What We Do</h3><br/>

      <p className='mb-4'> We source talents that help you DEVELOP your tech; help you keep it SECURE and TECH SALES specialists to take your tech to the market. We have a distinct perspective on project life cycle. </p>
       
      <br/>
        <div className="mt-4 row">
          {
            ServicesData.map((service, index) => (
              <div className="col-lg-4" key={service.id}>
                <div className={`item wow fadeInUp ${index !== ServicesData.length - 1 && 'md-mb50'}`} data-wow-delay={`${0.3 * index + 0.3}s`}>
                  <h6>{ service.title }</h6>
                  <p>{ service.details }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
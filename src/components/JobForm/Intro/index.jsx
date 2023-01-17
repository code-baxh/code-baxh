
import ContactForm from './ContactForm';

const Contact = (props) => {
  const {handleData} = props;

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-center">
        
          <ContactForm handleData={handleData}/>

        </div>
      </div>
    </section>
  )
}

export default Contact
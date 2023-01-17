import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = (props) => {
  const {handleData} = props;

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <ContactForm handleData={handleData}/>
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default Contact
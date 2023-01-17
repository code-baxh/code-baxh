import Link from 'next/link';
import dynamic from 'next/dynamic';
const Split = dynamic(() => import("../../Split"), { ssr: false });
import ContactInfoData from '../../../data/contact.json';

const ContactInfo = () => {
  return (
    <div className="col-lg-5 offset-lg-1">
      <div className="cont-info">
        <h4 className="extra-title mb-50">Contact Info.</h4>
        <Split className="custom-font wow">
          <h3 data-splitting>Let&apos;s Talk.</h3>
        </Split>
        <div className="item mb-40">
          <h5>
            <Link href="#0">
              <a>{ ContactInfoData.email }</a>
            </Link>
          </h5>
          <h5>{ ContactInfoData.phone }</h5>
        </div>
        <Split className="custom-font wow">
          <h3 data-splitting>Visit Us.</h3>
        </Split>
        <div className="item">
          <h6>{ ContactInfoData.address.street }, <br />{ ContactInfoData.address.city },<br /> { ContactInfoData.address.country }</h6>
        </div>
        
      </div>
    </div>
  )
}

export default ContactInfo
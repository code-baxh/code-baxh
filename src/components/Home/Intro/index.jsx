/* eslint-disable @next/next/no-img-element */
import IntroData from '../../../data/Home/Intro.json';
import 'react-circular-progressbar/dist/styles.css';

const Intro = () => {
  return (
    <section className="intro section-padding mb-4 pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="main-header text-center">
              <h3 className="">{ IntroData.text }</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="cont md-mb50">
              <h5 className="mb-2">{ IntroData.title }</h5>
              <p className="mb-4">{ IntroData.desc }</p>

              <h5 className="mb-4">{ IntroData.title2 }</h5>
              <p className="mb-2">{ IntroData.desc2 }</p>

              <p className="mb-4">
                <span className="ml-4">- {IntroData.list1}</span>
                <span className="ml-4">- {IntroData.list2}</span>
              </p>
              

              <div className="skills-circle">
                {
                  IntroData.skills.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="skill" data-value={item.value / 10}>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="feat">
              <div className="row">
                {
                  IntroData.features.map((item, index) => (
                    <div className="col-lg-12" key={index}>
                      <div className="item md-mb50">
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                        <h5>{ item.title }</h5>
                        <p className="small">{ item.desc }</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
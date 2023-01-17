/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import BlockData from '../../../data/Home/Block.json';

const Block = () => {
  const uiBlockBgElem = useRef(null);
  
  useEffect(() => {
    if (uiBlockBgElem.current) uiBlockBgElem.current.style.backgroundImage = `url(${uiBlockBgElem.current.dataset.background})`;
  }, []);

  return (
    <section className="ui-block">
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-lg-6 cont section-padding valign bg-dark">
            <div className="case">
              <h6 className="fw-500 mb-10">{ BlockData.title }</h6>
              <h3 className="mb-20">{ BlockData.text }</h3>
              <p className="fw-300">{ BlockData.desc }</p>

            </div>
          </div>
          <div className="col-lg-6 cimg bg-img" data-background="images/img02.jpg" ref={uiBlockBgElem}></div>
        </div>
      </div>
      <div className="shadows">
        <img className="shadow sh-left" src="images/shadow.png" alt="" />
        <img className="shadow sh-right" src="images/shadow.png" alt="" />
      </div>
    </section>
  )
}

export default Block
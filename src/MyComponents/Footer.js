import React from 'react'
import './Footer.css';

const Footer = () => {



  return (
    <div className='manclass'>
      <h4 className='text-center manhading' >
        Join the Adventure newsletter to receive our best vacation deals
      </h4>
      <h5 className='hading'>
        You can unsubscribe at any time.
      </h5>

      <label htmlFor="title">
        <input type="text" className="form-control firstinput" id="title" aria-describedby="emailHelp" placeholder='Your Email' />
      </label>

      <button className="btn btn-outline-success lastbutton my-2 my-sm-0" type="submit">Subscribe</button>

      <div className="container maincontainer">
        <div className="coontainer-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div className="card c1">
                <h4 className='fh1'>
                  About US
                </h4>

                <a href="" className='firstpara1'>
                  How it works
                </a>



                <a href="" className='para1'>
                  Testimonials
                </a>



                <a href="" className='para1'>
                  careers
                </a>

                <a href="" className='para1'>
                  Investors
                </a>

                <a href="" className='para1'>
                   Terms of Srervice
                   </a>


              </div>
            </div>
            <div className="col-sm-3">
              <div className="card c2">
                <h4 className='fh2'>
                  Contact Us
                </h4>
                 <a href="" className='firstpara2'>
                 Contact
                 </a>
                <a href=""className='para2'>
                 Support
                 </a>
                <a href="" className='para2'>
                Destination
                </a>
                <a href="" className='para2'>
                  Sponserships
                  </a>
                
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card c3">
                <h4 className='fh3'>
                  Videos
                </h4>
                <a href="" className='firstpara3'>
                  Submit Video
                </a>
                <a href="" className='para3'>
                  Ambassadors
                </a>

                <a href="" className='para3'>
                  Agency
                </a>
                <a href="" className='para3'>
                  Influencer
                </a>

              </div>
            </div>
            <div className="col-sm-3">
              <div className="card c4">
                <h4 className='fh4'>
                  Social Media
                </h4>

                <a href="" className='firstpara4'>
                  Instagram
                </a>


                <a href="" className='para4'>
                  Facebook
                </a>

                <a href="" className='para4'>
                  YouTube
                </a>


                <a href="" className='para4'> Twitter</a>



              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='lasthading'>
          TRVL <i className="fab fa-typo3" />
        </h2>
      </div>

      <p className='text-center lastpara'>
      TRVL &copy;  2022
      </p>
 
<a href="">
<i class="fa-brands fa-facebook-f icon1"></i>
</a>
 <a href="">
<i class="fa-brands fa-youtube icon2"></i>
</a>
<a href="">
<i class="fa-brands fa-instagram icon3"></i>
</a>
<a href="">
<i class="fa-brands fa-twitter icon4"></i>
</a>


    </div>
  )
}

export default Footer

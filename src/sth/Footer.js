import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className='resources'>
            <h3 className='noSpace'>Resources:</h3>
            <p className='noSpace'>
              <a href='http://onepiece.wikia.com/wiki/Main_Page'>
                One Piece Wiki
              </a>
            </p>
            <p className='noSpace'>
              <a href='http://www.zingbox.me/'>ZingBox.Me</a>
            </p>
            <p className='noSpace'>
              <a href='http://www.funimation.com/'>Funimation</a>
            </p>
          </div>
          <div className='credits'>
            <h3 className='noSpace'>Credits:</h3>
            <p className='noSpace'>Eiichiro Oda/Shueisha</p>
            <p className='noSpace'>Toei Animation</p>
            <p className='noSpace'>Licensed by FUN</p>
          </div>
          <div className='copy'>{/* <a href=''> &#169; </a> */}</div>
        </footer>
      </div>
    );
  }
}

export default Footer;

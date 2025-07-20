import React from 'react'
import './Promo.css'
import { RiImageLine, RiSpeedLine, RiShieldCheckLine, RiScissorsLine, RiMagicLine, RiDownloadLine } from 'react-icons/ri';

const Promo = () => {
  return (
    <>
      <div className='ad-cont'>
        <div className='ad-text'>
            <img src='/images/logo.png' alt="QuickCompress Logo"/>
            <h1>Free Image <br />Compressor</h1>
            <p>Compress your images quickly while maintaining high quality with QuickCompress.<br /> Optimize your images for web, projects, and sharing using our easy, fast, and free image compressor app.</p>
        </div>
        <div className='ad-img'>
            <img src='/images/ad.png' alt="QuickCompress Preview"/>
        </div>
      </div>

      <div className="usecases-cont">
        <h2>What can you do with QuickCompress?</h2>
        <div className="usecases-cards">
          <div className="usecase-card">
            <RiScissorsLine size={30} className="usecase-icon" />
            <h3>Perfect Quality</h3>
            <p>QuickCompress reduces file size while maintaining high image quality using intelligent compression.</p>
          </div>
          <div className="usecase-card">
            <RiSpeedLine size={30} className="usecase-icon" />
            <h3>Fast Compression</h3>
            <p>Compress images in seconds, even for large files, without waiting or complex steps.</p>
          </div>
          <div className="usecase-card">
            <RiShieldCheckLine size={30} className="usecase-icon" />
            <h3>Privacy Guaranteed</h3>
            <p>Your files are processed securely and automatically deleted within a few hours for your privacy.</p>
          </div>
          <div className="usecase-card">
            <RiImageLine size={30} className="usecase-icon" />
            <h3>Multiple Formats</h3>
            <p>Supports JPEG and PNG images, ensuring your photos and graphics can be easily compressed.</p>
          </div>
          <div className="usecase-card">
            <RiMagicLine size={30} className="usecase-icon" />
            <h3>Easy to Use</h3>
            <p>Simply upload your images, adjust quality, and download your compressed files instantly.</p>
          </div>
          <div className="usecase-card">
            <RiDownloadLine size={30} className="usecase-icon" />
            <h3>Free Forever</h3>
            <p>QuickCompress is free with no registrations, watermarks, or limitations, ready for everyone to use.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promo

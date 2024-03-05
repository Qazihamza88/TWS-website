import React from 'react';

// Import logos
import cSharpLogo from './TWSIMAGES/languageslogo/csharp-150x150.png';
import aspDotNetLogo from './TWSIMAGES/languageslogo/aspnet-150x150.png';
import laravelLogo from './TWSIMAGES/languageslogo/laravel-150x150.png';
import reactNativeLogo from './TWSIMAGES/languageslogo/reactnative-150x150.png';
import androidLogo from './TWSIMAGES/languageslogo/android-150x150.png';
import awsLogo from './TWSIMAGES/languageslogo/aws-150x150.png';
import wordpressLogo from './TWSIMAGES/languageslogo/wordpress-150x150.png';
import shopifyLogo from './TWSIMAGES/languageslogo/shopify-150x150.png';
import vuejsLogo from './TWSIMAGES/languageslogo/vue-150x150.png';
import rubyOnRailsLogo from './TWSIMAGES/languageslogo/rails-150x150.png';
import iosLogo from './TWSIMAGES/languageslogo/ios-150x150.png';
import phpLogo from './TWSIMAGES/languageslogo/php-150x150.png';

function AboutUs() {
  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '50px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About The Webstromes</h1>
      <p style={textStyle}>
        Welcome to The Webstromes, where innovation meets technology! We are a dynamic IT company
        dedicated to delivering cutting-edge solutions for our clients.
      </p>
      <p style={textStyle}>
        Our team of skilled professionals is committed to excellence and creativity,
        ensuring that each project we undertake exceeds expectations.
      </p>

      {/* Insert logos and important points for each technology */}
      <div>
        <img src={cSharpLogo} alt="C#" style={imageStyle} />
        <p style={textStyle}>C#: Strongly-typed, object-oriented language with a syntax similar to Java and C++.</p>
      </div>

      <div>
        <img src={aspDotNetLogo} alt="ASP.NET" style={imageStyle} />
        <p style={textStyle}>ASP.NET: Offers robust server-side functionality, supports various authentication methods, and integrates well with other Microsoft technologies.</p>
      </div>

      <div>
        <img src={laravelLogo} alt="Laravel" style={imageStyle} />
        <p style={textStyle}>Laravel: Provides powerful tools for routing, authentication, caching, and database management.</p>
      </div>
      <div>
        <img src={reactNativeLogo} alt="React Native" style={imageStyle} />
        <p style={textStyle}>React Native: Allows developers to write mobile apps using JavaScript and React, targeting both iOS and Android platforms.</p>
      </div>

      <div>
        <img src={androidLogo} alt="Android" style={imageStyle} />
        <p style={textStyle}>Android: Provides a rich development environment, extensive libraries, and tools for building innovative mobile applications.</p>
      </div>

      <div>
        <img src={awsLogo} alt="AWS" style={imageStyle} />
        <p style={textStyle}>Amazon Web Services (AWS): Enables scalable, flexible, and cost-effective cloud solutions, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).</p>
      </div>

      <div>
        <img src={wordpressLogo} alt="WordPress" style={imageStyle} />
        <p style={textStyle}>WordPress: Provides customizable themes, plugins, and features for creating and managing content-rich websites with ease.</p>
      </div>

      <div>
        <img src={shopifyLogo} alt="Shopify" style={imageStyle} />
        <p style={textStyle}>Shopify: Suitable for businesses of all sizes, Shopify provides a user-friendly interface and comprehensive support for selling products online.</p>
      </div>

      <div>
        <img src={vuejsLogo} alt="Vue.js" style={imageStyle} />
        <p style={textStyle}>Vue.js: Offers a lightweight and approachable alternative to React and Angular, with a focus on simplicity and ease of integration.</p>
      </div>

      <div>
        <img src={rubyOnRailsLogo} alt="Ruby on Rails" style={imageStyle} />
        <p style={textStyle}>Ruby on Rails: Provides a full-stack development environment, with built-in support for database management, routing, and scaffolding.</p>
      </div>

      <div>
        <img src={iosLogo} alt="iOS" style={imageStyle} />
        <p style={textStyle}>iOS (Swift/Objective-C): Offers a secure and tightly controlled development environment, with access to a wide range of hardware and software features.</p>
      </div>

      <div>
        <img src={phpLogo} alt="PHP" style={imageStyle} />
        <p style={textStyle}>PHP: Powers a significant portion of the web, with frameworks like Laravel and content management systems like WordPress built on PHP.</p>
      </div>

    </div>
  );
}

export default AboutUs;

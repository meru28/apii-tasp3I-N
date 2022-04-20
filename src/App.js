import React, { useRef, useEffect } from 'react'
import img1 from './images/hussan-amir-h0DK5BIGBEg-unsplash 2.png'
import imgSection2 from './images/Rectangle 9.png'
import imgSection3 from './images/Rectangle 10.png'
import imgSection7a from './images/image 2.png'
import imgSection7b from './images/image 3.png'
import imgSection7c from './images/image 4.png'
import grid1 from './images/Image 06.png'
import grid2 from './images/Image 05.png'
import grid3 from './images/Image 04.png'
import grid4 from './images/Image 03.png'
import grid5 from './images/Image 02.png'
import grid6 from './images/Image 01.png'
import imgSection9 from './images/Photo.png'
import logo from './images/logo.png'
import Carousel from './components/Carousel'
import imgCarousel1 from './images/Rectangle 1258.png'
import imgCarousel2 from './images/Rectangle 1259.png'
import imgCarousel3 from './images/Rectangle 1260.png'

function App() {
  const initalState = [
    { idx: 1, pos: 1, image: imgCarousel1, active: true },
    { idx: 2, pos: 2, image: imgCarousel2, active: true },
    { idx: 3, pos: 3, image: imgCarousel3, active: true },
    { idx: 4, pos: 4, image: imgSection7c, active: false },
  ]

  const section1Ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
    });
  }, []);

  return (
    <>
    <div className='relative'>
      {/* navbar */}
      <div className="px-[35px] pt-[48px] w-full flex justify-between items-center z-10 lg:pt-[35px]">
        {/* logo */}
        <div className='flex'>
          <div>
            <svg width="139" height="44" viewBox="0 0 139 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.9819 13.3206V6.66143C21.9819 5.92592 21.3853 5.32959 20.6493 5.32959H19.3168V1.33408C19.3168 0.598573 18.7202 0.002243 17.9843 0.002243C16.0977 0.002243 13.2087 -0.142261 9.8172 1.88846C7.70897 1.26125 6.21795 1.33408 4.65897 1.33408C3.923 1.33408 3.32644 1.93041 3.32644 2.66592V5.32959H1.99391C1.25793 5.32959 0.661377 5.92592 0.661377 6.66143V13.3206C0.661377 18.7447 4.73767 23.2348 9.98909 23.8922V41.2892C9.98909 42.0247 10.5856 42.621 11.3216 42.621C12.0576 42.621 12.6542 42.0247 12.6542 41.2892V36.6278H14.6529C18.6941 36.6278 21.9819 33.3417 21.9819 29.3027V27.3049C21.9819 26.5694 21.3853 25.9731 20.6493 25.9731H17.318C15.5478 25.9731 13.9222 26.6036 12.6542 27.6518V23.8916C17.8977 23.2426 21.9819 18.7747 21.9819 13.3206ZM19.3168 13.3206C19.3168 15.6909 18.268 17.8316 16.6104 19.2994C16.6366 19.0857 16.6517 18.8686 16.6517 18.648C16.6517 15.2752 15.3902 12.1918 13.3148 9.84277C15.0743 8.64279 17.1604 7.99327 19.3168 7.99327V13.3206ZM16.6517 2.66592V5.59829C16.4055 5.6484 16.161 5.70559 15.9184 5.76943C15.054 4.80227 14.0681 3.97828 12.9916 3.31244C14.1552 2.88725 15.3903 2.66592 16.6517 2.66592ZM5.9915 3.99776C8.63882 3.99776 11.2097 4.96392 13.2091 6.80993C12.5492 7.1503 11.9165 7.5471 11.3177 7.99701C9.76839 6.83282 7.95807 5.99793 5.9915 5.59737V3.99776ZM3.32644 13.3206V7.99327C9.20448 7.99327 13.9867 12.7729 13.9867 18.648C13.9867 20.1363 12.757 21.349 11.2516 21.3104C6.57023 21.1949 3.32644 17.4775 3.32644 13.3206ZM17.318 28.6367H19.3168V29.3027C19.3168 31.8729 17.2247 33.9641 14.6529 33.9641H12.6542V33.2982C12.6542 30.7279 14.7464 28.6367 17.318 28.6367Z" fill="white"/>
              <path d="M37.7303 20.1589H32.1129V23.6902H38.7479V26.4378H28.541V11.6209H38.7683V14.3787H32.1129V17.5029H37.7303V20.1589ZM46.0032 16.5463L48.4252 11.6209H52.5059L48.3641 18.9683L52.6179 26.4378H48.4964L46.0032 21.4208L43.51 26.4378H39.3987L43.6423 18.9683L39.5106 11.6209H43.5812L46.0032 16.5463ZM57.6343 21.4106V26.4378H54.0624V11.6209H59.9749C61.1079 11.6209 62.1086 11.8312 62.977 12.2519C63.8521 12.6657 64.5272 13.2593 65.0021 14.0327C65.4837 14.7994 65.7246 15.6711 65.7246 16.6481C65.7246 18.0931 65.2056 19.2499 64.1676 20.1182C63.1364 20.9798 61.7185 21.4106 59.9138 21.4106H57.6343ZM57.6343 18.6528H59.9749C60.6669 18.6528 61.1927 18.4798 61.5523 18.1338C61.9186 17.7878 62.1018 17.2994 62.1018 16.6684C62.1018 15.9764 61.9152 15.4235 61.5421 15.0097C61.1689 14.5958 60.6601 14.3855 60.0156 14.3787H57.6343V18.6528ZM71.4839 23.6902H77.7017V26.4378H67.912V11.6209H71.4839V23.6902ZM91.3783 19.3347C91.3783 20.7797 91.1103 22.0585 90.5744 23.1712C90.0384 24.2838 89.2752 25.142 88.2847 25.7458C87.3009 26.3428 86.1781 26.6413 84.9163 26.6413C83.6544 26.6413 82.535 26.353 81.558 25.7763C80.5811 25.1929 79.8179 24.3618 79.2684 23.2831C78.7256 22.2044 78.4407 20.9663 78.4135 19.5687V18.7342C78.4135 17.2824 78.6781 16.0036 79.2073 14.8977C79.7433 13.7851 80.5065 12.9269 81.497 12.3231C82.4943 11.7193 83.6273 11.4174 84.8959 11.4174C86.151 11.4174 87.2704 11.7159 88.2541 12.3129C89.2379 12.9099 90.0011 13.7614 90.5438 14.8672C91.0934 15.9663 91.3715 17.2281 91.3783 18.6528V19.3347ZM87.7453 18.7139C87.7453 17.2417 87.4977 16.1257 87.0024 15.3658C86.514 14.5992 85.8118 14.2159 84.8959 14.2159C83.1049 14.2159 82.1585 15.5592 82.0567 18.2458L82.0465 19.3347C82.0465 20.7865 82.2874 21.9025 82.769 22.6827C83.2507 23.4629 83.9665 23.853 84.9163 23.853C85.8186 23.853 86.514 23.4697 87.0024 22.7031C87.4909 21.9364 87.7385 20.834 87.7453 19.3957V18.7139ZM98.9999 21.2071H97.0664V26.4378H93.4945V11.6209H99.3256C101.083 11.6209 102.457 12.011 103.447 12.7912C104.438 13.5714 104.933 14.6738 104.933 16.0985C104.933 17.1298 104.722 17.9846 104.302 18.663C103.888 19.3414 103.237 19.891 102.348 20.3116L105.442 26.2852V26.4378H101.615L98.9999 21.2071ZM97.0664 18.4493H99.3256C100.004 18.4493 100.513 18.2729 100.852 17.9201C101.198 17.5606 101.371 17.0619 101.371 16.4242C101.371 15.7865 101.198 15.2878 100.852 14.9283C100.506 14.5619 99.9972 14.3787 99.3256 14.3787H97.0664V18.4493ZM116.554 20.1589H110.936V23.6902H117.571V26.4378H107.364V11.6209H117.592V14.3787H110.936V17.5029H116.554V20.1589ZM32.347 43.4378H28.7852V28.6209H32.347V43.4378ZM47.4788 43.4378H43.9272L38.6762 34.218V43.4378H35.1042V28.6209H38.6762L43.917 37.8408V28.6209H47.4788V43.4378ZM50.0122 43.4378V28.6209H54.7849C56.0943 28.6209 57.2714 28.9194 58.3161 29.5164C59.3609 30.1067 60.175 30.9445 60.7585 32.03C61.3487 33.1087 61.6472 34.3197 61.654 35.663V36.3448C61.654 37.7017 61.3657 38.9195 60.789 39.9982C60.2191 41.0701 59.4118 41.9113 58.367 42.5219C57.329 43.1257 56.1689 43.431 54.8867 43.4378H50.0122ZM53.5841 31.3787V40.6902H54.8256C55.8501 40.6902 56.637 40.3272 57.1866 39.6013C57.7361 38.8686 58.0109 37.7831 58.0109 36.3448V35.7037C58.0109 34.2722 57.7361 33.1935 57.1866 32.4676C56.637 31.7417 55.8365 31.3787 54.7849 31.3787H53.5841ZM76.3075 36.3347C76.3075 37.7797 76.0396 39.0585 75.5036 40.1712C74.9676 41.2838 74.2044 42.142 73.2139 42.7458C72.2302 43.3428 71.1074 43.6413 69.8455 43.6413C68.5836 43.6413 67.4642 43.353 66.4873 42.7763C65.5103 42.1929 64.7471 41.3618 64.1976 40.2831C63.6548 39.2044 63.3699 37.9663 63.3428 36.5687V35.7342C63.3428 34.2824 63.6074 33.0036 64.1365 31.8977C64.6725 30.7851 65.4357 29.9269 66.4262 29.3231C67.4235 28.7193 68.5565 28.4174 69.8252 28.4174C71.0802 28.4174 72.1997 28.7159 73.1834 29.3129C74.1671 29.9099 74.9303 30.7614 75.4731 31.8672C76.0226 32.9663 76.3008 34.2281 76.3075 35.6528V36.3347ZM72.6746 35.7139C72.6746 34.2417 72.4269 33.1257 71.9317 32.3658C71.4432 31.5992 70.741 31.2159 69.8252 31.2159C68.0341 31.2159 67.0877 32.5592 66.9859 35.2458L66.9758 36.3347C66.9758 37.7865 67.2166 38.9025 67.6983 39.6827C68.18 40.4629 68.8957 40.853 69.8455 40.853C70.7478 40.853 71.4432 40.4697 71.9317 39.7031C72.4201 38.9364 72.6678 37.834 72.6746 36.3957V35.7139ZM90.7982 43.4378H87.2467L81.9956 34.218V43.4378H78.4237V28.6209H81.9956L87.2365 37.8408V28.6209H90.7982V43.4378ZM102.521 37.1589H96.9036V40.6902H103.539V43.4378H93.3316V28.6209H103.559V31.3787H96.9036V34.5029H102.521V37.1589ZM112.911 39.4995C112.911 38.9771 112.724 38.5701 112.351 38.2784C111.985 37.9866 111.337 37.6847 110.407 37.3727C109.478 37.0606 108.718 36.7587 108.128 36.4669C106.208 35.5239 105.248 34.2281 105.248 32.5796C105.248 31.7587 105.485 31.0361 105.96 30.412C106.442 29.781 107.12 29.2926 107.995 28.9466C108.871 28.5938 109.854 28.4174 110.947 28.4174C112.012 28.4174 112.965 28.6074 113.806 28.9873C114.654 29.3672 115.312 29.9099 115.78 30.6155C116.248 31.3143 116.482 32.1148 116.482 33.0171H112.921C112.921 32.4133 112.734 31.9452 112.361 31.6128C111.995 31.2804 111.496 31.1141 110.865 31.1141C110.227 31.1141 109.722 31.2566 109.349 31.5416C108.982 31.8197 108.799 32.1759 108.799 32.6101C108.799 32.99 109.003 33.336 109.41 33.6481C109.817 33.9534 110.533 34.2722 111.557 34.6047C112.582 34.9303 113.423 35.2831 114.081 35.663C115.682 36.5857 116.482 37.8577 116.482 39.4792C116.482 40.775 115.994 41.7926 115.017 42.5321C114.04 43.2716 112.7 43.6413 110.997 43.6413C109.797 43.6413 108.708 43.4276 107.731 43.0002C106.761 42.566 106.028 41.9758 105.533 41.2295C105.044 40.4765 104.8 39.6115 104.8 38.6345H108.382C108.382 39.4283 108.586 40.0151 108.993 40.3951C109.406 40.7682 110.075 40.9548 110.997 40.9548C111.588 40.9548 112.052 40.8292 112.392 40.5782C112.738 40.3204 112.911 39.9609 112.911 39.4995ZM122.394 43.4378H118.833V28.6209H122.394V43.4378ZM133.751 40.6698H128.856L128.001 43.4378H124.185L129.619 28.6209H132.977L138.452 43.4378H134.616L133.751 40.6698ZM129.711 37.912H132.896L131.298 32.7729L129.711 37.912Z" fill="url(#paint0_linear_0_1)"/>
              <defs>
              <linearGradient id="paint0_linear_0_1" x1="83.1189" y1="24.5" x2="83.1189" y2="51.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='ml-10 hidden lg:block'>
            <ul className='flex text-white font-dmSans'>
              <li className='inline-block p-4'>
               <a href="">DESTINATIONS</a>
              </li>
              <li className='inline-block p-4'>
                <a href="">EXPERIENCES</a>
              </li>
              <li className='inline-block p-4'>
                <a href="">ABOUT</a>
              </li>
              <li className='inline-block p-4'>
                <a href="">GALLERY</a>
              </li>
            </ul>
          </div>
        </div>
        {/* logo end */}
        <div className='flex justify-around items-center text-white lg:mr-24'>
          <div className='mr-[35px]'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
      {/* navbar end */}
      {/* section 1 */}
      <div className='bg-section-1' ref={section1Ref}>
        <div className='px-[30px] pt-[150px] pb-[40px] lg:ml-[277px] lg:pb-0 lg:pr-0'>
          <div className='flex flex-col items-center lg:items-start lg:mb-60'>
            <div className='text-left text-[58px] leading-[63px] font-black text-white lg:text-[120px] lg:leading-[130px]'>
              <h1 className=''>EXPLORE</h1>
              <h1 className=''>INDONESIA</h1>
            </div>
            <div className="text-center">
              <button className='mt-2 bg-primary w-80 px-[90px] py-5 rounded-full text-lg text-white font-bold font-dmSans'>Start traveling</button>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-end'>
            <div className='mt-[54px] pb-[30px] bg-black opacity-70 space-y-[32px] flex flex-col lg:flex-row'>
              <div className='pl-[32px] pr-[71px] text-left text-white'>
                <span className='text-primary text-base font-black'>01</span>
                <h4 className='text-[26px] font-bold'>Title Here</h4>
                <p className='text-base text-[#939393] tracking-wider'>Lorem ipsum dolor sit amet et amet ist ame.</p>
              </div>
              <div className='pl-[32px] pr-[71px] text-left text-white'>
                <span className='text-primary text-base font-black'>02</span>
                <h4 className='text-[26px] font-bold'>Title Here</h4>
                <p className='text-base text-[#939393] tracking-wider'>Lorem ipsum dolor sit amet et amet ist ame.</p>
              </div>
              <div className='pl-[32px] pr-[71px] text-left text-white'>
                <span className='text-primary text-base font-black'>03</span>
                <h4 className='text-[26px] font-bold'>Title Here</h4>
                <p className='text-base text-[#939393] tracking-wider'>Lorem ipsum dolor sit amet et amet ist ame.</p>
              </div>
            </div>
            <div className=''>
              <figure className='relative'>
                <img className='w-full h-full' src={img1} alt="" />
                <div className='absolute inset-0'>
                  <div className='relative h-full flex justify-center items-center'>
                    <button className='bg-[#ffffff] rounded-full w-[67px] h-[67px] pl-1'>
                      <i className='icon-icon-play text-xl' />
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* section 1 end */}
      {/* section 2 start */}
      <div className='bg-section-2'>
        <div className='backdrop-opacity-25 bg-[#11192C]/95'>
          <div className="container mx-auto">
            <div className='mx-[30px] pt-[40px] pb-[20px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-28 lg:pt-[124px]'>
              <figure className='overflow-hidden rounded-2xl lg:w-2/5'>
                <img className='w-full' src={imgSection2} alt="" />
              </figure>
              <div className='lg:w-2/6'>
                <h1 className='mt-8 text-[40px] text-white text-left font-bold font-dmSans leading-[46px] lg:text-[42px]'>The walkways of Indonesia spellbind</h1>
                <p className='mt-8 text-base text-white text-left leading-6 tracking-wider'>Lorem ipsum dolor sit amet, conse ctetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. </p>
                <div className="mt-8 text-center lg:text-left">
                  <button className='mt-2 bg-primary w-80 px-[90px] py-5 rounded-full text-lg text-white font-bold font-dmSans'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 end */}
      {/* section 3 start */}
      <div className='bg-section-3'>
        <div className='backdrop-opacity-25 bg-[#11192C]/95'>
          <div className='mx-[30px] pt-[30px] pb-[40px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-28 lg:pb-[124px]'>
            <figure className='overflow-hidden rounded-2xl'>
              <img className='w-full' src={imgSection3} alt="" />
            </figure>
            <div className='lg:w-2/6 lg:order-first'>
              <h1 className='mt-8 text-[40px] text-white text-left font-bold font-dmSans leading-[46px] lg:text-[42px]'>Perfect beaches exude relaxation and fun</h1>
              <p className='mt-8 text-base text-white text-left leading-6 tracking-wider'>Lorem ipsum dolor sit amet, conse ctetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus. </p>
              <div className="mt-8 text-center lg:text-left">
                <button className='mt-2 bg-primary w-80 px-[90px] py-5 rounded-full text-lg text-white font-bold font-dmSans'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 end */}
      {/* section 4 start */}
      <div className='bg-section-4'>
        <div className='container lg:max-w-4xl lg:h-[2207px] mx-auto'>
          <div className='mx-[30px] pt-[20px] pb-[40px] lg:pt-[127px]'>
            <h1 className='mt-8 text-[40px] text-[#010A20] text-center font-bold font-dmSans leading-[46px]'>Explore Our Secrets</h1>
            <div className="mt-10">
              <Carousel prop={initalState} />
              {/* {renderImage()} */}
            </div>
          </div>
        </div>
      </div>
      {/* section 4 end */}
      {/* section 5 start */}
      <div className='bg-section-5'>
        <div className='backdrop-opacity-25 bg-[#11192C]/95'>
          <div className="container w-3/4 lg:h-[790px] lg:flex mx-auto">
            <div className='mx-[30px] pt-[20px] pb-[40px] text-white flex flex-col justify-center items-center text-center font-dmSans'>
              <div className='lg:w-2/5'>
                <h1 className='mt-9 text-[40px] font-bold leading-[46px]'>By The Numbers</h1>
                <p className='mt-9 text-base font-normal tracking-wider leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='flex flex-col lg:flex-row'>
                <div className='pt-14'>
                  <h1 className='text-primary text-[40px] font-bold'>100+</h1>
                  <p className='mt-1 text-base text-white leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.</p>
                </div>
                <div className='pt-14'>
                  <h1 className='text-primary text-[40px] font-bold'>43,000+</h1>
                  <p className='mt-1 text-base text-white leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo.</p>
                </div>
                <div className='pt-14'>
                  <h1 className='text-primary text-[40px] font-bold'>30+</h1>
                  <p className='mt-1 text-base text-white leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 end */}
      {/* section 6 start */}
      <div className='bg-section-6'>
        <div className="container lg:w-3/4 lg:flex lg:h-[821px] mx-auto">
          <div className='mx-[30px] pt-[171px] pb-[116px] lg:py-0 flex justify-center items-center'>
            <div className='text-center font-dmSans'>
              <h1 className='text-[40px] font-bold leading-[46px]'>Our hills and valleys are like nothing you’ve seen.</h1>
              <p className='mt-9 text-[#6F7787] text-base leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna commodo, tempus dolor sit amet, laoreet elit. Donec mauris tortor, elementum sed.</p>
              <div className="mt-8 text-center ">
                <button className='mt-2 bg-primary w-80 px-[90px] py-5 rounded-full text-lg text-white font-bold font-dmSans'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 6 end */}
      {/* section 7 start */}
      <div className='bg-section-7'>
        <div className='backdrop-opacity-100 bg-[#010A20]/60'>
          <div className="container lg:h-[1476px] lg:max-w-4xl mx-auto">
            <div className='mx-[30px] pt-[70px] pb-11 lg:flex justify-center items-center'>
              <div className='text-center text-white font-dmSans'>
                <h1 className='text-[40px] font-bold leading-[46px]'>Live a life like you wouldn’t imagine, experience a life you wouldn’t expect.</h1>
                <figure className='mt-12 relative rounded-2xl overflow-hidden'>
                  <img className='w-full' src={imgSection7a} alt="" />
                  <div className='absolute inset-0'>
                    <div className='relative h-full flex justify-center items-center'>
                      <button className='bg-[#E93A7D] rounded-full w-[67px] h-[67px] pl-1'>
                        <i className='icon-icon-play text-xl' />
                      </button>
                    </div>
                  </div>
                </figure>
                <div className='lg:flex justify-center items-center lg:space-x-5'>
                  <div className='mt-8 lg:flex lg:justify-center lg:items-center lg:space-x-5'>
                    <figure className='overflow-hidden relative rounded-2xl lg:w-[234px] aspect-video lg:aspect-auto'>
                      <img className='w-full h-full lg:h-[151px] object-cover' src={imgSection7b} alt="" />
                      <div className='absolute inset-0'>
                        <div className='relative h-full flex justify-center items-center'>
                          <button className=''>
                            <i className='icon-icon-play text-xl' />
                          </button>
                        </div>
                      </div>
                    </figure>
                    <div  className='lg:w-[323px] lg:text-left'>
                      <h2 className='mt-[40px] text-[22px] font-bold'>In The Country</h2>
                      <p className='mt-5 text-base leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.</p>
                    </div>
                  </div>
                  <div className='mt-8 lg:flex lg:justify-center lg:items-center lg:space-x-5'>
                    <figure className='overflow-hidden relative rounded-2xl lg:w-[234px] aspect-video lg:aspect-auto'>
                      <img className='w-full h-full lg:h-[151px] object-cover' src={imgSection7c} alt="" />
                      <div className='absolute inset-0'>
                        <div className='relative h-full flex justify-center items-center'>
                          <button className=''>
                            <i className='icon-icon-play text-xl' />
                          </button>
                        </div>
                      </div>
                    </figure>
                    <div className='lg:w-[323px] lg:text-left'>
                      <h2 className='mt-[40px] text-[22px] font-bold'>In The City</h2>
                      <p className='mt-5 text-base leading-6 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 7 end */}
      {/* section 8 start */}
      <div className='bg-white'>
        <div className="container lg:max-w-4xl mx-auto">
          <div className='mx-[30px] pt-[70px] pb-11 font-dmSans text-center'>
            <h1 className='text-[40px] font-bold'>Photo Gallery</h1>
            <p className='mt-5 text-base text-[#6F7787] tracking-wider leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.</p>
            <div className='mt-10 grid grid-cols-2 grid-rows-3 gap-3 lg:grid-cols-3 lg:grid-rows-2'>
              <figure className='overflow-hidden rounded-xl row-span-2'>
                <img className='h-full w-full object-cover' src={grid1} alt="" />
              </figure>
              <figure className='overflow-hidden rounded-xl lg:order-2'>
                <img className='h-full w-full object-cover' src={grid2} alt="" />
              </figure>
              <figure className='overflow-hidden rounded-xl row-span-2 lg:order-4'>
                <img className='object-cover h-full w-full' src={grid4} alt="" />
              </figure>
              <figure className='overflow-hidden rounded-xl lg:order-6'>
                <img className='h-full w-full object-cover' src={grid3} alt="" />
              </figure>
              <figure className='overflow-hidden rounded-xl aspect-square lg:order-3'>
                <img className='h-full w-full object-cover' src={grid5} alt="" />
              </figure>
              <figure className='overflow-hidden rounded-xl aspect-square lg:order-5'>
                <img className='w-full h-full object-cover' src={grid6} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* section 8 end */}
      {/* section 9 start */}
      <div className='bg-[#DCE8F2]'>
        <div className="container lg:max-w-4xl mx-auto">
          <div className='mx-[30px] pt-[35px] pb-11 font-dmSans text-center lg:text-left'>
            <h1 className='text-[40px] font-bold'>Getting there</h1>
            <div className='mt-10 flex flex-col lg:flex-row items-center'>
              <div className='bg-primary numberCircle text-[26px]'>
                1
              </div>
              <div className='ml-10'>
                <h2 className='mt-8 text-[22px] text-[#010A20] font-bold'>Bookings your flights</h2>
                <p className='mt-3 text-[#6F7787]'>Lorem ipsum dolor set,,,, <br/><span className='text-primary'>Show more</span></p>
              </div>
            </div>
            <div className='mt-10 flex flex-col lg:text-left'>
              <div className='flex flex-col lg:flex lg:flex-row items-center'>
                <div className='bg-primary numberCircle text-[26px]'>
                  2
                </div>
                <div className='ml-10'>
                  <h2 className='mt-8 text-[22px] text-[#010A20] font-bold'>Choosing your hotel</h2>
                  <p className='mt-3 text-[#6F7787]'>Lorem ipsum dolor set,,,, <br/><span className='text-primary'>Show more</span></p>
                </div>
              </div>
              <div className='lg:flex lg:justify-start ml-10 lg:items-center'>
                <figure className='mt-10 overflow-hidden relative h-full w-full rounded-2xl aspect-[3/2] lg:w-1/3'>
                  <img className='w-full h-full object-cover object-bottom' src={imgSection9} alt="" />
                  <div className='absolute inset-0'>
                    <div className='relative h-full flex justify-center items-center'>
                      <button className='invert'>
                        <i className='icon-icon-play text-xl' />
                      </button>
                    </div>
                  </div>
                </figure>
                <div className='pl-10 w-96 hidden'>
                  <h1 className='text-2xl font-bold'>Traveling there</h1>
                  <p className='text-[#6F7787]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt.</p>
                </div>
                <p className='mt-10 text-[#6F7787] lg:hidden'>Lorem ipsum dolor set,,,, <br/><span className='text-primary'>Show more</span></p>
              </div>
            </div>
            <div className='mt-10 flex flex-col items-center lg:items-start'>
              <div className='flex flex-col lg:flex lg:flex-row items-center'>
                <div className='bg-primary numberCircle text-[26px]'>
                  3
                </div>
                <div className='ml-10'>
                  <h2 className='mt-8 text-[22px] text-[#010A20] font-bold'>Planning your experiences</h2>
                  <p className='mt-3 text-[#6F7787] hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus mauris in lectus tempus, eget tincidunt lacus varius. </p>
                  <p className='mt-3 text-[#6F7787] lg:hidden'>Lorem ipsum dolor set,,,, <br/><span className='text-primary'>Show more</span></p>
                  <div className="mt-8 text-center lg:text-left hidden lg:block">
                    <button className='mt-2 bg-primary w-80 px-[90px] py-5 rounded-full text-lg text-white font-bold font-dmSans'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 9 end */}
      {/* floating icon */}
      {/* <div className='absolute inset-0 bg-primary numberCircle text-[26px] flex justify-center'>
        <i className='icon-up-open mt-[-3px]' />
      </div> */}
      {/* floating icon end */}
      {/* section 10 start */}
      <div className='bg-[#010A20]'>
        <div className='mx-[30px] pt-[35px] pb-11 font-dmSans text-center lg:flex lg:flex-row justify-between items-center'>
          <div className="pt-20 flex flex-col lg:flex-row justify-center items-center lg:pt-0 lg:space-x-20">
            <div className='flex justify-center items-end'>
              <figure>
                <img className='h-14' src={logo} alt="" />
              </figure>
              <h1 className='ml-2 text-2xl font-extrabold font-roboto leading-6 text-white text-left'><span className='text-primary'>EXPLORE</span> <br/>INDONESIA</h1>
            </div>
            <div className='mt-12 space-y-5 text-[23px] lg:flex justify-center items-center lg:space-x-10 lg:space-y-0 lg:mt-0'>
              <h3 className="text-white">About</h3>
              <h3 className="text-white">Pricing</h3>
              <h3 className="text-white">Company</h3>
              <h3 className="text-white">Blog</h3>
            </div>
          </div>
          <div className='lg:flex justify-between items-center lg:space-x-10'>
            <div className='flex py-8 justify-center items-center text-white space-x-12 lg:py-0'>
              <i className='icon-facebook' />
              <i className='icon-linkedin' />
              <i className='icon-google' />
            </div>
            <h3 className="text-white">Copyright &copy; 2019</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

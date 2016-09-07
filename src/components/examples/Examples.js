import React from 'react'
import './Examples.less'
import Slider from 'react-slick'
import contactKeeperPdf from '../../media/contactKeeper.pdf'
import 'slick-carousel/slick/slick-theme.less'
import 'slick-carousel/slick/slick.less'


const settings = {
  className:'examples',
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true
}

const Examples = () => (
  <div className='examples-background'>
    <div className='examples-header'>{'%examples'.loc()}</div>
    <div className='examples-container'>
      <Slider {...settings} >
        <div className='example__slide'>
          <div className='example__description'>{'%contactKeeper.Description'.loc()}</div>
          <div className='example__link-container'>
            <a className='example__link' target='blank' href={contactKeeperPdf} >{'%contactKeeper.TaskLink'.loc()}</a>
            <a className='example__link' target='blank' href='http://github.com/anta-semenov/contact-keeper' >{'%gitHubLink'.loc()}</a>
            <a className='example__link' target='blank' href='http://contact-keeper.antonsemenov.ml' >{'%tryItLink'.loc()}</a>
          </div>
        </div>
        <div className='example__slide'>
          <div className='example__description'>{'%currencyCalc.Description'.loc()}</div>
          <div className='example__description'>{'%currencyCalc.Description2'.loc()}</div>
          <div className='example__description'>{'%currencyCalc.Description3'.loc()}</div>
          <div className='example__link-container'>
            <a className='example__link' target='blank' href='http://datalaboratory.ru/events/developer-2/' >{'%currencyCalc.TaskLink'.loc()}</a>
            <a className='example__link' target='blank' href='http://github.com/anta-semenov/currency-calc-test-exercise' >{'%gitHubLink'.loc()}</a>
            <a className='example__link' target='blank' href='http://currency-calc.antonsemenov.ml' >{'%tryItLink'.loc()}</a>
          </div>
        </div>
        <div className='example__slide'>
          <div className='example__description'>{'%todo.Description'.loc()}</div>
          <div className='example__description'>{'%todo.Description2'.loc()}</div>
          <div>
            {'%todo.MaxSite.Title'.loc()}
            <a className='example__link' target='blank' href='http://maxsemenov.com' >{'%todo.MaxSite.Link'.loc()}</a>
          </div>
          <div className='example__link-container'>
            <a className='example__link' target='blank' href='http://github.com/anta-semenov/ToDoProject' >{'%gitHubLink'.loc()}</a>
            <a className='example__link' target='blank' href='http://todo.antonsemenov.ml' >{'%tryItLink'.loc()}</a>
          </div>
        </div>
      </Slider>
    </div>
  </div>
)

export default Examples

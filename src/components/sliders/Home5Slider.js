import { sliderProps } from "@/src/sliderProps";
import { Component } from "react";
import Slider from "react-slick";
export default class Home5Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <section className="main-slider-area rel z-1">
        <Slider
          ref={(c) => (this.slider = c)}
          {...sliderProps.mainSlider}
          className="main-slider"
        >
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slide3.jpg)",
              }}
            >
              <div className="container ">
                <div className="slide-content">
                  <h2 className="mt-60">
                    <span className="font-fam">Perfect Marketing</span>
                    <br className="font-fam" /> For Growth Your Dream Business
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                    
                    <a href="contact.html" className="theme-btn style-two font-fam">
                    Contact Now <i className="far fa-arrow-right" />
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/slider/slider4.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                 
                  <h2 className="mt-60">
                    <span className="font-fam">Perfect Marketing</span>
                    <br className="font-fam" /> For Growth Your Dream Business
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                 
                    <a href="contact.html" className="theme-btn style-two font-fam">
                    Contact Now <i className="far fa-arrow-right" />
                    </a>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="slider-item"
              style={{
                backgroundImage: "url(assets/images/arab2/h1.jpg)",
              }}
            >
              <div className="container">
                <div className="slide-content">
                  <h2 className="mt-60">
                    <span className="font-fam">Perfect Marketing</span>
                    <br  className="font-fam"/> For Growth Your Dream Business
                  </h2>
                  <hr />
                  <div className="ratting-btns">
                  
                    <a href="contact.html" className="theme-btn style-two font-fam">
                     Contact Now<i className="far fa-arrow-right" />
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="main-slider-controls">
          <div className="container">
            <div className="main-slider-arrows">
              <button className="main-slider-prev" onClick={this.previous}>
                <i className="fal fa-long-arrow-left" /> 
              </button>
              <button className="main-slider-next" onClick={this.next}>
                <i className="fal fa-long-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

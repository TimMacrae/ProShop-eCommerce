import React, { Fragment } from "react";

export default function Slideshow() {
  return (
    <Fragment>
      <div className="uk-width-1-1">
        <div
          className="uk-position-relative uk-visible-toggle uk-dark"
          tabindex="-1"
          uk-slideshow="animation: push"
        >
          <ul className="uk-slideshow-items">
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                <div uk-lightbox="animation: scale">
                  <a
                    className="uk-button uk-button-default"
                    href="/images/airpods.jpg"
                  >
                    <img src="/images/airpods.jpg" alt="" uk-cover="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                <div uk-lightbox="animation: scale">
                  <a
                    className="uk-button uk-button-default"
                    href="/images/alexa.jpg"
                  >
                    <img src="/images/alexa.jpg" alt="" uk-cover="true" />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
                <img src="/images/camera.jpg" alt="" uk-cover="true" />
              </div>
            </li>
          </ul>

          <a
            className="uk-position-center-left uk-position-small uk-hidden-hover"
            href="href-no-hash"
            uk-slidenav-previous="true"
            uk-slideshow-item="previous"
          ></a>
          <a
            className="uk-position-center-right uk-position-small uk-hidden-hover"
            href="href-no-hash"
            uk-slidenav-next="true"
            uk-slideshow-item="next"
          ></a>
        </div>
      </div>
    </Fragment>
  );
}

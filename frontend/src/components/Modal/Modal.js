import React from "react";
import { Fragment } from "react";

export default function Modal({ id, title }) {
  return (
    <Fragment>
      <div id={id} data-uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">{title}</h2>
          <button class="uk-modal-close" type="button">
            Close
          </button>
          <p>This is a Test</p>
        </div>
      </div>
    </Fragment>
  );
}

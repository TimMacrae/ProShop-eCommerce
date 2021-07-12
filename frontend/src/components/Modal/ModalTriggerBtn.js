import React from "react";
import { Fragment } from "react";

export default function ModalTriggerBtn({ id, btnText }) {
  return (
    <Fragment>
      <button
        data-uk-toggle={"target: #" + id}
        type="button"
        className="btn btn-primary"
      >
        {btnText}
      </button>
    </Fragment>
  );
}

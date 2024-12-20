
import React, { useState } from "react";

const Tags = ({fortag,handleTagChange}) => {
  

  return (
    <>
      <div
        className="my-4 flex flex-wrap justify-center gap-1"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          value="Credit"
          autoComplete="off"
          
          onChange={handleTagChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          Credit
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          value="Shopping"
          autoComplete="off"
          onChange={handleTagChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          Shopping
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio3"
          value="Food"
          autoComplete="off"
          onChange={handleTagChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">
          Food
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio4"
          value="Education"
          autoComplete="off"
          onChange={handleTagChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio4">
          Education
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio5"
          value="Others"
          autoComplete="off"
          onChange={handleTagChange}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio5">
          Others
        </label>
      </div>

    </>
  );
};

export default Tags;

import React from "react";
import styled from "styled-components";

const About = () => {

  return (
    <>
      <h1 style={
        {
          textAlign: "center",
          fontSize: "2.5em",
          padding: "32px 0",
        }
      }>About</h1>
      <hr style={{ border: "1.5px solid #000" }} />
      <p style={
        {
          fontSize: "1.5em",
          width: "80%",
          lineHeight: "35px",
          margin: "32px auto 0"
        }
      }>
        The New York Times (NYT) is an American daily newspaper based in New York City. The New York Times covers domestic, national, and international news, and publishes opinion pieces, investigative reports, and reviews. As one of the longest-running newspapers in the United States, the Times serves as one of the country's newspapers of record. As of 2023, The New York Times is the second-largest newspaper by print circulation in the United States; including online subscribers, the Times has a circulation of 10.36 million, the most of any newspaper in the U.S. The New York Times is published by The New York Times Company; since 1896, the company has been chaired by the Ochs-Sulzberger family, whose current chairman and the paper's publisher is A. G. Sulzberger. The Times is headquartered at The New York Times Building in Midtown Manhattan.
      </p>
    </>
  )
}

export default About;
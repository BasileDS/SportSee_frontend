/* eslint-disable react/prop-types */
/**
 * 
 * @param {*} string 
 * @returns 
 */

import "../styles/heading.css"

function Heading({ title, variable, heading }) {

  const HeadingTag = `h${heading}`
 
  return <HeadingTag>{title} <span className="variable-title">{variable}</span></HeadingTag>
}
  
export default Heading
  
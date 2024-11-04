/* eslint-disable react/prop-types */
/**
 * 
 * @param {*} string 
 * @returns 
 */

function TitleHeading({ title, variable, heading }) {

  const HeadingTag = `h${heading}`
 
  return <HeadingTag>{title} {variable}</HeadingTag>
}
  
export default TitleHeading
  
 import React from "react";
 import { useNavigate } from "react-router-dom";
 import "./search-results.css";
import Laptop from "../laptop";

const SearchResultsRow = ({ laptop }) => {
  const navigate = useNavigate();

  const setActive = () => {
   navigate(`/laptop/${laptop.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{laptop.description}</td>
      <td>{laptop.price}</td>
      <td>{laptop.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
// class SearchResultsRow extends React.Component{
   
// render(){
//   const {laptop} = (this.props);
//   const navigate = Navigate();
//   const setActive = () => 
//     navigate(`/laptop/${laptop.id}`)
//   ;
  
//   return( 
//           <tr onClick={setActive}>
//           <td>{this.props.description}</td>
//           <td>{this.props.price}</td>
//           <td>{this.props.likes}</td>

//         </tr>)  
//   }}


//  export default SearchResultsRow;

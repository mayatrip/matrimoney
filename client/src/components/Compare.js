import React from 'react';
import { Link } from "react-router-dom";

export default function Compare() {
  return (
    <div className='Compare'>
      <div className="secondary-nav">
        <Link to="/budget" >Estimated</Link>
        <Link to="/budget/costs" >Actual</Link>
        <Link to="/budget/compare" className="selected-second-nav">Compare</Link>
      </div>
      <div id="table-div">
        <div id="table-div-left">
          <h3>
            Our Recommendations:
          </h3>
          <table>
            <tbody>
                <tr>
                <th>Vendor</th>
                <th>Cost</th>
                </tr>
            </tbody>
          </table>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}

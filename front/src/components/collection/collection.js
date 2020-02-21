import React from "react";
import "./collection.css";
import Image1 from "../../assets/images/84d71e19-1e9a-4523-8579-09db4e849a2e.jpg"
export default class Collection extends React.Component {
  state = {
  };
  render() {
    return (
      <>
      <div className="collection_div">
          <div className="collection_row1"> 
            <img src={Image1} alt="Mountains" className="collection_row1_image" />
          </div>
          <div className="collection_colmn">
            <div id="collection_row2">
              <div className="collection_row2_1">
                <img src={Image1} alt="Mountains" className="collection_row2_1_image1"/>
              </div>
              <div className="collection_row2_2">
                <img src={Image1} alt="Mountains" className="collection_row2_1_image"/>
              </div>
            </div>
            <div className="collection_column_2">
            <img src={Image1} alt="Mountains" className="collection_column_image" />
            </div> 
          </div>









        </div>


       {/* <div class="collection_col1">
         
           <div class="collection_col_div_text">Description about an IMAGE</div>
           </div>
          <div>
           <div class="collection_col2">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>
           <div class="collection_col2">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>
           <div class="collection_col3">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>
          </div>
</div> */}
      </>
    );
  }
}
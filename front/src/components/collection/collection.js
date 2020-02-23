 
import React from "react";
import "./collection.css";
import Image1  from "../../assets/images/84d71e19-1e9a-4523-8579-09db4e849a2e.jpg";
export default class Collection extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      product:[],
      collection_id:[],
      flag:0
    };
  }
  handleCollectionId(){
    this.setState({
      product:this.props.product.filter(obj => obj.collection_collection_id== this.props.collection[0].collection_id),
      collection_id:this.props.collection,
      image:this.props.image,
      flag:1
    });
  }
  handleimage(src){
    let a=this.state.image.filter(obj => obj.product_product_id== src.product_id);
     return  require('../../assets/images/'+a[0].image_name); 
  }
  

  render() {
    return (
      <>
      {(this.state.flag==0 && this.props.collection.length!=0 && this.props.product.length!=0 && this.props.image.length!=0)?this.handleCollectionId():""}
      <div className="collection_div" >
          <div className="collection_row1" > 
             <img src={(this.state.flag==1)?require('../../assets/images/'+this.state.collection_id[0].collection_image):""} alt="no"  className="collection_row1_image"/>
             <div className="collection_row1_div">
               <div className="collection_row1_div_text">
                 <h2>Desrcription</h2>
               </div>
             </div>
           </div>
          <div className="collection_colmn">
            <div id="collection_row2">
              <div className="collection_row2_1">
               <img src={(this.state.flag==1)?this.handleimage(this.state.product[0]):""} alt="no" className="collection_row2_1_image1"/>
               <div className="collection_row2_1_div">
                 <div className="collection_row2_1_div_text">
                   <h2>Description</h2>
                 </div>
               </div>
              </div>
              <div className="collection_row2_2">
                <img src={(this.state.flag==1)?this.handleimage(this.state.product[1]):"never"}  alt="Mountains" className="collection_row2_1_image"/>
                <div className="collection_row2_1_div">
                 <div className="collection_row2_1_div_text">
                   <h2>Description</h2>
                 </div>
               </div>
              </div>
            </div>
            <div className="collection_column_2">
              <img src={(this.state.flag==1)?this.handleimage(this.state.product[2]):""}  alt="Mountains" className="collection_column_image" /> 
              <div className="collection_row2_1_div">
                 <div className="collection_row2_1_div_text">
                   <h2>Description</h2>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

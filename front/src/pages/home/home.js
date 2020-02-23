import React, {Component} from "react";
import Header from "../../components/header/header";
import Collection from "../../components/collection/collection";
import Slider from "../../components/Slider/slider";
import Footer from "../../components/Footer/Footer";
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      flag:0,
      collection:[],
      product:[],
      collectionID:[]
    };
  }
 
  render(){
    return (
      < div className="home_div">
        {(this.state.flag==0 && this.props.collection.length!=0 && this.props.product.length!=0 && this.props.collectionID.length!=0)?this.setState({flag:1,collectionID:this.props.collectionID,collection:this.props.collection,product:this.props.product}):""}
      <Slider/>
      <Header value="first"/>
      <Collection  collection={(this.state.flag==1)?this.state.collection:""} product={(this.state.flag==1)?this.state.product:""} collectionID={(this.state.flag==1)?this.state.collectionID:""}/>
      <Footer />
      </ div>
    );
  }
}
export default Home;
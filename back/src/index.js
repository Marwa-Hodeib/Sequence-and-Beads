import express from "express";
import initializeDB from "./db";
import cors from 'cors';
const app = express();
app.use(cors());
const start = async () => {
  const controller = await initializeDB();

  app.get("/", (req, res) => {
    res.send("Welcome!");
  });


///////////**********Collection Table**********//////////////
  ////////////*********CREATE*************////////////
    app.get("/collection/create/",async (req,res,next)=>{
      try{
      const result = await 
      controller.createCollection(req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/collection", async (req, res,next) => {
      const {orderBy}=req.query;
      try{
      const result = await controller.getcollection(orderBy);
      res.json({ success: true, result });
      } catch (err) {
        next(err);
      }
    });

    app.get("/collection/id/:id", async (req, res,next) => {
      try{
      const result = await controller.getcollectionById(req.params.id);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
      
    });

    app.get("/collection/name/:name", async (req, res,next)=> {
      try{
      const result = await controller.getcollectionByName(req.params.name);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/collection/flag/:name", async (req, res,next)=> {
      try{
      const result = await controller.getcollectionByFlag(req.params.name);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    app.get("/collection/update/:ID",async (req,res,next)=>{
      try{
      const result = await 
      controller.updateCollection(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********DELETE*************////////////
    app.get("/collection/delete/id/:ID",async(req,res,next)=>{
      try{
      const result = await
      controller.deleteCollectionByID(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
    
    app.get("/collection/delete/name/:name", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteCollectionByName (req.params.name);
      res.json(result);
      }catch(err){
        next(err);
      }
    });


///////////**********Admin Table*************///////////
  ////////////*********CREATE*************////////////
    app.get("/admin/create/", async (req, res,next) => {
      try{
      const result = await controller.createAdmin(req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/admin", async (req, res,next) => {
      const {orderBy}=req.query;
      try{
      const result = await controller.getAdmin(orderBy);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/admin/id/:ID", async (req, res,next) => {
      try{
      const result = await controller.getAdminId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/admin/name/:NAME", async (req, res,next) => {
      try{
      const result = await controller.getAdminName(req.params.NAME);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    app.get("/admin/update/:ID", async (req, res,next) => {
      try{
      const result = await controller.updateAdmin(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********DELETE*************////////////
    app.get("/admin/delete/id/:ID", async (req, res,next) => {
      try{
      const result = await controller.deleteAdminId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/admin/delete/name/:NAME", async (req, res,next) => {
      try{
      const result = await controller.deleteAdminName(req.params.NAME);
      res.json(result);
      }catch(err){
        next(err);
      }
    });


///////////**********Order Table*************///////////
  ////////////*********CREATE*************////////////
    app.get("/order/create/",async(req,res,next)=>{
      try{
    const result=await controller.createOrder(req.query);
    res.json({ success: true, result });
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/order", async (req, res,next) => {
      let {orderBy}=req.query;
      try{
        const result = await controller.getOrder(orderBy);
        res.json(result);
    }catch(err){
      next(err);
    }
    
    });

    app.get("/order/id/:ID", async (req, res,next) => {
      try{
      const result = await controller.getOrderId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/order/name/:NAME", async (req, res,next) => {
      try{
      const result = await controller.getOrderClientName(req.params.NAME);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/order/product/:ID", async (req, res,next) => {
      try{
      const result = await controller.getOrderProductId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/order/date/:DATE", async (req, res,next) => {
      try{
      const result = await controller.getOrderDate(req.params.DATE);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/order/area/:AREA", async (req, res,next) => {
      try{
      const result = await controller.getOrderArea(req.params.AREA);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    app.get("/order/update/:ID",async(req,res,next)=>{
      try{
      const result=await controller.updateOrder(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********DELETE*************////////////
    app.get("/order/delete/id/:ID",async(req,res,next)=>{
      try{
      const result=await controller.deleteOrderId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/order/delete/client/:NAME",async(req,res,next)=>{
      try{
        const result=await controller.deleteOrderClientName(req.params.NAME);
      res.json(result);
      }catch(err){
        next(err);
      }
    });


///////////**********Category Table**********//////////////
  ////////////*********CREATE*************////////////
    app.get("/category/create/",async (req,res,next)=>{
      try{
      const result = await 
      controller.createCategory(req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/category", async (req, res,next) => {
      const {orderBy}=req.query;
      try{
      const result = await controller.getcategory(orderBy);
      res.json({ success: true, result });
      } catch (err) {
        next(err);
      }
    });

    app.get("/category/id/:id", async (req, res,next) => {
      try{
      const result = await controller.getcategoryById(req.params.id);
      res.json({sucess:true,result});
      }catch(err){
        next(err);
      }
      
    });

    app.get("/category/name/:name", async (req, res,next)=> {
      try{
      const result = await controller.getcategoryByName(req.params.name);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    app.get("/category/update/:ID",async (req,res,next)=>{
      try{
      const result = await 
      controller.updateCategory(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********DELETE*************////////////
    app.get("/category/delete/id/:ID",async(req,res,next)=>{
      try{
      const result = await
      controller.deleteCategoryByID(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
      
    app.get("/category/delete/name/:name", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteCategoryByName (req.params.name);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
    
    
///////////**********Image Table**********//////////////
  ////////////*********CREATE*************////////////
    app.get("/image/create/",async (req,res,next)=>{
      try{
      const result = await 
      controller.createImage(req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/image", async (req, res,next) => {
      const {orderBy}=req.query;
      try{
      const result = await controller.getimage(orderBy);
      res.json({ success: true, result });
      } catch (err) {
        next(err);
      }
    });

    app.get("/image/id/:id", async (req, res,next) => {
      try{
      const result = await controller.getimageById(req.params.id);
      res.json({sucess:true,result});
      }catch(err){
        next(err);
      }
      
    });

    app.get("/image/product/:ID", async (req, res,next)=> {
      try{
      const result = await controller.getimageByProductId(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    app.get("/image/update/:ID",async (req,res,next)=>{
      try{
      const result = await 
      controller.updateImage(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********DELETE*************////////////
    app.get("/image/delete/id/:ID",async(req,res,next)=>{
      try{
      const result = await
      controller.deleteImageByID(req.params.ID);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
      
    app.get("/image/delete/name/:name", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteImageByName (req.params.name);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

    app.get("/image/delete/product/:product", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteImageByProduct (req.params.product);
      res.json(result);
      }catch(err){
        next(err);
      }
    });


///////////**********Product Table**********//////////////
  ////////////*********CREATE*************////////////
    app.get("/product/create/",async (req,res,next)=>{
      try{
      const result = await 
      controller.createProduct(req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });
  ////////////*********READ*************////////////
    app.get("/product", async (req, res,next) => {
      const {orderBy}=req.query;
      try{
      const result = await controller.getproduct(orderBy);
      res.json({ success: true, result });
      } catch (err) {
        next(err);
      }
    });

    app.get("/product/id/:id", async (req, res,next) => {
      try{
      const result = await controller.getproductById(req.params.id);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
      
    });

    app.get("/product/name/:ID", async (req, res,next)=> {
      try{
      const result = await controller.getproductByName(req.params.ID);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/product/category/:ID", async (req, res,next)=> {
      try{
      const result = await controller.getproductByCategory(req.params.ID);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/product/collection/:ID", async (req, res,next)=> {
      try{
      const result = await controller.getproductByCollection(req.params.ID);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });
  ////////////*********UPDATE*************////////////
    /*
    app.get("/image/update/:ID",async (req,res,next)=>{
      try{
      const result = await 
      controller.updateImage(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    }); */
  ////////////*********DELETE*************////////////
    app.get("/product/delete/id/:ID",async(req,res,next)=>{
      try{
      const result = await
      controller.deleteProductByID(req.params.ID);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/product/delete/name/:name", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteProductByName (req.params.name);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/product/delete/collection/:product", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteProductByCollection (req.params.product);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

    app.get("/product/delete/category/:product", async (req,res,next)=> {
      try{
      const result = await
      controller.deleteProductByCategory (req.params.product);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });

     ////////////*******Join collection vs category********////////////
     app.get("/join/",async (req,res,next)=>{
      try{
      const result = await 
      controller.categoryCollections(req.query);
      res.json({success:true,result});
      }catch(err){
        next(err);
      }
    });


app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err });
});


app.listen(8080, () => {
  console.log("port 8080");
});
}
start();

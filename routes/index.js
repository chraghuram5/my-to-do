const express=require('express');
const router=express.Router();

//importing controller
const homeController=require('../controllers/home_controller');

router.get('/home',homeController.home);
module.exports=router;
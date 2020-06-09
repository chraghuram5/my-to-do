const express=require('express');
const router=express.Router();
const app=express();
app.use(express.urlencoded());
//importing controller
const homeController=require('../controllers/home_controller');

router.get('/home',homeController.home);
router.get('/create-task',homeController)
module.exports=router;
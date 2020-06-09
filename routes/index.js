const express=require('express');
const router=express.Router();
const app=express();
app.use(express.urlencoded());
//importing controller
const homeController=require('../controllers/home_controller');

router.get('/home',homeController.home);
router.post('/create-card',homeController.createTask);
router.get('/mark-complete',homeController.markComplete);
module.exports=router;
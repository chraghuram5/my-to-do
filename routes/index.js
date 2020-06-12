const express=require('express');
const router=express.Router();
const app=express();
app.use(express.urlencoded());
//importing controller
const homeController=require('../controllers/home_controller');

router.get('/home',homeController.home);
router.use('/tasks',require('../routes/tasks.js'));
module.exports=router;
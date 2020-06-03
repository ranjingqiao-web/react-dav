module.exports={
    "GET /api/mockdta":(req,res)=>{
      console.log("请求",req);  
      res.send({
          msg:'登录成功'
      })
    }
}
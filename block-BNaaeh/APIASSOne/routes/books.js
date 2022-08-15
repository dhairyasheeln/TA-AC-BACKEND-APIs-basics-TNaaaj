var express=require('express');
var router=express.Router();
var Book=require('../models/book');

/*Routes*/

router.get('/new',(req,res,next)=>{
    res.render('bookForm.ejs');
});

router.post('/new',(req,res,next)=>{
    console.log(req.body);
    Book.create(req.body,(book,err)=>{
        if(err) return next(err);
        console.log(err,book);
    });
  });

router.get('/',(req,res,next)=>{
    console.log('Book List');
    Book.find({},(err,books)=>{
        if(err) return next(err);
        res.render('books.ejs',{books});
    });
});

module.exports=router;
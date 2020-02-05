const archite = require('../models/articles');
const mongoose = require('mongoose');
exports.get_all_articles = (req,res,next)=> {
    archite.find()
    .select('_id title details')
    .exec()
    .then(docs =>{
        const response = {
            count : docs.length,
            archites: docs.map(doc=>{
                return {
                    _id : doc._id,
                    title: doc.title,
                    details: doc.details
                }
               
            })
        }
        res.status(200).json(response);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: err})
    });
};
exports.get_id_articles = (req,res,next)=> {
    const id = req.params.articlesid;
    console.log(id);
    
    archite.findById(id)
    .select('_id title details')
    .exec()
    .then(docs =>{
       if(docs){
        res.status(200).json({
            archites:docs,
        });
    
       }else{
           res.status(404).json({message: "Not Found Articles"})
       }
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error: err})
    });
}
exports.post_articles = (req,res,next) => {
    console.log(req.body);
    const archites = new archite({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        details: req.body.details
    });
    archites
    .save()
    .then(result=> {
        res.status(200).json({
            architeCreate: {
                title: result.title,
                details: result.details,
                _id: result._id

            }
        })
    })
    .catch(err => console.log(err))

};
exports.put_articles = (req,res,next) => {  
    const id = req.params.articlesid;
    archite
    .update({_id: id},{$set: {
        title: req.body.title,
        details: req.body.details
    }})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'articles success',
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })
}
exports.delete_articles = (req,res,next) => {  
    const id = req.params.articlesid;
    archite
    .remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product deleted!',
        })
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        })
    })

    res.status(200).json({id: id });
}
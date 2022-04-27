
const express = require('express');
const router = express.Router();
const Account = require('../model/account.model');

router.get('', async(req, res) => {
    try {
        const account = await Account.find().populate({path: "user_id"}).lean().exec();

        return res.send(account);
    } catch(err) {
        return res.send(err.message);
    }
})

router.post('', async(req, res) => {
    try {
        // console.log(req.body)
        const account = await Account.create(req.body);
//    return res.send('Account has created. We will inform you later, Thankyou.')
return res.send(account)
    } catch(err) {
       return res.send(err.message)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        console.log(req.params.id, req.body)
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.send(account)
    } catch (err) {
        return res.send(err.message)
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const account = await Account.findByIdAndDelete({_id: req.params.id}).lean().exec();
        const data = await Posts.find().populate({path: "user_id", select: ["first_name", "email"]}).lean().exec();
        return res.send(data)
    } catch (err){
        res.send('kliop')
    }
})

module.exports = router;
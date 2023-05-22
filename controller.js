const {signup} = require('./schema');

module.exports.insertform = async(req,res)=>{
    const user = new signup({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        mail: req.body.mail,
        DOB: req.body.DOB,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        Mobile: Number(req.body.Mobile),
        Height: Number(req.body.Height),
        Weight: Number(req.body.Weight),
        Diet: req.body.Diet,
        Password: req.body.Password,
        CPassword: req.body.CPassword
    })
    const ratata = await signup.findOne({mail:req.body.mail});
    if(ratata)
         return res.send({msg:"User exist in db"});
    const savedusr = await user.save();
    res.send(savedusr);

}

module.exports.logins=async(req,res)=>{
    const users= await signup.findOne({mail:req.body.mail});
    console.log(users);
    // const police = await police_schema.findOne({police_mail:req.body.email})
    if(users)
    {
        console.log("Inside the block");
        console.log(users.Password);
        // return res.send("Invalid Credentials");
        if(req.body.Password!==users.Password)
        {
            console.log("Invalid Credentials");
            res.send("Invalid Credentials");
        }
        else
        {
            console.log("Success");
            res.send("Login Successful!");
        }
    }
    // else if(police)
    // {
    //     if(req.body.password!==police.password)
    //     {
    //         return res.send("Invalid Credentials");
    //     }
    //     else
    //     {
    //         return res.send("Login Successful!");
    //     }
    // }
    else
    {
        console.log("Invalid Credentials");
        res.send("Invalid Credentials");
    }
}
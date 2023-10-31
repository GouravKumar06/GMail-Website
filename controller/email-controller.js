import Email from "../model/email.js"

export const saveSentEmails = (req,res) =>{
    try{
       const email = new Email(req.body)
       email.save();
       res.status(200).json('email saved successfully')
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

export const getEmails = async (req,res) =>{
    try{
        let emails;
        if(req.params.type === 'bin')
        {
           emails = await Email.find({ bin:true });
        }else if(req.params.type === 'allmail'){
            emails = await Email.find();
            
        }else if (req.params.type === 'starred') {
            emails = await Email.find({ starred: true});
        }    
        else
        {
            emails = await Email.find({type:req.params.type})
        }
        return res.status(200).json(emails)

    }catch(error){
        console.log(error);
        res.status(500).json(error.messsage);
    }
}

export const moveEmailsToBin = async(req,res) =>{
    try{
       await Email.updateMany(
        {_id:{$in:req.body}},
        { $set:{ bin:true, starred:false, type:'' } }
       )

       return res.status(200).json('emails deleted successfully')
    }
    catch(error){
        console.log(error);
        res.status(500).json(error.messsage); 
    }
}

export const toggleStarredEmails = async (request, response) => {
    try {   
        await Email.updateOne(
            { _id: request.body.id }, 
            { $set: { starred: request.body.value }}
        )
        return response.status(200).json('email is Starred mark');
    } catch (error) {
        console.log(error)
        response.status(500).json(error.message);
    }
}


export const deleteEmails = async (request, response) => {
    try {
        await Email.deleteMany({ _id: { $in: request.body }})
        return response.status(200).json('emails deleted successfully');
    } catch (error) {
        console.log(error)
        response.status(500).json(error.message);
    }
}
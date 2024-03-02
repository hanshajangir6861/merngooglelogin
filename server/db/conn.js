import mongoose from 'mongoose'

const DB = "mongodb+srv://hanshajangir061:hanshajangir061@cluster0.q5irm5r.mongodb.net/MERNGoogleLogin?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB ,{
    useUnifiedTopology : true,
    useNewUrlParser : true

    
})
.then(()=>console.log("database connected"))
.catch((err)=>console.log("error" , err))

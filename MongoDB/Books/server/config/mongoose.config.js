import { connect } from "mongoose";



const Mong_URI = "mongodb+srv://root:root@cluster-mern.nw5hb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-MERN"

const dbName = "Book"

async function dbConnect() {
    try {
        await connect(Mong_URI, {
            dbName
        })
        console.log(`📡📡📡You successfully connected to ${dbName} DB!`)
    } catch (error) {
        console.log(error)
        throw error
    }
}


export default dbConnect

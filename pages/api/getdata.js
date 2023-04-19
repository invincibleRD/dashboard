import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("bookings");

       const data = await db
           .collection("dashboard")
           .find({})
           .toArray();

       res.json(data);
   } catch (e) {    
       console.error(e);
   }
};
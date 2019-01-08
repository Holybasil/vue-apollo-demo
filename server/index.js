import express  from 'express'
import { ApolloServer }  from 'apollo-server-express'
import opn  from 'opn'
import mongoose  from 'mongoose'
import typeDefs from './types'
import resolvers from './resolves'

const PORT = 4001;

const db = "mongodb://Holybasil:holy1128@ds151124.mlab.com:51124/pretty";

// Connect to MongoDB with Mongoose.
mongoose
.connect(
  db,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const app = express();

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });


const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>{
  const url = `http://localhost:4001${server.graphqlPath}`
  console.log(`🚀 Server ready at ${url}`)
  opn(url)
}
  
)
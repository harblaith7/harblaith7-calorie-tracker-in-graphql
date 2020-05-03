import {GraphQLServer} from "graphql-yoga"
import Query from "./resolvers/Query"
import db from "./db"


const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers : {
        Query
    },
    context : {
        db
    }
})


server.start(() => {
    console.log("Server is running on localhost:4000")
})

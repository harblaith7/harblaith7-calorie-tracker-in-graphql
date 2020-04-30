import {GraphQLServer} from "graphql-yoga"
import Query from "./resolvers/Query"


const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers : {
        Query
    }
})


server.start(() => {
    console.log("Server is running on localhost:4000")
})

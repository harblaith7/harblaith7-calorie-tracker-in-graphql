import {GraphQLServer} from "graphql-yoga"
import Query from "./resolvers/Query"
import Tab from "./resolvers/Tab"
import User from "./resolvers/User"
import Reaction from "./resolvers/Reaction"
import db from "./db"


const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers : {
        Query,
        Tab,
        User,
        Reaction
    },
    context : {
        db
    }
})


server.start(() => {
    console.log("Server is running on localhost:4000")
})

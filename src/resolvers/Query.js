

const Query = {

    users(parent, args, {db}, info) {

        if(args.id){
            const userExists = db.users.some(user => {
                return user.id === args.id
            })

            if(!userExists){
                throw new Error("No user with such ID")
            }

            return db.users.filter(user => {
                return user.id === args.id
            })
        }
        return db.users
    },

    tabs(parent, args, {db}, info) {
        
        if(args.id){

            const tabExists = db.tabs.some(tab => {
                return tab.id === args.id
            })

            if(!tabExists){
                throw new Error("No tab with such ID")
            }

            return db.tabs.filter(tab => {
                return tab.id === args.id
            })

        }

        return db.tabs

    },

    reactions(parent, args, {db}, info) {
        return db.reactions
    }
}








export default Query
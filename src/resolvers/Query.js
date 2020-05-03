

const Query = {

    user(parent, args, {db}, info) {

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
    }
}








export default Query
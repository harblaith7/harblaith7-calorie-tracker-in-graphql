

const Query = {

    user(parent, args, {db}, info) {
        return db.users
    }

}




export default Query
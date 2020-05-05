// the parent is the individual post object

const Tab = {
    user(parent, args, {db}, info){
        return db.users.find((user) => {
            return user.id === parent.user
        })
    },

    reactions(parent, args, {db}, info) {
        return db.reactions.filter(reaction => {
            return parent.id === reaction.tab
        })
    }
}

export default Tab
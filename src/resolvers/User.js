const User = {

        tabs(parent, args, {db}, info) {
            return db.tabs.filter(tab => {
                return tab.user === parent.id
            })
        },

        reactions(parent, args, {db}, info) {
            return db.reactions.filter(reaction => {
                return parent.id === reaction.user
            })
        }
}


export default User
const Reaction = {

    user(parent, args, {db}, info){
        return db.users.find(user => {
            return user.id === parent.user
        })
    },

    tab(parent, args, {db}, info){
        return db.tabs.find(tab => {
            return tab.id === parent.tab
        })
    }
}

export default Reaction
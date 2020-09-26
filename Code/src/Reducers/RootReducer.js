const initstate = {
    posts: [
        {id: "1", title: "Squirtle Squish", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum omnis quia ratione praesentium, adipisci asperiores, nemo autem expedita cum perspiciatis sit earum deserunt fugit odio sapiente laboriosam hic placeat?"},
        {id: "2", title: "Charmander learned ember", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum omnis quia ratione praesentium, adipisci asperiores, nemo autem expedita cum perspiciatis sit earum deserunt fugit odio sapiente laboriosam hic placeat?"},
        {id: "3", title: "Bulba being cute", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum omnis quia ratione praesentium, adipisci asperiores, nemo autem expedita cum perspiciatis sit earum deserunt fugit odio sapiente laboriosam hic placeat?"}
    ]
}

const RootReducer = (state = initstate, action) => {
    if(action.type === "DeletePost") {
        let newState = state.posts.filter(post => {
            return action.id !== post.id
        });
        
        return {
            ...state,
            posts: newState
        }
    }

    if(action.type === "AddPost") {
        let objToAdd = {id: action.id, title: action.title, body: action.body};
        let newState = [...state.posts,objToAdd];

        return {
            ...state,
            posts: newState
        }
    }

    return state;
}

export default RootReducer;
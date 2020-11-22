const initState = {
    posts:[
        {'id':'1', 'title':'title1', 'body':'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
        {'id':'2', 'title':'title2', 'body':'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
        {'id':'3', 'title':'title3', 'body':'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'}
    ]
}
const sampleReducer = (state = initState,action) => {
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPost
        }
    }
    return state;
}


export default sampleReducer;
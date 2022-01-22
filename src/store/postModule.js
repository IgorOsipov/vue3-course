import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 20,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'By Title'},
            {value: 'body', name: 'By Body'},
        ],
    }),
    getters:{
        sortedPosts(state){
            return [...state.posts].sort((p1, p2) => p1[state.selectedSort]?.localeCompare(p2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations:{
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostsLoading = bool;
        },
        setPage(state,page){
            state.page = page;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        }
    },
    actions:{
        async fetchPosts({state, commit}){
            try {
                 commit('setLoading', true);
                 const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                     params: {
                         _page: state.page,
                         _limit: state.limit
                     }
                 });
                 commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit));
                 commit('setPosts', responce.data);
            } catch (error) {
                console.log(error)
            }finally{
                commit('setLoading', false);
            }
        },
        async loadedMorePosts({state, commit}){
            try {
                 commit('setPage', ++state.page);
                 const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                     params: {
                         _page: state.page,
                         _limit: state.limit
                     }
                 });
                 commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit));
                 commit('setPosts', [...state.posts, ...responce.data]);
            } catch (error) {
                console.log(error)
            }
        }
    },
    namespaced: true
}
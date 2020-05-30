export default {
    state: {
        article: []
    },
    getters: {
        getArticleFormGetters(state) { //take parameter state
            return state.article
        }
    },
    actions: {
        allArticleFromDatabase(context) {
            axios.get("api/article")
                .then((response) => {
                    console.log(response.data.articles)
                    context.commit("articles", response.data.articles) //articles will be run from mutation
                })
                .catch(() => {
                    console.log("Error........")
                })
        }
    },
    mutations: {
        articles(state, data) {
            return state.article = data
        }
    }
}

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">

                    <div class="panel-body">
                        <div v-for="item in getAllArticle">
                            <h2>{{ item.title}}</h2>
                            <p>{{ item.body}}</p>
                        </div>
                    </div>
                    <div class="panel-footer">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "List",
        mounted() {
            this.$store.dispatch("allArticleFromDatabase")
        },
        computed: {
            getAllArticle() { //final output from here
                return this.$store.getters.getArticleFormGetters
            }
        },
    };
</script>

<style scoped>
</style>

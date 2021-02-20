<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Laravel vue-infinite-loading</div>

                    <div class="panel-body">
                    <div class="row">
                       <div class="col-md-6 overflow-auto" style="height: 80vh;">
                       
                        <div v-for="(item, $index) in list" :key="$index">
                            <h2>{{ item.id }} -- {{ item.title}}</h2>
                            <p>{{ item.body}}</p>
                        </div>
                         <infinite-loading @infinite="infiniteHandler"></infinite-loading>
                        <div>
                       
                        </div>
                          <div class="col-md-6">
                             Hello 3 
                          </div>
                          </div>
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
    import axios from 'axios';

    const api = 'http://localhost:8000/posts';

    export default {
        data() {
            return {
                page: 1,
                list: [],
            };
        },
        methods: {
            infiniteHandler($state) {
                axios.get(api, {
                    params: {
                        page: this.page,
                    },
                }).then(({ data }) => {
                    if (data.data.length) {
                        this.page += 1;
                       // this.list.unshift(...data.data.reverse());
                       this.list.push(...data.data);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
            },
        },
    };
</script>

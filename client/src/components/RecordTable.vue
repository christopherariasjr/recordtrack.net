<template>
    <div class="px-auto">
        <div v-for="item in records" :key="item.album">
            <v-container>
                <v-card min-width="300" max-width="400">
                    <v-list-item three-linw>
                        <v-list-item-content>
                            <div class="overline mb-4">
                                {{item.artist}}
                            </div>
                            <v-list-item-title class="headline mb-1">
                                {{item.album}}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>
                    <v-card-actions>
                        <v-btn outlined text>
                            Edit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data: () => {
            return {
                records: [{
                    album: "I sing songs",
                    artist: "the holes",
                    artworkURL: ""
                }, {
                    album: "I sing songs",
                    artist: "the holes",
                    artworkURL: ""
                }, {
                    album: "I sing songs",
                    artist: "the holes",
                    artworkURL: ""
                }, {
                    album: "I sing songs",
                    artist: "the holes",
                    artworkURL: ""
                }]
            }
        }
    })
</script>

<style>

</style>
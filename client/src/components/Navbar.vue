<template>
    <div>
        <v-app-bar
        dark
        color="primary"
        >
            <v-toolbar-title dark>Record Track</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="user.email !== ''">
                <v-menu
                bottom
                min-width="200px"
                offset-y
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            x-large
                            v-on="on"
                        >
                            <v-avatar
                            color="white"
                            size="40"
                            >
                                <img
                                    :src="user.avatarUrl"
                                    :alt="`${user.firstName} ${user.lastName}`"
                                >
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-list-item-content class="justify-center">

                        </v-list-item-content>
                    </v-card>
                </v-menu>
            </div>
            <div v-else>
                <v-btn
                color="secondary"
                >
                    Login
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'Navbar',
        data: () => {
            return {
            }
        },
        components: {
        },
        methods: {
        },
        computed: {
            user() {
                return this.$store.getters.getUser
            }
        }
    })
</script>

<style lang="scss">

</style>
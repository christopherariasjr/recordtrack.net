<template>
  <div>
    <b-modal  v-model="modalOpen">
        <h4 class="text-left mb-3">Login</h4>
        <b-form>
            <b-form-group
            label="Email address:"
            >
                <b-form-input
                type="email"
                size="lg" 
                placeholder="Email"
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="First Name:"
            >
                <b-form-input
                type="text"
                size="lg" 
                placeholder="First Name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Last Name:"
            >
                <b-form-input
                type="text"
                size="lg" 
                placeholder="Last Name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Password:"
            >
                <b-form-input
                type="password"
                size="lg" 
                placeholder="Password"
                ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Password Again:"
            >
                <b-form-input
                type="password"
                size="lg" 
                placeholder="Password"
                ></b-form-input>
            </b-form-group>
        </b-form>

        <template  #modal-footer="{cancel, ok}">
            <b-button @click="cancel()">Cancel</b-button>
            <b-button  @click="ok()">Submit</b-button>
        </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => {
        return {
            modalOpen: false
        }
    },
    methods: {
        openModal(){
            this.modalOpen = true;
        },
        closeModal(){
            this.modalOpen = false;
        },
        submit(){
            this.modalOpen = false;
        }
    }
})
</script>

<style>

</style>
<template>
        <ion-img
            v-if="loading"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
        ></ion-img>
        <ion-list v-else >
            <ion-item v-for = "account in accounts">
                <ion-label >{{account.id}} - {{account.accountName}}</ion-label>
            </ion-item>
        </ion-list>
</template>

<script lang="ts">
import * as IonicComponents from '@/ionic/ionic.components'
import store from '@/store/index'
import { mapActions } from 'vuex'
import {Account} from '../types/home.type'

export default {

    name: 'test',
    components: {
        ...IonicComponents
    },
    data() {
        return {
            loading: false,
            accounts:[] as Account[],
        }
    },
 
    computed:{

        products() {
            // return store.state.status === 'success'
        }
    },
    methods: {

        ...mapActions("home",["getAccount"])

    },
    async created() {

        this.loading = true

        await store.dispatch('fetchProducts')

        .then(()=> this.loading = false)

    },

    mounted(){

        this.getAccount();
    },


}
</script>
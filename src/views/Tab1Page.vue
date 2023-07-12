<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
        </ion-toolbar>
        <ion-title size="large">Tab 1</ion-title>
      </ion-header>

      <!-- search bar -->
        <ion-searchbar color="secondary" placeholder="Search flower here......"></ion-searchbar>

        <!-- List Item -->
        <ion-list >
          <ion-item v-for = "product in products">
            <ion-label >{{product.id}} - {{product.title}}</ion-label>
          </ion-item>
        </ion-list>

        <!-- Card image -->
        <ion-card>
          <img alt="card1.title" :src="card1.media" />
          <ion-card-header>
            <ion-card-title>{{ card1.title }}</ion-card-title>
            <ion-card-subtitle>{{card1.subtitle}}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            {{ card1.description }}
          </ion-card-content>
          <ion-button color="secondary" expand="full">Don't touch me</ion-button>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import * as IonicComponents from '@/ionic/ionic.components';
import flower from '@/api/flower.js'

export default defineComponent ({
    name:  'Tab1Page',
    components: {
      ...IonicComponents, 
    },
    setup(){
      const card1 = reactive({
        media: 'https://media.istockphoto.com/id/1199211598/photo/pink-fresh-tulips.jpg?s=612x612&w=0&k=20&c=ql2FsqL6Xx5HdW3BO1rcFy94aq_bwtBlSWfAoF8tUZQ=',
        title: 'Tulip Flower',
        subtitle: 'Meaning of tulip flower',
        description: 'Tulip flower is represent for  perfect and deep love.As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love'
      })
      return {
        card1
      } 
    },
    data() {

      return {

        products:[]

      }

    },

    created() {
      
      flower.getProducts( (products: any) => {

        this.products = products

      })

    }

});
</script>

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
        <ProductsList />

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
import ProductsList from '@/components/ProductsList.vue';

export default defineComponent ({
    name:  'Tab1Page',
    components: {
      ...IonicComponents, 
      ProductsList
    },
    setup(){
      const card1 = reactive({
        media: 'https://docs-demo.ionic.io/assets/madison.jpg',
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

    }

    },

});
</script>

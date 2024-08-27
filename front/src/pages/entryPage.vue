<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {useRoute } from 'vue-router';

const route = useRoute();
const fichas = ref({});

onMounted(() => fetchMediaEntry())

async function fetchMediaEntry() {
  const cardId = route.params.id

  try {
    const response = await axios.get(`api/mediaEntry/${cardId}`)
    fichas.value = response.data
  } catch (error) {
    console.error('Error fetching ficha details:', error);
    // Manejo del error si es necesario
  }
}

</script>

<template>
  <q-page padding>
    <q-card class="my-card">
      <q-img :src="fichas.image" class="card-image">
        <template v-slot:loading>
          <div class="q-pa-md">
            <q-spinner color="primary" />
          </div>
        </template>
      </q-img>

      <q-card-section>
        <div class="text-h5">{{ fichas.title }}</div>
        <div class="text-subtitle2 text-grey">
          {{ fichas.category }}
        </div>

        <div class="row items-center q-gutter-sm">
          <q-rating :value="fichas.rating" readonly color="orange" />
          <q-badge color="primary" :label="fichas.rank" />
        </div>

        <q-separator />

        <div class="row items-center q-gutter-md">
          <q-btn label="AGREGAR A LA BIBLIOTECA" outline color="primary" class="full-width" />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Acerca</div>
        <q-separator />
        <div class="text-body1">
          <p><strong>Sinopsis</strong></p>
          <p>{{ fichas.synopsis }}</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<style lang="scss" scoped>
.card {
    width: 150px;

    a {
        text-decoration: none;
    }

    .q-img {
        transition: 0.3s;
    }

    .q-img:hover {
        opacity: 0.5;
    }
}

body.screen--xl,
body.screen--lg {
    .col.cover-uploader {
        max-width: 300px;
        margin-right: 30px;

        .q-img {
            width: 300px;
        }
    }
}

.card-image {
  width: 150px;  /* Ancho deseado */
  height: auto; /* Mantiene la proporción de aspecto */
  max-height: 200px; /* Ajusta el alto máximo si es necesario */
}
</style>
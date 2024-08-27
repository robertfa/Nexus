<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import {useRouter } from 'vue-router';

const router = useRouter()
const fichas = ref([])

onMounted(() => fetchMediaEntry())

async function fetchMediaEntry() {
	const response = await axios.get('api/mediaEntry')
	fichas.value = response.data
}

function verDetalles(id) {
  router.push({ name: 'entryPage', params: { id: id } });
}

function editarFicha(id) {
  router.push({ name: 'editEntryPage', params: { id: id } });
}
</script>

<template>
  <q-page>
    <q-list bordered>
      <q-item v-for="ficha in fichas" :key="ficha.id" clickable @click="verDetalles(ficha.id)">
        <q-item-section avatar>
          <q-avatar>
            <img :src="ficha.cover" alt="Cover">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ ficha.title }}</q-item-label>
          <q-item-label caption>{{ ficha.synopsis }}</q-item-label>
        </q-item-section>
        <q-item-section side right>
          <q-btn 
            flat 
            round 
            icon="edit" 
            @click.stop="editarFicha(ficha.id)" 
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useQuasar, useDialogPluginComponent } from 'quasar'
import {useRouter } from 'vue-router';

const router = useRouter()
const quasar = useQuasar()

const newMediaEntry = ref({
    title: '',
    cover: '',
    synopsis: '',
})

async function saveNewMediaEntry() {
    const formData = newMediaEntry.value;

    const response = await axios.post('api/mediaEntry', formData)
    quasar.notify({
        message: 'Collection created',
        type: 'positive',
        icon: 'check',
    })

    onDialogOK(response.data)
}
</script>

<template>
  <q-page>
    <q-form @submit="saveNewMediaEntry">
      <q-input v-model="newMediaEntry.title" label="Título" />
      <q-input v-model="newMediaEntry.cover" label="URL de la portada" />
      <q-input v-model="newMediaEntry.synopsis" label="Sinopsis" />

      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useQuasar, useDialogPluginComponent } from 'quasar'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const quasar = useQuasar()

onMounted(() => fetchMediaEntry())

const ficha = ref({
    title: '',
    cover: '',
    synopsis: '',
})

async function fetchMediaEntry() {
  const response = await axios.get(`api/mediaEntry/${route.params.id}`)
  ficha.value = response.data
}

// Función para guardar los cambios

async function saveNewMediaEntry() {
  try {
    const response = await axios.put(`api/mediaEntry/${route.params.id}`, ficha.value);
    quasar.notify({
      message: 'Changes saved successfully',
      type: 'positive',
      icon: 'check'
    });
    // Opcional: Redirigir después de guardar
   // router.push({ name: 'mediaEntryDetails', params: { id: route.params.id } });
  } catch (error) {
    quasar.notify({
      message: 'Error saving changes',
      type: 'negative',
      icon: 'error'
    });
  }
}

</script>

<template>
  <q-page>
    <q-form @submit.prevent="saveNewMediaEntry">
      <q-input v-model="ficha.title" label="Título" />
      <q-input v-model="ficha.cover" label="URL de la portada" />
      <q-input v-model="ficha.synopsis" label="Sinopsis" />

      <q-btn type="submit" label="Guardar" color="primary" />
    </q-form>
  </q-page>
</template>
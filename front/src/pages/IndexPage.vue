<script setup>
import { ref } from 'vue'
import axios from 'axios'

const mensaje = ref('holaaaa')
let prueba = 'proba'

function pulsar() {
    mensaje.value = 'si'
}
function pulsarPrueba() {
    prueba = 'prueba'
}

const ficha = ref()
async function llamada() {
    const result = await axios.get('api/ficha')
    ficha.value = result.data
}
</script>

<template>
    <q-page class="flex flex-center">
        {{ mensaje }}
        <div class="q-pa-md q-gutter-sm">
            <q-btn @click="pulsar" color="white" text-color="black" label="Standard" />
            <q-btn @click="pulsarPrueba" color="white" text-color="black" label="Prueba" />
            {{ prueba }}
            <q-btn @click="llamada" color="blue" text-color="black" label="Prueba" />
            {{ ficha }}
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {useRouter } from 'vue-router';

const router= useRouter()

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
    const result = await axios.get('api/mediaEntry/mediaEntry')
    ficha.value = result.data
}

async function redireccionar() {
   // await router.push('/books')
   await router.push({name:'mediaEntryPage'})
}

</script>

<template>
    <q-page class="flex flex-center">
        {{ mensaje }}
        <div class="q-pa-md q-gutter-sm">
            <q-btn @click="pulsar" color="white" text-color="black" label="pulsar" />
            <q-btn @click="pulsarPrueba" color="white" text-color="black" label="pulsarPrueba" />
            {{ prueba }}
            <q-btn @click="llamada" color="blue" text-color="black" label="llamada" />
            {{ ficha }}
        </div>
        <div class="q-pa-md q-gutter-sm">
            <q-btn  to="/books" color="yellow" text-color="black" label="Prueba" />
             <router-link to="/books">libros</router-link>
        </div>
    <div>
        <q-btn @click="redireccionar" color="blue" text-color="black" label="Redireccionar" />
    </div>

    <div>
        <q-btn :to="{name:'mediaEntryPage'}" color="blue" text-color="black" label="Ver Fichas" />
    </div>
    <div>
        <q-btn :to="{name:'newMediaEntryPage'}" color="blue" text-color="black" label="Insertar ficha" />
    </div>
    <div>
        <q-btn :to="{name:'entryPage'}" color="blue" text-color="black" label="Ficha" />
    </div>
    </q-page>
</template>

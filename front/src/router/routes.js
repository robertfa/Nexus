
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/mediaEntry', name: 'mediaEntryPage', component: () => import('pages/mediaEntryPage.vue')},
      { path: '/newMediaEntryPage', name: 'newMediaEntryPage', component: () => import('pages/newMediaEntryPage.vue')},
      { path: '/entryPage/:id', name: 'entryPage', component: () => import('pages/entryPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

export default routes

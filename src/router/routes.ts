import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/modules/home/pages/HomePage.vue'),
    name: 'home',
  },
  {
    path: '/login',
    component: () => import('src/modules/auth/pages/LoginPage.vue'),
    name: 'login',
  },

  {
    path: '/dashboard',
    component: () => import('src/modules/layouts/DashboardLayout.vue'),
    name: 'dashboard',
    children: [
      {
        path: '',
        component: () =>
          import('src/modules/dashboard/pages/DashboardPage.vue'),
        name: 'dashboard-home',
      },
      //Usuarios *************************
      {
        path: '/usuarios',
        component: () => import('src/modules/user/pages/ListarUsuario.vue'),
        name: 'listar-usuario',
      },
      {
        path: '/usuarios/:id',
        component: () => import('src/modules/user/pages/VerUsuario.vue'),
        name: 'ver-usuario',
      },
      {
        path: '/usuarios/crear',
        component: () => import('src/modules/user/pages/CrearUsuario.vue'),
        name: 'crear-usuario',
      },
      {
        path: '/usuarios/:id/editar',
        component: () => import('src/modules/user/pages/EditarUsuario.vue'),
        name: 'editar-usuario',
      },

      //Usuarios Departamentos
      {
        path: '/departamentos',
        component: () =>
          import('src/modules/departamentos/pages/ListarDepartamento.vue'),
        name: 'listar-departamento',
      },
      {
        path: '/departamentos/:id',
        component: () =>
          import('src/modules/departamentos/pages/VerDepartamento.vue'),
        name: 'ver-departamento',
      },
      {
        path: '/departamentos/crear',
        component: () =>
          import('src/modules/departamentos/pages/CrearDepartamento.vue'),
        name: 'crear-departamento',
      },
      {
        path: '/departamentos/:id/editar',
        component: () =>
          import('src/modules/departamentos/pages/EditarDepartamento.vue'),
        name: 'editar-departamento',
      },

      //Usuarios Carreras
      {
        path: '/carreras',
        component: () => import('src/modules/carreras/pages/ListarCarrera.vue'),
        name: 'listar-carrera',
      },
      {
        path: '/carreras/:id',
        component: () => import('src/modules/carreras/pages/VerCarrera.vue'),
        name: 'ver-carrera',
      },
      {
        path: '/carreras/crear',
        component: () => import('src/modules/carreras/pages/CrearCarrera.vue'),
        name: 'crear-carrera',
      },
      {
        path: '/carreras/:id/editar',
        component: () => import('src/modules/carreras/pages/EditarCarrera.vue'),
        name: 'editar-carrera',
      },
    ],
  },
  {
    path: '/administracion',
    component: () => import('src/modules/layouts/EstudianteLayout.vue'),
    name: 'layout-estudiante',
    children: [
      {
        path: '',
        component: () =>
          import(
            'src/modules/layouts/components/estudiante/DashboardEstudiante.vue'
          ),
        name: 'dashboard-estudiante',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/modules/errors/ErrorNotFound.vue'),
    name: 'not-found',
  },
];

export default routes;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../components/header/form.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/addrestaurant",
    name: "addrestaurant",
    meta: {
      requiresGuest: true
    },
    component: () => import("../components/restaurant/addrestaurant.vue")
  },
  {
    path: "/my-order",
    name: "Order",
    component: () => import("../components/header/my-order.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/admin/AdminLogin.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/adminDasboard",
    name: "AdminDashboard",
    meta: {
      requiresAuth: true
    },
    component: () => import("../components/admin/AdminDashboard.vue")
  },
  {
    path: "/driverDetails",
    name: "DriverDetails",
    meta: {
      requiresAuth: true
    },
    component: () => import("../components/driver/DriverDetails.vue")
  },
  {
    path: "/restaurantDetails",
    name: "restaurantDetails",
    meta: {
      requiresAuth: true
    },
    component: () => import("../components/admin/restaurant/restaurantlist.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//check all router for auth
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.adminData) {
      next("/admin");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (localStorage.adminData) {
      next("/adminDasboard");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

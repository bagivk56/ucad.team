<template>
  <client-only>
    <section class="mb-6">

    </section>
  </client-only>
</template>



<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { path: "/", title: "Главная" },
        { path: this.$route.path, title: this?.error?.statusCode || "Ошибка" },
      ],
    };
  },
  props: ["error"]
};
</script>

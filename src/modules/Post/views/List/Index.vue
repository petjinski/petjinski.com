<script>
import Markdown from '@/components/Components/Markdown.vue';
import MainLayout from '@/components/Layouts/Main.vue';
import blogPost from './../../assets/markdown/2018-07-06_19.12.00.md';

export default {
  name: 'PostListView',
  components: {
    MainLayout,
    Markdown,
  },

  data() {
    return {
      blogPost,
    };
  },
};
</script>

<template>
  <MainLayout>
    <Markdown :input="blogPost"/>
  </MainLayout>
</template>

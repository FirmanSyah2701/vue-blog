<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
          <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                  <div class="site-heading">
                      <h1>Clean Blog</h1>
                      <span class="subheading">Posts by tag</span>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <!-- Main Content-->
  <div class="container">
      <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
              <div v-if="error">{{ error }}</div>
              <div v-if="posts.length">
                <PostList :posts="postsWithTag" />
              </div>
              <div v-else> <Loading /> </div>
          </div>
      </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
import Loading from '@/components/Loading'
import getPosts from '@/composable/getPosts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Tag',
  components: {
    PostList, Loading
  },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const postsWithTag = computed(() => {
        return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })

    return { posts, postsWithTag, error }
  }
}
</script>

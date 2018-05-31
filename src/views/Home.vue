<template>
  <div>
    Home
    <my-modal>
      <div slot='title'>Titulo da modal</div>
      <div slot='body'>
        corpo da modal
      </div>
    </my-modal>
  </div>
</template>

<script>
import MyModal from 'comp/MyModal'

export default {
  name: 'Home',
  components: {
    MyModal
  }
}
</script>

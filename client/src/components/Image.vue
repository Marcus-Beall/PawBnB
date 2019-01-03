<!-- <template>
  <div class="container">
    <h2>Upload file</h2>
    <vue-base64-file-upload class="v1" 
      accept="image/png,image/jpeg" 
      image-class="v1-image" 
      input-class="v1-image" 
      :max-size="customImageMaxSize"
      @size-exceeded="onSizeExceeded" @file="onFile" @load="onLoad" />
  </div>
</template>

<script>
import VueBase64FileUpload from 'vue-base64-file-upload';
  
  export default {
    name: 'image',
    components: {
      VueBase64FileUpload,
      Image
    },
    data() {
      return {
        customImageMaxSize: 3 //megabyte
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {

      onFile(file) {
        console.log(file); // file object
      },

      onLoad(dataUri) {
        console.log(dataUri); // data-uri string
      },

      onSizeExceeded(size) {
        alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
      }
    }
  }

</script> -->
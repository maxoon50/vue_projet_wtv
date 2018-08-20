/* <template>
    <div class="flex wrap flexCenter mb-xxl mt-xxl" id="form">
            <form action="" class="flex" @submit.prevent="getFormValues">
              <label for="titre" class="m-b">Titre : <input type="text" id="titre"></label>
               <label for="image" class="m-b"><input type="file" id="image"></label>
                <label for="resume" class="m-b"><textarea name="resume" id="resume" cols="30" rows="10"></textarea></label>
                   <button >submit</button>
            </form>
    </div>
</template>


<script>
  const FILMS_API = 'http://localhost:8005/film/';
  import axios from 'axios';

export default {
  name: "Form",
  components: {},
  data: function() {
    return {};
  },
  methods: {
      getFormValues(e){
        let elements = e.target.elements;
        let titre = elements.titre.value;
        let resume = elements.resume.value;
        axios.post(
            FILMS_API,
        {
    titre,
    resume
    },
   {headers: {"Content-Type": "application/json"}})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

      }
  },
  watch: {}
};
</script>

<style lang="less" scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: whitesmoke;
  border-radius: 4px;
  margin: 50px;
}

.m-b {
  margin-bottom: 20px;
}
.hide {
  display: none !important;
}

.show {
  display: flex !important;
}

.half {
  width: 50%;
}

#film-cont {
  max-height: 450px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}

.animation {
  transition-duration: 1s;
  transform: translate3d(-50%, 0, 0);
}

.endanimation {
  transition-duration: 1s;
  transform: translate3d(-0%, 0, 0);
}
</style>
 */
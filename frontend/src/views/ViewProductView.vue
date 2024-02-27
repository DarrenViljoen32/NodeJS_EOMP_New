<template>
    <div class="View">
        <br><br><br>
        <h1>View Product</h1>

        <!-- <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                
                
              <div class="row">
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod1</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                   
              </div>

            </div>
          </div>
        </div>
        <br><br><br> -->

        <div class="row" v-for="x in foods">
          <div class="col-lg-6">
            <br>
            <p>Name: {{ x.name }}</p>
            <p>Description: {{ x.desc }}</p>
            <p>Category: </p>
            <p>Ammount: R???</p>
          </div>

          <div class="col-lg-6">
            <img v-bind:src= x.url alt="">
            <br><br><br>
          </div>
        </div>

    </div>
</template>
<script>
import SlotComp from '@/components/CardSlots.vue'
import Spinner from '@/components/Spinner.vue'

export default{
    data(){
    return{
      foods: [
          { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'},
          { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'},
          { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'},
          { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'},
          { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'},
          { name: 'Sandwich', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg'}
        ]
    }
  },
    components:{
        SlotComp,
        Spinner
    }
}

</script>
<style scoped>
*{
  color: black;
  padding-left: 5%;
  padding-right: 5%;
}
.View{
  background-color: rgba(136, 136, 136, 0.181);
  margin-top: 5%;
  margin-bottom: 0%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  padding-bottom: 10%;
}
img{
  width: 550px;
}
h1{
  font-weight: bold;
}

.vr{
  width: 1px;
  color: rgba(0, 0, 0, 0);
  border-right: 2px solid #000000;
}

@media screen and (max-width: 1080px) {
  .card{
    margin-left: 20%;
  }
}
@media screen and (max-width: 768px) {
  .card{
    margin-left: 20%;
  }
}
</style>

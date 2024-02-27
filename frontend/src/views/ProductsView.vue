<template>
    <div class="View">
        <br><br><br>
        <h1>Products</h1>
        <br><br><br> 
        
        <!-- <h3>Preview</h3>

        <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
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
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod2</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                  
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod3</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                  
              </div>
                
                
                
            </div>

            <div class="carousel-item">
                
                
                
              <div class="row">
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod4</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod5</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                  
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod6</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                  
              </div>
            
                
            </div>
            
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
        <br><br><br> -->

        
        <h3>All Products</h3>
        <br><br>
        <p>Deluxe Café isn't just about drinks. The menu features a mouthwatering array of pastries, baked goods, and light bites, all made in-house with the finest ingredients. From flaky croissants to decadent cakes, there's something to satisfy every craving.</p>
        <br><br>
        
        <slot-comp></slot-comp>
        
    </div>
</template>

<script>
import SlotComp from '@/components/CardSlots.vue'
import Spinner from '@/components/Spinner.vue'

export default{
  data(){
    return{
      prodName: null,
      amount: null,
      Category: null,
      prodUrl: null
    }
  },
  computed:{
    getProduct(){
      this.$store.dispatch('getProduct')
    }
  },
  mounted(){
    this.getProduct
  },
  components:{
    'slot-comp': SlotComp,
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

</style>

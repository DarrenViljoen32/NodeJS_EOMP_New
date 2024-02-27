<template>
    <div>
        <slot>
        <div class="row">
            
            <div class="col-lg-4" v-for="item in $store.state.products" :key='item'>
                <div class="card"  style="width: 18rem;">
                    <img v-bind:src="item.prodUrl" alt="">
                    <h5>{{ item.prodName }}</h5>
                    <p>R{{ item.amount }}</p>
                    <p>Category: {{ item.Category }}</p>
                    <button >View</button>
                  </div>
                </div>
                
              </div>
            </slot>
    </div>
</template>

<script>

</script>

<style scoped>

.card{
  margin-top: 5%;
  margin-bottom: 18%;
  padding-bottom: 5%;
  padding-left: 2%;
  height: 450px;
}
img{
  padding-top: 3%;
  padding-right: 0%;
  padding-left: 0%;
  margin-left: 0%;
  margin-bottom: 5%;
  width: 250px;
  height: 200px;
}
h1{
  font-weight: bold;
}
h5{
  font-weight: bold;
}
a{
  text-align: center;
  align-items: center;
}

button{
      background-color: #ffffff;
      color: rgb(0, 0, 0);
      height: 55px;
      border-radius: 10px;
      margin-top: 10%;
      margin-left: 35%;
      margin-right: 5%;
      margin-bottom: 0%;
    }
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }

</style>
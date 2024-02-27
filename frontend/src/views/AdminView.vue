<template>
    <div class="View">
        <br><br><br>
        <h1>Administration</h1>

        <button class="outsideButtons">Sort</button>
        <br><br>
        <h2>Products</h2>
        <br><br>
        <button class="outsideButtons" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
        <br><br>


        <!-- Add Products Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Products</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="prodName" id="prodName" placeholder="Name" v-model="prodName">
                <br><br>
                <input type="text" name="amount" id="amount" placeholder="Amount" v-model="amount">
                <br><br>
                <input type="text" name="Category" id="Category" placeholder="Category" v-model="Category">
                <br><br>
                <input type="text" name="prodUrl" id="prodUrl" placeholder="Image Url" v-model="prodUrl">
                <br><br>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addProduct">Add</button>
              </div>
            </div>
          </div>
        </div>


        <!-- Edit Products Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="prodName" id="prodName" placeholder="Name" v-model="prodName">
                <br><br>
                <input type="text" name="amount" id="amount" placeholder="Amount" v-model="amount">
                <br><br>
                <input type="text" name="Category" id="Category" placeholder="Category" v-model="Category">
                <br><br>
                <input type="text" name="prodUrl" id="prodUrl" placeholder="Image Url" v-model="prodUrl">
                <br><br>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="editProduct">Save</button>
              </div>
            </div>
          </div>
        </div>

        

        <table class="table">

          <thead>
            <tr class="table-dark">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Image Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="item in $store.state.products" :key="item">
            <tr>
              <td>{{ item.prodID }}</td>
              <td>{{ item.prodName }}</td>
              <td></td>
              <td>R{{ item.amount }}</td>
              <td>{{ item.Category }}</td>
              <td><img v-bind:src= "item.prodUrl" alt="productImage"></td>
              <td>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal2">Edit</button>
                <br><br>
                <button @click="deleteItem(item.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <br><br><br>

        <h2>Users</h2>
        <button class="outsideButtons">Add User</button>
        <br><br>
        
        <table class="table">

          <thead>
            <tr class="table-dark">
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Profile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>Edit</button>
                <br><br>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>

        </table>

    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'

export default{
  data(){
    return{
      prodID: null,
      prodName: null,
      amount: null,
      Category: null,
      prodUrl: null,
      showModal: false
    }
  },
  computed:{
    getProduct(){
      this.$store.dispatch('getProduct')
    }
  },
  methods:{
    addProduct(){
      console.log(this.$data);
      this.$store.dispatch('getPost', this.$data)
    },
    deleteItem(prodName){
      this.$store.dispatch('deleteItem', prodName)
    },
    editProduct(prodID){
      let edit = {
        prodID: prodID,
        prodName: this.prodName,
        amount: this.amount,
        Category: this.Category,
        prodUrl: this.prodUrl
      }
      console.log(edit);
      this.$store.dispatch('getPatch', edit)
    },
    closeModal(){
      this.showModal = false;
    }
  },
  mounted(){
    this.getProduct
  },
    components:{
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
h1, h5{
  font-weight: bold;
}
.outsideButtons{
  text-align: justify;
  width: 40px;
  margin-left: 89%;
}
button{
      background-color: #ffffff;
      color: rgb(0, 0, 0);
      height: 55px;
      border-radius: 10px;
      text-align: center;
    }
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }
</style>

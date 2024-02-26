<template>
    <div class="View">
        <br><br><br>
        <h1>Administration</h1>

        <button>Sort</button>
        <br><br>
        <h2>Products</h2>
        <button>Add Product</button>
        <br><br>
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
          <tbody>
            <tr>
              <th scope="row">1</th>
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
            <tr>
              <th scope="row">2</th>
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
            <tr>
              <th scope="row">3</th>
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
            <tr>
              <th scope="row">4</th>
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
            <tr>
              <th scope="row">5</th>
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
            <tr>
              <th scope="row">6</th>
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

        <br><br><br>

        <h2>Users</h2>
        <button>Add User</button>
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
            <tr>
              <th scope="row">2</th>
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
            <tr>
              <th scope="row">3</th>
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
            <tr>
              <th scope="row">4</th>
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
            <tr>
              <th scope="row">5</th>
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
            <tr>
              <th scope="row">6</th>
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

button{
      background-color: #ffffff;
      color: rgb(0, 0, 0);
      height: 55px;
      border-radius: 10px;
    }
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }
</style>

<template lang="">
        <nav class="navbar fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Deluxe Café</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <!-- Navigation using router links -->
                <div class="navbar-nav">
                    <router-link @click.native="closeNavbar" to="/" class="nav-link"><span class="bi bi-cup-hot-fill"> | </span>Home</router-link>
                    <router-link @click.native="closeNavbar" to="/about" class="nav-link"><span class="bi bi-cup-hot"> | </span>About</router-link>
                    <router-link @click.native="closeNavbar" to="/products" class="nav-link"><span class="bi bi-cup-hot-fill"> | </span>Products</router-link>
                    <router-link @click.native="closeNavbar" to="/productView" class="nav-link"><span class="bi bi-cup-hot"> | </span>View Product</router-link>
                    <router-link @click.native="closeNavbar" to="/admin" class="nav-link"><span class="bi bi-cup-hot-fill"> | </span>Admin</router-link>
                    <router-link @click.native="closeNavbar" to="/contact" class="nav-link"><span class="bi bi-cup-hot"> | </span>Contact</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    closeNavbar() {
      // Close the offcanvas navbar when a link is clicked
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  }
}
</script>

<style>
  .bi{
    color: black;
    font-size: large;
  }
  nav {
    padding: 30px;
    text-align: initial;
    /* position: sticky; */
  }
  nav a {
    font-weight: bold;
    text-decoration: none;
    padding-left: 0%;
    font-size: larger;
  }
 .navbar-nav a:hover {
    color: #ff00008f;
  }
  nav a.router-link-exact-active {
    color: red;
  }
  .navbar-nav{
    padding-left: 0%;
    padding-right: 0%;
  }
  .nav-link{
    cursor: pointer;
  }
  a.router-link-active{
    color: red;
  }
  @media screen and (min-width: 1080px) {
    .navbar-nav{
    padding-left: 0%;
    }
  }
  .navbar-toggler{
      background-color: #000000;
      color: floralwhite;
      height: 55px;
      border-radius: 10px;
    }
  .navbar-toggler:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }
</style>
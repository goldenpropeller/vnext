<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import Home from './Home.svelte'
  import Category from './Category.svelte'
  // import {cat} from './state'
</script>

<svelte:head>
   	<!-- Bootstrap -->
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous"> -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.bundle.min.js" integrity="sha384-BOsAfwzjNJHrJ8cZidOg56tcQWfp6y72vEJ8xQ9w6Quywb24iOsW913URv1IS4GD" crossorigin="anonymous"></script>
</svelte:head>

<Router>
	<Header />
  <Route path="cat/*">
    <Route path="/"><Home /></Route>
    <Route path=":id" let:params>
      <Category id={params.id} />
    </Route>
  </Route>
  <Route><Home /></Route>
  <Footer />
</Router>
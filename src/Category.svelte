<script>
  import { Router, Route, Link } from 'svelte-navigator'
</script>

<Router>
  <article>
    <Route path=":id" let:params>
      <div class="container mt-5">
        <h2>ID: {params.id}</h2>
        <p>Category Page Details</p>
        <Link to="/">Go back to the landing page</Link>
      </div>
    </Route>
  </article>
</Router>

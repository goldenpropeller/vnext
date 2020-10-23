<script>
  export let href;
  import Toast from './Toast.svelte'
  let msg = "In the future, these links will lead to other pages on the site with various features."
</script>

<li class="nav-item">
    <a class="nav-link" href="{href}" on:click={(e)=>{e.preventDefault();window.pushToast(msg)}}>
        <slot></slot>
    </a>
</li>

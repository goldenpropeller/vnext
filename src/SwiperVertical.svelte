<script>
  function titleCase(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
  }
  export let data
</script>

{#each data as boat}
<div class="card mb-3" style="width: 100%">
    <img
        class="card-img-top"
      loading="lazy"
      src={boat.media}
      alt="{boat.year}
      {boat.make}
      {boat.model}" />
      <h5 class="card-title text-center text-truncate mt-3">{boat.year} {boat.make} {boat.model}</h5>
  </div>
  {/each}

  <!-- <div> -->
    <!-- <img
      loading="lazy"
      src={boat.media}
      alt="{boat.year}
      {boat.make}
      {boat.model}" />
    <span class="badge bg-dark myinfo text-truncate">
      {boat.year} {boat.make} {boat.model}
    </span>
  </div> -->


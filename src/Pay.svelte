<script>
  import { onMount } from 'svelte'
  import { stripeSetup } from './Pay'
  const payWithCard = () => {
    console.log("paid with card!");
  }

  onMount(async () => {
    const pubkey =
      'pk_test_51HMgiZG8EwoPU4zaroyonUFtyMqmYOZ33LqToua5uCsfRJcNiGCgHNwJrQy6ES1Tezl1EtbNfC75Boqg4H1T3P6g00MMqYA4Ne'
    const stripe = Stripe(pubkey)

    const intentUrl = 'https://script.google.com/macros/s/AKfycbwF9mWf4y1VW7ydou75bOQnRdd1BBbge6MZDh-NNEIHSfsF1BU/exec?41E7DBE6-630D-47C0-8BF4-A1EFDE341DE6'
    const clientSecret = 'pi_1Hlb1mG8EwoPU4zaTYOwGGQO_secret_rUSWm1R8aI982dUS5pYzUoboB'
    //const clientSecret = await fetch(intentUrl).then(r=>r.text())
    console.log(clientSecret)

    const elements = stripe.elements()
    const card = elements.create('card')
    card.mount('#card-element')
    card.on("change", function (event) {
      // Disable the Pay button if there are no card details in the Element
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-errors").textContent = event.error ? event.error.message : "";
    });
    const form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Complete payment when the submit button is clicked
      payWithCard(stripe, card, clientSecret);
    });
  })
</script>

<style>
  #payment-form :global(input, .StripeElement) {
    color: #32325d;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 4px;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  #payment-form :global(input) {
    padding: 2rem 3rem;
  }

  #payment-form :global(input:focus, .StripeElement--focus) {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  #payment-form :global(.StripeElement--invalid) {
    border-color: #fa755a;
  }

  /* #payment-form :global(button) {
    height: 40px;
    width: 100%;
    background: #32325d;
    color: #fff;
    font-weight: 600;
  } */
</style>

<div class="container w-100">
  <br />
  <br />
  <div class="card mb-3" style="width: 100%">
    <div class=" text-center alert alert-info w-75 mx-auto my-4">
      <p class="h4">Note!</p>
      <hr />
      <p class="w-75 mx-auto">
        At this time we are only accepting donations for
        <strong>future</strong>
        services. Any payment at this time is simply a donation that may be
        applied to future services. If you have any questions, please
        <a href="mailto:richard@goldenpropeller.com">contact sales</a>
        for details for your specific account.
      </p>
    </div>
  </div>
  <div class="card mb-3" style="width: 100%">
    <div class="text-center w-75 mx-auto my-4">
      <form id="payment-form">
        <div id="card-element" />
        <div id="card-errors" role="alert" />
        <button id="submit" class="btn btn-primary my-2 w-100">
          Donate $1099
        </button>
      </form>
    </div>
  </div>

</div>

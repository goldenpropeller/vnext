export const stripeSetup = () => {

    //disable button until stripe is setup
    document.querySelector("button").disabled = true;

    const pubkey = 'pk_test_51HMgiZG8EwoPU4zaroyonUFtyMqmYOZ33LqToua5uCsfRJcNiGCgHNwJrQy6ES1Tezl1EtbNfC75Boqg4H1T3P6g00MMqYA4Ne'
    const stripe = Stripe(pubkey)
    const elements = stripe.elements()
    const card = elements.create('card')
    card.mount('#card-element')
  
    //https://script.google.com/macros/s/AKfycbwF9mWf4y1VW7ydou75bOQnRdd1BBbge6MZDh-NNEIHSfsF1BU/exec?41E7DBE6-630D-47C0-8BF4-A1EFDE341DE6

}
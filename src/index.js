const fetch = require('node-fetch');

async function getStoresNearAddress(zipCode, streetAddress) {
  const response = await fetch(`https://order.dominos.com/power/store-locator?type=Carryout&c=${zipCode}&s=${streetAddress}`, {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "dpz-language": "en",
      "dpz-market": "UNITED_STATES",
      "market": "UNITED_STATES",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-dpz-d": "ace2c1a1-7389-49a7-aadb-9b0990c71b0f"
    },
    "referrer": "https://order.dominos.com/assets/build/xdomain/proxy.html",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
  const json = await response.json();
  console.log(json);
}

getStoresNearAddress('49127', '')
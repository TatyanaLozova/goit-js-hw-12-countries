import notification from "./error-notification.js";
import refs from "./refs.js";

function fetchCountry(name) {
  refs.countryContainerRef.innerHTML = "";
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      if (refs.countrySearchRef.value.length === 0) {
        notification.errorEmptyQueryInput();
      } else {
        notification.errorQuery();
      }
    });
}
export default fetchCountry;

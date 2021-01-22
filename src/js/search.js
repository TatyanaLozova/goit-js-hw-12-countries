import fetchCountries from "./fetchCountries.js";
import notification from "./error-notification.js";
import cardCountry from "../templates/cardCountry.hbs";
import listCountries from "../templates/listCountries.hbs";
import refs from "./refs.js";

function responseHandler(input) {
  fetchCountries(input).then((array) => {
    if (array.length === undefined) {
      notification.errorNotFound();
    } else if (array.length > 10) {
      notification.errorTooManyResults();
    } else if (array.length === 1) {
      refs.countryContainerRef.innerHTML = "";
      const listCountriesTemplate = cardCountry(array);
      console.log(array);
      refs.countryContainerRef.innerHTML = listCountriesTemplate;
    } else {
      refs.countryContainerRef.innerHTML = "";
      const listCountriesTemplate = listCountries(array);
      refs.countryContainerRef.innerHTML = listCountriesTemplate;
    }
  });
}

export default responseHandler;

import debounce from "debounce-action";

import * as TYPES from "./types";
import * as api from "../../lib/api";

let create = type => payload => ({ type, payload });

export let pending = create(TYPES.PENDING);
export let resolved = create(TYPES.RESOLVED);
export let rejected = create(TYPES.REJECTED);

export function searchQuery({ query, page, limit }) {
  return async dispatch => {
    let failure = error => dispatch(rejected({ error: error.message }));
    let success = results => dispatch(resolved({ results, loading: false }));

    dispatch(pending({ query }));

    return await api
      .search({ query })
      .then(success)
      .catch(failure);
  };
}

export let search = debounce(searchQuery, 900);

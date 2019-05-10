import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails(filter) {
  return apiAction({
    url: "http://localhost:4000/graphql",
    method: "POST",
    onSuccess: setArticleDetails,
    data: filter,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_ARTICLE_DETAILS
  });
}

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = null,
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = ""
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label
    }
  };
}

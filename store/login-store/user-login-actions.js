export const SaveLoginCredsAction = (payload) => {
  return {
    type: "saveLoginCreds",
    payload
  }
}

export const UserLoginApiRequestInProgress = (payload) => {
  return {
    type: "userLoginApiRequestInProgress",
    payload
  }
}

export const UserLoginRequestApiResponseReceived = (payload) => {
  return {
    type: "userLoginRequestApiResponseReceived",
    payload
  }
}

## Pure client side js calling google api

This simple sample calls google api with no backend, by using client side OAuth.

Online demo: http://txchen.github.io/feplay/s_login/

The flow:
* redirect to google auth endpoint
* user login and confirm
* redirect back to this page, with access token in the hash
* parse the hash, verify the access token, and get the email from the verify response
* save the access token and user email in local storage
* get the access token and user email from local storage, call google tasks api
* show the tasks

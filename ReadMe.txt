MERN Auth Example to use in class

The /signUp registers you in the database
the /login prvovides a access token and a refresher token
the / sends only your data by looking at the access token 
the /token takes the refresher token and verifies it then sends a new token
the /delete/:id and /edit/:id will work the same just the added token authentication

# Back-End
#### https://buildweek-airbnb.herokuapp.com/

# /api/auth

## .post /api/auth/register 
#### https://buildweek-airbnb.herokuapp.com/api/auth/register
What is needed to register: 
< {
     "username" : "",
     "password" : ""
}


## .post /api/auth/login
#### https://buildweek-airbnb.herokuapp.com/api/auth/login 
What is needed to login: 
< {
     "username" : "",
     "password" : "" 
}


# /api/users

## .get /api/users 
#### https://buildweek-airbnb.herokuapp.com/api/users 


## .get /api/users/:id
#### https://buildweek-airbnb.herokuapp.com/api/users/:id


## .delete /api/users/:id 
#### https://buildweek-airbnb.herokuapp.com/api/users/:id 


## .put /api/users/:id
#### https://buildweek-airbnb.herokuapp.com/api/users/:id 



# /api/users/:id/property 
#### To post a new property, the user must be logged in so the property is logged under the user's account.


## .post /api/users/:id/property 
#### https://buildweek-airbnb.herokuapp.com/api/users/:id/property 
What is needed to add a new property: 
#### *NOTE: Room types must either be 'Entire home/apt' or 'Private room'* 
We should make it a radio button option or something. 
> {
     "name" : " ",
     "minimum_nights" : 1, 
     "room_type" : "Entire house/apt" OR "Private room", 
     "neighborhood" : " ",
     "neighborhood_group" : " "
}
#### user_id will automatically implement itself 

Example: 
> { name:'oceanside house', minimum_nights:1, room_type:'Entire home/apt', neighborhood:'Helmholtzplatz', neighborhood_group:'Pankow', user_id:1}


## .get /api/users/:id/property 
#### https://buildweek-airbnb.herokuapp.com/api/users/:id/property 



# /api/property 

## .get /api/property 
#### https://buildweek-airbnb.herokuapp.com/api/property 


## .get /api/property/:id 
#### https://buildweek-airbnb.herokuapp.com/api/property/:id 


## .delete /api/property/:id 
#### https://buildweek-airbnb.herokuapp.com/api/property/:id 


## .put /api/property/:id  
#### https://buildweek-airbnb.herokuapp.com/api/property/:id 
What is needed to update property: 
> {
     "name" : " ",
     "minimum_nights" : 1, 
     "room_type" : "Entire house/apt" OR "Private room", 
     "neighborhood" : " ",
     "neighborhood_group" : " "
}

---

## ENDPOINTS SUMMARY 

# User onboarding 
#### POST /api/auth/register
#### POST /api/auth/login


# Dashboard + individual property page
#### GET /api/users
#### GET /api/users/:id
#### DELETE /api/users/:id
#### PUT /api/users/:id
#### POST /api/users/:id/property
#### GET /api/users/:id/property


# User property 
#### GET /api/property
#### GET /api/property/:id
#### DELETE /api/property/:id
#### PUT /api/property/:id 


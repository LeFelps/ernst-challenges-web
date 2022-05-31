# Autenticação 
**important!** Initially, user roles (admin, manager, candidate) will be managed only and directly through the database

The authentication will at first have only two pages, login and register, as shown on the following images:

---

## Login
Screen prototype

![image](https://user-images.githubusercontent.com/34667580/170843837-c67f5749-fc86-4cc8-be22-63d61c62673d.png)

The login screen must authenticate the user’s credentials and keep him logged in.

Initially it is not necessary to create and manage an encrypted token, as it will not pose a security problem in the **academic project** stage. (try **Super tokens**)

Page redirection between login and register must be made from the link under the form.

After logging in the user is redirected to the challenges (list) page.


## **Endpoints**
## **`GET? /login`**
Payload:
```json
    {
        "username": "String",
        "password": "String"
    }
```

Response:
```json
    {
        "token": "String"
    }
```


---

## Register
Screen prototype

![image](https://user-images.githubusercontent.com/34667580/170843867-bac8304d-f7d6-4018-ac27-4ea2799db686.png)

The user register must be made from the basic information (name, email and password/confirmation).

After signup the user is redirected to the challenges (list) page.

### **Endpoints**
`POST /login`
```json
    {
        "username": "String",
        "password": "String",
        "email": "String"
    }
```

Response:
```json
    {
        "token": "String"
    }
```
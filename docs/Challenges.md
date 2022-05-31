# Challenges 

This documented section covers management and access to the application challenges.

The challenges are a core concept of this project and will be integrated on other sections, such as jobs and battles.

The contents and functions of a challenge will be listed as they appear in their respective screens.

---

## **List**

### **Description**
Screen prototype

![Challenges](https://user-images.githubusercontent.com/34667580/170929141-ac7d64a1-5f30-496b-a47f-8c8a45e492b4.png)

This page lists all available challenges, divided by category.

**If the user has the manager role:**

- An edit button is displayed in each challenge card and opens the edit page on click.
- A create button is be displayed for each category and opens the registration page on click.

## **Endpoints**
## **`GET /challenge/byCategory`**

Response:
```json
    [
        {
            "id": "Int",
            "name": "String",
            "accentColor": "String", // hex code
            "challenges": [
                {
                    "id" : "Int",
                    "title": "String",
                    "brief": "String",
                    "icon": "String" // fontawesome icon
                },
                ...
            ]
        },
        ...
    ]
```

---

## **Details**

### **Description**
Screen prototype

![Challenge view](https://user-images.githubusercontent.com/34667580/170929318-2f8dd5bf-5f9e-415a-96ea-599d8a9da8c0.png)

The challenge details page is where the challenge objectives and *"steps"* are defined, as well as the suggested technologies for execution and references, that can be documentations, interactive examples or other instructions / guidance.

Here you can submit your answers to checkpoints, flagging them as `ongoing` or `complete`, which will reflect on your profile (each checkpoint is a level).

## **Endpoints**
## **`GET /challenge/{challengeId}`**
Response:
```json
    {
        "id" : "Int",
        "title": "String",
        "brief": "String",
        "description": "String",
        "category": {
            "id": "Int",
            "name": "String",
            "accentColor": "String" // hex code
        },
        "icon": "String", // fontawesome icon
        "questions": [
            {
                "id": "String",
                "title": "String",
                "type": "PRACTICAL", // PRACTICAL or THEORICAL
                "level": "EASY", // EASY, MEDIUM or HARD
                "answers": [
                    {
                        "id": "Int",
                        "name": "String",
                        "correctAnswer": true
                    },
                    ...
                ]
            },
            ...
        ],
        "checkpoints": [
            {
                "description": "String",
                "references": [
                    {
                        "title": "String",
                        "link": "String"
                    },
                    ...
                ],
                "technologies": [
                    {
                        "id": "Int",
                        "name": "String"
                    },
                    ...
                ]
            }
        ]
    }
```
---
## **Registration / Edit**

### **Description**
Screen prototype
![Challenge new-edit](https://user-images.githubusercontent.com/34667580/170929330-7c2e474f-1f2e-4d0d-9fa0-5c0fa2490299.png)

**Obs.: This page is available only for user with the manager role**

In the registration / edit page you can create and edit challenges.

All input fields are required.

The Quizz questions will be added through a modal with the following informations:
- id Integer
- title String
- type ENUM (PRACTICAL or THEORICAL)
- level ENUM (EASY, MEDIUM or HARD)
- answers Class
    - id Int
    - name String
    - correctAnswer Boolean

## **Endpoints**
## **`POST /challenge`**

## **`PUT /challenge/{challengeId}`**
Payload:
```json
    {
        "id" : "Int",
        "title": "String",
        "brief": "String",
        "description": "String",
        "category": {
            "id": "Int",
            "name": "String",
            "accentColor": "String" // hex code
        },
        "icon": "String", // fontawesome icon
        "questions": [
            {
                "id": "String",
                "title": "String",
                "type": "PRACTICAL", // PRACTICAL or THEORICAL
                "level": "EASY", // EASY, MEDIUM or HARD
                "answers": [
                    {
                        "id": "Int",
                        "name": "String",
                        "correctAnswer": true
                    },
                    ...
                ]
            },
            ...
        ],
        "checkpoints": [
            {
                "description": "String",
                "references": [
                    {
                        "title": "String",
                        "link": "String"
                    },
                    ...
                ],
                "technologies": [
                    {
                        "id": "Int",
                        "name": "String"
                    },
                    ...
                ]
            }
        ]
    }
```

Response:
```json
    {
        "id" : "Int",
        "title": "String",
        "brief": "String",
        "description": "String",
        "category": {
            "id": "Int",
            "name": "String",
            "accentColor": "String" // hex code
        },
        "icon": "String", // fontawesome icon
        "questions": [
            {
                "id": "String",
                "title": "String",
                "type": "PRACTICAL", // PRACTICAL or THEORICAL
                "level": "EASY", // EASY, MEDIUM or HARD
                "answers": [
                    {
                        "id": "Int",
                        "name": "String",
                        "correctAnswer": true
                    },
                    ...
                ]
            },
            ...
        ],
        "checkpoints": [
            {
                "description": "String",
                "references": [
                    {
                        "title": "String",
                        "link": "String"
                    },
                    ...
                ],
                "technologies": [
                    {
                        "id": "Int",
                        "name": "String"
                    },
                    ...
                ]
            }
        ]
    }
```


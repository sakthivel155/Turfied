# Pastebin Clone

A simple **Pastebin-like backend application** built with **Spring Boot** and **PostgreSQL**.
This project allows users to create, store, and retrieve text snippets (pastes) using REST APIs.

---

##  Tech Stack

- **Java 25**
- **Spring Boot**
- **PostgreSQL**
- **Maven**

![alt text](image.png)

## Dependencies

- **spring-boot-starter-web** – For building REST APIs and web applications
- **spring-boot-starter-data-jpa** – For database interaction using JPA and Hibernate
- **postgresql** – PostgreSQL JDBC driver for database connectivity
- **spring-boot-starter-validation** – For request validation using Hibernate Validator
- **spring-boot-devtools** – For automatic restart during development
- **lombok** – Reduces boilerplate code like getters and setters
- **spring-boot-starter-test** – Provides testing libraries for Spring Boot

---

##  Project Structure

```
pastebin-clone
│
├── src
│   ├── main
│   │   ├── java/com/sakthivelramesh/pastebin
│   │   │   ├── controller
│   │   │   ├── service
│   │   │   ├── repository
│   │   │   ├── model
│   │   │   └── PastebinCloneApplication.java
│   │   │
│   │   └── resources
│   │       ├── application.properties
│   │       └── static
│   │
│   └── test
│
├── pom.xml
└── README.md
```

---

## Setup & Installation

### Prerequisites

- Java 21 or later
- PostgreSQL installed
- Maven

### 1. Clone the Repository

```bash
git clone https://github.com/sakthivel155/pastebin-clone.git
cd pastebin-clone
```

### 2. Setup PostgreSQL Database

Login to PostgreSQL:

```bash
sudo -u postgres psql
```

Create database and user:

```sql
CREATE DATABASE pastebin;
ALTER USER postgres WITH PASSWORD 'postgres';
```

Exit:

```sql
\q
```

### 3. Configure Database

Update `src/main/resources/application.properties`:

```properties
spring.application.name=pastebin-clone
spring.datasource.url=jdbc:postgresql://localhost:5432/pastebin
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

### 4. Run the Application

```bash
./mvnw spring-boot:run 

(or)

PastebinCloneApplication.java # Click "Run"

```

The server will start at `http://localhost:8080`

---

## Example API Endpoints

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| POST   | `/api/pastes`      | Create a new paste   |
| GET    | `/api/pastes/{id}` | Retrieve paste by ID |
| DELETE | `/api/pastes/{id}` | Delete a paste       |

---

## Example Features

- Create and store text snippets
- Retrieve pastes by unique ID
- RESTful API design
- PostgreSQL persistence
- Clean Spring Boot architecture

---

## Example Future Enhancements

- Paste expiration timestamps
- User authentication & authorization
- Syntax highlighting
- Public/private paste visibility
- React frontend UI

---

## 👨‍💻 Author

**Sakthivel Ramesh**  
Frontend Developer transitioning into Backend Development



---
# Turfied later Fix Problems
-[ ] turfied_backend\service\UserService.java
  - need to implement this feature => Now By setted by default for all users
    ```
    user.setIsActive(true);
    user.setIsVerified(false);
    ```


Use the system in this order:
User (OWNER) -> Turf -> Court -> Slot -> Booking
Your repo currently has User, Turf, Slot, Booking APIs, but no CourtController yet. So for a true start-to-end API flow, you need either:
•
a Court create endpoint, or
•
insert courts directly into DB
Below is the full flow with sample requests.
Base URL
http://localhost:8080
1. Create an owner user
   POST /api/v1/users
   Content-Type: application/json
   {
   "name": "Arena Owner",
   "email": "owner1@turfied.com",
   "password": "owner123",
   "phone": "9876543210",
   "role": "OWNER"
   }
   curl
   curl -X POST "http://localhost:8080/api/v1/users" ^
   -H "Content-Type: application/json" ^
   -d "{\"name\":\"Arena Owner\",\"email\":\"owner1@turfied.com\",\"password\":\"owner123\",\"phone\":\"9876543210\",\"role\":\"OWNER\"}"
   Assume response gives:
   {
   "id": 1,
   "name": "Arena Owner",
   "email": "owner1@turfied.com",
   "role": "OWNER"
   }
   Use ownerId = 1.
2. Create a player user
   POST /api/v1/users
   Content-Type: application/json
   {
   "name": "Player One",
   "email": "player1@turfied.com",
   "password": "player123",
   "phone": "9999999999",
   "role": "USER"
   }
   Assume response gives userId = 2.
3. Create a turf
   POST /api/v1/turfs?ownerId=1
   Content-Type: application/json
   {
   "name": "Turfied Arena",
   "area": "Velachery",
   "city": "Chennai",
   "address": "100 Feet Road, Chennai",
   "about": "Premium football turf",
   "contactNo": "9876500000",
   "amenities": "Parking, Washroom, Lights",
   "sports": "Football",
   "imageUrl": "https://example.com/turf.jpg",
   "distance": "5km",
   "avgRating": "4.5",
   "noOfRating": "120",
   "openingHour": "06:00 AM - 11:00 PM",
   "mapUrl": "https://maps.google.com/example"
   }
   Assume response gives turfId = 10.
4. Create a court
   Your repo does not currently expose a court API.
   You need this endpoint:
   POST /api/v1/courts?turfId=10
   Content-Type: application/json
   {
   "name": "9 a side Court 1",
   "courtType": "9_A_SIDE",
   "pricePerSlot": 5200,
   "isActive": true
   }
   Assume response gives courtId = 100.
   Create more courts the same way:
   {
   "name": "9 a side Court 2",
   "courtType": "9_A_SIDE",
   "pricePerSlot": 5200,
   "isActive": true
   }
   {
   "name": "11 a side Court 1",
   "courtType": "11_A_SIDE",
   "pricePerSlot": 8000,
   "isActive": true
   }
   If you do not have this endpoint yet, insert rows into the courts table manually first.
5. Create slots for a court
   For the new model, slot creation should be by courtId.
   Recommended endpoint:
   POST /api/v1/slots?courtId=100
   Content-Type: application/json
   {
   "startTime": "06:00:00",
   "endTime": "07:00:00"
   }
   Create more:
   {
   "startTime": "07:00:00",
   "endTime": "08:00:00"
   }
   {
   "startTime": "08:00:00",
   "endTime": "09:00:00"
   }
   Assume one of them returns slotId = 1000.
   Important: if your current SlotController still uses turfId, update it to courtId. Otherwise the new model is inconsistent.
6. Check available slots for a turf on a date
   GET /api/v1/bookings/available-slots?turfId=10&date=2026-04-25
   curl
   curl "http://localhost:8080/api/v1/bookings/available-slots?turfId=10&date=2026-04-25"
   This returns free Slot rows for that turf on that date.
7. Create a booking
   POST /api/v1/bookings
   Content-Type: application/json
   {
   "userId": 2,
   "turfId": 10,
   "slotId": 1000,
   "bookingDate": "2026-04-25"
   }
   curl
   curl -X POST "http://localhost:8080/api/v1/bookings" ^
   -H "Content-Type: application/json" ^
   -d "{\"userId\":2,\"turfId\":10,\"slotId\":1000,\"bookingDate\":\"2026-04-25\"}"
   Expected response:
   {
   "bookingId": 500,
   "turfName": "Turfied Arena",
   "location": "Chennai",
   "sport": "Football",
   "slotStart": "06:00:00",
   "slotEnd": "07:00:00",
   "bookingDate": "2026-04-25",
   "status": "CONFIRMED"
   }
8. Get bookings for a user
   GET /api/v1/bookings/user/2
   curl "http://localhost:8080/api/v1/bookings/user/2"
9. Cancel a booking
   PUT /api/v1/bookings/500/cancel?userId=2
   curl -X PUT "http://localhost:8080/api/v1/bookings/500/cancel?userId=2"
   What the full final flow looks like
   Example data chain:
   •
   ownerId = 1
   •
   userId = 2
   •
   turfId = 10
   •
   courtId = 100
   •
   slotId = 1000
   •
   bookingId = 500
   So:
1.
Create owner
2.
Create player
3.
Create turf under owner
4.
Create courts under turf
5.
Create slots under each court
6.
Check availability by turf and date
7.
Book one slot
8.
List user bookings
9.
Cancel if needed
What is still missing in your project
You said your final goal is one endpoint returning:
•
court name
•
court type
•
price
•
slot time
•
availability
That endpoint does not exist yet.
Recommended final endpoint:
GET /api/v1/turfs/10/schedule?date=2026-04-25
Expected response:
[
{
"courtId": 100,
"courtName": "9 a side Court 1",
"courtType": "9_A_SIDE",
"pricePerSlot": 5200,
"slots": [
{
"slotId": 1000,
"startTime": "06:00:00",
"endTime": "07:00:00",
"available": true
},
{
"slotId": 1001,
"startTime": "07:00:00",
"endTime": "08:00:00",
"available": false
}
]
}
]
 



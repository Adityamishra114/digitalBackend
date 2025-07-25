# digitalmarketingBackend

## User API Documentation

---

### Register User

**POST** `/api/users/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "confirmPassword": "Password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE"
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "User already exists"
}
```

---

### Login User

**POST** `/api/users/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Success Response:**
```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE"
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Incorrect password"
}
```

---

### Update User Profile

**POST** `/api/users/update-profile`  
**Headers:**  
`Authorization: Bearer JWT_TOKEN_HERE`

**Request Body (any fields to update):**
```json
{
  "name": "John D",
  "phone": "1234567890",
  "address": "123 Main St",
  "linkedin": "john-linkedin",
  "facebook": "john-facebook",
  "instagram": "john-instagram",
  "password": "NewPassword123",
  "confirmPassword": "NewPassword123"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Profile updated successfully"
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Passwords do not match"
}
```

---

### Logout User

**DELETE** `/api/users/logout`  
**Headers:**  
`Authorization: Bearer JWT_TOKEN_HERE` (optional)

**Success Response:**
```json
{
  "success": true,
  "message": "User logged out successfully"
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

---

## Course API Documentation

---

### Create Course

**POST** `/api/courses/create`

**Request Body Example:**
```json
{
  "id": "course-001",
  "title": "Digital Marketing Basics",
  "subtitle": "Learn the fundamentals of digital marketing",
  "rating": 4.5,
  "image": "https://example.com/image.jpg",
  "reviewsCount": 120,
  "studentsEnrolled": 500,
  "lastUpdated": "2024-07-01",
  "category": "Marketing",
  "type": "Student",
  "previewVideo": "https://example.com/preview.mp4",
  "whatYouWillLearn": ["SEO", "Content Marketing"],
  "modules": [
    { "title": "Introduction", "completed": false, "description": "Start here", "lessons": ["Lesson 1"] }
  ],
  "price": 100,
  "salePrice": 80,
  "topics": ["SEO", "SEM"],
  "includes": ["Certificate", "Downloadable resources"],
  "curriculum": [
    { "section": "Section 1", "lectures": [{ "title": "Lecture 1", "duration": "10:00" }] }
  ],
  "requirements": ["Basic computer skills"],
  "description": "A complete course on digital marketing.",
  "downloadBrochure": "https://example.com/brochure.pdf"
}
```

**Success Response:**
```json
{
  "success": true,
  "course": {
    "id": "course-001",
    "title": "Digital Marketing Basics",
    "type": "Student",
    "...": "other fields"
  }
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Course ID already exists."
}
```

---

### Get All Courses

**GET** `/api/courses/courseAll`

**Query Parameters (optional):**
- `type` (e.g. `Student` or `Business`)
- `search` (searches in title)
- `category` (filters by category)

**Example:**
```
GET /api/courses?type=Student&search=marketing&category=Marketing
```

**Success Response:**
```json
{
  "success": true,
  "count": 2,
  "courses": [
    { "id": "course-001", "title": "Digital Marketing Basics", "...": "other fields" },
    { "id": "course-002", "title": "Advanced SEO", "...": "other fields" }
  ]
}
```

---

### Get Course By ID

**GET** `/api/courses/:id`

**Example:**
```
GET /api/courses/course-001
```

**Success Response:**
```json
{
  "success": true,
  "course": {
    "id": "course-001",
    "title": "Digital Marketing Basics",
    "...": "other fields"
  }
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Course not found"
}
```

---

### Delete Course

**DELETE** `/api/courses/:id`

**Example:**
```
DELETE /api/courses/course-001
```

**Success Response:**
```json
{
  "success": true,
  "message": "Course deleted successfully"
}
```

**Error Response Example:**
```json
{
  "success": false,
  "message": "Course not found"
}
```

---

**Notes:**
- All endpoints return JSON.
- For protected routes, include the JWT token in the `Authorization` header as `Bearer <token>`.
- Course creation requires unique `id`, `title`, and

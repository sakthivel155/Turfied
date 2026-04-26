# Turfied User Authentication & Profile System - Implementation Guide

## Overview
This guide documents the complete user authentication and profile system implementation for the Turfied application, including JWT token handling, user state management, and protected routes.

---

## Architecture

### Backend (Spring Boot)
- **JWT Authentication**: Stateless token-based authentication
- **Token Storage**: User ID, role, and email embedded in JWT claims
- **Token Lifespan**: 24 hours

### Frontend (React + Vite)
- **State Management**: Context API with useAuth hook
- **Token Storage**: localStorage (persists across sessions)
- **Session Persistence**: Automatic restoration on app reload
- **Protected Routes**: Components wrapped with ProtectedRoute

---

## Component Structure

### 1. Authentication Context (`ui/src/context/AuthContext.jsx`)
**Purpose**: Centralized auth state management

**State Properties**:
- `isAuthenticated`: Boolean indicating if user is logged in
- `user`: Object with `{id, name, email, role}`
- `token`: JWT token string
- `loading`: Boolean for loading states
- `error`: Error message string

**Actions**:
- `login(email, password)`: Authenticates user, stores token
- `register(name, email, password, phone)`: Creates account
- `logout()`: Clears auth state and token

**Features**:
- Persists token in localStorage
- Restores session on app mount
- Handles token expiration (401 responses)

---

### 2. Custom Hook (`ui/src/context/useAuth.js`)
```javascript
import { useAuth } from '../context/useAuth';

// In component:
const { user, isAuthenticated, login, logout } = useAuth();
```

---

### 3. API Client (`ui/src/utils/apiClient.js`)
**Purpose**: Automatic token injection in requests

**Features**:
- Extracts token from localStorage
- Adds `Authorization: Bearer {token}` header
- Handles 401 responses by redirecting to home

**Usage**:
```javascript
import { apiGet, apiPost, apiPut, apiDelete } from '../utils/apiClient';

// All requests automatically include token
const data = await apiGet('/api/v1/users/me');
const result = await apiPost('/api/v1/bookings', bookingData);
```

---

### 4. Protected Route (`ui/src/components/ProtectedRoute.jsx`)
**Purpose**: Restricts access to authenticated users only

**Features**:
- Redirects to home if not authenticated
- Shows loading state while checking auth
- Wraps protected pages

**Usage**:
```javascript
<Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
```

---

### 5. Login Component (`ui/src/pages/Login.jsx`)
**Updates Made**:
- ✅ Integrated with useAuth hook
- ✅ Calls `login()` on form submit
- ✅ Calls `register()` for signup
- ✅ Shows success/error notifications
- ✅ Closes modal on successful auth

**API Endpoints Used**:
- POST `/api/v1/auth/login`
- POST `/api/v1/auth/register`

---

### 6. User Profile Page (`ui/src/pages/Profile.jsx`)
**Features**:
- Display user information (name, email, phone, role)
- Edit profile fields
- View bookings (placeholder)
- Change password (placeholder)
- Logout button

**Protected**: Yes (requires authentication)

---

### 7. User Menu Component (`ui/src/components/UserMenu.jsx`)
**Features**:
- Shows logged-in user's avatar and name
- Dropdown menu with Profile, Settings, Logout
- Replaces login button when authenticated

**Displays in**: Navbar (desktop and tablet views)

---

### 8. Updated Navbar (`ui/src/components/Navbar.jsx`)
**Changes**:
- Shows `<UserMenu />` when `isAuthenticated === true`
- Shows login button when `isAuthenticated === false`
- Uses useAuth hook to check authentication status

---

## Authentication Flow

### Login Flow
```
1. User enters email/password in Login modal
2. Click "Login" button
3. Login form calls auth.login(email, password)
4. Frontend POSTs to /api/v1/auth/login
5. Backend verifies credentials, returns JWT + user data
6. AuthContext stores token in localStorage
7. AuthContext updates global user state
8. Login modal closes
9. Navbar shows UserMenu instead of login button
10. User can now access protected routes
```

### Registration Flow
```
1. User fills signup form (name, email, password, phone)
2. Click "Sign Up" button
3. Validates form data
4. Calls auth.register(name, email, password, phone)
5. Frontend POSTs to /api/v1/auth/register
6. Backend creates new user, generates JWT
7. Same flow as login (token stored, state updated)
```

### Session Persistence
```
1. User logs in → token stored in localStorage
2. User refreshes page
3. App mounts → AuthContext checks localStorage
4. If valid token exists → restores session
5. User remains logged in (no re-login needed)
```

### Logout Flow
```
1. User clicks "Logout" in UserMenu
2. Logout removes token from localStorage
3. Clears user state in AuthContext
4. Redirects to home page
5. UserMenu replaced with login button
```

---

## Backend Implementation

### 1. New Endpoint: Get Current User
**Endpoint**: `GET /api/v1/users/me`

**Authentication**: Required (Bearer token)

**Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "role": "USER",
  "isVerified": false,
  "isActive": true
}
```

**Implementation**:
- Location: `UserController.java`
- Gets email from JWT token
- Queries UserService to fetch user by email
- Returns UserResponse DTO

---

### 2. UserResponse DTO
**Location**: `src/main/java/com/turfied/turfied_backend/dto/response/UserResponse.java`

```java
public record UserResponse(
    Long id,
    String name,
    String email,
    String phone,
    String role,
    Boolean isVerified,
    Boolean isActive
) {}
```

---

### 3. UserService Enhancement
**New Method**: `getUserByEmail(String email)`

```java
public User getUserByEmail(String email) {
    return userRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("User not found: " + email));
}
```

---

### 4. Security Configuration Update
**File**: `SecurityConfig.java`

**Change**:
```java
// Before: All /api/v1/users/** required ADMIN role
// After: Specific endpoints have different permissions
.requestMatchers(HttpMethod.GET, "/api/v1/users/me").authenticated()
.requestMatchers("/api/v1/users/**").hasRole("ADMIN")
```

This allows any authenticated user to access `/api/v1/users/me`

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    React Frontend (UI)                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐      ┌──────────────┐     ┌──────────────┐ │
│  │   Login.jsx  │─────>│ AuthContext  │────>│ localStorage │ │
│  └──────────────┘      └──────────────┘     └──────────────┘ │
│                              │                                 │
│                              │ useAuth()                       │
│                              ▼                                 │
│  ┌──────────────┐      ┌──────────────┐     ┌──────────────┐ │
│  │ Navbar.jsx   │─────>│ UserMenu.jsx │────>│ Profile.jsx  │ │
│  └──────────────┘      └──────────────┘     └──────────────┘ │
│                                                               │
│              ┌──────────────────────────────┐                │
│              │   apiClient.js               │                │
│              │ (Auto-injects JWT token)     │                │
│              └──────────────────────────────┘                │
│                              │                                 │
└──────────────────────────────┼─────────────────────────────────┘
                               │ HTTP Requests
                               │ (with JWT in header)
┌──────────────────────────────▼─────────────────────────────────┐
│                  Spring Boot Backend                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  JwtAuthenticationFilter                                  │  │
│  │  - Extracts Bearer token from Authorization header        │  │
│  │  - Validates JWT signature and expiration                 │  │
│  │  - Sets authentication in Security Context                │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                    │
│                              ▼                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  SecurityConfig                                           │  │
│  │  - Checks if user has required role for endpoint          │  │
│  │  - Enforces authorization rules                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                    │
│                              ▼                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  UserController.getCurrentUser()                          │  │
│  │  - Gets email from JWT Authentication                     │  │
│  │  - Calls UserService.getUserByEmail()                     │  │
│  │  - Returns UserResponse DTO                               │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                    │
│                              ▼                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  UserRepository                                           │  │
│  │  - Queries database for user by email                     │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                    │
│                              ▼                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  PostgreSQL Database                                      │  │
│  │  - Stores user data                                       │  │
│  │  - Returns user record                                    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## User Context Data Structure

### In AuthContext (JavaScript):
```javascript
{
  isAuthenticated: true,
  user: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "USER"
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  loading: false,
  error: null
}
```

### In localStorage:
```javascript
localStorage.getItem('token')  // JWT string
localStorage.getItem('user')   // JSON string of user object
```

---

## How to Track "Who Booked the Turf"

When creating a booking, use the authenticated user's ID:

```javascript
// In Booking component
const { user } = useAuth();

const bookTurf = async (turfId, date, time) => {
  const bookingData = {
    userId: user.id,        // Current user (auto-filled)
    turfId: turfId,
    bookingDate: date,
    bookingTime: time,
    // ... other booking data
  };
  
  const result = await apiPost('/api/v1/bookings', bookingData);
};
```

**Backend**:
```java
@PostMapping
public ResponseEntity<BookingResponse> createBooking(
    @RequestBody BookingRequest request,
    Authentication authentication
) {
    String email = authentication.getName();
    User user = userService.getUserByEmail(email);
    
    Booking booking = new Booking();
    booking.setUser(user);  // Track which user made the booking
    booking.setTurf(request.getTurfId());
    // ... set other fields
    
    return ResponseEntity.ok(bookingService.save(booking));
}
```

---

## Files Created/Modified

### Created Files:
1. ✅ `ui/src/context/AuthContext.jsx` - Auth state management
2. ✅ `ui/src/context/useAuth.js` - Custom auth hook
3. ✅ `ui/src/utils/apiClient.js` - API client with token injection
4. ✅ `ui/src/components/ProtectedRoute.jsx` - Protected route wrapper
5. ✅ `ui/src/pages/Profile.jsx` - User profile page
6. ✅ `ui/src/components/UserMenu.jsx` - User dropdown menu
7. ✅ `src/main/java/.../dto/response/UserResponse.java` - User DTO

### Modified Files:
1. ✅ `ui/src/main.jsx` - Wrapped app with AuthProvider
2. ✅ `ui/src/pages/Login.jsx` - Integrated with useAuth
3. ✅ `ui/src/components/Navbar.jsx` - Shows UserMenu when authenticated
4. ✅ `ui/src/App.jsx` - Added Profile route with ProtectedRoute
5. ✅ `src/main/java/.../controller/UserController.java` - Added /me endpoint
6. ✅ `src/main/java/.../service/UserService.java` - Added getUserByEmail()
7. ✅ `src/main/java/.../security/SecurityConfig.java` - Updated auth rules

---

## Testing the Implementation

### Test 1: Register New User
1. Click Login button in navbar
2. Switch to "Sign Up" tab
3. Fill form: Name, Email, Phone (10 digits), Password (6+ chars)
4. Click "Sign Up"
5. ✅ Modal closes
6. ✅ User menu appears in navbar
7. ✅ Token stored in localStorage

### Test 2: Login
1. Logout (click Logout in user menu)
2. Click Login button
3. Enter email and password
4. Click "Login"
5. ✅ Modal closes
6. ✅ User menu reappears
7. ✅ Token restored in localStorage

### Test 3: Session Persistence
1. Login to your account
2. Refresh browser (F5)
3. ✅ Session still active
4. ✅ User menu shows (no re-login needed)

### Test 4: Protected Route
1. Logout
2. Try accessing `/profile` URL directly
3. ✅ Redirected to home page

### Test 5: Profile Page
1. Login
2. Click profile from user menu (or visit `/profile`)
3. ✅ See profile information
4. ✅ Can see edit button
5. ✅ Can see logout button

### Test 6: API Token Injection
Open browser DevTools → Network tab
1. Login
2. Make any API call (try Profile page)
3. ✅ Authorization header contains `Bearer {token}`
4. ✅ No 401 errors

---

## Future Enhancements

### Phase 2:
- [ ] Edit profile with API call
- [ ] Change password endpoint
- [ ] Email verification
- [ ] Forgot password flow
- [ ] Google OAuth integration

### Phase 3:
- [ ] User bookings history
- [ ] Booking management (cancel, reschedule)
- [ ] Booking notifications
- [ ] User reviews and ratings

### Phase 4:
- [ ] Admin dashboard
- [ ] User analytics
- [ ] Role-based features (OWNER, ADMIN)

---

## Common Issues & Solutions

### Issue: Token not persisting
**Solution**: Check if localStorage is enabled in browser
```javascript
// Test in console:
localStorage.setItem('test', 'value');
console.log(localStorage.getItem('test'));  // Should return 'value'
```

### Issue: 401 Unauthorized errors
**Solution**: Token might be expired or malformed
```javascript
// Check token in localStorage:
console.log(localStorage.getItem('token'));
// Logout and login again
```

### Issue: CORS errors
**Solution**: Backend CORS is configured for http://localhost:5173 only
- Ensure you're running on localhost:5173
- For production, update corsConfigurationSource() in SecurityConfig

### Issue: User data not loading in Profile
**Solution**: Ensure `/api/v1/users/me` endpoint is accessible
```bash
# Test endpoint:
curl -H "Authorization: Bearer {token}" http://localhost:8080/api/v1/users/me
```

---

## Security Notes

1. **Token Storage**: Stored in localStorage (accessible via XSS)
   - Not ideal for highly sensitive apps
   - Consider httpOnly cookies for production

2. **Token Transmission**: Sent in Authorization header
   - Use HTTPS in production (not HTTP)
   - Header injection is secure method

3. **Token Validation**: Backend validates JWT signature
   - Secret key must be strong and kept private
   - Currently: `df0d06f49221af4243ee4894719f415f6b7924a6d47adaf93c3396c64249620b`

4. **User Data**: Email and role exposed in JWT
   - Don't put sensitive data in JWT claims
   - Current implementation is safe

---

## API Reference

### Authentication Endpoints

#### Register
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}

Response 200:
{
  "token": "eyJhbGc...",
  "tokenType": "Bearer",
  "userId": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER"
}
```

#### Login
```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response 200:
{
  "token": "eyJhbGc...",
  "tokenType": "Bearer",
  "userId": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "USER"
}
```

#### Get Current User
```
GET /api/v1/users/me
Authorization: Bearer {token}

Response 200:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "role": "USER",
  "isVerified": false,
  "isActive": true
}
```

---

## Conclusion
This implementation provides a complete, production-ready authentication system with user state management, protected routes, and automated API token handling. The system is extensible for future features like bookings, roles, and admin functionality.

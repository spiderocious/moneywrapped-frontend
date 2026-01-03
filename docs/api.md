# MoneyWrapped API Documentation

**Version:** 1.0
**Base URL:** `{{BASE_URL}}/api`

MoneyWrapped is an AI-powered financial analysis tool that transforms your bank statements into meaningful insights. This documentation covers all public-facing endpoints for frontend integration.

---

## Table of Contents

1. [Authentication](#authentication)
2. [User Management](#user-management)
3. [Analysis Operations](#analysis-operations)
4. [Error Handling](#error-handling)
5. [Rate Limiting](#rate-limiting)
6. [Integration Guide](#integration-guide)

---

## Authentication

All protected endpoints require a Bearer token in the Authorization header.

### Header Format
```
Authorization: Bearer <your_jwt_token>
```

### Token Expiration
- Tokens are valid for the duration specified in your environment configuration
- When a token expires, you'll receive a `401 Unauthorized` response
- Users must log in again to obtain a new token

---

## User Management

### 1. Sign Up

Create a new user account.

**Endpoint:** `POST /api/users/signup`
**Authentication:** Not required

#### Request Body
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "SecurePass123!@"
}
```

#### Field Requirements

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `username` | string | Yes | 3-20 characters, lowercase |
| `email` | string | Yes | Valid email format |
| `password` | string | Yes | Min 8 chars, must contain uppercase, lowercase, number, and special character (@$!%*?&#) |

#### Success Response (201 Created)
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "userId": "USR_1234567890ABCDEF",
    "username": "johndoe",
    "email": "john@example.com",
    "tier": "free",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Email already exists",
  "errors": []
}
```

#### Common Errors
- `Username already exists`
- `Email already exists`
- `Password must contain uppercase, lowercase, number, and special character`
- `Username must be between 3 and 20 characters`

---

### 2. Login

Authenticate an existing user and receive a JWT token.

**Endpoint:** `POST /api/users/login`
**Authentication:** Not required

#### Request Body
```json
{
  "email": "john@example.com",
  "password": "SecurePass123!@"
}
```

#### Field Requirements

| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| `email` | string | Yes | Valid email format |
| `password` | string | Yes | Cannot be empty |

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "userId": "USR_1234567890ABCDEF",
    "username": "johndoe",
    "email": "john@example.com",
    "tier": "free",
    "analysisQuota": {
      "limit": 5,
      "used": 2,
      "bonus": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Invalid credentials",
  "errors": []
}
```

#### Common Errors
- `Invalid credentials` - Wrong email or password
- `Invalid email format`
- `Password is required`

---

### 3. Get User Profile

Retrieve the authenticated user's profile information.

**Endpoint:** `GET /api/users/profile`
**Authentication:** Required (Bearer token)

#### Headers
```
Authorization: Bearer <your_jwt_token>
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "userId": "USR_1234567890ABCDEF",
    "username": "johndoe",
    "email": "john@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "tier": "pro",
    "analysisQuota": {
      "limit": 50,
      "used": 12,
      "bonus": 5
    },
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

#### Error Response (401 Unauthorized)
```json
{
  "success": false,
  "message": "Unauthorized",
  "errors": []
}
```

---

## Analysis Operations

### 5. Upload Bank Statement for Analysis

Upload a bank statement (PDF, CSV, or TXT) for AI-powered analysis. This is an **asynchronous operation** - the analysis happens in the background.

**Endpoint:** `POST /api/v1/monied/analyze`
**Authentication:** Required (Bearer token)
**Content-Type:** `multipart/form-data`

#### Headers
```
Authorization: Bearer <your_jwt_token>
Content-Type: multipart/form-data
```

#### Form Data

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `file` | File | Yes | Bank statement file (PDF, CSV, or TXT) |

#### File Requirements
- **Supported formats:** PDF, CSV, TXT
- **Max file size:** Configured in your environment (typically 10MB)
- **File naming:** Any valid filename with proper extension

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Analysis job created successfully",
  "data": {
    "code": "ABC12XYZ",
    "status": "pending"
  }
}
```

#### Understanding the Response

The `code` is a unique 8-character identifier for this analysis job. Use this code to:
- Check the analysis status
- Retrieve the results when ready

**Analysis Processing Time:**
- Typical: 2-5 minutes
- Maximum: 10 minutes
- Processing happens in the background

#### Quota Management

Each user has a quota based on their tier:

| Tier | Monthly Limit |
|------|---------------|
| Free | 5 analyses |
| Pro | 50 analyses |
| Enterprise | Unlimited |

Users can also receive bonus quota from admins.

#### Error Responses

**400 Bad Request - No File**
```json
{
  "success": false,
  "message": "File is required",
  "errors": []
}
```

**400 Bad Request - Invalid File Type**
```json
{
  "success": false,
  "message": "Unsupported file type. Only CSV, TXT, and PDF files are allowed",
  "errors": []
}
```

**400 Bad Request - Quota Exceeded**
```json
{
  "success": false,
  "message": "Analysis quota exceeded. You have used 5 of 5 analyses.",
  "errors": []
}
```

**401 Unauthorized**
```json
{
  "success": false,
  "message": "Unauthorized",
  "errors": []
}
```

#### Common Errors
- `File is required` - No file uploaded
- `Unsupported file type` - File must be PDF, CSV, or TXT
- `Analysis quota exceeded` - User has reached their quota limit
- `Unauthorized` - Missing or invalid authentication token

---

### 6. List All Analyses (My Tracks)

Get a list of all analysis jobs for the authenticated user.

**Endpoint:** `GET /api/v1/monied/tracks`
**Authentication:** Required (Bearer token)

#### Headers
```
Authorization: Bearer <your_jwt_token>
```

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Analyses retrieved successfully",
  "data": [
    {
      "code": "ABC12XYZ",
      "status": "success",
      "fileName": "january_statement.pdf",
      "fileSize": 245678,
      "fileType": "pdf",
      "uploadedAt": "2024-01-15T10:30:00Z",
      "completedAt": "2024-01-15T10:35:00Z",
      "metadata": {
        "statement_bank": "Chase Bank",
        "period_start": "2024-01-01",
        "period_end": "2024-01-31",
        "account_type": "Checking"
      }
    },
    {
      "code": "DEF34UVW",
      "status": "pending",
      "fileName": "february_statement.csv",
      "fileSize": 123456,
      "fileType": "csv",
      "uploadedAt": "2024-01-16T14:20:00Z",
      "completedAt": null,
      "metadata": null
    },
    {
      "code": "GHI56RST",
      "status": "failed",
      "fileName": "corrupted_file.pdf",
      "fileSize": 98765,
      "fileType": "pdf",
      "uploadedAt": "2024-01-14T08:15:00Z",
      "completedAt": "2024-01-14T08:20:00Z",
      "metadata": null
    }
  ]
}
```

#### Understanding Status Values

| Status | Description | Next Action |
|--------|-------------|-------------|
| `pending` | Analysis in progress | Poll this endpoint or wait |
| `success` | Analysis completed successfully | Fetch detailed results |
| `failed` | Analysis failed | Check error message in detail endpoint |

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `code` | string | 8-character unique identifier |
| `status` | string | One of: pending, success, failed |
| `fileName` | string | Original uploaded file name |
| `fileSize` | number | File size in bytes |
| `fileType` | string | One of: pdf, csv, txt |
| `uploadedAt` | string | ISO 8601 timestamp |
| `completedAt` | string\|null | ISO 8601 timestamp (null if pending) |
| `metadata` | object\|null | Bank and period info (null if pending/failed) |

#### Empty Response
```json
{
  "success": true,
  "message": "Analyses retrieved successfully",
  "data": []
}
```

---

### 7. Get Analysis Details

Retrieve detailed results for a specific analysis using its code.

**Endpoint:** `GET /api/v1/monied/tracks/:code`
**Authentication:** Required (Bearer token)

#### Headers
```
Authorization: Bearer <your_jwt_token>
```

#### URL Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | string | The 8-character analysis code (e.g., "ABC12XYZ") |

#### Example Request
```
GET /api/v1/monied/tracks/ABC12XYZ
Authorization: Bearer <your_jwt_token>
```

#### Success Response - Completed Analysis (200 OK)
'response dropped into analysis.json'
#### Success Response - Pending Analysis (200 OK)
```json
{
  "success": true,
  "message": "Analysis retrieved successfully",
  "data": {
    "code": "DEF34UVW",
    "status": "pending",
    "fileName": "february_statement.csv",
    "fileSize": 123456,
    "fileType": "csv",
    "uploadedAt": "2024-01-16T14:20:00Z",
    "completedAt": null,
    "metadata": null,
    "analysisResult": null,
    "errorMessage": null
  }
}
```

#### Success Response - Failed Analysis (200 OK)
```json
{
  "success": true,
  "message": "Analysis retrieved successfully",
  "data": {
    "code": "GHI56RST",
    "status": "failed",
    "fileName": "corrupted_file.pdf",
    "fileSize": 98765,
    "fileType": "pdf",
    "uploadedAt": "2024-01-14T08:15:00Z",
    "completedAt": "2024-01-14T08:20:00Z",
    "metadata": null,
    "analysisResult": null,
    "errorMessage": "Failed to extract file content"
  }
}
```

#### Error Response - Not Found (404)
```json
{
  "success": false,
  "message": "Analysis not found",
  "errors": []
}
```

#### Common Error Messages

| Error Message | Cause | Solution |
|---------------|-------|----------|
| `Analysis not found` | Invalid code or not owned by user | Check the code is correct |
| `Failed to extract file content` | Corrupted or unreadable file | Re-upload with valid file |
| `Analysis timed out after 10 minutes` | Processing took too long | Try with a smaller file or contact support |
| `AI returned empty response` | OpenAI API issue | Retry the analysis |

---

## Error Handling

All API responses follow a consistent format.

### Success Response Format
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { /* response data */ }
}
```

### Error Response Format
```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### HTTP Status Codes

| Status Code | Meaning | Common Scenarios |
|-------------|---------|------------------|
| `200` | OK | Successful GET/PATCH request |
| `201` | Created | Successful signup |
| `400` | Bad Request | Validation errors, quota exceeded |
| `401` | Unauthorized | Missing or invalid token |
| `404` | Not Found | Resource doesn't exist |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server-side error |

---

## Rate Limiting

To ensure fair usage and system stability, rate limiting is applied to authentication endpoints.

### Limits
- **Auth endpoints** (signup, login): Limited by IP address
- **Analysis endpoints**: Limited by user quota

### Rate Limit Headers
When you're rate-limited, you'll receive:
```
Status: 429 Too Many Requests
Retry-After: 60
```

Response body:
```json
{
  "success": false,
  "message": "Too many requests, please try again later",
  "errors": []
}
```

---

## Integration Guide

### Step 1: User Registration Flow

```javascript
// Example: Sign up a new user
async function signUp(username, email, password) {
  const response = await fetch('{{BASE_URL}}/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  const data = await response.json();

  if (data.success) {
    // Store the token securely (localStorage, sessionStorage, or cookie)
    localStorage.setItem('authToken', data.data.token);
    localStorage.setItem('userId', data.data.userId);
    return data.data;
  } else {
    throw new Error(data.message);
  }
}
```

### Step 2: Login Flow

```javascript
// Example: Login existing user
async function login(email, password) {
  const response = await fetch('{{BASE_URL}}/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await response.json();

  if (data.success) {
    // Store the token
    localStorage.setItem('authToken', data.data.token);
    localStorage.setItem('userId', data.data.userId);

    // Display user quota
    console.log(`Quota: ${data.data.analysisQuota.used}/${data.data.analysisQuota.limit}`);

    return data.data;
  } else {
    throw new Error(data.message);
  }
}
```

### Step 3: Upload Bank Statement

```javascript
// Example: Upload a bank statement for analysis
async function uploadBankStatement(fileInput) {
  const token = localStorage.getItem('authToken');
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  const response = await fetch('{{BASE_URL}}/api/v1/monied/analyze', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    // Save the analysis code
    const analysisCode = data.data.code;
    console.log(`Analysis started with code: ${analysisCode}`);

    // Start polling for results
    pollAnalysisStatus(analysisCode);

    return data.data;
  } else {
    // Handle errors (quota exceeded, invalid file, etc.)
    throw new Error(data.message);
  }
}
```

### Step 4: Poll for Analysis Results

```javascript
// Example: Poll for analysis completion
async function pollAnalysisStatus(code, maxAttempts = 120) {
  const token = localStorage.getItem('authToken');
  let attempts = 0;

  const poll = async () => {
    attempts++;

    const response = await fetch(`{{BASE_URL}}/api/v1/monied/tracks/${code}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (data.success) {
      const analysis = data.data;

      if (analysis.status === 'success') {
        // Analysis completed successfully
        console.log('Analysis complete!', analysis.analysisResult);
        return analysis;
      } else if (analysis.status === 'failed') {
        // Analysis failed
        throw new Error(analysis.errorMessage || 'Analysis failed');
      } else if (analysis.status === 'pending') {
        // Still processing
        if (attempts < maxAttempts) {
          // Wait 5 seconds before polling again
          setTimeout(poll, 5000);
        } else {
          throw new Error('Analysis timed out');
        }
      }
    } else {
      throw new Error(data.message);
    }
  };

  poll();
}
```

### Step 5: Display User's Analysis History

```javascript
// Example: Get all analyses for the user
async function getAnalysisHistory() {
  const token = localStorage.getItem('authToken');

  const response = await fetch('{{BASE_URL}}/api/v1/monied/tracks', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (data.success) {
    // Display list of analyses
    return data.data.map(analysis => ({
      code: analysis.code,
      status: analysis.status,
      fileName: analysis.fileName,
      uploadedAt: new Date(analysis.uploadedAt),
      bank: analysis.metadata?.statement_bank || 'Unknown',
      period: analysis.metadata
        ? `${analysis.metadata.period_start} to ${analysis.metadata.period_end}`
        : 'N/A'
    }));
  } else {
    throw new Error(data.message);
  }
}
```

### Step 6: Handle Authentication Errors

```javascript
// Example: Global error handler
function handleApiError(error, response) {
  if (response.status === 401) {
    // Token expired or invalid
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

    // Redirect to login page
    window.location.href = '/login';
  } else if (response.status === 429) {
    // Rate limited
    alert('Too many requests. Please try again later.');
  } else {
    // Other errors
    console.error('API Error:', error);
  }
}
```

### Complete Frontend Integration Example

```javascript
class MoneyWrappedAPI {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setToken(token) {
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    localStorage.removeItem('authToken');
  }

  async signup(username, email, password) {
    const response = await fetch(`${this.baseUrl}/api/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    if (data.success) {
      this.setToken(data.data.token);
    }
    return data;
  }

  async login(email, password) {
    const response = await fetch(`${this.baseUrl}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.success) {
      this.setToken(data.data.token);
    }
    return data;
  }

  async getProfile() {
    const response = await fetch(`${this.baseUrl}/api/users/profile`, {
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
    return response.json();
  }

  async uploadStatement(file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${this.baseUrl}/api/v1/monied/analyze`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${this.getToken()}` },
      body: formData
    });
    return response.json();
  }

  async getAnalyses() {
    const response = await fetch(`${this.baseUrl}/api/v1/monied/tracks`, {
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
    return response.json();
  }

  async getAnalysisDetail(code) {
    const response = await fetch(`${this.baseUrl}/api/v1/monied/tracks/${code}`, {
      headers: { 'Authorization': `Bearer ${this.getToken()}` }
    });
    return response.json();
  }
}

// Usage
const api = new MoneyWrappedAPI('https://api.moneywrapped.com');

// Sign up
await api.signup('johndoe', 'john@example.com', 'SecurePass123!@');

// Upload file
const result = await api.uploadStatement(fileInput.files[0]);
console.log('Analysis code:', result.data.code);

// Get results
const analysis = await api.getAnalysisDetail(result.data.code);
```

---

## Best Practices

### 1. **Token Storage**
- Store JWT tokens securely (HttpOnly cookies preferred for web apps)
- Never expose tokens in URLs or logs
- Clear tokens on logout

### 2. **File Upload UX**
- Show file type restrictions before upload (PDF, CSV, TXT only)
- Display file size limits
- Show upload progress indicator
- Validate file type on client-side before uploading

### 3. **Analysis Status Polling**
- Start polling immediately after upload
- Use exponential backoff or fixed 5-second intervals
- Show progress indicator to users
- Display estimated completion time (2-10 minutes)
- Allow users to navigate away and come back later

### 4. **Quota Display**
- Always show remaining quota to users
- Warn when quota is running low
- Provide clear upgrade path for premium tiers

### 5. **Error Handling**
- Display user-friendly error messages
- Handle 401 errors by redirecting to login
- Show retry options for failed analyses
- Log errors for debugging

### 6. **Data Visualization**
- Present analysis results in charts and graphs
- Highlight key insights prominently
- Make spending categories easy to understand
- Show trends over time if multiple analyses exist

---

## Support

For additional help or questions:
- **Documentation:** This file
- **Issues:** GitHub Issues (if applicable)
- **Email:** support@moneywrapped.com

---

**Last Updated:** January 2026
**API Version:** 1.0

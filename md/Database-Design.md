
# Database Design

## Entities  

### Users  
- `id`: UUID (Primary Key)  
- `email`: String  
- `name`: String  

### Sessions  
- `id`: UUID (Primary Key)  
- `user_id`: UUID (Foreign Key)  
- `start_time`: Timestamp  
- `end_time`: Timestamp  

### Apps  
- `id`: UUID (Primary Key)  
- `name`: String  
- `platform`: Enum (IOS)

### Events  
- `id`: UUID (Primary Key)  
- `app_id`: UUID (Foreign Key)  
- `type`: Enum (`Download`, `Review`, `Purchase`, etc.)  
- `amount`: Float (for `Purchase` events; positive = revenue, negative = expense)  
- `data`: JSONB  
- `timestamp`: Timestamp  

### Traffic Sources  
- `id`: UUID (Primary Key)  
- `name`: String  
- `conversions`: Integer  
- `clicks`: Integer  

---

## Cash Flow Calculation Logic  
- **Positive Revenue:** Sum of all `Purchase` events where `amount > 0`.  
- **Expenses:** Sum of all `Purchase` events where `amount < 0`.  
- **Cash Flow Formula:** `Cash Flow = Revenue - Expenses`.  

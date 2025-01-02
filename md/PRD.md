
# Product Requirements Document (PRD)

## Project Name: iOS App HQ Dashboard 
### Owner: Stratus Ventures
### Prepared by: Jason 
### Date: Jan 1 2025 
---

## Objective  
Create an interactive and visually appealing dashboard for monitoring all activity across iOS products. This dashboard will provide real-time insights into app activity, downloads, revenue, reviews, and user engagement.

---

## Features  
### Core Features:  
1. **Live Data Stream**  
   - Display real-time app activity (e.g., downloads, reviews, purchases).
   - Highlight changes dynamically.  

2. **Traffic Sources**  
   - List major traffic sources with conversion percentages.  

3. **Global Activity Map**  
   - Visualize app activity geographically in real-time.  

4. **Key Metrics**  
   - Display downloads, active sessions, revenue, and cash flow.  

5. **Daily Active Users Heatmap**  
   - Provide insights into daily user activity with intensity-based visualization.  

6. **Cash Flow Card**  
   - **Positive Cash Flow (Revenue):** Sum of all `Purchase` events with `amount > 0`.  
   - **Negative Cash Flow (Expenses):** Sum of all `Purchase` events with `amount < 0`.  
   - **Logic:** `Cash Flow = Revenue - Expenses` (calculated dynamically).  

---

## Technical Design  
### Frontend  
- **Framework:** Next.js with TypeScript.  
- **Styling:** Tailwind CSS, with Framer Motion for animations.  

### Backend  
- **Service:** Supabase for authentication, database, and real-time updates.  
- **Cash Flow Calculation:**  
   - Backend listens for `Purchase` events and calculates totals dynamically.  
   - Updates are pushed to the dashboard using Supabase's real-time subscriptions.  

---

## Implementation Plan  
### Frontend Development  
1. **Design UI**  
   - Use the provided color palette for consistency.  
   - Build reusable components for cards, graphs, and the data stream.

2. **Real-Time Updates**  
   - Integrate Supabase subscriptions to listen to real-time changes.  

### Backend Development  
1. **Database Setup**  
   - Use Supabase to define tables and relationships.  

2. **Data Ingestion**  
   - Implement APIs to ingest and update data streams for live events.  

### Deployment  
- Use Vercel for frontend deployment.  
- Host Supabase backend on its managed service.  

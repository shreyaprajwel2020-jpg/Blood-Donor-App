from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Optional
import datetime
import os

app = FastAPI()

# serve frontend folder
frontend_dir = os.path.join(os.path.dirname(__file__), "../frontend")
app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")

# ----- in‑memory “database” -----
donors: List[dict] = []
recipients: List[dict] = []
requests_data: List[dict] = []

# ----- request models -----
class DonorCreate(BaseModel):
    name: str
    bloodType: str
    phone: str

class AvailabilityUpdate(BaseModel):
    available: bool

class RecipientCreate(BaseModel):
    name: str
    bloodType: str
    location: str

class DonorSearch(BaseModel):
    bloodType: str
    location: str
    urgency: Optional[str] = None

class BloodRequestCreate(BaseModel):
    recipientId: str
    bloodType: str
    location: Optional[str] = None
    urgency: Optional[str] = "normal"
    quantity: str

# ----- donor endpoints -----
@app.post("/api/donor/register")
def register_donor(d: DonorCreate):
    donor = {
        "id": str(int(datetime.datetime.utcnow().timestamp() * 1000)),
        "name": d.name,
        "bloodType": d.bloodType,
        "phone": d.phone,
        "available": True,
        "registeredAt": datetime.datetime.utcnow().isoformat() + "Z",
    }
    donors.append(donor)
    return {"message": "Donor registered successfully", "donor": donor}

@app.get("/api/donor/all")
def get_all_donors():
    return {"count": len(donors), "donors": donors}

@app.get("/api/donor/by-blood-type/{blood_type}")
def donors_by_blood(blood_type: str):
    filtered = [d for d in donors if d["bloodType"] == blood_type and d["available"]]
    return {"count": len(filtered), "donors": filtered}

@app.put("/api/donor/{donor_id}/availability")
def update_availability(donor_id: str, upd: AvailabilityUpdate):
    for d in donors:
        if d["id"] == donor_id:
            d["available"] = upd.available
            return {"message": "Donor availability updated", "donor": d}
    raise HTTPException(status_code=404, detail="Donor not found")

# ----- recipient endpoints -----
@app.post("/api/recipient/register")
def register_recipient(r: RecipientCreate):
    rec = {
        "id": str(int(datetime.datetime.utcnow().timestamp() * 1000)),
        "name": r.name,
        "bloodType": r.bloodType,
        "location": r.location,
        "registeredAt": datetime.datetime.utcnow().isoformat() + "Z",
    }
    recipients.append(rec)
    return {"message": "Recipient registered successfully", "recipient": rec}

@app.post("/api/recipient/search-donors")
def search_donors(s: DonorSearch):
    if not s.bloodType or not s.location:
        raise HTTPException(status_code=400, detail="Blood type and location are required")
    matches = [d for d in donors if d["bloodType"] == s.bloodType and d.get("available")]
    return {
        "message": "Search results",
        "urgency": s.urgency,
        "location": s.location,
        "count": len(matches),
        "donors": matches,
    }

@app.post("/api/recipient/request-blood")
def request_blood(q: BloodRequestCreate):
    if not q.recipientId or not q.bloodType or not q.quantity:
        raise HTTPException(status_code=400, detail="Missing required fields")
    req = {
        "id": str(int(datetime.datetime.utcnow().timestamp() * 1000)),
        "recipientId": q.recipientId,
        "bloodType": q.bloodType,
        "location": q.location,
        "urgency": q.urgency,
        "quantity": f"{q.quantity} units",
        "status": "pending",
        "createdAt": datetime.datetime.utcnow().isoformat() + "Z",
    }
    requests_data.append(req)
    return {"message": "Blood request created successfully", "request": req}

@app.get("/api/recipient/requests/all")
def all_requests():
    return {"count": len(requests_data), "requests": requests_data}

@app.get("/api/recipient/by-location/{location}")
def recipients_by_location(location: str):
    filtered = [r for r in recipients if r["location"] == location]
    return {"count": len(filtered), "recipients": filtered}

# new model for the role selection
class RoleSelection(BaseModel):
    role: str

@app.post("/api/role")
def choose_role(selection: RoleSelection):
    """
    called by the frontend when the user indicates whether they are
    a donor or a recipient.  the body should be
    { "role": "donor" }  or  { "role": "recipient" }.
    """
    role = selection.role.strip().lower()
    if role not in ("donor", "recipient"):
        raise HTTPException(status_code=400,
                            detail="role must be 'donor' or 'recipient'")

    # you can do whatever you need here; this example just echoes back
    return {"message": "role received", "role": role}
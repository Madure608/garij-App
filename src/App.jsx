import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const [services, setServices] = useState([
  { id: 1, name: 'Towing service', checked: true },
  { id: 2, name: 'Tyre repair / replace', checked: true },
  { id: 3, name: 'Battery jump start', checked: true },
  { id: 4, name: 'Engine repair', checked: false },
])

function toggleService(id) {
  setServices(
    services.map((s) =>
      s.id === id ? { ...s, checked: !s.checked } : s
    )
  )
}
const [garageName, setGarageName] = useState('Nimal Auto Garage')
const [contactNumber, setContactNumber] = useState('071 234 5678')

  return (
    <div className="screen">
      <div className="card">

        <div className="header">
          <span className="back-arrow">&#8592;</span>
          <p className="title">Edit garage details</p>
        </div>

        <div className="status-card">
          <div>
            <p className="status-label">Garage status</p>
            <p className="status-sub">Customers can send requests when open</p>
          </div>
          <div className="toggle-row">
            <span className="status-text">{isOpen ? 'Open' : 'Closed'}</span>
            <div
              className={`toggle ${isOpen ? 'on' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="toggle-circle"></div>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <p>Add garage photo</p>
        </div>

        <label className="field-label">Garage name</label>
<input
  type="text"
  className="text-input"
  value={garageName}
  onChange={(e) => setGarageName(e.target.value)}
/>

<label className="field-label">Contact number</label>
<input
  type="text"
  className="text-input"
  value={contactNumber}
  onChange={(e) => setContactNumber(e.target.value)}
/>

        <label className="field-label">Location</label>
        <div className="location-row">
          <span>Kandy road, Kadawatha</span>
          <span className="link-text">Set on map</span>
        </div>

        <div className="services-header">
          <p className="field-label">Services we offer</p>
          <span className="link-text">+ Add</span>
        </div>
        {services.map((service) => (
  <div className="service-row" key={service.id}>
    <span>{service.name}</span>
    <input
      type="checkbox"
      checked={service.checked}
      onChange={() => toggleService(service.id)}
    />
  </div>
))}

  
          

        <button
  className="save-btn"
  onClick={() => {
    console.log({ garageName, contactNumber, isOpen, services })
    alert('Saved! (console එකේ බලන්න)')
  }}
>
  Save changes
</button>
      </div>
    </div>
  )
}

export default App
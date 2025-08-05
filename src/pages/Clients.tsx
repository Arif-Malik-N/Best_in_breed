import React from 'react'

function Clients() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">
          Our Clients
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Client 1</h3>
            <p className="text-neutral-600 mb-4">A satisfied customer who loves our services.</p>
            <div className="flex gap-2">
              <span className="badge-primary">VIP</span>
              <span className="badge-success">Active</span>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Client 2</h3>
            <p className="text-neutral-600 mb-4">Another happy client with great feedback.</p>
            <div className="flex gap-2">
              <span className="badge-secondary">Premium</span>
              <span className="badge-success">Active</span>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">Client 3</h3>
            <p className="text-neutral-600 mb-4">A long-term partner in our success.</p>
            <div className="flex gap-2">
              <span className="badge-warning">Pending</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="btn-primary mr-4">Add New Client</button>
          <button className="btn-outline">View All</button>
        </div>
      </div>
    </div>
  )
}

export default Clients
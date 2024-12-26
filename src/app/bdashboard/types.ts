export interface CropListing {
    id: number
    croptype: string
    quantity: number
    unit: string
    price: number
    farmerDistrict: string  // Added missing property
    farmerState: string     // Added missing property
  }
  

export interface Interest {
  id: number
  listingId: number
  croptype: string
  status: 'pending' | 'accepted' | 'rejected'
}

export interface Contract {
  id: number
  listingId: number
  croptype: string
  quantity: number
  unit: string
  price: number
  status: 'pending' | 'finalized'
}


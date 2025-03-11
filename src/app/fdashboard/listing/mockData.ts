export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;

}

export interface InterestForm {
  id: string;
  listingId: string;
  buyerName: string;
  buyerPhone: string;
  offeredPrice: number;
  quantity: number;
  status: 'pending' | 'rejected' | 'accepted' | 'negotiating';
}

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Fresh Apples',
    description: 'Crisp and juicy apples straight from the orchard',
    price: 2.5,
    quantity: 100,
    unit: 'kg'
  },
  {
    id: '2',
    title: 'Organic Tomatoes',
    description: 'Vine-ripened organic tomatoes',
    price: 3.0,
    quantity: 50,
    unit: 'kg'
  }
];

export const mockInterestForms: InterestForm[] = [
  {
    id: '1',
    listingId: '1',
    buyerName: 'John Doe',
    buyerPhone: '+1234567890',
    offeredPrice: 2.3,
    quantity: 50,
    status: 'pending'
  },
  {
    id: '2',
    listingId: '1',
    buyerName: 'Jane Smith',
    buyerPhone: '+0987654321',
    offeredPrice: 2.4,
    quantity: 75,
    status: 'pending'
  },
  {
    id: '3',
    listingId: '2',
    buyerName: 'Bob Johnson',
    buyerPhone: '+1122334455',
    offeredPrice: 2.8,
    quantity: 30,
    status: 'pending'
  }
];


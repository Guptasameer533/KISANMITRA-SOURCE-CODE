'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PageBackground } from '@/components/PageBackground';

// Define the type for contract data according to the API response
interface Contract {
  _id: string; // Unique identifier
  croptype: string;
  price: number;
  quantity: number;
  status: string;
  startDate: string;
  endDate: string;
  advancedTransactionId: string;
  paymentTransactionId: string;
  bemail: string;
  femail: string;
}

export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // For error handling

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        if (typeof window === 'undefined') return;

        // Retrieve the email from localStorage
        const email = localStorage.getItem('email');
        console.log('Email:', email);

        if (!email) {
          throw new Error('User email not found in localStorage.');
        }

        // Fetch contracts using the stored email
        const response = await fetch(`http://172.22.25.168:8003/a/${email}`);
        const data = await response.json();
        console.log('API Response:', data);

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch contracts.');
        }

        // Update state with contracts array from response
        if (Array.isArray(data)) {
          setContracts(data); // Use the correct structure from the API response
        } else {
          console.warn('Expected an array but got:', data);
          setContracts([]); // Handle case where no contracts are returned
        }
      } catch (err) {
        setError('Something went wrong.');
        console.error('Error fetching contracts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  return (
    <DashboardLayout>
      <PageBackground imageSrc="/resources/background2.jpeg" />
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Contracts</h1>
        <Button>View Contract Offers</Button>
      </div> */}

      {loading ? (
        <div className="flex justify-center items-center">
          <p>Loading...</p> {/* Use a spinner component or loading text */}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : contracts.length === 0 ? (
        <div className="text-center">
          <p>No contracts found. Start creating your first contract!</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Buyer Email</TableHead>
              <TableHead>Crop</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              {/* <TableHead>Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract._id}>
                <TableCell>{contract.bemail}</TableCell>
                <TableCell>{contract.croptype}</TableCell>
                <TableCell>{contract.quantity}</TableCell>
                <TableCell>{contract.price}</TableCell>
                <TableCell>{contract.status}</TableCell>
                {/* <TableCell>
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DashboardLayout>
  );
}

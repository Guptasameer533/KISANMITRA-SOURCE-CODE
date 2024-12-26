'use client'
import { useState, useEffect } from 'react';
import { CropListing } from '../types';
import ListingCard from '../components/ListingCard';

interface Filters {
  cropType: string;
  district: string;
  state: string;
}

export default function Marketplace() {
  const [listings, setListings] = useState<CropListing[]>([]);
  const [filters, setFilters] = useState<Filters>({
    cropType: '',
    district: '',
    state: '',
  });

  useEffect(() => {
    fetchListings(filters);
  }, [filters]);

  const fetchListings = async (filters: Filters) => {
    try {
      const response = await fetch('http://172.22.25.168:8004/b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          croptype: filters.cropType,
          district: filters.district,
          state: filters.state,
        }),
      });

      if (response.status === 204) {
        setListings([]);
        console.warn('No listings found');
        return;
      }

      if (response.ok) {
        const data: CropListing[] = await response.json();
        setListings(data);
      } else {
        console.error('Failed to fetch listings');
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black"
      style={{ backgroundImage: "url('/resources/background4.jpeg')" }}
    >
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <aside className="w-64 bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Crop Type</label>
                <select
                  value={filters.cropType}
                  onChange={(e) => applyFilters({ ...filters, cropType: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Rice">Rice</option>
                  <option value="Corn">Corn</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">District</label>
                <select
                  value={filters.district}
                  onChange={(e) => applyFilters({ ...filters, district: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All</option>
                  <option value="District A">District A</option>
                  <option value="District B">District B</option>
                  <option value="District C">District C</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">State</label>
                <select
                  value={filters.state}
                  onChange={(e) => applyFilters({ ...filters, state: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="">All</option>
                  <option value="State X">State X</option>
                  <option value="State Y">State Y</option>
                  <option value="State Z">State Z</option>
                </select>
              </div>
            </div>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-6 text-white">Marketplace</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

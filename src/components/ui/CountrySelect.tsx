'use client';

import React, { useState, useRef, useEffect } from 'react';
import { topCountryCodes, allCountryCodes, CountryCode } from '@/lib/countryCodes';
import { Search, ChevronDown } from 'lucide-react';

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = topCountryCodes.find(c => c.code === value) || allCountryCodes.find(c => c.code === value) || topCountryCodes[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filterCountries = (countries: CountryCode[]) => {
    if (!search) return countries;
    const lowerSearch = search.toLowerCase();
    return countries.filter(
      c => c.name.toLowerCase().includes(lowerSearch) || c.code.includes(lowerSearch)
    );
  };

  const filteredTop = filterCountries(topCountryCodes);
  const filteredAll = filterCountries(allCountryCodes);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-[110px] shrink-0 bg-[#141414] border border-[#282828] hover:border-[#444] focus:border-[#ff5500] rounded-lg px-3 py-2.5 text-sm text-[#f5f5f0] outline-none flex items-center justify-between transition-colors"
      >
        <span className="flex items-center gap-1.5">
          <span>{selectedCountry.flag}</span>
          <span>{selectedCountry.code}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#71717a] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[280px] bg-[#141414] border border-[#282828] rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="p-2 border-b border-[#282828]">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#71717a]" />
              <input
                type="text"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code..."
                className="w-full bg-[#0d0d0d] border border-[#282828] focus:border-[#ff5500] rounded-lg pl-8 pr-3 py-2 text-sm text-[#f5f5f0] placeholder-[#5c5c60] outline-none"
              />
            </div>
          </div>
          
          <div className="max-h-[300px] overflow-y-auto p-1 custom-scrollbar">
            {filteredTop.length > 0 && (
              <div className="mb-2">
                <div className="px-2 py-1.5 text-[10px] font-mono uppercase text-[#71717a] font-semibold tracking-wider">Top Countries</div>
                {filteredTop.map((country, idx) => (
                  <button
                    key={`top-${idx}`}
                    type="button"
                    onClick={() => {
                      onChange(country.code);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-3 ${value === country.code ? 'bg-[#ff5500]/10 text-[#ff5500]' : 'text-[#f5f5f0] hover:bg-[#1e1e1e]'}`}
                  >
                    <span>{country.flag}</span>
                    <span className="flex-1 truncate">{country.name}</span>
                    <span className={`text-xs ${value === country.code ? 'text-[#ff5500]' : 'text-[#71717a]'}`}>{country.code}</span>
                  </button>
                ))}
              </div>
            )}
            
            {filteredAll.length > 0 && (
              <div>
                <div className="px-2 py-1.5 text-[10px] font-mono uppercase text-[#71717a] font-semibold tracking-wider">All Countries</div>
                {filteredAll.map((country, idx) => (
                  <button
                    key={`all-${idx}`}
                    type="button"
                    onClick={() => {
                      onChange(country.code);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center gap-3 ${value === country.code ? 'bg-[#ff5500]/10 text-[#ff5500]' : 'text-[#f5f5f0] hover:bg-[#1e1e1e]'}`}
                  >
                    <span>{country.flag}</span>
                    <span className="flex-1 truncate">{country.name}</span>
                    <span className={`text-xs ${value === country.code ? 'text-[#ff5500]' : 'text-[#71717a]'}`}>{country.code}</span>
                  </button>
                ))}
              </div>
            )}

            {filteredTop.length === 0 && filteredAll.length === 0 && (
              <div className="p-4 text-center text-sm text-[#71717a]">
                No countries found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

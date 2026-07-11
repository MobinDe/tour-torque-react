// src/components/LocationSelect.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react';

const LocationSelect = ({
  options = [],
  value,
  onChange,
  placeholder = 'انتخاب کنید',
  label,
  searchable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  // فیلتر گزینه‌ها بر اساس عبارت جستجو
  const filteredOptions = useMemo(() => {
    if (!searchable || !search.trim()) return options;
    const term = search.trim().toLowerCase();
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(term)
    );
  }, [options, search, searchable]);

  const selected = options.find((opt) => opt.value === value);

  // بستن دراپ‌داون با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // فوکوس خودکار روی فیلد جستجو هنگام باز شدن
  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // پیمایش با کیبورد
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setIsOpen(true);
        return;
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && filteredOptions[activeIndex]) {
          onChange(filteredOptions[activeIndex].value);
          setIsOpen(false);
          setSearch('');
          setActiveIndex(-1);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearch('');
        break;
      default:
        break;
    }
  };

  // اسکرول خودکار به آیتم فعال
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('[role="option"]');
      if (items[activeIndex]) {
        items[activeIndex].scrollIntoView({ block: 'nearest' });
      }
    }
  }, [activeIndex, isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef} onKeyDown={handleKeyDown}>
      {label && (
        <label className="block text-xs text-white/80 mb-1 text-right">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearch('');
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="w-full bg-white/20 backdrop-blur-sm text-white p-3 rounded-2xl border border-white/30 
                   focus:outline-none focus:ring-2 focus:ring-amber-400 text-right flex justify-between items-center
                   shadow-md transition-all duration-200 hover:bg-white/30"
      >
        <span className="flex items-center gap-2">
          {selected ? (
            <>
              {selected.icon && <span>{selected.icon}</span>}
              <span>{selected.label}</span>
            </>
          ) : (
            <span className="text-white/70">{placeholder}</span>
          )}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {searchable && (
            <div className="p-2 border-b border-gray-100">
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveIndex(-1); // ریست انتخاب
                }}
                placeholder="جستجو..."
                className="w-full p-2 text-right text-gray-800 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <ul
            ref={listRef}
            role="listbox"
            aria-label={label || 'لیست انتخاب'}
            className="max-h-60 overflow-y-auto"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={value === opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch('');
                    setActiveIndex(-1);
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors text-right
                    ${
                      value === opt.value
                        ? 'bg-amber-100 text-amber-800 font-medium'
                        : index === activeIndex
                        ? 'bg-gray-100 text-gray-800'
                        : 'hover:bg-gray-50 text-gray-800'
                    }`}
                >
                  {opt.icon && <span className="text-lg">{opt.icon}</span>}
                  <span>{opt.label}</span>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500 text-center">نتیجه‌ای یافت نشد</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSelect;
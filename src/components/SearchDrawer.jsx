import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { SEARCH_SUGGESTIONS } from "../data/searchProducts";
import { smartSearch, getAutocompleteSuggestions } from "../utils/searchEngine";
import { productLink } from "../utils/slugs";

const FILTER_OPTIONS = [
  {
    key: "gender",
    label: "Gender",
    options: ["Men", "Women", "Unisex"],
  },
  {
    key: "season",
    label: "Season",
    options: ["Spring", "Summer", "Autumn", "Winter"],
  },
  {
    key: "style",
    label: "Style",
    options: ["Minimal", "Classic", "Streetwear", "Quiet Luxury", "Statement"],
  },
  {
    key: "occasion",
    label: "Occasion",
    options: ["Everyday", "Work", "Going Out", "Vacation", "Gifting"],
  },
  {
    key: "category",
    label: "Category",
    options: ["Jewelry", "Watches", "Eyewear", "Headwear", "Footwear", "Accessories"],
  },
];

export default function SearchDrawer({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setQuery("");
        setActiveFilters({});
        setShowFilters(false);
        setSelectedSuggestion(null);
      }, 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const q = query.toLowerCase().trim();

  // Smart search results
  const searchResults = useMemo(() => {
    if (!q && !selectedSuggestion) return [];
    const effectiveQuery = selectedSuggestion || query;
    return smartSearch(effectiveQuery);
  }, [q, query, selectedSuggestion]);

  // Autocomplete suggestions
  const autocomplete = useMemo(() => {
    if (!q || selectedSuggestion) return [];
    return getAutocompleteSuggestions(query);
  }, [q, query, selectedSuggestion]);

  // Apply filters to results
  const filteredResults = useMemo(() => {
    if (searchResults.length === 0) return [];
    return searchResults.filter((product) => {
      for (const [key, value] of Object.entries(activeFilters)) {
        if (key === "category") {
          if (product.category !== value) return false;
        } else if (key === "gender") {
          const genderMap = { Men: "male", Women: "female", Unisex: "unisex" };
          if (!product.gender.includes(genderMap[value])) return false;
        } else if (key === "season") {
          if (
            !product.season.includes(value.toLowerCase()) &&
            !product.season.includes("all-season")
          )
            return false;
        } else if (key === "style") {
          if (!product.style.includes(value.toLowerCase().replace(" ", "-")))
            return false;
        } else if (key === "occasion") {
          if (
            !product.occasion.includes(value.toLowerCase().replace(" ", "-"))
          )
            return false;
        }
      }
      return true;
    });
  }, [searchResults, activeFilters]);


  const handleAutocompleteClick = (suggestion) => {
    if (suggestion.path) {
      navigate(suggestion.path);
      onClose();
      return;
    }
    setQuery(suggestion.label);
    setSelectedSuggestion(suggestion.label);
  };

  const handleFilterToggle = (key, value) => {
    setActiveFilters((prev) => {
      if (prev[key] === value) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: value };
    });
    setSelectedSuggestion(null);
  };

  const clearFilters = () => {
    setActiveFilters({});
    setSelectedSuggestion(null);
  };

  const handleProductClick = (product) => {
    navigate(productLink(product.name, product.image, product.price));
    onClose();
  };

  const handleQuickSuggestion = (text) => {
    setQuery(text);
    setSelectedSuggestion(text);
  };

  if (!isOpen) return null;

  const hasResults = searchResults.length > 0 || selectedSuggestion;
  const showDefault = !q && !selectedSuggestion;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant/30">
          <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
            search
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedSuggestion(null);
            }}
            placeholder="Search products, styles, occasions..."
            className="flex-1 bg-transparent font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant/40 outline-none"
          />
          {q && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedSuggestion(null);
              }}
              className="text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </button>
          )}
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close search"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Default: Suggestions */}
          {showDefault && (
            <div className="px-5 py-5 flex flex-col gap-8">
              {/* Popular Searches */}
              <div>
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-3">
                  POPULAR SEARCHES
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SEARCH_SUGGESTIONS.popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleQuickSuggestion(term)}
                      className="px-3 py-1.5 border border-outline-variant/50 hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-[13px] transition-colors rounded"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop by Gender */}
              <div>
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-3">
                  SHOP BY GENDER
                </h3>
                <div className="flex gap-2">
                  {SEARCH_SUGGESTIONS.shopByGender.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleQuickSuggestion(s.query)}
                      className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-[13px] transition-colors rounded"
                    >
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                        person
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop by Style */}
              <div>
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-3">
                  SHOP BY STYLE
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SEARCH_SUGGESTIONS.shopByStyle.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleQuickSuggestion(s.query)}
                      className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-[13px] transition-colors rounded"
                    >
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                        auto_awesome
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop by Occasion */}
              <div>
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-3">
                  SHOP BY OCCASION
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SEARCH_SUGGESTIONS.shopByOccasion.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleQuickSuggestion(s.query)}
                      className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-[13px] transition-colors rounded"
                    >
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                        event
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shop by Season */}
              <div>
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] mb-3">
                  SHOP BY SEASON
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SEARCH_SUGGESTIONS.shopBySeason.map((s) => (
                    <button
                      key={s.label}
                      onClick={() => handleQuickSuggestion(s.query)}
                      className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 hover:border-primary hover:bg-primary/5 text-on-surface font-body-md text-[13px] transition-colors rounded"
                    >
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                        wb_sunny
                      </span>
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Autocomplete */}
          {!selectedSuggestion && autocomplete.length > 0 && (
            <div className="px-5 py-3 border-b border-outline-variant/20">
              {autocomplete.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleAutocompleteClick(s)}
                  className="flex items-center gap-3 w-full px-3 py-2.5 hover:bg-surface-container-low rounded transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant/50">
                    {s.icon}
                  </span>
                  <span className="font-body-md text-[14px] text-on-surface">
                    {s.label}
                  </span>
                  <span className="ml-auto font-label-caps text-[9px] text-on-surface-variant/40 uppercase tracking-widest">
                    {s.type}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Quick Suggestion Chips */}
          {selectedSuggestion && (
            <div className="px-5 py-3 border-b border-outline-variant/20 flex items-center gap-2">
              <span className="font-body-md text-[13px] text-on-surface-variant shrink-0">
                Showing results for:
              </span>
              <span className="font-body-md text-[13px] text-primary font-medium min-w-0 truncate">
                {selectedSuggestion}
              </span>
              <button
                onClick={() => {
                  setSelectedSuggestion(null);
                  setQuery("");
                }}
                className="ml-auto text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  close
                </span>
              </button>
            </div>
          )}

          {/* Filters */}
          {hasResults && (
            <div className="px-5 py-3 border-b border-outline-variant/20">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em] hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">
                  tune
                </span>
                FILTERS
                {Object.keys(activeFilters).length > 0 && (
                  <span className="bg-primary text-on-primary text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                    {Object.keys(activeFilters).length}
                  </span>
                )}
              </button>

              {showFilters && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {FILTER_OPTIONS.map((filter) => (
                    <div key={filter.key} className="flex flex-wrap gap-1.5">
                      {filter.options.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            handleFilterToggle(filter.key, option)
                          }
                          className={`px-2.5 py-1 text-[11px] font-label-caps tracking-wider uppercase transition-colors rounded ${
                            activeFilters[filter.key] === option
                              ? "bg-primary text-on-primary"
                              : "border border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-on-surface"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ))}
                  {Object.keys(activeFilters).length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="px-2.5 py-1 text-[11px] font-label-caps tracking-wider uppercase text-error hover:text-error/80 transition-colors"
                    >
                      CLEAR ALL
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Results */}
          {hasResults && (
            <div className="px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.15em]">
                  RESULTS ({filteredResults.length})
                </h3>
              </div>

              {filteredResults.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="font-body-md text-[13px] text-on-surface-variant">
                    No products match your filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-2 text-primary font-label-caps text-[10px] uppercase tracking-widest"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filteredResults.map((product) => (
                    <button
                      key={product.name}
                      onClick={() => handleProductClick(product)}
                      className="flex items-center gap-3 px-3 py-2.5 hover:bg-surface-container-low rounded transition-colors text-left"
                    >
                      <div className="w-11 h-14 bg-surface-container-low flex-shrink-0 overflow-hidden rounded">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body-md text-[13px] text-on-surface truncate">
                          {product.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-label-caps text-[9px] text-on-surface-variant tracking-widest">
                            {product.price}
                          </span>
                          <span className="text-on-surface-variant/20">·</span>
                          <span className="font-label-caps text-[9px] text-primary/70 tracking-widest uppercase">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[14px] text-on-surface-variant/30">
                        arrow_forward
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* No results */}
          {q && !hasResults && (
            <div className="px-5 py-16 text-center">
              <span className="material-symbols-outlined text-[40px] text-on-surface-variant/30 mb-3 block">
                search_off
              </span>
              <p className="font-body-md text-[14px] text-on-surface-variant mb-1">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="font-body-md text-[12px] text-on-surface-variant/50">
                Try searching for a style, occasion, or product type
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

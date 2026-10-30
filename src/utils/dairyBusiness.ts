/**
 * Core business rules, calculation helpers, and domain types for Mr Moo's Dairy & Parlour
 */

export interface IceCreamFlavour {
  id: string;
  name: string;
  category: 'traditional' | 'fruity' | 'chocolate' | 'nutty' | 'vegan' | 'doggy';
  description: string;
  isAwardWinner?: boolean;
  isPopular?: boolean;
  isSeasonal?: boolean;
  allergens: string[];
  dietary: ('gluten-free' | 'dairy-free' | 'vegan' | 'vegetarian')[];
  rating: number;
  availableSizes: ('cone' | 'tub-single' | 'tub-double' | 'takeaway-500ml' | 'takeaway-1l' | 'napoli-4.5l')[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'lunch' | 'sundae' | 'waffle' | 'hot-drink' | 'cold-drink' | 'children';
  price: number;
  description: string;
  dietary?: string[];
  popular?: boolean;
  servingTime?: string;
}

export const OPENING_HOURS = {
  openTime: '10:00',
  closeTime: '16:30',
  breakfastCutoff: '12:00',
  lunchCutoff: '14:00',
  openDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

export const ICE_CREAM_PRICES = {
  singleCone: 3.20,
  doubleCone: 4.80,
  tripleCone: 6.20,
  waffleConeExtra: 0.60,
  flakeExtra: 0.50,
  takeaway500ml: 6.50,
  takeaway1Litre: 11.50,
  takeaway2Litre: 21.00,
  napoliWholesale: 38.00,
  doggyTub: 2.75,
};

/**
 * Filter flavours by search query, category, and dietary restrictions
 */
export function filterFlavours(
  flavours: IceCreamFlavour[],
  query: string,
  category: string,
  dietaryFilter: string
): IceCreamFlavour[] {
  const normalizedQuery = query.trim().toLowerCase();

  return flavours.filter((item) => {
    // Search match
    const matchesSearch =
      normalizedQuery === '' ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery);

    if (!matchesSearch) return false;

    // Category match
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    // Dietary match
    if (dietaryFilter !== 'all') {
      if (!item.dietary.includes(dietaryFilter as any)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Calculate order total for custom cone/tub configuration
 */
export function calculateServingPrice(
  scoops: 1 | 2 | 3,
  isWaffleCone: boolean,
  hasFlake: boolean,
  hasFudgeStick: boolean = false
): number {
  let total = 0;
  if (scoops === 1) total += ICE_CREAM_PRICES.singleCone;
  else if (scoops === 2) total += ICE_CREAM_PRICES.doubleCone;
  else total += ICE_CREAM_PRICES.tripleCone;

  if (isWaffleCone) total += ICE_CREAM_PRICES.waffleConeExtra;
  if (hasFlake) total += ICE_CREAM_PRICES.flakeExtra;
  if (hasFudgeStick) total += 0.50;

  return Math.round(total * 100) / 100;
}

/**
 * Determine parlor service status for a given time in HH:mm
 */
export function getServiceStatus(timeString: string): {
  isParlourOpen: boolean;
  isBreakfastAvailable: boolean;
  isLunchAvailable: boolean;
  message: string;
} {
  const [hours, minutes] = timeString.split(':').map(Number);
  const totalMins = hours * 60 + minutes;

  const openMins = 10 * 60; // 10:00
  const closeMins = 16 * 60 + 30; // 16:30
  const breakfastCutoffMins = 12 * 60; // 12:00
  const lunchCutoffMins = 14 * 60; // 14:00

  const isParlourOpen = totalMins >= openMins && totalMins < closeMins;
  const isBreakfastAvailable = totalMins >= openMins && totalMins < breakfastCutoffMins;
  const isLunchAvailable = totalMins >= openMins && totalMins < lunchCutoffMins;

  let message = 'Parlour is Closed. Opens 10:00 AM daily.';
  if (isParlourOpen) {
    if (isBreakfastAvailable) {
      message = 'Open now: Full Breakfast & Ice Cream served!';
    } else if (isLunchAvailable) {
      message = 'Open now: Farmhouse Lunches & Ice Cream served!';
    } else {
      message = 'Open now: Ice Cream, Desserts & Hot Drinks served (Kitchen closed for lunch).';
    }
  }

  return {
    isParlourOpen,
    isBreakfastAvailable,
    isLunchAvailable,
    message,
  };
}

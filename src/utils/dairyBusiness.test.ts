import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterFlavours,
  calculateServingPrice,
  getServiceStatus,
  IceCreamFlavour,
} from './dairyBusiness';

const sampleFlavours: IceCreamFlavour[] = [
  {
    id: 'rhubarb-ginger',
    name: 'Rhubarb & Ginger',
    category: 'fruity',
    description: 'Tangy Yorkshire rhubarb swirled with fiery stem ginger pieces.',
    isAwardWinner: true,
    allergens: ['milk'],
    dietary: ['vegetarian', 'gluten-free'],
    rating: 4.9,
    availableSizes: ['cone', 'tub-single', 'tub-double', 'takeaway-500ml', 'takeaway-1l'],
  },
  {
    id: 'clotted-vanilla',
    name: 'Farmhouse Clotted Cream Vanilla',
    category: 'traditional',
    description: 'Classic Madagascar bourbon vanilla infused with rich local clotted cream.',
    isPopular: true,
    allergens: ['milk'],
    dietary: ['vegetarian', 'gluten-free'],
    rating: 5.0,
    availableSizes: ['cone', 'tub-single', 'takeaway-500ml', 'takeaway-1l', 'napoli-4.5l'],
  },
  {
    id: 'vegan-raspberry-sorbet',
    name: 'East Coast Raspberry Sorbet',
    category: 'vegan',
    description: 'Refreshing dairy-free sorbet made with ripe British summer raspberries.',
    allergens: [],
    dietary: ['vegan', 'dairy-free', 'gluten-free'],
    rating: 4.8,
    availableSizes: ['cone', 'tub-single', 'takeaway-500ml'],
  },
  {
    id: 'doggy-ice-cream',
    name: 'Pawsome Peanut & Banana Doggy Tub',
    category: 'doggy',
    description: 'Specially formulated dog-friendly treat with no lactose or added sugar.',
    allergens: ['peanuts'],
    dietary: ['dairy-free'],
    rating: 5.0,
    availableSizes: ['tub-single'],
  },
];

test('filterFlavours returns all matching items when no filter applied', () => {
  const result = filterFlavours(sampleFlavours, '', 'all', 'all');
  assert.equal(result.length, 4);
});

test('filterFlavours filters by search term', () => {
  const result = filterFlavours(sampleFlavours, 'rhubarb', 'all', 'all');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'rhubarb-ginger');
});

test('filterFlavours filters by category', () => {
  const result = filterFlavours(sampleFlavours, '', 'vegan', 'all');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'vegan-raspberry-sorbet');
});

test('filterFlavours filters by dietary preference', () => {
  const result = filterFlavours(sampleFlavours, '', 'all', 'vegan');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'vegan-raspberry-sorbet');
});

test('calculateServingPrice computes correct pricing with addons', () => {
  // 1 scoop regular cone = 3.20
  assert.equal(calculateServingPrice(1, false, false), 3.20);
  // 2 scoops waffle cone with flake = 4.80 + 0.60 + 0.50 = 5.90
  assert.equal(calculateServingPrice(2, true, true), 5.90);
  // 3 scoops waffle cone with flake & fudge = 6.20 + 0.60 + 0.50 + 0.50 = 7.80
  assert.equal(calculateServingPrice(3, true, true, true), 7.80);
});

test('getServiceStatus returns correct statuses throughout the day', () => {
  // Before opening (09:30)
  const morningStatus = getServiceStatus('09:30');
  assert.equal(morningStatus.isParlourOpen, false);

  // During breakfast (11:00)
  const breakfastStatus = getServiceStatus('11:00');
  assert.equal(breakfastStatus.isParlourOpen, true);
  assert.equal(breakfastStatus.isBreakfastAvailable, true);

  // During lunch (13:15)
  const lunchStatus = getServiceStatus('13:15');
  assert.equal(lunchStatus.isParlourOpen, true);
  assert.equal(lunchStatus.isBreakfastAvailable, false);
  assert.equal(lunchStatus.isLunchAvailable, true);

  // Afternoon desserts only (15:00)
  const afternoonStatus = getServiceStatus('15:00');
  assert.equal(afternoonStatus.isParlourOpen, true);
  assert.equal(afternoonStatus.isBreakfastAvailable, false);
  assert.equal(afternoonStatus.isLunchAvailable, false);

  // After closing (17:00)
  const closedStatus = getServiceStatus('17:00');
  assert.equal(closedStatus.isParlourOpen, false);
});

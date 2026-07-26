export const categories = [
  { id: 1, name: "Fresh Fruits", icon: "🍎", count: 48, color: "#fff3e0" },
  { id: 2, name: "Vegetables", icon: "🥦", count: 62, color: "#e8f5e9" },
  { id: 3, name: "Dairy & Eggs", icon: "🥛", count: 24, color: "#e3f2fd" },
  { id: 4, name: "Bakery", icon: "🍞", count: 31, color: "#fce4ec" },
  { id: 5, name: "Meat & Fish", icon: "🐟", count: 19, color: "#f3e5f5" },
  { id: 6, name: "Grains & Pulses", icon: "🌾", count: 55, color: "#fff8e1" },
];

export const products = [
  { id: 1, name: "Organic Apples", category: "Fresh Fruits", price: 4.99, oldPrice: 6.49, unit: "per kg", rating: 4.8, reviews: 124, badge: "Organic", emoji: "🍎", inStock: true },
  { id: 2, name: "Baby Spinach", category: "Vegetables", price: 2.49, oldPrice: null, unit: "per bunch", rating: 4.6, reviews: 89, badge: "Fresh", emoji: "🌿", inStock: true },
  { id: 3, name: "Farm Eggs", category: "Dairy & Eggs", price: 5.99, oldPrice: 7.29, unit: "12 pack", rating: 4.9, reviews: 212, badge: "Free Range", emoji: "🥚", inStock: true },
  { id: 4, name: "Sourdough Loaf", category: "Bakery", price: 6.49, oldPrice: null, unit: "per loaf", rating: 4.7, reviews: 67, badge: "Artisan", emoji: "🍞", inStock: true },
  { id: 5, name: "Avocados", category: "Fresh Fruits", price: 3.99, oldPrice: 5.49, unit: "pack of 4", rating: 4.5, reviews: 156, badge: "Sale", emoji: "🥑", inStock: true },
  { id: 6, name: "Whole Milk", category: "Dairy & Eggs", price: 3.29, oldPrice: null, unit: "per litre", rating: 4.4, reviews: 98, badge: null, emoji: "🥛", inStock: true },
  { id: 7, name: "Cherry Tomatoes", category: "Vegetables", price: 2.99, oldPrice: 3.99, unit: "per 500g", rating: 4.8, reviews: 143, badge: "Sale", emoji: "🍅", inStock: true },
  { id: 8, name: "Atlantic Salmon", category: "Meat & Fish", price: 12.99, oldPrice: 15.99, unit: "per 400g", rating: 4.7, reviews: 78, badge: "Fresh", emoji: "🐟", inStock: true },
  { id: 9, name: "Basmati Rice", category: "Grains & Pulses", price: 4.49, oldPrice: null, unit: "per kg", rating: 4.6, reviews: 201, badge: null, emoji: "🍚", inStock: true },
  { id: 10, name: "Strawberries", category: "Fresh Fruits", price: 3.49, oldPrice: 4.99, unit: "per punnet", rating: 4.9, reviews: 187, badge: "Seasonal", emoji: "🍓", inStock: true },
  { id: 11, name: "Broccoli", category: "Vegetables", price: 1.99, oldPrice: null, unit: "per head", rating: 4.5, reviews: 102, badge: null, emoji: "🥦", inStock: true },
  { id: 12, name: "Greek Yogurt", category: "Dairy & Eggs", price: 4.79, oldPrice: 5.99, unit: "500g", rating: 4.7, reviews: 134, badge: "Sale", emoji: "🍶", inStock: true },
];

export const offers = [
  {
    id: 1,
    title: "Fresh Fruit Bundle",
    subtitle: "Save 30% on seasonal picks",
    discount: "30% OFF",
    bg: "linear-gradient(135deg, #d4edda 0%, #a8d5b5 100%)",
    emoji: "🍓🍊🍇",
    tag: "Limited Time",
  },
  {
    id: 2,
    title: "Organic Veggies Box",
    subtitle: "Weekly subscription — cancel anytime",
    discount: "₹199/week",
    bg: "linear-gradient(135deg, #e8f5e9 0%, #b9dfc5 100%)",
    emoji: "🥦🥕🌽",
    tag: "Best Value",
  },
  {
    id: 3,
    title: "Dairy & Eggs Combo",
    subtitle: "Farm-fresh delivered daily",
    discount: "25% OFF",
    bg: "linear-gradient(135deg, #e3f2fd 0%, #b3d9f7 100%)",
    emoji: "🥛🧀🥚",
    tag: "Popular",
  },
];

export const testimonials = [
  { id: 1, name: "Priya Sharma", location: "Chennai", rating: 5, text: "Absolutely love FreshMart! The produce is always crisp and the delivery is lightning fast. Best grocery app I've used.", avatar: "PS" },
  { id: 2, name: "Arjun Mehta", location: "Mumbai", rating: 5, text: "The organic section is fantastic. You can really taste the difference in quality. My family switched completely from the supermarket.", avatar: "AM" },
  { id: 3, name: "Divya Nair", location: "Bangalore", rating: 4, text: "Great selection and fair prices. The weekly veggie box has been a game-changer for meal planning. Highly recommend!", avatar: "DN" },
];

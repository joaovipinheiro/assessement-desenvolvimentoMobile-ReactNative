export const getUsers = () => {
  return [
    { email: '123', password: '123', name: 'User One' },
    { email: 'user2@example.com', password: 'password2', name: 'User Two' },
  ];
};


export const categories = [
  { id: '1', name: 'Lanches', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Bebidas', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Sobremesas', image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Massas', image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Saladas', image: 'https://via.placeholder.com/150' },
];

export const products = {
  1: [
    { id: '101', name: 'Hambúrguer', price: 15.99, image: 'https://via.placeholder.com/100' },
    { id: '102', name: 'Batata Frita', price: 8.99, image: 'https://via.placeholder.com/100' },
  ],
  2: [
    { id: '201', name: 'Coca-Cola', price: 5.99, image: 'https://via.placeholder.com/100' },
    { id: '202', name: 'Suco Natural', price: 6.99, image: 'https://via.placeholder.com/100' },
  ],
  3: [
    { id: '301', name: 'Pudim', price: 9.99, image: 'https://via.placeholder.com/100' },
    { id: '302', name: 'Bolo de Chocolate', price: 12.99, image: 'https://via.placeholder.com/100' },
  ],
  4: [
    { id: '401', name: 'Espaguete à Bolonhesa', price: 18.99, image: 'https://via.placeholder.com/100' },
    { id: '402', name: 'Lasanha de Queijo', price: 22.99, image: 'https://via.placeholder.com/100' },
  ],
  5: [
    { id: '501', name: 'Salada Caesar', price: 12.99, image: 'https://via.placeholder.com/100' },
    { id: '502', name: 'Salada de Frango', price: 14.99, image: 'https://via.placeholder.com/100' },
  ],
};

export const orders = [
  { id: '1', item: 'Pizza de Calabresa', date: '2024-12-01', price: 50.00 },  // Preço como número
  { id: '2', item: 'Refrigerante 2L', date: '2024-12-02', price: 10.00 },
  { id: '3', item: 'Sorvete de Chocolate', date: '2024-12-03', price: 25.00 },
];

export const restaurants = [
  { id: '1', name: 'Confeitaria Colombo', latitude: -22.9076, longitude: -43.1856 },
  { id: '2', name: 'Café do Alto', latitude: -22.9044, longitude: -43.1802 },
  { id: '3', name: 'Bistrô 30', latitude: -22.9049, longitude: -43.1775 },
  { id: '4', name: 'Restaurante Palaphita', latitude: -22.9065, longitude: -43.1790 },
  { id: '5', name: 'Gigoia Grill', latitude: -22.9024, longitude: -43.1875 },
  { id: '6', name: 'Bar Luiz', latitude: -22.9050, longitude: -43.1870 },
  { id: '7', name: 'Casa da Feijoada', latitude: -22.9081, longitude: -43.1743 },
  { id: '8', name: 'Restaurante Oteque', latitude: -22.9058, longitude: -43.1841 },
  { id: '9', name: 'Zé Keti', latitude: -22.9071, longitude: -43.1860 },
  { id: '10', name: 'Braseiro da Gávea', latitude: -22.9056, longitude: -43.1812 },
];

export const restaurantDetails = [
  {
    id: '1',
    name: 'Confeitaria Colombo',
    address: 'Rua Gonçalves Dias, 32, Rio de Janeiro - RJ',
    menu: [
      { name: 'Hambúrguer', price: 15.99 },
      { name: 'Batata Frita', price: 8.99 },
      { name: 'Coca-Cola', price: 5.99 },
      { name: 'Pudim', price: 9.99 },
    ],
  },
  {
    id: '2',
    name: 'Café do Alto',
    address: 'Avenida Atlântica, 456, Rio de Janeiro - RJ',
    menu: [
      { name: 'Espaguete à Bolonhesa', price: 18.99 },
      { name: 'Lasanha de Queijo', price: 22.99 },
      { name: 'Suco Natural', price: 6.99 },
      { name: 'Bolo de Chocolate', price: 12.99 },
    ],
  },
  {
    id: '3',
    name: 'Bistrô 30',
    address: 'Praça XV, 789, Rio de Janeiro - RJ',
    menu: [
      { name: 'Salada Caesar', price: 12.99 },
      { name: 'Salada de Frango', price: 14.99 },
      { name: 'Suco Natural', price: 6.99 },
      { name: 'Pudim', price: 9.99 },
    ],
  },
  {
    id: '4',
    name: 'Restaurante Palaphita',
    address: 'Rua do Catete, 123, Rio de Janeiro - RJ',
    menu: [
      { name: 'Hambúrguer', price: 15.99 },
      { name: 'Batata Frita', price: 8.99 },
      { name: 'Coca-Cola', price: 5.99 },
      { name: 'Lasanha de Queijo', price: 22.99 },
    ],
  },
  {
    id: '5',
    name: 'Gigoia Grill',
    address: 'Rua das Pedras, 987, Rio de Janeiro - RJ',
    menu: [
      { name: 'Espaguete à Bolonhesa', price: 18.99 },
      { name: 'Salada Caesar', price: 12.99 },
      { name: 'Suco Natural', price: 6.99 },
      { name: 'Bolo de Chocolate', price: 12.99 },
    ],
  },
  {
    id: '6',
    name: 'Bar Luiz',
    address: 'Rua do Ouvidor, 159, Rio de Janeiro - RJ',
    menu: [
      { name: 'Hambúrguer', price: 15.99 },
      { name: 'Coca-Cola', price: 5.99 },
      { name: 'Sorvete de Chocolate', price: 25.00 },
      { name: 'Pudim', price: 9.99 },
    ],
  },
  {
    id: '7',
    name: 'Casa da Feijoada',
    address: 'Rua do Leme, 203, Rio de Janeiro - RJ',
    menu: [
      { name: 'Feijoada Completa', price: 30.00 },
      { name: 'Arroz Branco', price: 5.00 },
      { name: 'Suco Natural', price: 6.99 },
    ],
  },
  {
    id: '8',
    name: 'Restaurante Oteque',
    address: 'Avenida Olegário Maciel, 89, Rio de Janeiro - RJ',
    menu: [
      { name: 'Sushi Especial', price: 60.0 },
      { name: 'Bolo de Chocolate', price: 12.99 },
      { name: 'Suco Natural', price: 6.99 },
    ],
  },
  {
    id: '9',
    name: 'Zé Keti',
    address: 'Rua da Glória, 84, Rio de Janeiro - RJ',
    menu: [
      { name: 'Lasanha de Queijo', price: 22.99 },
      { name: 'Salada de Frango', price: 14.99 },
      { name: 'Coca-Cola', price: 5.99 },
    ],
  },
  {
    id: '10',
    name: 'Braseiro da Gávea',
    address: 'Rua Marquês de São Vicente, 118, Rio de Janeiro - RJ',
    menu: [
      { name: 'Espaguete à Bolonhesa', price: 18.99 },
      { name: 'Batata Frita', price: 8.99 },
      { name: 'Pudim', price: 9.99 },
      { name: 'Suco Natural', price: 6.99 },
    ],
  },
];



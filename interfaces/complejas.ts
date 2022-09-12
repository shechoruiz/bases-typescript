(() => {
  interface Client {
    name: string;
    age: number;
    address?: Address;
    // getFullAddress(id: string): void;
    getFullAddress: (id: string) => void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const cliente: Client = {
    name: "Sergio",
    age: 25,
    address: {
      id: 125,
      zip: "KYP235",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address?.city;
    },
  };

  const cliente2: Client = {
    name: "Maria",
    age: 30,
    getFullAddress(id: string) {
      return this.address?.city;
    },
  };
})();


export const classHost = [
  {
    clase: "Clase A",
    redes: [
      { cidr: 8, mask: "255.0.0.0", host: "16777214" , subred:65636},
      { cidr: 9, mask: "255.128.0.0", host: "8388606" , subred:32768},
      { cidr: 10, mask: "255.192.0.0", host: "4194302" , subred:16384},
      { cidr: 11, mask: "255.224.0.0", host: "2097150" , subred:8192},
      { cidr: 12, mask: "255.240.0.0", host: "1048574" , subred:4096},
      { cidr: 13, mask: "255.248.0.0", host: "524286" , subred:2048},
      { cidr: 14, mask: "255.252.0.0", host: "262142" , subred:1024},
      { cidr: 15, mask: "255.254.0.0", host: "131070" , subred:512},
    ],
  },
  {
    clase: "Clase B",
    redes: [
      { cidr: 16, mask: "255.255.0.0", host: "65534" , subred:256},
      { cidr: 17, mask: "255.255.128.0", host: "32766" , subred:128},
      { cidr: 18, mask: "255.255.192.0", host: "16382" , subred:64},
      { cidr: 19, mask: "255.255.224.0", host: "8190" , subred:32},
      { cidr: 20, mask: "255.255.240.0", host: "4094" , subred:16},
      { cidr: 21, mask: "255.255.248.0", host: "2046" , subred:8},
      { cidr: 22, mask: "255.255.252.0", host: "1022" , subred:4},
      { cidr: 23, mask: "255.255.254.0", host: "510" , subred:2},
    ],
  },
  { 
    clase: "Clase C",
    redes: [
      { cidr: 24, mask: "255.255.255.0", host: "254",subred:1 },  
    ],
  },
];

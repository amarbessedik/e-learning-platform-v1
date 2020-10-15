const institutions = [
  {
    institution: "Massachusetts Institute of Technology",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png",
  },
  {
    institution: "Harvard University",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png",
  },
  {
    institution: "University of California, Berkeley",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/54bc81cb-b736-4505-aa51-dd2b18c61d84-2082c7ba1024.png",
  },
  {
    institution: "The University of Texas System",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/3f0d28e5-eeb4-4e0f-9617-39546a3df0c8-1bfe1d50b12f.png",
  },
  {
    institution: "Boston University",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/36cfd0bb-1d18-4355-ae44-cb946573df3c-1e18515c3e4b.png",
  },
  {
    institution: "The Hong Kong Polytechnic University",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/0e54e104-1705-4479-80ec-5be6cac8b021-92ff94bde414.png",
  },
  {
    institution: "The University of Queensland",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/8554749f-b920-4d7f-8986-af6bb95290aa-f336c6a2ca11.png",
  },
  {
    institution: "University System of Maryland",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/b9dc96da-b3fc-45a6-b6b7-b8e12eb79335-bc0488f1a5f8.png",
  },
  {
    institution: "Sorbonne Université",
    imageUrl:
      "https://prod-discovery.edx-cdn.org/organization/logos/188a8d01-87c1-45e6-b518-3de65906deac-af51133a34ab.png",
  },
];

export default institutions;

export const numberOfImages = () => {
  if (window.innerWidth <= 500) {
    return 3;
  }

  if (window.innerWidth <= 768) {
    return 4;
  }

  if (window.innerWidth <= 960) {
    return 5;
  }
  return 6;
};

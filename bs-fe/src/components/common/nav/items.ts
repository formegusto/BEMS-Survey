interface INavItem {
  name: string;
  to: string;
}

const items: INavItem[] = [
  { name: "기본정보", to: "/basic" },
  { name: "상세정보", to: "/detail" },
];
export default items;

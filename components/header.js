import Link from "next/link";

const menuItems = [
  {
    label: "Articles",
    path: "articles",
  },
  {
    label: "Resources",
    path: "resources",
  },
];

const menuLink = (label, path) => (
  <li key={path}>
    <Link href={`/${path}`}>
      <a className="px-2">{label}</a>
    </Link>
  </li>
);

export default function Header() {
  return (
    <div className="flex flex-row justify-between mt-16 text-lg">
      <Link href="/">
        <a className="font-bold mr-2">Manipulative Patterns</a>
      </Link>
      <menu className="list-none my-0 flex flex-row">
        {menuItems.map((item) => menuLink(item.label, item.path))}
      </menu>
    </div>
  );
}

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Bell,
  ChartLine,
  House,
  IconProps,
  SignOut,
  Users,
} from "phosphor-react";
import { ForwardRefExoticComponent } from "react";

interface ItemSidebarProps {
  isActive?: boolean;
  title: string;
  href: string;
  alert?: string;
  alertScheme?: "primary" | "secondary";
  _icon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const ItemSidebar = ({
  isActive = false,
  title,
  href,
  alert,
  alertScheme = "primary",
  _icon,
}: ItemSidebarProps) => {
  return (
    <>
      <li>
        <Link
          href={href}
          className={clsx(
            "flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
            isActive
              ? "text-primary dark:text-white font-black"
              : "text-gray-900 dark:text-white"
          )}
        >
          <_icon className="w-6 h-6 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="ml-3">{title}</span>
          {alert && (
            <span
              className={clsx(
                "inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium rounded-full",
                alertScheme === "primary"
                  ? "text-blue-800 bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-800 bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              )}
            >
              {alert}
            </span>
          )}
        </Link>
      </li>
    </>
  );
};

export const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
          <ul className="space-y-2">
            {[
              {
                title: "Início",
                icon: House,
                href: "/dashboard",
              },
              {
                title: "Relatórios",
                icon: ChartLine,
                href: "/",
              },
              {
                title: "Notificações",
                icon: Bell,
                href: "/",
              },
              {
                title: "Usuários",
                icon: Users,
                href: "/",
              },
              {
                title: "Sair",
                icon: SignOut,
                href: "/",
              },
            ].map((item, index) => (
              <ItemSidebar
                title={item.title}
                _icon={item.icon}
                href={item.href}
                key={index}
                isActive={pathname === item.href}
              />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

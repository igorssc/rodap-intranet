import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { NotificationItem } from "@/components/NotificationItem";
import { Sidebar } from "@/components/Sidebar";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Notificacoes() {
  const [selectedNotifications, setSelectedNotifications] = useState<
    { id: string; isSelected: boolean }[]
  >([]);

  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const handleSelectNotification = (id: string) => {
    const newArray = selectedNotifications.map((value) => {
      if (value.id === id) {
        return { id, isSelected: !value.isSelected };
      } else {
        return value;
      }
    });

    setIsSelectedAll(false);
    setSelectedNotifications(newArray);
  };

  const selectAll = () => {
    const newArray = selectedNotifications.map((value) => {
      return {
        id: value.id,
        isSelected: true,
      };
    });

    setSelectedNotifications(newArray);
  };

  const unselectingAll = () => {
    const newArray = selectedNotifications.map((value) => {
      return {
        id: value.id,
        isSelected: false,
      };
    });

    setSelectedNotifications(newArray);
  };

  useEffect(() => {
    Array.from({ length: 10 }, (_, i) =>
      setSelectedNotifications((prev) => [
        ...prev,
        { id: i.toString(), isSelected: false },
      ])
    );
  }, []);

  useEffect(() => {
    if (!isSelectedAll) {
      const isCurrentSelectedAll =
        selectedNotifications.length > 0 &&
        selectedNotifications.every((value) => value.isSelected === true);

      isCurrentSelectedAll && setIsSelectedAll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNotifications]);

  return (
    <>
      <Head>
        <title>Rodap - Notificações</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="w-6 h-6 cursor-pointer"
            checked={isSelectedAll}
            onChange={(e) => {
              e.target.checked ? selectAll() : unselectingAll();
              setIsSelectedAll((prev) => !prev);
            }}
          />
          <span className="dark:text-white">
            {isSelectedAll ? "Remover seleção" : "Selecionar tudo"}
          </span>
        </div>
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="flex items-center gap-4">
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer"
              checked={selectedNotifications[i]?.isSelected || false}
              onChange={() => handleSelectNotification(i.toString())}
            />
            <NotificationItem />
          </div>
        ))}
      </Main>
    </>
  );
}

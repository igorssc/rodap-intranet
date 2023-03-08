import clsx from "clsx";

interface TicketCardProps {
  title: string;
  resume: string;
  status: "resolved" | "being attended" | "awaiting";
  priority: "low" | "medium" | "hight";
}

export const TicketCard = ({
  title,
  resume,
  status,
  priority,
}: TicketCardProps) => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex flex-col gap-10 transition-all h-80 justify-center">
        <h3 className="text-lg font-bold dark:text-white overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          {title}
        </h3>
        <p className="dark:text-white h-32">
          {resume.length > 255 ? resume.substring(0, 255) + "..." : resume}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <span
              className={clsx(
                "h-6 w-6 rounded-full",
                status === "awaiting" && "bg-red-600",
                status === "being attended" && "bg-yellow-600",
                status === "resolved" && "bg-green-600"
              )}
            />
            <span className="font-bold dark:text-white">
              {status === "resolved"
                ? "Resolvido"
                : status === "awaiting"
                ? "Aguardando"
                : "Sendo atendido"}
            </span>
          </div>
          <div className="flex gap-3 italic items-center">
            <span className="dark:text-white">
              Prioridade{" "}
              {priority === "low"
                ? "baixa"
                : priority === "medium"
                ? "média"
                : "alta"}
            </span>
            <div className="flex relative">
              <div className="[&_span]:bg-gray-200 dark:[&_span]:bg-gray-800 flex flex-row-reverse absolute right-0 top-0">
                <span
                  className={clsx(
                    "w-2 h-2",
                    priority === "low" && "hidden",
                    priority === "medium" && "hidden"
                  )}
                />
                <span
                  className={clsx("w-2 h-3", priority === "low" && "hidden")}
                />
                <span
                  className={clsx("w-2 h-4", priority === "low" && "hidden")}
                />
                <span className="w-2 h-5" />
                <span className="w-2 h-6" />
              </div>
              <span
                className={clsx(
                  "h-8 bg-gradient-to-r from-green-500 ",
                  priority === "low" && "w-4 to-green-700",
                  priority === "medium" && "w-8 to-yellow-500",
                  priority === "hight" && "w-10 via-yellow-500 to-red-500"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

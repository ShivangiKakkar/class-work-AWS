import { createContext,useState } from "react";


//hook must be called inside a component otherwise -> compilation error
export default function useMessages() {
  const [notifications, setNotifications] = useState<Notifications[]>([
    {type: "success", message: "Success!!!!"}
  ]);

 return {
   notifications,
   add(notification: Notifications){
     setNotifications([...notifications, notification]);
   },
  close(index: number) {
        setNotifications(notifications.filter((_,i)=> i !== index));
      }
  }
}
//_ --> we are not using it
export interface Notifications {
    type: 'success' | 'danger' | 'warning' | 'info';
    message: string;
}
export const MessagesContext = createContext({});
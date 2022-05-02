
import router from "../router";
import * as users from "../models/user"; 
import { useMessages } from "./messages";
import { api } from "./myFetch";
import { defineStore } from "pinia";
import { decodeJWT, loadScript } from "./utils";

// declare var google: any; -----we have installed that

export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
    }),
    actions: {

        async GoogleLogin(){
            await loadScript('https://accounts.google.com/gsi/client','google-signin');
            google.accounts.id.initialize({
                client_id: <string>import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: x => {
                    const user = decodeJWT(x.credential);
                    console.log(user);
                    this.user = {
                        id: user.sub,
                        email: user.email,
                        firstname: user.given_name,
                        lastname: user.family_name,
                        pic: user.picture,
                        handle: user.email,
                        password: '',
                    }
                }
              });
              google.accounts.id.prompt(()=>{});

        },
        async Login(email: string, password: string) {
            const messages = useMessages();
            try {
                const user = await this.api("users/login", { email, password });
                if(user){
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstname}`,
                    });
                }
                this.user = user;
                router.push(this.destinationUrl ?? '/wall'); //default ??
            } catch (error: any){
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        
           
        },
        Logout(){
            this.user = null;
            router.push('/login');
        },
        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any={}){ //giving header a default value
            const messages = useMessages();

            if(this.user?.token){
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try{
                const response = await api(url, data, method, headers);
                if(response.errors?.length){
                    throw {message: response.errors.join(', ')};
                }
                return await response.data;
            } catch (error: any){
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
            }
        }
    },
})
export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}
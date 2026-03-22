import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    emoji: string;
    category: string;
    price: string;
}
export interface ContactMessage {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllMenuItems(): Promise<Array<MenuItem>>;
    getMenuItemsByCategory(category: string): Promise<Array<MenuItem>>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
}
